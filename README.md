# Personal Website for GitHub Pages

This repository contains a static personal website for **Dr. Eu‑Gene Chin**.

## 🚀 Quick Deploy (GitHub Pages)

1. Create a new GitHub repository named `dr.-eu‑gene-chin` (or any name you like).
2. Upload the contents of this folder to the repo root.
3. Go to **Settings → Pages** → Choose **Deploy from a branch** → Branch: `main` → `/ (root)`.
4. Wait a minute and your site will be live at: `https://<your-username>.github.io/<repo-name>/`

> Tip: If you want to use `https://<your-username>.github.io` as the root, name the repo exactly `<your-username>.github.io` and keep files in the repo root.

## ✏️ Customize

- Edit `index.html` for content (bio, publications, links).
- Update `assets/favicon.png` with your own icon.
- Change the email in `script.js` (`you@example.com`) to enable mailto for the contact form,
  or replace the form action with a service like Formspree / Netlify Forms / a serverless function.

## 🧱 Structure

```
/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── favicon.png
└── README.md
```

## 🧰 Tech

- 100% static: HTML + CSS + vanilla JS (no frameworks).
- Responsive layout with a clean, accessible design.
- Works out-of-the-box on GitHub Pages.

_Last built: 2025-09-07T20:11:43.914680Z_