# Nanda Simatupang — Portfolio

A minimalist, editorial portfolio website built with vanilla HTML, CSS, and JavaScript. No build tools, no dependencies.

## Design

Text-forward and restrained — set in Fraunces (serif) and Inter (sans), on a warm paper palette with a single oxblood accent. The centerpiece is a numbered *project index* rather than a card grid. Think personal document, not landing page.

## Files

| File | Purpose |
|------|---------|
| `data.js` | **All your content.** Edit this file to update the site. |
| `index.html` | Page structure. You usually won't need to touch this. |
| `style.css` | Styling. To change the accent color, find `--ink-accent` at the top. |
| `script.js` | Renders content & handles interactions. No editing needed. |

## How to edit your content

Open **`data.js`** in any text editor. Everything is clearly labeled with comments.

### Hero headline
The `headline` field supports italics — wrap a word in `*asterisks*` to italicize it:
```js
headline: "I build models that *understand* language and images.",
```

### Add or remove a project
In the `PROJECTS` section, copy a `{ ... }` block and change the fields:
```js
{
  title: "My New Project",
  description: "What it does and why it matters.",
  tags: ["Python", "PyTorch"],
  github: "https://github.com/yourusername/repo-name",
  demo: "",  // add a live demo URL here, or leave as "" to link to GitHub instead
},
```

### Update skills
In the `SKILLS` section, copy a `{ ... }` block inside a category, or add a new category.

### Update experience / education
In the `TIMELINE` section, copy a block. Use `"type": "work"` or `"type": "education"`.

### Update quick facts
In the `FACTS` section, each item is a `{ label, value }` pair.

## Change the accent color

Open `style.css` and edit `--ink-accent` near the top:
```css
--ink-accent: #8b3a3a;   /* oxblood — the single accent */
```

## Deploy to GitHub Pages

1. Push these files to your `nandasimatupang.github.io` repository (main branch, root folder).
2. Go to **Settings → Pages** and ensure source is set to your main branch.
3. Your site will be live at `https://nandasimatupang.github.io`.

```bash
git add .
git commit -m "Redesign portfolio"
git push origin main
```

## Run locally

Open `index.html` in your browser, or:
```bash
python3 -m http.server 8000
# visit http://localhost:8000
```
