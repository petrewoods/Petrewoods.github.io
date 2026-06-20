# petrewoods.github.io

Personal site of Dr Peter Woods — built with Next.js 16 (App Router), React 19 and Tailwind CSS v4, exported as a fully static site and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static export to ./out
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds and publishes `./out` to GitHub Pages. In repo Settings → Pages, set Source to "GitHub Actions".
