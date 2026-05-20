# Deploy your portfolio (5 minutes)

This site builds to a static **`out/`** folder — works on any free host.

## 1. Vercel (easiest — recommended)

1. Push this folder to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Click **Deploy** (settings are auto-detected via `vercel.json`).
4. You get a live URL like `rasheed-portfolio.vercel.app`.

No environment variables needed for Vercel.

---

## 2. Netlify

1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**.
3. Build settings are read from `netlify.toml` automatically.
4. Deploy.

---

## 3. GitHub Pages (free, uses your GitHub username)

1. Push this repo to GitHub (e.g. repo name `rasheed-portfolio`).
2. Repo **Settings** → **Pages** → Source: **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys.
4. Live at: `https://YOUR_USERNAME.github.io/rasheed-portfolio/`

The workflow sets `NEXT_PUBLIC_BASE_PATH` automatically from the repo name.

---

## 4. Manual upload (any static host)

```bash
npm install
npm run build
```

Upload the **`out/`** folder to:

- Cloudflare Pages (drag & drop)
- Firebase Hosting
- Any web server

Preview locally:

```bash
npm run preview
```

Open http://localhost:3000

---

## Put the link on your resume

After deploy, add your URL to:

- Resume header
- LinkedIn **Featured** section
- GitHub profile **Website**

Example: `https://rasheed-portfolio.vercel.app`

# Deploy your portfolio (5 minutes)

This site builds to a static **`out/`** folder — works on any free host.

## 1. Vercel (easiest — recommended)

1. Push this folder to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Click **Deploy** (settings are auto-detected via `vercel.json`).
4. You get a live URL like `rasheed-portfolio.vercel.app`.

No environment variables needed for Vercel.

---

## 2. Netlify

1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**.
3. Build settings are read from `netlify.toml` automatically.
4. Deploy.

---

## 3. GitHub Pages (free, uses your GitHub username)

1. Push this repo to GitHub (e.g. repo name `rasheed-portfolio`).
2. Repo **Settings** → **Pages** → Source: **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys.
4. Live at: `https://YOUR_USERNAME.github.io/rasheed-portfolio/`

The workflow sets `NEXT_PUBLIC_BASE_PATH` automatically from the repo name.

---

## 4. Manual upload (any static host)

```bash
npm install
npm run build
```

Upload the **`out/`** folder to:

- Cloudflare Pages (drag & drop)
- Firebase Hosting
- Any web server

Preview locally:

```bash
npm run preview
```

Open http://localhost:3000

---

## Put the link on your resume

After deploy, add your URL to:

- Resume header
- LinkedIn **Featured** section
- GitHub profile **Website**

Example: `https://rasheed-portfolio.vercel.app`
