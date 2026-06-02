# Project Status

## Version

V0.3 - First standalone experiment page

## Current goal

Playground Lab V0.3 adds the first standalone experiment page while keeping the app dependency-free and beginner-friendly.

## Completed in V0.1

- Created `index.html`, `styles.css`, and `script.js`
- Added sample experiment card data
- Rendered experiment cards dynamically from JavaScript
- Added a clean responsive layout
- Added initial documentation files
- Confirmed GitHub Pages deployment is working
- Added a visible `v0.1` version badge to the homepage title

## Completed in V0.2

- Renamed the current homepage version badge to `v0.2`
- Added All, Todo, and Done filter buttons above the experiment card grid

## Completed in V0.3

- Renamed the current homepage version badge to `v0.3`
- Added the first standalone experiment page at `experiments/localstorage-todo.html`
- Updated the LocalStorage Todo card to `Done` and linked it to the new page
- Built the LocalStorage Todo experiment to practice browser-based data persistence with `localStorage`

## Current UI behavior

- The homepage keeps the `v0.3` version badge visible in the header.
- Experiment cards still render from the JavaScript experiment data array.
- The experiment grid can be filtered by All, Todo, or Done status without adding dependencies or backend features.
- The LocalStorage Todo experiment page lets visitors add, complete, and delete todo items that persist in the current browser.

## Next steps

- Manually test the page in a browser
- Verify the LocalStorage Todo experiment through GitHub Pages
- Add project notes as learning happens
- Track bugs in `docs/BUG_LIST.md`
- Keep future changes small and easy to review

## V0.1 Deployment Result

Playground Lab V0.1 has been successfully deployed through GitHub Pages, and the homepage now shows a visible `v0.1` version badge near the project title.

Live URL:
https://degn17.github.io/playground-lab/

Current workflow:
1. Codex creates or updates code through PR.
2. PR is reviewed in GitHub.
3. PR is merged into main.
4. GitHub Pages deploys automatically.
5. The result can be verified through a browser or mobile phone.

This confirms that the project can now be developed and tested remotely without relying on local git sync for every small update. GitHub Pages remains the verification method for V0.3 after the pull request is merged.
