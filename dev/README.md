# development environment

my development environment is a combination of some tools that let me achieve clarity, speed and control 
over the code that I produce, that being for fun, assignments or studying.

> important: everything is made for macos, specifically for mac book air with mx chip (m1, m2...).

the said combination of tools is the following:
- NeoVim: main code editor, I've set it up to behave like a beast and the configuration can be found in my [dotfiles](https://github.com/enricomelis/dotfiles/tree/master/.config/nvim)
- Terminal stack: Ghostty + Zsh + Tmux, these are the main tools that let me create a dedicated environment
- Docker: allows me to create portable, minimal and fast virtual machine to leverage the linux ecosystem while remaining in my macos convenience

## how to recreate the environment

this is a tutorial, that I create mainly for myself, on how to create the environment (almost) from scratch.
I will cover
1. setting up the docker image so that we can run and debug any code we want (c, assembler arm 32bit, java, python, js)
2. creating a simple shell script that standardizes the session process, so that we can create/resume any session in the same way (abstracting away all the commands)
3. creating a unified makefile so that we can compile, debug and run (even from neovim)
4. using the environment and exporting the workflow that I have in mind

### 1. docker

let's install homebrew (package manager for macos) and docker if we haven't already.

#### Homebew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Docker

```shell
brew install --cask docker
```

#### creating the dockerfile

navigate to the root of you environment, I will call it `PATH`, and do

```shell
touch Dockerfile
```

to create the dockerfile.

now paste the following code in the dockerfile:
```Dockerfile
FROM --platform=linux/arm64 ubuntu:22.04

# Use noninteractive frontend to avoid prompts during build
ENV DEBIAN_FRONTEND=noninteractive

# 1. Install prerequisites and modern Node.js repository
RUN apt-get update && apt-get install -y curl ca-certificates gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" > /etc/apt/sources.list.d/nodesource.list

# 2. Install all tools including modern Node.js
RUN apt-get update && apt-get install -y \
    binutils-arm-linux-gnueabihf \
    gcc-arm-linux-gnueabihf \
    gdb-multiarch \
    gdb \
    qemu-user \
    build-essential \
    neovim \
    git \
    python3 \
    python3-pip \
    nodejs \
    openjdk-17-jdk \
    && rm -rf /var/lib/apt/lists/*

# 3. Install TypeScript and ts-node globally using the NEW nodejs
RUN npm install -g typescript ts-node

# Configurazione per GDB
RUN echo "set auto-load safe-path /" >> /root/.gdbinit

WORKDIR /work
```

this will create the right ubuntu environment for developing in C, ASM, Java, Python and Javascript.

#### building and running the environment
now we need to build the docker image to actually run the environment:
```shell
docker build -t unidev .
```

to run the environment, go into the root directory and run:
```shell
docker run -it --rm \
  --cap-add=SYS_PTRACE \
  --security-opt seccomp=unconfined \
  -v "$(pwd):/work" \
  unidev
```

### 2. shell script
the following is the shell script that:
- creates a tmux session
- creates the first window with Nvim and Docker Container
- creates the second window with lazygit open

```bash
#!/usr/bin/env zsh

SESSION="unidev"
# Change this to your actual path
PROJECT_DIR="/Users/enricomelis/Desktop/university/dev/"

# Name of the Docker image created previously
DOCKER_IMAGE="unidev"

# Full Docker command
# - Maps the current folder to /work
# - Enables ptrace for debugging
# - Disables security profiles to allow GDB to work freely
DOCKER_CMD="docker run -it --rm \
  --cap-add=SYS_PTRACE \
  --security-opt seccomp=unconfined \
  -v \"${PROJECT_DIR}:/work\" \
  ${DOCKER_IMAGE}"



# Get terminal dimensions
LINES=$(tput lines)
COLUMNS=$(tput cols)

# Check if the session exists
tmux has-session -t "$SESSION" 2>/dev/null
if [ $? -ne 0 ]; then
  # Create session
  tmux new-session -d -s "$SESSION" -c "$PROJECT_DIR" -x "$COLUMNS" -y "$LINES"
  tmux rename-window -t "$SESSION:1" "dev"
  
  # Split horizontally
  tmux split-window -v -t "$SESSION:1" -c "$PROJECT_DIR"
  
  # Resize (optional, adjust as needed)
  tmux resize-pane -D 10
  
  # --- TOP PANE: EDITOR (HOST) ---
  # Use nvim on the Mac
  tmux send-keys -t "$SESSION:1.1" "nvim" C-m
  
  # --- BOTTOM PANE: DOCKER (GUEST) ---
  # Launch the Docker container automatically
  tmux send-keys -t "$SESSION:1.2" "$DOCKER_CMD" C-m
  
  sleep 1

  tmux new-window
  tmux rename-window -t "$SESSION:2" "lazygit"
  tmux send-keys -t "$SESSION:2.1" "lazygit" C-m

fi

# Attach to the session
tmux attach -t "$SESSION"
```


