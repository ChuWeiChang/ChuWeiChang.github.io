# chuweichang.github.io

Personal site. Vite + React + TypeScript, Tailwind CSS, [shadcn/ui](https://ui.shadcn.com) and
[Magic UI](https://magicui.design) components (`src/components/ui/`), deployed to GitHub Pages by GitHub Actions.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Edit content

All text lives in `src/content.tsx`: one `en` object and one `zh-TW` object of the same `Content` type,
so the build fails if a translation is missing a field. Visitors switch language with the button in the
top bar or with `?lang=zh-TW`.

Put the CV at `public/cv.pdf` and the profile photo at `public/avatar.jpg`.

Home-page photos: put images in `public/photos/` and list them in `PHOTOS` in `src/content.tsx`
(the first one is shown wide). Keep originals in `photos-src/`
(git-ignored) and export web-sized JPEGs (~1600 px, < 500 KB) into `public/photos/`. Empty placeholder slots appear only in `npm run dev`.

Add more components with `npx shadcn@latest add <name>` (or a Magic UI registry URL).

## Deploy

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions** (one-time).
2. Push to `main`. `.github/workflows/deploy.yml` builds and publishes `dist/`.
