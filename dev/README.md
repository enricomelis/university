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
2. creating a simple sheel script that standardizes the session process, so that we can create/resume any session in the same way (abstracting away all the commands)
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
