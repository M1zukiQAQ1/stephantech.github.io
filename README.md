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

The app is fully static. Vite outputs deployable files to `dist/`, and the GitHub Actions workflow in `.github/workflows/deploy.yml` publishes that build to GitHub Pages on pushes to `main`.
