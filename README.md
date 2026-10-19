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
│       ├── christopher-palac-headshot.jpg        # Homepage hero portrait
│       ├── mustache-masters-broadcast.jpg        # Mustache Masters charity broadcast visual
│       └── philadelphia-outdoors-trail.jpg       # Philadelphia outdoors & trails visual
├── standalone-single-file/
│   └── index.html                                # Optional 100% self-contained single-file version (base64 images inline)
├── .github/
│   └── workflows/
│       └── deploy.yml                            # Automated GitHub Actions workflow for GitHub Pages
├── .nojekyll                                     # Tells GitHub Pages to serve static assets directly without Jekyll
└── README.md                                     # Project documentation & deployment guide
```

## Quick Start: Hosting on GitHub Pages

### Option A: Drag-and-Drop via GitHub Web UI (No Terminal Needed)

1. Sign in to [GitHub](https://github.com/) and click **New repository** (`+` icon in the top-right corner).
2. Name your repository:
   - Use **`<your-github-username>.github.io`** to host at your root domain (`https://<your-github-username>.github.io/`), **OR**
   - Use **`portfolio`** (or any name) to host at `https://<your-github-username>.github.io/portfolio/`.
3. Set the visibility to **Public** and click **Create repository**.
4. Click **uploading an existing file** on the setup screen (or **Add file → Upload files**).
5. Unzip `christopher-palac-github-pages.zip` on your computer and drag the extracted files (`index.html`, `css/`, `js/`, `assets/`, `.nojekyll`, `README.md`) into the upload box.
   - *Shortcut*: If you only want to upload a single file, upload `standalone-single-file/index.html` (or the standalone `index.html` provided alongside this zip) directly to the root of your repository.
6. Click **Commit changes**.
7. Go to **Settings → Pages** in your repository:
   - Under **Build and deployment → Source**, select **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
8. Wait 60–90 seconds and refresh **Settings → Pages** to view your live URL!

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

Then go to **Settings → Pages** in your GitHub repository, set **Source** to **Deploy from a branch** (`main` / `/ (root)`), and save.

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

1. Review the public information in `index.html` and `js/app.js`. Generate the searchable snapshots from those files with `node scripts/build-knowledge.mjs`. Commit `worker/knowledge.json` whenever the portfolio changes; the Worker deploy bundles this file. Section links use `#home`, `#about`, `#resume`, `#projects`, or `#hobbies` and navigate within the single-page site.
2. Set `ALLOWED_ORIGIN` in `worker/wrangler.jsonc` to your **exact** website origin (scheme + host, without trailing slash). For a custom domain, replace the example GitHub Pages origin. Browser preflight requests from other origins are rejected.
3. Install or run Cloudflare's Wrangler CLI from your own Cloudflare account. From the repository root: `npx wrangler secret put OPENAI_API_KEY --config worker/wrangler.jsonc` and `npx wrangler deploy --config worker/wrangler.jsonc`. On PowerShell where `npm.ps1` is disabled, use `npx.cmd` instead. Provide your OpenAI API key **only** through the secret prompt, never as committed text.
4. Paste the deployed Worker URL followed by `/chat` into `js/chat-config.js` as `window.PORTFOLIO_CHAT_ENDPOINT`, e.g. `https://your-worker.your-subdomain.workers.dev/chat`. Commit and redeploy the GitHub Pages site.
5. Verify the chat from the actual hosted website: ask about the Adaptive USA role, the scoring product, and an unrelated question. Check source links, mobile layout, light mode, and the browser console for CORS errors.

The Worker retrieves relevant public excerpts and sends only those excerpts and the visitor's question to OpenAI's `gpt-4.1-mini` model. It caps input, output, and request duration; returns no-store responses; and sets `store: false` for model requests. The chat is stateless and does not persist conversation history. An in-memory per-IP limit (10 requests/minute per Worker instance) is a **best-effort** abuse guard, not a distributed billing limit; set Cloudflare account-level rate limiting and spending alerts before public promotion. An Origin check limits browsers, **not** server-side clients. AI can still make mistakes, so users should verify answers against the linked pages. Since most information lives in a single URL, links reference site sections rather than individual paragraphs.

Run `node --test worker/index.test.mjs` to test retrieval and request handling, and `node scripts/build-knowledge.mjs` to regenerate knowledge after edits. No npm dependencies are required for development or testing; deploying requires a Cloudflare account and access to the Wrangler CLI. The self-contained `standalone-single-file/index.html` is not updated with the assistant.
