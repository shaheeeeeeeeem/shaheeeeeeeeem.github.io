# shaheeeeeeeeem.github.io

Single-page portfolio. Vite + React + TypeScript, static build, deployed to GitHub Pages.

## Editing content

All copy and links live in [`src/content.ts`](src/content.ts). The five placeholders at the
top of that file are the only things that need filling in:

```ts
export const EMAIL: string = ''
export const GITHUB_URL: string = ''
export const LINKEDIN_URL: string = ''
export const AIR_QUALITY_APP: string = ''
export const HIV_APP: string = ''
```

Empty links degrade gracefully: header contact items render as plain text, project titles
render unlinked, and the footer link row is omitted entirely.

## Local

```
npm install
npm run dev
npm run build
```

## Deploying

1. Create a GitHub repo named `shaheeeeeeeeem.github.io` (must match the username exactly).
2. Push this directory to `main`.
3. In the repo: Settings -> Pages -> Build and deployment -> Source: **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds on every push to `main` and
   publishes `dist/` with `actions/deploy-pages`. The site serves at
   `https://shaheeeeeeeeem.github.io/`.

`vite.config.ts` sets `base: '/'` for the root domain. If this is ever moved to a project
repo served from a subpath, change `base` to `'/<repo-name>/'`.
