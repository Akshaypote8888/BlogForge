# Deploy Frontend to GitHub Pages

This project contains an Angular frontend at `Admin/Frontend`. The repository includes a GitHub Actions workflow that builds the frontend and deploys `dist/Frontend` to the `gh-pages` branch.

## What the workflow does
- Runs on push to `main`.
- Installs Node.js and dependencies.
- Builds the Angular app using `npm run build`.
- Deploys the `Admin/Frontend/dist/Frontend` directory to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

## Setup steps
1. Ensure your repository's `main` branch contains this workflow under `Admin/Frontend/.github/workflows/deploy-frontend.yml`.
2. (Optional) If you want a custom domain, add a `CNAME` file to `Admin/Frontend/dist/Frontend` during build or add it afterwards in the `gh-pages` branch.
3. Push to `main` (or merge a PR). The workflow will run automatically and publish the compiled site to `gh-pages`.

## Notes
- GitHub Pages will serve content from the `gh-pages` branch. If you've previously configured Pages differently, update the Pages settings in the repository to use the `gh-pages` branch and the root directory.
- The workflow uses the automatically provided `GITHUB_TOKEN` so no extra secrets are needed.

If you want, I can:
- Add a `CNAME` file or configure automatic custom-domain publishing.
- Add a test step that runs a quick `curl` check after deployment to ensure the homepage is reachable.
