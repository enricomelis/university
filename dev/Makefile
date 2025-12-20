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
