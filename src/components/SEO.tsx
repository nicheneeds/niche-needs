import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "NicheNeeds - Amsterdam AI Creative Lab",
  description = "Launched in 2025, NicheNeeds is a creative lab blending 15+ years of product design experience with the speed of agentic AI.",
  image,
  url,
  type = 'website'
}: SEOProps) {

  useEffect(() => {
    // Skip in non-browser environments
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Construct absolute URLs for production
    const baseUrl = window.location.origin;
    const absoluteUrl = url || window.location.href;
    const absoluteImageUrl = image || `${baseUrl}/og-image.png`;
    const faviconUrl = `${baseUrl}/favicon.png`;

    // Set page title
    document.title = title;

    // Set favicon
    const setFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(link => link.remove());

      // Add new favicon
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/png';
      favicon.href = faviconUrl;
      document.head.appendChild(favicon);

      // Add apple touch icon
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = faviconUrl;
      document.head.appendChild(appleTouchIcon);
    };

    // Set meta description
    const setMetaDescription = () => {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    };

    // Set canonical URL
    const setCanonical = () => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', absoluteUrl);
    };

    // Set Open Graph meta tags
    const setOpenGraphTags = () => {
      const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: absoluteImageUrl },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: type },
        { property: 'og:url', content: absoluteUrl },
        { property: 'og:site_name', content: 'NicheNeeds' },
        { property: 'og:locale', content: 'en_US' },
      ];

      ogTags.forEach(({ property, content }) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      });
    };

    // Set Twitter Card meta tags
    const setTwitterTags = () => {
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: absoluteImageUrl },
        { name: 'twitter:site', content: '@nicheneeds' },
      ];

      twitterTags.forEach(({ name, content }) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      });
    };

    // Add JSON-LD structured data for LocalBusiness
    const setStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "NicheNeeds",
        "description": "Launched in 2025, NicheNeeds is a creative lab blending 15+ years of product design experience with the speed of agentic AI.",
        "url": "https://www.nicheneeds.com",
        "logo": faviconUrl,
        "image": absoluteImageUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Amsterdam",
          "addressCountry": "NL"
        },
        "email": "hello@nicheneeds.com",
        "areaServed": {
          "@type": "City",
          "name": "Amsterdam"
        },
        "knowsAbout": [
          "AI Voice Assistants",
          "Workflow Automation",
          "AI Consultation",
          "Business Automation"
        ],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "5"
        },
        "sameAs": [
          "https://instagram.com/nicheneeds.ai"
        ]
      };

      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Execute all SEO improvements
    setFavicon();
    setMetaDescription();
    setCanonical();
    setOpenGraphTags();
    setTwitterTags();
    setStructuredData();

  }, [title, description, image, url, type]);

  return null;
}