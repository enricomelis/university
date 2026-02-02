# AESO Notes

[![LuaLaTeX](https://img.shields.io/badge/LuaLaTeX-blue)](https://www.luatex.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Notes for the *Architetture e Sistemi Operativi* course (2025-2026).

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
  - [Required](#required)
  - [Optional](#optional)
- [Build Commands](#build-commands)
  - [Quick Start](#quick-start)
  - [Available Targets](#available-targets)
  - [Options](#options)
- [Editor Setup](#editor-setup)
  - [Neovim + TexLab LSP](#neovim--texlab-lsp)
  - [SyncTeX Integration](#synctex-integration)
- [Project Structure](#project-structure)
- [Workflow Tips](#workflow-tips)
- [TODO](#todo)

---

## Overview

This repository contains LaTeX notes for the **Architetture e Sistemi Operativi** (AESO) course at Politecnico di Torino, covering:

1. **Introduzione** - Introduction to computer architecture fundamentals
2. **Reti Logiche** - Logic networks and digital circuits
3. **Memorie** - Memory systems and hierarchy
4. **Assembler** - Assembly language programming
5. **Parallelismo** - Parallel architectures and concurrency
6. **Microarchitetture** - Processor microarchitectures

The project is optimized for a macOS workflow with continuous compilation and Skim PDF viewer integration.

---

## Prerequisites

### Required

- **[MacTeX](https://www.tug.org/mactex/)** - Full LaTeX distribution for macOS
  - Includes `lualatex`, `biber`, and `latexmk`
  - Install via: `brew install --cask mactex` or download from tug.org

- **[Skim](https://skim-app.sourceforge.io/)** - PDF viewer with SyncTeX support
  - Install via: `brew install --cask skim`
  - Configure Skim: Preferences → Sync → Check "Check for file changes"

### Optional

- **[latexpand](https://github.com/matze-dd/YaLafi)** - For `make flatten` target
  - Install via: `pip install latexpand` or `tlmgr install latexpand`

- **[ChKTeX](https://www.nongnu.org/chktex/)** - LaTeX linting (see [TODO](#todo))
  - Install via: `tlmgr install chktex`

---

## Build Commands

### Quick Start

```bash
# Build PDF once
make pdf

# Build and open in Skim
make view

# Continuous compilation with auto-refresh
make watchview
```

### Available Targets

| Target | Description |
|--------|-------------|
| `make tools` | Check all required tools are available |
| `make pdf` | Build PDF with latexmk |
| `make view` | Build PDF and open in Skim |
| `make reopen` | Close Skim, rebuild, and reopen (useful after adding new files) |
| `make watch` | Continuous build mode (latexmk -pvc) |
| `make watchview` | Build + open PDF + continuous build |
| `make skim-close` | Close the PDF in Skim (helper target) |
| `make clean` | Remove intermediates (keeps PDF) |
| `make distclean` | Clean everything including build/ directory |
| `make flatten` | Generate `flattened.tex` (single file version) |

### Options

```bash
# Enable shell escape (e.g., for minted package)
make pdf SHELL_ESCAPE=1

# Use different PDF viewer
make view VIEWER_APP=Preview
```

---

## Editor Setup

### Neovim + TexLab LSP

1. **Install TexLab**: `brew install texlab` or download from [GitHub releases](https://github.com/latex-lsp/texlab/releases)

2. **LSP Configuration** (using `nvim-lspconfig`):

```lua
require('lspconfig').texlab.setup({
  settings = {
    texlab = {
      build = {
        executable = 'latexmk',
        args = { '-pdf', '-interaction=nonstopmode', '-synctex=1', '%f' },
        forwardSearchAfter = false,
        onSave = false,
      },
      chktex = {
        onOpenAndSave = false,
        onEdit = false,
      },
      diagnosticsDelay = 300,
      formatterLineLength = 80,
      latexFormatter = 'latexindent',
      latexindent = {
        modifyLineBreaks = false,
      },
      bibtexFormatter = 'texlab',
    },
  },
})
```

### SyncTeX Integration

**Forward search** (source → PDF):
```lua
-- Add to your Neovim config
vim.keymap.set('n', '<leader>lf', function()
  local filename = vim.fn.expand('%:p')
  local line = vim.fn.line('.')
  local cmd = string.format(
    'osascript -e \'tell application "Skim" to open POSIX file "%s"\' -e \'tell application "Skim" to go to line %d of document 1\'',
    vim.fn.expand('%:p:r') .. '.pdf',
    line
  )
  vim.fn.system(cmd)
end, { buffer = true, desc = 'Forward search to Skim' })
```

**Inverse search** (PDF → source):
- Skim → Preferences → Sync
- Set PDF-TeX Sync support to "Custom"
- Command: `nvim`
- Arguments: `--servername /tmp/nvim --remote +"%line" "%file"`

---

## Project Structure

```
.
├── main.tex                  # Main document entry point
├── preamble.tex              # Package imports and configuration
├── refs.bib                  # Bibliography entries
├── Makefile                  # Build automation
├── .latexmkrc                # Latexmk configuration (LuaLaTeX + Biber)
├── build/                    # Output directory (PDF, aux files)
├── sections/
│   ├── 01-introduzione.tex   # Section 1: Introduction
│   ├── 02-reti-logiche.tex   # Section 2: Logic Networks
│   ├── 03-memorie.tex        # Section 3: Memory
│   ├── 04-assembler.tex      # Section 4: Assembly
│   ├── 05-parallelismo.tex   # Section 5: Parallelism
│   └── 06-microarchitetture.tex # Section 6: Microarchitectures
└── figures/
    ├── and_gate_wikipedia.png
    ├── or_gate_wikipedia.png
    └── livelli_astrazione.png
```

---

## Workflow Tips

1. **Continuous Compilation**: Use `make watchview` when actively editing. Saves trigger automatic rebuilds and Skim auto-refreshes.

2. **Adding New Sections**: When adding new `\input{}` files to `main.tex`, run `make reopen` instead of `make view`. This ensures Skim properly reloads the document.

3. **Bibliography Changes**: The `.latexmkrc` is configured to automatically run Biber when `.bib` files change. No manual intervention needed.

4. **Flatten for Submission**: Before submitting to arXiv or similar, run `make flatten` to produce a single-file `flattened.tex` that inlines all `\input{}` commands.

5. **Shell Escape**: If you add packages that require external tools (like `minted` for code highlighting), use `make pdf SHELL_ESCAPE=1`. Only use this with trusted code.

---

## TODO

- [x] **Makefile Integration** - `make lint` target added (requires ChKTeX installation)
- [ ] **Install ChKTeX** - Run `tlmgr install chktex` to enable linting
- [ ] **Editor Integration** - Enable ChKTeX in TexLab LSP or configure Neovim to run `make lint` on save

**Using ChKTeX:**
```bash
# Run linting (requires chktex to be installed)
make lint
```

**Configuration:**
- TexLab LSP: Set `texlab.chktex.onEdit = true` in your Neovim config
- Flags: Configurable via `CHKTEXFLAGS` (default: `-q -v 0` for quiet mode)

---

## License

MIT License - See [LICENSE](LICENSE) for details.
