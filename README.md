# Playground Lab

Playground Lab is a personal tech playground for learning frontend development, GitHub workflow, and Codex-assisted software building through small experiments.

This project is intentionally simple. Version 0.1 uses only vanilla HTML, CSS, and JavaScript. There are no frameworks, build tools, backend services, databases, login features, or external dependencies.

## What is included in V0.1

- A static homepage for Playground Lab
- A responsive grid of experiment cards
- Sample experiment data stored in `script.js`
- Dynamic card rendering with beginner-friendly JavaScript
- Project documentation in the `docs/` folder

## How to open locally

1. Clone or download this repository.
2. Open the project folder.
3. Double-click `index.html`, or open it from your browser with **File > Open File**.

No install step is needed.


## Deployment with GitHub Pages

This project is ready to deploy with GitHub Pages because it is a static site with `index.html` in the repository root. No build tools or dependencies are needed.

To enable GitHub Pages from the `main` branch:

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set **Branch** to `main` and the folder to `/ (root)`.
6. Click **Save**.
7. Wait for GitHub to publish the site, then use the Pages URL shown on that settings page.

## Project structure

```text
playground-lab/
├── index.html
├── styles.css
├── script.js
├── README.md
└── docs/
    ├── PROJECT_STATUS.md
    ├── BUG_LIST.md
    ├── CODEX_TASK_LOG.md
    ├── LEARNING_NOTES.md
    └── MANUAL_TEST_RESULT_001.md
```

## Learning goals

- Practice writing readable HTML, CSS, and JavaScript
- Learn how to organize a small web project
- Practice GitHub issues, branches, commits, and pull requests
- Use Codex as a helper while still understanding the code
