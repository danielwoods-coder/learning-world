# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal collection of standalone learning exercises across HTML/CSS, JavaScript, Python, SQL, and Bash. There is **no unified build system, no test suite, and no package manager** — each subdirectory is independent and is run directly with the language's native tooling. The repo is also published as a GitHub Pages site via Jekyll ([_config.yml](_config.yml) → `jekyll-theme-cayman`); `index.html` at the repo root is the landing page.

When adding a project, update [README.md](README.md)'s table in the matching category — that table is the canonical index, not the filesystem.

## Layout, with the non-obvious bits

- [HTML/](HTML/) — standalone pages. Paired `name.html` + `name.css` share base names. Run by opening the file in a browser (or via a Live Server extension).
- [JavaScript/](JavaScript/)
  - [JavaScript/algorithms/](JavaScript/algorithms/) — plain Node-runnable scripts (`node JavaScript/algorithms/<file>.js` from the repo root).
  - Sibling app directories ([bookmark-manager/](JavaScript/bookmark-manager/), [build-drum-machine/](JavaScript/build-drum-machine/), [markdown-to-html/](JavaScript/markdown-to-html/), etc.) each ship as an `index.html` + `script.js` + `styles.css` triplet — open the HTML in a browser, **not** `node script.js`.
- [Python/](Python/) — flat directory of single-file exercises. A virtualenv lives at [Python/my_project_env/](Python/my_project_env/); activate it before running anything with imports beyond the stdlib.
- [SQL/](SQL/) — **not just `.sql` files.** Four subdirectories ([number_guess/](SQL/number_guess/), [periodic/](SQL/periodic/), [salon/](SQL/salon/), [worldcup/](SQL/worldcup/)) follow the freeCodeCamp Relational Database pattern: a `.sh` driver script that calls `psql` against a local PostgreSQL database, plus a `.sql` schema/data dump for restore. The two loose files ([students.sql](SQL/students.sql), [universe.sql](SQL/universe.sql)) are plain dumps.
- [bash/](bash/) — small shell-script exercises.

## Running things

```bash
# JavaScript algorithm scripts
node JavaScript/algorithms/<file>.js

# JavaScript browser apps — open the index.html, e.g.
xdg-open JavaScript/bookmark-manager/index.html   # or use Live Server

# Python (activate the venv first if the script needs deps)
source Python/my_project_env/bin/activate
python Python/<file>.py

# SQL relational-database projects (requires local postgres)
cd SQL/<project>/ && ./<script>.sh

# Bash scripts
bash bash/castle.sh

# Restore a plain schema dump
psql -U <user> -d <dbname> < SQL/<dump>.sql
```

## Linting

No ESLint config is checked in despite earlier docs mentioning one — no `eslint.config.*`, `.eslintrc*`, or `package.json` exists anywhere in the tree. Don't run `npx eslint .`; it will error on missing config. If linting is genuinely needed, add `eslint.config.js` under [JavaScript/](JavaScript/) first.

## Conventions

- File names are descriptive and hyphenated (e.g. `cafe-menu.html`, `build-a-palindrome-checker`).
- HTML standalone exercises pair `name.html` with `name.css`; JavaScript browser apps use `index.html`, `script.js`, and `styles.css`.
- Each exercise is self-contained — don't introduce cross-project imports or a shared utils module.
