# Julian Bartosz - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development expertise. Built with vanilla HTML, CSS, and JavaScript, featuring smooth animations, mobile-first design, and professional presentation of projects and experience.

## 🌟 Live Demo

Visit the live portfolio at: [julianbartosz.github.io/CVSite/](https://julianbartosz.github.io/CVSite/)

## 📁 Project Structure

```
CVSite/
├── index.html                  # Main portfolio page
├── css/
│   ├── reset.css              # CSS reset styles
│   ├── variables.css          # CSS custom properties and design tokens
│   ├── fonts.css              # Font declarations (@font-face rules)
│   └── components.css         # Component styles and responsive design
├── js/
│   └── main.js                # Interactive functionality and animations
├── images/                    # Profile photos, project images, and assets
│   ├── DSC09920.png          # Profile image
│   ├── favicon.ico           # Site favicon
│   └── ...                   # Additional image assets
├── root/                      # Alternative version/backup files
│   ├── index.html
│   ├── css/
│   └── js/
├── copilot_docs/             # Project documentation
├── memory-bank/              # Project context and planning files
└── README.md                 # This file
```

## 🚀 Features

### Design & User Experience
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional design with consistent typography
- **Smooth Animations** - GSAP-powered animations and scroll effects
- **Mobile-First Approach** - Optimized mobile experience with dedicated mobile navigation
- **Accessibility** - WCAG compliant with proper focus states and keyboard navigation

### Technical Features
- **Vanilla JavaScript** - No framework dependencies, lightweight and fast
- **CSS Grid & Flexbox** - Modern layout techniques for responsive design
- **Custom CSS Properties** - Maintainable design system with CSS variables
- **Progressive Enhancement** - Works without JavaScript, enhanced with JS
- **Performance Optimized** - Fast loading with optimized assets and code

### Portfolio Sections
- **About** - Professional introduction and skill overview
- **Projects** - Case studies with metrics and detailed descriptions
- **Tech Stack** - Visual display of technologies and tools
- **Experience** - Professional work history and education
- **Publications** - Research papers and articles
- **Recommendations** - Client testimonials
- **Contact** - Direct contact form and information

## 🛠️ Technology Stack

**Frontend:**
- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- GSAP (Animation library)

**Design:**
- Inter font family
- Custom SVG icons
- Responsive breakpoints
- CSS variables for theming

**Performance:**
- Optimized CSS with efficient selectors
- Debounced scroll events
- Smooth animations with `transform` properties
- Semantic HTML for better SEO

## 🎨 Design System

The project uses a comprehensive design system defined in `css/variables.css`:

```css
:root {
  /* Primary brand color */
  --color-primary: rgb(255, 105, 40);
  
  /* Typography scale */
  --font-family-primary: 'Inter', sans-serif;
  --font-size-base: 16px;
  --font-weight-semibold: 600;
  
  /* Spacing system */
  --space-md: 16px;
  --space-lg: 24px;
  
  /* Border radius */
  --radius-md: 19px;
  --radius-xl: 34px;
  
  /* Layout */
  --sidebar-width: 280px;
}
```

## 📱 Responsive Behavior

### Desktop (>1023px)
- Fixed sidebar with profile and navigation
- Main content area with floating navigation
- Hover effects and smooth animations
- Full-width case study layouts

### Mobile (≤1023px)
- Collapsible mobile menu with hamburger button
- Fixed mobile profile section at top
- Touch-optimized navigation
- Stacked layout for better readability
- Project-focused mobile menu

## 🔧 Key Components

### Mobile Profile Section
Fixed header on mobile with profile image, name, status, and action buttons.

### Floating Navigation
Contextual navigation that highlights active sections during scroll.

### Case Studies
Interactive project cards with metrics, descriptions, and hover effects.

### Tech Stack Grid
Visual grid of technologies with logos and hover states.

### Contact Form
Functional contact form with validation and email copy feature.

## 📈 Performance Features

- **Efficient CSS** - Organized into logical files with minimal redundancy
- **Optimized Images** - Proper image formats and lazy loading
- **Smooth Scrolling** - Hardware-accelerated scroll animations
- **Touch Optimization** - Proper touch targets and mobile interactions
- **SEO Ready** - Semantic HTML, meta tags, and proper heading structure

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Optional: Local development server for best experience

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/julianbartosz/CVSite.git
   cd CVSite
   ```

2. **Open locally:**
   - **Simple**: Open `index.html` directly in your browser
   - **With server** (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using VS Code Live Server
     # Install Live Server extension and right-click index.html
     ```

3. **View the site:**
   Navigate to `http://localhost:8000` (or the port shown by your server)

## 🎯 Customization Guide

### Personal Information
1. **Profile Details** (Lines 44-50 in `index.html`):
   - Update profile image path
   - Change name, title, and location
   - Modify availability status

2. **Contact Information**:
   - Update email address throughout the file
   - Change social media links in sidebar and mobile sections
   - Update contact form handling

### Content Sections
1. **About Section** (Lines 244-276):
   - Modify the main description
   - Update technology tags
   - Change professional summary

2. **Projects** (Lines 284-356):
   - Replace project titles and descriptions
   - Update metrics and performance indicators
   - Add project images and links

3. **Experience** (Lines 494-530):
   - Update work history
   - Change company names and positions
   - Modify date ranges

### Styling & Branding
1. **Colors** (`css/variables.css`):
   ```css
   --color-primary: rgb(255, 105, 40); /* Your brand color */
   ```

2. **Typography**:
   - Modify font choices in `css/fonts.css`
   - Adjust font sizes in `css/variables.css`

3. **Layout**:
   - Customize spacing and sizing variables
   - Modify component styles in `css/components.css`

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Site will be available at `https://yourusername.github.io/CVSite`

### Netlify
1. Connect GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel
1. Import GitHub repository
2. Automatic deployments and previews
3. Excellent performance optimization

## 📊 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📝 Content Guidelines

### Writing
- Keep descriptions concise and impactful
- Use action verbs in experience descriptions
- Quantify achievements where possible
- Maintain consistent tone throughout

### Images
- Use high-quality images (at least 1200px wide for projects)
- Maintain consistent aspect ratios
- Optimize for web (WebP format recommended)
- Include descriptive alt text

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ About Julian Bartosz

Full-Stack Software Engineer with 2+ years of experience building end-to-end web applications. Specializes in modern JavaScript frameworks, backend API development, and user experience design.

**Connect:**
- 🌐 [Portfolio](https://julianbartosz.github.io/CVSite/)
- 💼 [LinkedIn](https://linkedin.com/in/julianbartosz)
- 🐙 [GitHub](https://github.com/julianbartosz)
- 📧 [Email](mailto:bartoszjul@gmail.com)

---

**Built with ❤️ using vanilla web technologies**