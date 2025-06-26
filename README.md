# Portfolio Website - Refactored Structure

This repository contains a refactored portfolio website originally built with Framer. The code has been organized into a clean, navigable directory structure for better maintainability and readability.

## Directory Structure

```
CVSite/
├── index.html              # Main HTML file (clean, organized)
├── index1.html             # Original file (preserved for reference)
├── css/
│   ├── main.css            # Base styles and CSS variables
│   ├── fonts.css           # Font declarations and @font-face rules
│   └── components.css      # Framer component styles and layouts
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Image assets (to be populated)
├── assets/                 # Additional assets
└── README.md               # This file
```

## File Organization

### CSS Files

- **main.css**: Contains base styles, CSS variables, reset styles, and root-level configurations
- **fonts.css**: All @font-face declarations for Avenir and Inter font families
- **components.css**: Framer-generated component styles, layout classes, and responsive breakpoints

### JavaScript Files

- **main.js**: Contains Google Analytics, Microsoft Clarity tracking, and URL parameter preservation scripts

### HTML Files

- **index.html**: Clean, refactored main file with proper structure and external resource links
- **index1.html**: Original file preserved for reference

## Key Improvements

1. **Separation of Concerns**: CSS, JavaScript, and HTML are now in separate files
2. **Organized Structure**: Logical directory structure for assets and code
3. **Better Maintainability**: Easier to locate and modify specific functionality
4. **Cleaner HTML**: Reduced inline styles and scripts in the main HTML file
5. **Documentation**: Clear file organization and purpose

## Usage

To run the website:

1. Open `index.html` in a web browser
2. Ensure all CSS and JS files are properly linked
3. The original functionality is preserved

## Notes

- The extensive Framer-generated CSS has been partially extracted but some complex component styles remain inline for functionality
- All original JavaScript functionality has been preserved
- External dependencies (Google Analytics, Clarity, Framer scripts) are maintained
- The website structure supports easy future modifications and additions

## Development

For further development:
- Add new styles to the appropriate CSS files
- Place images in the `images/` directory
- Add new JavaScript functionality to `js/main.js` or create new JS files
- Update the HTML structure in `index.html` as needed

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, smooth scrolling, and dynamic content
- **Contact Form** - Functional contact form with validation
- **Performance Optimized** - Fast loading with optimized assets
- **SEO Ready** - Proper meta tags and semantic HTML structure
- **Accessibility** - WCAG compliant with proper focus states and keyboard navigation

## 🎨 Customization Guide

### 1. Personal Information

Update the following sections in `index.html`:

**Navigation & Contact:**
- Line 17: Update `<title>` and meta description
- Lines 29-37: Update social media links
- Lines 44-83: Update navigation links (email, LinkedIn, GitHub)

**Hero Section:**
- Line 102: Update the hero title with your name and experience
- Lines 103-106: Update your description and specialties
- Lines 108-112: Update location and availability status

### 2. Skills Section

**Update Skills (Lines 120-169):**
Replace the skill items with your technologies:
```html
<div class="skill-item">
    <div class="skill-icon">Your Icon</div>
    <span class="skill-name">Your Skill</span>
</div>
```

### 3. Projects Section

**Add Your Projects (Lines 175-230):**
- Replace placeholder images with your project screenshots
- Update project titles, descriptions, and technologies
- Add links to live demos and GitHub repositories

### 4. Experience Section

**Update Work History (Lines 240-280):**
- Replace with your actual work experience
- Update job titles, companies, and descriptions
- Add relevant technologies and achievements

### 5. Contact Information

**Update Contact Details:**
- Line 29: Update email address
- Lines 44-83: Update social media URLs
- Line 286: Update email in contact button

### 6. Colors and Styling

**CSS Variables (styles.css, lines 9-18):**
```css
:root {
    --color-primary: #ff6928;      /* Change primary color */
    --color-text: #393939;         /* Main text color */
    --color-text-light: #8e8989;   /* Secondary text color */
    /* ... other variables */
}
```

### 7. Images

Replace placeholder images with your own:
- **Profile Image**: Update the `src` attribute in the navigation (line 38)
- **Project Images**: Replace placeholder URLs in project cards
- Consider using a service like [Unsplash](https://unsplash.com/) for high-quality images

## 🛠️ Development

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/CVSite.git
cd CVSite
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

3. Make your customizations and test across different devices

### Deployment Options

**GitHub Pages:**
1. Push your code to GitHub
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/CVSite`

**Netlify:**
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

**Vercel:**
1. Import your GitHub repository
2. Automatic deployments and previews
3. Excellent performance optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

**Technologies Used:**
- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Inter font family
- SVG icons

**Performance Features:**
- Optimized CSS with CSS Grid and Flexbox
- Smooth animations with `transform` properties
- Intersection Observer for efficient scroll animations
- Debounced scroll events
- Semantic HTML for better SEO

## 📝 Content Guidelines

**Writing Tips:**
- Keep descriptions concise and impactful
- Use action verbs in experience descriptions
- Quantify achievements where possible
- Highlight technologies relevant to your target roles
- Ensure consistent tone throughout

**Image Guidelines:**
- Use high-quality images (at least 1200px wide for projects)
- Maintain consistent aspect ratios
- Optimize images for web (WebP format recommended)
- Include alt text for accessibility

## 🎯 SEO Optimization

The site includes:
- Proper HTML structure with semantic elements
- Meta descriptions and Open Graph tags
- Descriptive alt text for images
- Clean, descriptive URLs
- Fast loading times
- Mobile-friendly design

## 🚀 Next Steps

1. **Customize Content**: Update all placeholder content with your information
2. **Add Your Images**: Replace placeholders with professional photos and project screenshots
3. **Test Thoroughly**: Check on different devices and browsers
4. **Deploy**: Choose a hosting platform and deploy your site
5. **Share**: Add the link to your LinkedIn, GitHub, and resume

## 📞 Support

If you need help customizing this template:
1. Check the comments in the code files
2. Refer to this README for guidance
3. Test changes incrementally
4. Use browser developer tools for debugging

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉

Remember to update this README with your own information once you've customized the portfolio.