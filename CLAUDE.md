# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a learning repository with standalone exercises organized by language:

- **HTML/** — 32+ projects: front-end design, forms, layouts, CSS animations
- **JavaScript/** — 46+ projects: algorithms, interactive web apps, utilities
  - `algorithms/` — Standalone algorithm practice scripts
  - Subdirectories for apps (e.g., `bookmark-manager/`, `build-drum-machine/`)
- **Python/** — 13 projects: algorithms, data structures, OOP
- **SQL/** — Database practice with SQL scripts

Projects are standalone exercises with no unified build system.

## Commands

```bash
# JavaScript linting (from JavaScript/ directory)
npx eslint .

# Python
python filename.py

# HTML/CSS — open in browser or use live server
```

## Conventions

- File naming: descriptive and hyphenated (e.g., `cafe-menu.html`)
- Paired files (HTML/CSS/JS) share base names
- JavaScript uses flat ESLint config with plugins for JS/TS/React, JSON, Markdown, CSS

## Running Projects

- HTML/CSS: Open in browser or use live server
- JavaScript: `node filename.js` for scripts; Node.js server for apps like `app.js`
- Python: `python filename.py`

## Adding New Projects

Update `README.md` with the project name and description in the appropriate category.