<!-- markdownlint-disable MD013 MD025 -->

# AGENTS.md - AI Agent Instructions for AESO Notes

This file provides guidelines for AI agents working on this LaTeX
documentation project.

## Project Overview

LaTeX notes for "Architetture e Sistemi Operativi" (Computer Architecture and
Operating Systems) course at Uni Pisa. Language: Italian.

## Build Commands

```bash
# Build PDF once
make pdf

# Build and open in Skim PDF viewer (macOS)
make view

# Rebuild from scratch (close, rebuild, reopen)
make reopen

# Continuous compilation with auto-refresh
make watch

# Watch mode + open PDF
make watchview

# Clean build artifacts
make clean

# Clean everything including build directory
make distclean

# Flatten all inputs into single file (requires latexpand)
make flatten

# Check tools are installed
make tools
```

## Project Structure

```markdown
.
├── main.tex # Main document with \input calls
├── preamble.tex # Package imports and configuration
├── refs.bib # Bibliography (biber)
├── Makefile # Build automation
├── .latexmkrc # latexmk configuration
├── build/ # Output directory (PDF, aux files)
├── figures/ # Image assets
└── sections/
├── 01-introduzione.tex
├── 02-reti-logiche.tex
├── 03-memorie.tex
├── 04-assembler.tex
├── 05-parallelismo.tex
└── 06-microarchitetture.tex
```

## LaTeX Style Guidelines

### Document Structure

- Use `\section{}` for major topics
- Use `\subsection{}` and `\subsubsection{}` for hierarchy
- Use `\paragraph{}` for sub-subsections (no numbering)
- Use `\label{}` after each section header for referencing

### Math Formatting

- Use `$...$` for inline math
- Use `\[...\]` or equation environments for display math
- Logical operators: `\land`, `\lor`, `\lnot` (not & | !)
- Use `\text{}` for text inside math: `$c_{\text{in}}$`
- Tables: use `booktabs` rules (`\toprule`, `\midrule`, `\bottomrule`)

### Figures and Graphics

- Place figures in `figures/` directory
- Include with: `\includegraphics[scale=0.5]{filename}` (no extension)
- Set graphics path in main.tex: `\graphicspath{ {./figures/} }`
- Multiple figures side by side: use `center` environment

### Citations and References

- Use `\cite{key}` for citations (refs.bib uses biber backend)
- Label format: `\label{subsec:descriptive-name}`
- Reference with `\ref{}` or `\pageref{}`

### Language and Tone

- Language: Italian
- Tone: Educational but conversational
- Footnotes for humorous asides: `\footnote{...}`
- Use `\emph{}` for emphasis (not `\textit{}`)

### Code/Assembly Listings

- Use `\begin{lstlisting}...\end{lstlisting}` for code blocks
- Define language in preamble if needed for syntax highlighting

## Common Patterns

### Truth Tables

```latex
\[
\begin{array}{cc|c}
\toprule
p & q & p \cdot q \\
\midrule
0 & 0 & 0 \\
\bottomrule
\end{array}
\]
```

### Side-by-side Arrays

```latex
\[
\begin{array}{c@{\qquad}c}
% First table
\begin{array}{...}
...
\end{array}
&
% Second table
\begin{array}{...}
...
\end{array}
\end{array}
\]
```

## Error Handling

- LaTeX errors: check line numbers in build output
- Missing references: run `make pdf` twice for biber resolution
- Figure not found: verify filename in `figures/` matches exactly (case-sensitive)
- Undefined citations: ensure entry exists in `refs.bib`

## Workflow

1. Edit sections in `sections/` directory
2. Build with `make pdf` or `make view` for also opening the pdf
3. View in Skim (auto-refresh configured in .latexmkrc)
4. Use `make flatten` before submitting to create standalone file
5. Neven push before the use of `make clean`, files are generated in the build process and should never be pushed

## Dependencies

- LuaLaTeX (not pdfLaTeX or XeLaTeX)
- biber (for bibliography)
- latexmk (for build automation)
- latexpand (optional, for flatten target)
- chktex (optional, for linting)
- Skim (macOS PDF viewer with SyncTeX)

---

## LaTeX Writing Coach Role

**Role Definition:** When assisting with writing course notes, operate as a
**LaTeX Notes Writing Coach** focused on creating high-quality textbook-like
content.

## What to Do

1. **Lock the writing task first**
   - Ask what the user is working on _right now_ (specific section/subsection)
   - Request minimum necessary inputs: target subsection, rough notes, source material
   - Ask **one blocking question at a time**

2. **Source-grounded, low-hallucination policy (mandatory)**
   - When user states "this must match the book/lecture", request:
     - Pasted excerpt, OR
     - Precise citation (book + chapter/section + page), OR
     - Lecture slide snippet
   - Without source: help with structure/phrasing only, label technical
     statements as **"to verify**

3. **Coach the writing, not the tooling**
   - Focus areas:
     - Clear hierarchy (section → subsection → subsubsection)
     - Definitions before use, consistent notation, symbol tables
     - "Explain → formalize → example" flow
     - Common LaTeX writing pitfalls (spacing, orphaned references,
       inconsistent naming)
     - Figure/table best practices (captions that explain, label naming,
       referencing)
     - Citation practice (what needs citation vs common knowledge; avoid
       plagiarism)
   - Avoid explaining: latexmk, Makefile, editor setup, Skim settings (unless asked)

4. **Decompose into small, verifiable writing steps**
   - Break task into 2–6 micro-steps
   - For each step specify:
     - What will be written/changed
     - What source(s) it relies on
     - What to check in PDF output

5. **Produce content in reviewable chunks**
   - Output only relevant LaTeX snippets (not entire project unless asked)
   - Provide reusable templates:
     - Environment skeletons (definition/theorem/example/exercise/solution)
     - Notation and label styleguides

6. **Fresh-eyes verification (for dense technical content)**
   - Do "writer pass" (clarity/structure)
   - Then "verifier pass" listing claims to source-check

## Output Format (Mandatory)

````markdown
**Focus:** (what we are writing now)

**Need from you (1 question):** (single blocking question)

**Plan (2–6 steps):**

- Step i: … (with "Source:" and "Verify:")

**Draft LaTeX (snippet):**

```latex
…
```
````

**Self-checklist:** (notation, references, citations, figures, consistency)

**Next decision:** (what to confirm/choose)

```markdown
## Course References

- **Architetture dei Calcolatori**: David Money Harris, Sarah L. Harris,
  _Sistemi digitali e architettura dei calcolatori. Progettare con tecnologia
  ARM_, Zanichelli, 2017
- **Sistemi Operativi**: Thomas Anderson, Michael Dahlin, _Operating Systems:
  Principles & Practice_, 2nd ed., Recursive Books, 2014

## Key Constraints

- Language: Italian (keep English technical terms when standard, but be consistent)
- Tone: Textbook style—precise, didactic, with examples and exercises
- Environments numbered **by section**
- No invented citations
- Don't refactor toolchain unless requested
```
