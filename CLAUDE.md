# everydayathe.com

## Domain & DNS
- Domain: `everydayathe.com`
- DNS: Cloudflare (full setup, proxy enabled / orange cloud)
- Apex: CNAME flattened → `swang2798.github.io`
- www: CNAME → `swang2798.github.io`
- SSL: Full (Cloudflare edge + GitHub Pages origin)

## Hosting
- GitHub Pages (repo: `swang2798/athe`)
- SPA routing: `public/404.html` redirect + decode script in `public/index.html`
- Router: `BrowserRouter` (react-router-dom v6), clean URLs — no hash

## Storage
- Cloudflare R2 for media/assets

## App Stack
- React 18 + TypeScript (Create React App)
- react-router-dom v6
- CSS Modules
- Fully static, no backend

## Deploy
```bash
npm run build && npm run deploy
```
- `build` compiles to `build/`
- `deploy` runs `gh-pages -d build` → pushes to `gh-pages` branch
- **`deploy` does NOT rebuild** — always run build first
- Cloudflare CDN caches in front; purge cache if you need instant updates

## Git
- Source branch: `main`
- Deploy branch: `gh-pages` (managed by gh-pages package)
- Remote: `github.com:swang2798/athe.git`
