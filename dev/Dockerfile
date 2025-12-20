FROM --platform=linux/arm64 ubuntu:22.04

# Use noninteractive frontend to avoid prompts during build
ENV DEBIAN_FRONTEND=noninteractive

# Update and install all tools
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
    npm \
    openjdk-17-jdk \
    && rm -rf /var/lib/apt/lists/*

# Configurazione per GDB per permettere il caricamento di file .gdbinit locali
RUN echo "set auto-load safe-path /" >> /root/.gdbinit

WORKDIR /work
