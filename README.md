# Editor mapy Skuptáků

Browser-based editor and analysis tool for locally selected SQLite databases. The application runs entirely in the browser; databases and imported spreadsheets are not part of the deployed site.

## Local development

```powershell
npm install
npm run dev
```

Open the address printed by Vite, normally `http://localhost:5173`.

## Production check

```powershell
npm run check
npm run preview
```

The production output is generated in `dist/`. Relative asset paths are used so the same build works on GitHub project Pages and in Tauri.

## GitHub Pages deployment

1. Create a GitHub repository and push this project to its `main` branch.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy editor to GitHub Pages** manually from the **Actions** tab.

The workflow in `.github/workflows/deploy-pages.yml` installs locked dependencies, builds the app, and publishes only `dist/`.

## Data safety

- Treat the deployed GitHub Pages address as public; repository privacy does not by itself make the Pages site private.
- Never commit a real `.sqlite`, `.db`, `.xlsx`, or `.xls` file.
- GitHub Pages publishes the application code, not a shared database.
- Each browser keeps its own local workspace and users explicitly import or export database files.
- For a common team database with simultaneous editing, use an authenticated server and a client/server database instead of GitHub Pages.

## Tauri

The existing `src-tauri/` project is preserved. Run the desktop version with:

```powershell
npx tauri dev
```

The relative Vite build remains compatible with its `../dist` frontend directory.
