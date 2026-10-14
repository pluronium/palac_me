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
