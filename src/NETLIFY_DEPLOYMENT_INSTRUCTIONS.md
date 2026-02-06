# Netlify Deployment Instructions

This guide will help you set up your favicon and social share images when deploying to Netlify.

## Step 1: Prepare Your Images

1. **Favicon Image**: Use your first image (the NicheNeeds logo icon)
   - Recommended size: 512x512px or 192x192px
   - Format: PNG with transparency
   - Save as: `favicon.png`

2. **Social Share Image**: Use your second image (the assistants grid)
   - Recommended size: 1200x630px (Facebook/LinkedIn standard)
   - Format: PNG or JPG
   - Save as: `og-image.png`

## Step 2: Create Public Folder Structure

In your project root, create a `public` folder:

```
your-project/
├── public/
│   ├── favicon.png          (your logo icon)
│   ├── og-image.png          (your social share image)
│   └── meta-setup.js         (copy from public-meta-setup.js)
├── components/
├── App.tsx
└── ...
```

## Step 3: Copy Meta Setup Script

Copy the `/public-meta-setup.js` file to `public/meta-setup.js`

## Step 4: Update Your HTML (if you have index.html)

If your build process generates an `index.html`, add this script tag before the closing `</body>` tag:

```html
<script src="/meta-setup.js"></script>
```

## Step 5: Build and Deploy

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Verify the public folder contents are in your build output:**
   - Check that `favicon.png`, `og-image.png`, and `meta-setup.js` are in the build/dist folder

3. **Deploy to Netlify:**
   - Drag and drop your build folder to Netlify, OR
   - Connect your Git repository and set up automatic deployments

## Step 6: Verify It Works

After deployment:

1. **Check Favicon:**
   - Open your site in a browser
   - Look for the favicon in the browser tab

2. **Check Social Share:**
   - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Paste your site URL and verify the image appears

## Alternative: Use React Helmet

If you prefer to manage meta tags in React, install `react-helmet`:

```bash
npm install react-helmet
```

Then uncomment the useEffect code in `/App.tsx` (the commented section that sets meta tags).

## Troubleshooting

- **Favicon not showing:** Clear browser cache and hard reload (Ctrl+Shift+R)
- **Social image not appearing:** Make sure the image URL is absolute (https://yourdomain.com/og-image.png)
- **Images not found:** Verify they're in the `public` folder before building

## Testing Locally

To test before deploying:

1. Add the images to your `public` folder
2. Run your development server
3. Open browser DevTools > Network tab
4. Verify `/favicon.png` and `/og-image.png` load successfully
