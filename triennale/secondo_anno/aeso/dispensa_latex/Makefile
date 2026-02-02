# Project
MAIN_TEX := main.tex
OUTDIR := build
FLATTENED := flattened.tex
PDF := $(OUTDIR)/$(basename $(notdir $(MAIN_TEX))).pdf

# Tools (override from CLI if needed)
LATEXMK ?= latexmk
LATEXPAND ?= latexpand
CHKTEX ?= chktex

# Viewer (override from CLI if needed)
VIEWER_APP ?= Skim

# ChKTeX flags (quiet mode, verbosity 0)
CHKTEXFLAGS ?= -q -v 0

# latexmk flags
# Note: latexmk reads .latexmkrc automatically when present in the project root.
LATEXMKFLAGS := -pdf -file-line-error

# Opt-in shell escape for trusted local projects:
#   make pdf SHELL_ESCAPE=1
ifeq ($(SHELL_ESCAPE),1)
LATEXMKFLAGS += -shell-escape
endif

.PHONY: help tools pdf view reopen skim-close watch watchview clean distclean \
	flatten lint

help:
	@echo "Targets:"
	@echo "  make tools               Check tool availability"
	@echo "  make pdf                 Build PDF with latexmk"
	@echo "  make view                Build + open PDF in $(VIEWER_APP)"
	@echo "  make reopen              Close PDF in Skim, rebuild, reopen"
	@echo "  make watch               Continuous build (latexmk -pvc)"
	@echo "  make watchview           Build + open PDF + continuous build"
	@echo "  make clean               Clean intermediates (keeps PDF)"
	@echo "  make distclean           Clean + remove build dir"
	@echo "  make flatten             Write $(FLATTENED) (inline input/include)"
	@echo ""
	@echo "Options:"
	@echo "  SHELL_ESCAPE=1           Enable -shell-escape (minted; trusted only)"
	@echo "  VIEWER_APP=Skim          Viewer app name for 'make view'"

tools:
	@command -v lualatex >/dev/null && lualatex --version | head -n 1 || \
		(echo "Missing: lualatex" && exit 1)
	@command -v $(LATEXMK) >/dev/null && $(LATEXMK) -v | head -n 2 || \
		(echo "Missing: latexmk" && exit 1)
	@command -v biber >/dev/null && biber --version | head -n 1 || \
		(echo "Missing: biber" && exit 1)
	@command -v $(LATEXPAND) >/dev/null && $(LATEXPAND) --version >/dev/null \
		2>&1 || echo "Note: latexpand missing (needed for 'make flatten')."

pdf:
	$(LATEXMK) $(LATEXMKFLAGS) $(MAIN_TEX)

view: pdf
	open -a "$(VIEWER_APP)" "$(PDF)"

# Close the currently open document matching the output PDF name.
# Best-effort: succeeds even if Skim isn't running or the document isn't open.
skim-close:
	@osascript -e 'tell application "Skim" to close (documents whose name is "'"$(notdir $(PDF))"'")' \
		>/dev/null 2>&1 || true

reopen: skim-close view

watch:
	$(LATEXMK) $(LATEXMKFLAGS) -pvc $(MAIN_TEX)

watchview: view
	$(LATEXMK) $(LATEXMKFLAGS) -pvc $(MAIN_TEX)

clean:
	$(LATEXMK) -c $(MAIN_TEX)

distclean:
	$(LATEXMK) -C $(MAIN_TEX)
	@rm -rf $(OUTDIR)

flatten:
	@command -v $(LATEXPAND) >/dev/null || \
		(echo "latexpand not found. Install it or set LATEXPAND=..." && \
		exit 1)
	@$(LATEXPAND) $(MAIN_TEX) > $(FLATTENED)
	@echo "Wrote $(FLATTENED)"

# TODO: ChKTeX linting (requires: tlmgr install chktex)
lint:
	@command -v $(CHKTEX) >/dev/null || \
		(echo "Missing: chktex (install via tlmgr install chktex)" && exit 1)
	@$(CHKTEX) $(CHKTEXFLAGS) $(MAIN_TEX)
