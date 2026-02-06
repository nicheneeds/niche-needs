# WhatsApp Share Image Setup Guide

## Why the image doesn't show in WhatsApp

WhatsApp needs to fetch your social share image from a **public URL** (like `https://yourdomain.com/og-image.png`). The images you uploaded in Figma are bundled in your code and not accessible to external services like WhatsApp.

## How to Fix It

### Step 1: Save Your Images

Download and save these two images to your computer:

1. **Social Share Image** (the one with text) - Save as `og-image.png`
2. **Logo** - Save as `favicon.png`

### Step 2: Create Public Folder

In your Netlify project, create a `public` folder in the root:

```
your-project/
├── public/
│   ├── favicon.png       (your logo)
│   └── og-image.png      (your social share image)
├── components/
├── App.tsx
└── ...
```

### Step 3: Upload to Netlify

When you deploy to Netlify, make sure the `public` folder is included in your deployment. The files should be accessible at:

- `https://yourdomain.com/og-image.png`
- `https://yourdomain.com/favicon.png`

### Step 4: Test WhatsApp Preview

After deployment:

1. **Clear WhatsApp's cache** for your link:
   - Visit: https://developers.facebook.com/tools/debug/
   - Enter your site URL
   - Click "Scrape Again" to refresh the cache

2. **Test the link** by sending it in WhatsApp

## Important Notes

- **Image requirements for WhatsApp:**
  - Format: PNG or JPG
  - Recommended size: 1200x630px
  - Must be publicly accessible via HTTPS
  - File size should be under 5MB

- **Cache issues:** WhatsApp caches link previews aggressively. It may take 24-48 hours for changes to appear, or use the Facebook debugger tool above to force a refresh.

## Verification

To verify your setup is correct, check:

1. Open your deployed site in a browser
2. Right-click → "View Page Source"
3. Look for these meta tags in the `<head>`:
   ```html
   <meta property="og:image" content="https://yourdomain.com/og-image.png">
   <meta name="twitter:image" content="https://yourdomain.com/og-image.png">
   ```

The URLs should be **absolute** (starting with `https://`), not relative paths.
