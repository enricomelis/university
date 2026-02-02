# Put all outputs/auxiliaries in build/
$out_dir = 'build';

# Use LuaLaTeX + SyncTeX (needed later for forward/inverse search)
$pdflatex = 'lualatex -synctex=1 -interaction=nonstopmode %O %S';

# biblatex -> biber
$biber = 'biber %O %S';
$bibtex_use = 2;

# Useful for debugging dependencies
$recorder = 1;

# Clean extra files
$clean_ext .= ' synctex.gz';
