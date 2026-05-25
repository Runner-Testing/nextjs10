# Next.js Starter — FlazHost PaaS

Template aplikasi [Next.js](https://nextjs.org) untuk FlazHost PaaS.

## Alur deploy

```
git push (branch main)
  → GitHub Actions: docker build
  → push image ke registry.flazhost.com/paas/<app>
  → CapRover pull image + deploy
```

## Struktur

```
app/
  layout.js          Root layout
  page.js            Halaman utama
  globals.css        Styling global
Dockerfile           Build image produksi (dipakai GitHub Actions)
.github/workflows/
  deploy.yml         CI: build → push Harbor → deploy CapRover
next.config.mjs      Konfigurasi Next.js
```

## Pengembangan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Deploy

Push ke branch `main` — GitHub Actions otomatis build, push image ke
registry FlazHost, dan deploy ke CapRover. Container produksi listen di
port `80`.

Secret/variable yang dipakai workflow di-set otomatis oleh FlazHost saat
app dibuat (lihat komentar di `.github/workflows/deploy.yml`).

## Catatan

- Next.js 14 (App Router)
- Node 20 (Alpine) untuk image produksi
- Port produksi: `80` (`ENV PORT=80` di Dockerfile)
