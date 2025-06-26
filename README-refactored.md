# CVSite - Refactored Structure

This repository contains a refactored version of the portfolio website, organized into modular components for better maintainability and readability.

## Directory Structure

```
CVSite/
├── index.html                 # Original monolithic file
├── index-refactored.html      # PHP-based version with includes
├── index-new.html             # Template showing where components go
├── components/
│   └── sidebar.html           # Navigation sidebar component
├── sections/
│   ├── about.html             # About me section
│   ├── case-studies.html      # Portfolio case studies
│   ├── tech-stack.html        # Technology skills grid
│   ├── experience.html        # Work experience timeline
│   └── contact.html           # Contact form and information
├── includes/
│   └── head.html              # HTML head with meta tags and styles
├── css/
│   ├── main.css              # Main stylesheet
│   ├── fonts.css             # Font definitions
│   └── components.css        # Component-specific styles
├── js/
│   └── main.js               # JavaScript functionality
└── images/
    └── ...                   # Image assets
```

## Component Breakdown

### 1. **includes/head.html**
Contains all meta tags, stylesheets, and head configuration:
- SEO meta tags
- Open Graph and Twitter meta
- Favicon links
- External scripts (Google Analytics, Clarity)
- CSS imports
- Framer component styles (kept inline for functionality)

### 2. **components/sidebar.html**
The main navigation sidebar containing:
- Profile image and personal info
- Availability status indicator
- Download CV button
- Social media links
- Navigation scroll bar with section links

### 3. **sections/about.html**
About section featuring:
- Personal introduction
- Skills tags/badges
- Professional summary

### 4. **sections/case-studies.html**
Portfolio showcase with:
- Section heading
- Project cards grid
- Links to detailed case studies

### 5. **sections/tech-stack.html**
Technology skills display:
- Tech stack grid layout
- Technology icons and labels
- Programming languages and tools

### 6. **sections/experience.html**
Professional experience timeline:
- Job history cards
- Company logos
- Position titles and dates
- Employment duration

### 7. **sections/contact.html**
Contact information and form:
- Contact heading
- Email address
- Calendar booking link
- Contact form (placeholder)

## Usage Instructions

### For Static HTML Sites:
1. Use `index-template.html` as your base
2. Copy content from each component file into the appropriate sections
3. Copy the full head content from `includes/head.html` into the template head

### For PHP-Enabled Servers:
1. Use `index-refactored.html` directly
2. Ensure your server supports PHP includes
3. All components will be automatically included

### For Build Systems (Webpack, Gulp, etc.):
1. Set up your build process to concatenate the component files
2. Use the individual component files as modules
3. Build process should combine them into a single HTML file

## Benefits of This Structure

- **Maintainability**: Each section can be edited independently
- **Reusability**: Components can be reused across different pages
- **Collaboration**: Multiple developers can work on different sections
- **Organization**: Clear separation of concerns
- **Scalability**: Easy to add new sections or modify existing ones

## File Relationships

```
index-template.html
├── includes/head.html
├── components/sidebar.html
└── sections/
    ├── about.html
    ├── case-studies.html
    ├── tech-stack.html
    ├── experience.html
    └── contact.html
```

## Notes

- All Framer-specific classes and data attributes have been preserved
- Complex CSS has been kept inline where necessary for Framer functionality
- SVG icons and symbols may need to be extracted separately
- The original `index.html` remains unchanged as a backup

## Next Steps

1. Test the refactored version to ensure all functionality works
2. Set up a build process if needed
3. Consider extracting inline styles to separate CSS files
4. Add more detailed content to placeholder sections