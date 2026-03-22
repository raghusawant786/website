# Analytics Setup Guide

## Google Analytics 4 Configuration

This portfolio website now includes Google Analytics 4 (GA4) integration for tracking visitor metrics and understanding site performance. GA4 is implemented via gtag.js for better compatibility and modern features.

### Setup Instructions

1. **Create a Google Analytics Account**
   - Visit [Google Analytics](https://analytics.google.com/)
   - Sign in with your Google account
   - Click "Start measuring"
   - Set up a new property for your website

2. **Get Your Measurement ID**
   - After creating a property, you'll receive a Measurement ID (format: `G-XXXXXXXXXX`)
   - Navigate to Admin → Properties → Data Streams
   - Click on your website data stream
   - Your Measurement ID will be displayed at the top

3. **Update the Configuration**
   - Open `docusaurus.config.js`
   - Find the `metadataHead` array in `themeConfig`
   - Look for the Google Analytics comment section
   - Replace **both instances** of `'G-XXXXXXX'` with your actual Measurement ID:

   ```javascript
   ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
   ['script', {}, "window.dataLayer = window.dataLayer || [];...gtag('config', 'G-XXXXXXXXXX', ..."],
   ```

   **Example:**
   ```javascript
   ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ' }],
   ['script', {}, "window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', 'G-ABC123XYZ', { 'anonymize_ip': true });"],
   ```

4. **Rebuild and Deploy**
   - Run `yarn clean` (clear cache)
   - Run `yarn build`
   - Deploy to GitHub Pages: `yarn deploy`
   - Wait 24-48 hours for data to start appearing in Google Analytics

### What Gets Tracked

- Page views and navigation
- Session duration
- User demographics (by default, anonymized)
- Traffic sources
- Device and browser information

### Privacy Considerations

- IP anonymization is enabled by default
- No personal user data is collected
- Visitors can opt-out using browser extensions

## Sitemap

The sitemap is automatically generated and available at:
- `https://raghunahtsawant.github.io/website/sitemap.xml`

This helps search engines discover and index all pages on your site.

## Search Engine Optimization (SEO)

### Files Created

1. **robots.txt** - Guides search engine crawlers
2. **sitemap.xml** - Automatically generated (after build)
3. **Meta tags** - Added to `docusaurus.config.js`

### SEO Best Practices Implemented

- Open Graph tags for social sharing
- Twitter Card tags for Twitter sharing
- Meta descriptions for search results
- Semantic HTML structure
- Proper heading hierarchy
- Image alt text
- Mobile-responsive design
- Fast page load times (lazy loading images)

### Monitoring SEO Performance

1. **Google Search Console**
   - Verify your site at [Google Search Console](https://search.google.com/search-console)
   - Submit your sitemap
   - Monitor indexing status
   - Check for crawl errors

2. **Bing Webmaster Tools**
   - Register at [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - Submit your sitemap
   - Monitor site performance

3. **Google Analytics**
   - Track organic traffic
   - Monitor bounce rates
   - Analyze user behavior
   - Identify top-performing pages

## Performance Optimization

### Lazy Loading Images

LazyImage component automatically:
- Loads images only when they come into view
- Shows a shimmer skeleton while loading
- Reduces initial page load time
- Improves Core Web Vitals

### Image Optimization Tips

1. Compress images before adding to `/static/img/`
2. Use appropriate image formats (PNG for graphics, JPEG for photos)
3. Consider using WebP format for modern browsers

### Testing Performance

Use these tools to test your site:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/

2. **Lighthouse**
   - Built into Chrome DevTools
   - Measures performance, accessibility, SEO

3. **GTmetrix**
   - https://gtmetrix.com/

## Accessibility Features

The site now includes:

- ARIA labels and roles for screen readers
- Semantic HTML structure
- Keyboard navigation support
- High contrast color scheme
- Focus indicators on interactive elements
- SVG icons with proper descriptions
- Skip-to-main-content link
- Error boundary for graceful error handling
- Support for reduced motion preferences
- Dark mode support

### Accessibility Testing

- Use WAVE browser extension to check accessibility
- Test with keyboard navigation (Tab key)
- Use screen readers (NVDA for Windows, VoiceOver for Mac)
- Check contrast ratios with WebAIM contrast checker

## Maintenance

### Regular Check-ups

- Monitor Google Analytics monthly
- Review Google Search Console for issues
- Update documentation as needed
- Test new features for accessibility

### Continuous Improvement

- Monitor Core Web Vitals
- Analyze user behavior
- Optimize high-bounce pages
- Add new content regularly
- Keep dependencies updated

For more information, see the main README.md file.
