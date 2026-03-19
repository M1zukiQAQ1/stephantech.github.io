# stephantech.github.io

Static Vue site built with Vite and deployable to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The app source lives in `app/`. The site is fully static, and `npm run build` emits the compiled GitHub Pages files into the repository root so a branch-based Pages setup can serve them directly.

`npm run build` first builds into `dist/`, then syncs the compiled `index.html`, `assets/`, and `.nojekyll` files into the repository root for GitHub Pages branch deployment.

The workflow in `.github/workflows/deploy.yml` uploads the normal `dist/` output as a GitHub Pages artifact if the repository is later switched to GitHub Actions deployment.
