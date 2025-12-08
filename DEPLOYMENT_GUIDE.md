# Deploying Astro with Railpack on Dokploy

This guide walks you through deploying an Astro static site using Railpack build type on Dokploy.

## Prerequisites

- An Astro project in a Git repository
- A Dokploy instance set up and running
- Basic understanding of Astro and static site generation

## Configuration Steps

### 1. Configure Astro for Static Output

Update your `astro.config.mjs` to use the passthrough image service (to avoid Sharp dependencies):

```javascript
import { defineConfig } from "astro/config";
import { passthroughImageService } from "astro/config";
// ... your other integrations

export default defineConfig({
  site: "https://your-domain.com",
  image: {
    service: passthroughImageService(),
  },
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    // your integrations
  ],
});
```

**Why?** The passthrough image service avoids the need for Sharp (a native Node.js module requiring system dependencies like libvips). This simplifies the build process significantly.

### 2. Create railpack.json (Optional)

If you need additional system packages, create a `railpack.json` in your project root:

```json
{
  "$schema": "https://schema.railpack.com",
  "buildAptPackages": ["build-essential", "python3"]
}
```

**Note:** With the passthrough image service, you typically don't need this file. Only add it if you have other dependencies requiring system packages.

### 3. Ensure Package Lock File is Current

Run the following to update your lock file:

```bash
yarn install
# or
npm install
```

Commit the updated `yarn.lock` or `package-lock.json`:

```bash
git add yarn.lock
git commit -m "Update lock file for Railpack deployment"
git push
```

### 4. Configure Dokploy Application

1. **Create a new Application** in Dokploy
2. **Connect your Git repository**
   - Repository URL: `https://github.com/username/repo.git`
   - Branch: `main` (or your default branch)
   - Build Path: `/` (root of your repo)

3. **Select Build Type: Railpack**

4. **Set Publish Directory: `./dist`**
   - This tells Dokploy where to find the built static files

5. **Configure Domain**
   - Generate or add a domain
   - Set Port: `80` (for static file serving)

### 5. Deploy

Click the **Deploy** button in Dokploy. The build process will:
- Install Node.js and dependencies automatically
- Run `yarn build` or `npm run build`
- Serve the static files from the `dist` folder

## Package.json Requirements

Ensure your `package.json` has the build script:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

## Common Issues and Solutions

### Issue: "Could not find Sharp" Error

**Solution:** Use the passthrough image service in `astro.config.mjs` as shown in Step 1. This completely bypasses Sharp.

### Issue: Lockfile Out of Sync

**Solution:** Run `yarn install` or `npm install` locally, commit the updated lock file, and redeploy.

### Issue: Build Fails with "astro: not found"

**Solution:** Ensure your lock file is committed and up to date. Railpack needs a valid lock file to install dependencies correctly.

## Performance Notes

- **Passthrough Image Service:** Images are copied as-is without optimization. Consider pre-optimizing your images before committing them to the repository.
- **Build Time:** Railpack builds are typically faster than Nixpacks for Node.js projects
- **Caching:** Railpack caches dependencies between builds for faster subsequent deployments

## Example Project Structure

```
your-astro-project/
├── src/
│   ├── pages/
│   ├── layouts/
│   └── components/
├── public/
├── astro.config.mjs
├── package.json
├── yarn.lock (or package-lock.json)
└── railpack.json (optional)
```

## Verification

After successful deployment:
1. Visit your generated domain
2. Check that all pages load correctly
3. Verify images and assets are served properly
4. Test navigation and links

## Additional Resources

- [Railpack Documentation](https://railpack.com/)
- [Dokploy Documentation](https://docs.dokploy.com/)
- [Astro Documentation](https://docs.astro.build/)
- [Astro Image Service Documentation](https://docs.astro.build/en/guides/images/)
