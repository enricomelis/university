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
