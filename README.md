# Muhammad Daffa Fachreza — Portfolio

Personal portfolio built with **Vue 3 + Vite + Tailwind CSS v4**.

```
src/
├── main.js               # App entry, registers v-reveal
├── App.vue               # Page composition
├── style.css             # Tailwind import, design tokens (@theme), component classes
├── data/content.js       # ← edit your projects, stack, experience, contact here
├── directives/reveal.js  # scroll-reveal directive
└── components/           # TheNav, HeroSection, WorkSection, AboutSection,
                          # StackSection, ContactSection, TheFooter
public/
├── favicon.svg
└── Muhammad-Daffa-Fachreza-CV.pdf
```

## Develop

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build & deploy

```bash
npm run build        # outputs to dist/
npm run preview      # preview the production build locally
```

Deploy the `dist/` folder (any free static host):

- **Netlify / Cloudflare Pages:** connect the repo → build command `npm run build`, publish dir `dist`. Or drag `dist/` to app.netlify.com/drop.
- **Vercel:** import the repo → it auto-detects Vite.
- **GitHub Pages:** push, then serve `dist/`. `base: "./"` is already set in `vite.config.js` so it works on project subpaths.

## Editing

- **Content** (projects, skills, experience, contact) → `src/data/content.js`. Add a project by copying one object in the `projects` array.
- **Project links** → replace the `link` values pointing to `github.com/xsillery12` with the exact repo URLs.
- **Colors & fonts** → the `@theme` block at the top of `src/style.css`. The brand color is `--color-brand`; change it once and the whole site follows.
- **Résumé** → replace `public/Muhammad-Daffa-Fachreza-CV.pdf` (keep the filename, or update `cv` in `content.js`).
- **Add a photo** → optional; the hero currently leads with the live metric readout instead of a headshot.

## Notes

- Fonts: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (data) — loaded in `index.html`.
- Responsive, keyboard-focusable, and respects `prefers-reduced-motion`.
