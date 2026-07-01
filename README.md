# DISI Global Oaxaca — website

Static website (plain HTML/CSS/JS, no build step needed) for the DISI Global Oaxaca event, February–March 2027.

## Pages

- `index.html` — Home
- `about.html` — About the Event (conceptual framework)
- `program.html` — Program
- `organizers.html` — Organizing Team, DISI, and funders
- `venue.html` — Venue & Accommodation
- `apply.html` — Apply
- `participants.html` — Participants & DISI alumni network

## Editing content

Every page is a plain `.html` file — open it in any text editor, find the text you want to change, and edit it directly. Shared styles live in `css/style.css`; you generally won't need to touch `js/main.js` (it only handles the mobile menu and highlighting the current page in the navigation).

Things you'll likely want to fill in as they're confirmed:
- Exact event dates (currently "February–March 2027, exact dates TBA") — search for "TBA" across files.
- Contact email — currently a placeholder `XXXXXX@iimas.unam.mx` in every page's footer and on the Apply page.
- Venue and accommodation details on `venue.html`.
- Application portal link on `apply.html` (currently a `mailto:` button).
- Participant profiles on `participants.html` once confirmed.

## Publishing with GitHub Pages (no build step required)

1. Create a new repository on GitHub (e.g. `disi-global-oaxaca`) and push this folder's contents to it:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/disi-global-oaxaca.git
   git push -u origin main
   ```
2. On GitHub, go to the repository's **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", choose the **main** branch and the **/ (root)** folder, then save.
4. GitHub will publish the site at `https://<your-username>.github.io/disi-global-oaxaca/` within a minute or two.
5. Any time you edit a file and push again, the live site updates automatically — there's no build step to run.

## Local preview

You don't need any tooling to preview the site — just open `index.html` in a browser. For a closer-to-production preview (recommended, since it serves files the way a real server would), from this folder run:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000` in your browser.
