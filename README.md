# Portfolio — Su Wai Myo

A fast, content-driven academic portfolio built with **Astro + Tailwind CSS + TypeScript**.

## Develop

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing the site

| What | Where |
|---|---|
| Name, role, bio, nav, social links | `src/config.ts` |
| Page content (About, Research, CV, Contact) | `src/pages/*.astro` |
| Blog posts | add a Markdown file in `src/content/blog/` |
| Publications | add a `.yaml` file in `src/content/publications/` |
| Colors, fonts, base styles | `src/styles/global.css` |
| Profile photo / logo / CV PDF | `public/` (e.g. `public/profile.jpeg`, `public/cv.pdf`) |

### Add a blog post
Create `src/content/blog/my-post.md`:

```markdown
---
title: 'My post title'
description: 'One-line summary.'
date: 2026-06-20
tags: ['nlp']
draft: false   # set true to hide from production
---

Write your post in Markdown here.
```

### Add a publication
Create `src/content/publications/2026-my-paper.yaml`. Required fields: `title`,
`authors`, `venue`, `year`. Set `selected: true` to feature it on the home page.
A malformed entry (missing/incorrect fields) **fails the build**, so bad data never ships.

## Deploy

Pushes to GitHub auto-deploy on either host (zero config — Astro is auto-detected):

- **Vercel** — import the repo at vercel.com. Build: `astro build`, output: `dist/`.
- **Netlify** — import the repo at netlify.com. Same build/output.

Both give free preview builds per push and support a custom domain. After choosing a
domain, update `site` in `astro.config.mjs` and `url`/`email` in `src/config.ts`.

## TODO before going live
- [ ] Replace placeholder bio/CV/research text (search the code for `TODO`).
- [ ] Set your real email and social links in `src/config.ts`.
- [ ] Replace the example publications with your real ones.
- [ ] Drop your CV at `public/cv.pdf` (the CV page links to it).
- [ ] Update `site` in `astro.config.mjs` to your final domain.
