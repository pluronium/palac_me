# Christopher Palac — Executive Portfolio Website

Personal portfolio website for **Christopher Palac** (Product, GTM Strategy, Management Consulting & Data Science Leader based in Philadelphia, PA).

## Repository Structure

```text
├── index.html                                    # Main entry point for GitHub Pages (modular version)
├── css/
│   └── styles.css                                # Custom animations, print rules, and typography styles
├── js/
│   └── app.js                                    # Interactive SPA navigation, filters, modals, and Chart.js visualizations
├── assets/
│   ├── favicon.svg                               # Custom CP monogram vector favicon
│   └── images/
│       └── christopher-palac-headshot.jpg        # Homepage hero portrait
├── archive/                                      # Hobbies section, images and older HTML copies (not deployed)
├── .github/
│   └── workflows/
│       └── deploy.yml                            # Automated GitHub Actions workflow for GitHub Pages
├── .nojekyll                                     # Tells GitHub Pages to serve static assets directly without Jekyll
└── README.md                                     # Project documentation & deployment guide
```

## Quick Start: Hosting on GitHub Pages

### Deploy with GitHub Actions

The GitHub Actions workflow stages only the public site in `_site/` before deploying it. **Do not enable GitHub Pages “Deploy from a branch” on the repository root:** that would expose `archive/` and other repository files. The archive is retained in the repository but is not included in the Actions deployment. On a public GitHub repository, the archive remains visible in the source repository and Git history.

To preview exactly what is deployed, use a local copy of `index.html`, `css/`, `js/`, `assets/favicon.svg`, and `assets/images/christopher-palac-headshot.jpg`. The hobbies content is kept in `archive/hobbies.html`, with its two images alongside it; earlier complete HTML copies are also in `archive/`.

### Option A: Drag-and-Drop via GitHub Web UI (No Terminal Needed)

1. Sign in to [GitHub](https://github.com/) and click **New repository** (`+` icon in the top-right corner).
2. Name your repository:
   - Use **`<your-github-username>.github.io`** to host at your root domain (`https://<your-github-username>.github.io/`), **OR**
   - Use **`portfolio`** (or any name) to host at `https://<your-github-username>.github.io/portfolio/`.
3. Set the visibility to **Public** and click **Create repository**.
4. Click **uploading an existing file** on the setup screen (or **Add file → Upload files**).
5. Upload the repository files, including `.github/workflows/deploy.yml`, to the repository. Do not publish the `archive/` folder using branch deployment.
6. Click **Commit changes**.
7. Go to **Settings → Pages** and select **GitHub Actions** as the build and deployment source. The workflow runs on pushes to `main` (or manually via Actions).
8. Check the workflow run under **Actions** for the deployment URL.

### Option B: Push via Git CLI (Terminal)

Unzip `christopher-palac-github-pages.zip`, open your terminal in the extracted folder, and run:

```bash
git init
git add .
git commit -m "Initial commit: Christopher Palac portfolio website"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
git push -u origin main
```

Then go to **Settings → Pages** in your GitHub repository and select **GitHub Actions** as the source.

## Local Development & Customization

Because this site uses zero build-step dependencies, you can preview changes locally by opening `index.html` in any browser or running a lightweight local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

- **Updating Experience, Skills, Projects, or Clients**: Open `js/app.js` and edit the `resumeExperience`, `skillsData`, `flagshipProjects`, or `clientEngagements` arrays at the top of the file.
- **Updating Images**: Replace the files in `assets/images/` using the same filenames, or update the `src` attributes in `index.html`.

## Portfolio Q&A assistant

The floating chat widget is part of the static GitHub Pages site. Its API is a separate Cloudflare Worker in `worker/`; **GitHub Pages cannot run the Worker or protect an API key**. Until configured, the widget explicitly says it is not connected. No secret belongs in this repository or in browser JavaScript.

### Deploy the Worker

1. Review the public information in `index.html` and `js/app.js`. Generate the searchable snapshots from those files with `node scripts/build-knowledge.mjs`. Commit `worker/knowledge.json` whenever the portfolio changes; the Worker deploy bundles this file. Section links use `#home`, `#about`, `#resume`, or `#projects` and navigate within the single-page site.
2. Set `ALLOWED_ORIGIN` in `worker/wrangler.jsonc` to your **exact** website origin (scheme + host, without trailing slash). For a custom domain, replace the example GitHub Pages origin. Browser preflight requests from other origins are rejected.
3. Install or run Cloudflare's Wrangler CLI from your own Cloudflare account. From the repository root: `npx wrangler secret put OPENAI_API_KEY --config worker/wrangler.jsonc` and `npx wrangler deploy --config worker/wrangler.jsonc`. On PowerShell where `npm.ps1` is disabled, use `npx.cmd` instead. Provide your OpenAI API key **only** through the secret prompt, never as committed text.
4. Paste the deployed Worker URL followed by `/chat` into `js/chat-config.js` as `window.PORTFOLIO_CHAT_ENDPOINT`, e.g. `https://your-worker.your-subdomain.workers.dev/chat`. Commit and redeploy the GitHub Pages site.
5. Verify the chat from the actual hosted website: ask about the Adaptive USA role, the scoring product, and an unrelated question. Check source links, mobile layout, light mode, and the browser console for CORS errors.

The Worker retrieves relevant public excerpts and sends only those excerpts and the visitor's question to OpenAI's `gpt-4.1-mini` model. It caps input, output, and request duration; returns no-store responses; and sets `store: false` for model requests. The chat is stateless and does not persist conversation history. An in-memory per-IP limit (10 requests/minute per Worker instance) is a **best-effort** abuse guard, not a distributed billing limit; set Cloudflare account-level rate limiting and spending alerts before public promotion. An Origin check limits browsers, **not** server-side clients. AI can still make mistakes, so users should verify answers against the linked pages. Since most information lives in a single URL, links reference site sections rather than individual paragraphs.

Run `node --test scripts/site.test.mjs worker/index.test.mjs` to test the site, retrieval, and request handling, and `node scripts/build-knowledge.mjs` to regenerate knowledge after edits. No npm dependencies are required for development or testing; deploying the assistant requires a Cloudflare account and access to the Wrangler CLI. The archived self-contained HTML is not updated with the assistant and must not be published.