### 3. makefile

```Makefile
# === C/ASM Configuration ===
# ARMv7 Toolchain
CC = arm-linux-gnueabihf-gcc
AS = arm-linux-gnueabihf-as
LD = arm-linux-gnueabihf-ld
DBG = gdb-multiarch
EMU = qemu-arm

# Flags (-marm is for excluding thumb instructions)
CFLAGS = -static -g -Wall -Wextra -pedantic -marm
ASFLAGS = -g
LDFLAGS = -static

# Final executable names
C_TARGET = main

# Find all C, ASM, and Java files
SRCS_C := $(filter-out $(C_TARGET).c, $(wildcard *.c))
SRCS_S := $(wildcard *.s)
OBJS := $(SRCS_C:.c=.o) $(SRCS_S:.s=.o)

# Default rule: Build the C/ASM executable
all: $(C_TARGET) compile-java
.PHONY: all

# === C/ASM Compilation Rules (Used by the original 'make' command) ===

# Linker: combines C and ASM object files
$(C_TARGET): $(OBJS)
	$(CC) $(LDFLAGS) -o $@ $^

# C Compilation
%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

# ASM Compilation
%.o: %.s
	$(AS) $(ASFLAGS) -o $@ $<

# === Java Compilation Rules ===
JAVAC = javac
JAVA = java
JAVA_SRCS := $(wildcard *.java)

compile-java: $(JAVA_SRCS)
	@if [ -n "$^" ]; then \
		echo "--- Compiling Java files ---"; \
		$(JAVAC) $^; \
	else \
		echo "No *.java files found to compile."; \
	fi
.PHONY: compile-java

# === Run Targets (Specific) ===

# Run C/ASM
run-c: $(C_TARGET)
	@echo "--- Running C/ASM executable ($(C_TARGET)) ---"
	$(EMU) ./$(C_TARGET)

# Run Python (Assumes main.py)
run-py:
	@echo "--- Running Python script (main.py) ---"
	python3 main.py

# Run Node.js (Assumes main.js or main.ts compiled to main.js)
run-js:
	@echo "--- Running Node.js script (main.js) ---"
	node main.js

# Run Java (Assumes Main.java and Main.class exists)
run-java: compile-java
	@if [ -f "Main.class" ]; then \
		echo "--- Running Java Main class (Main.class) ---"; \
		$(JAVA) Main; \
	else \
		echo "No Main.class found. Check for Main.java and run 'make compile-java'."; \
	fi

# === Main Run Rule (Intelligent Dispatch) ===
# This detects the entry point automatically based on file presence.
run:
	@if [ -f "$(C_TARGET)" ]; then \
		make run-c; \
	elif [ -f "main.py" ]; then \
		make run-python; \
	elif [ -f "main.js" ]; then \
		make run-js; \
	elif [ -f "Main.java" ]; then \
		make run-java; \
	else \
		echo "No default runnable file (main, main.py, main.js, or Main.java) found."; \
		echo "Use explicit targets: run-c, run-python, run-js, run-java."; \
	fi

# Debug rule (C/ASM only)
debug: $(C_TARGET)
	@echo "Starting C/ASM debug session..."
	@# Start QEMU in background on port 1234
	@$(EMU) -g 1234 ./$(C_TARGET) & \
	PID=$$!; \
	echo "QEMU started with PID $$PID. Waiting for GDB..."; \
	sleep 0.5; \
	$(DBG) -q -ex "target remote :1234" -ex "layout split" -ex "break main" -ex "continue" ./$(C_TARGET); \
	# When GDB closes, kill QEMU if it is still alive
	kill $$PID 2>/dev/null || true

# Cleanup
clean:
	@echo "Cleaning up generated files..."
	rm -f *.o $(C_TARGET)
	rm -f $(JAVA_SRCS:.java=.class)
	@echo "Cleanup complete."

.PHONY: run run-c debug debug-c clean run-python run-js run-java
```

### 5. to-do
fixes
- [ ] the Dockerfile install node v12, that is too old, I need to fix so that the image can install whatever version of node the user wants
- [ ] the Makefile doesn't properly work for C (it doesn't find inputs and can't run for some reason)
