# Léni Menage - Modern Web Developer Portfolio

🚀 A stunning, modern, and fully responsive portfolio designed to impress recruiters and showcase web development expertise.

## 📋 Features

### ✨ Design Highlights
- **Modern Dark Theme**: Professional dark mode with vibrant cyan/teal accents
- **Glassmorphism UI**: Frosted glass effect on cards and components
- **Smooth Animations**: Fade-ins, parallax effects, and micro-interactions
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with semantic HTML and proper contrast ratios

### 📱 Sections

#### 1. **Navigation Bar**
- Fixed navigation with smooth scroll behavior
- Mobile-friendly hamburger menu
- Active state indicators
- Auto-hide on small screens

#### 2. **Hero Section**
- Eye-catching headline with gradient text
- Professional profile image with hover effects
- Clear call-to-action buttons
- Scroll indicator animation
- Parallax scrolling effect

#### 3. **About Me**
- Three-card layout explaining your background
- Icon-based visual hierarchy
- Hover animations for engagement

#### 4. **Skills & Expertise**
- Categorized skill groups (Frontend, Tools, Professional)
- Color-coded skill levels (Advanced, Intermediate, Beginner)
- Icon integration with skill names
- Interactive hover effects

#### 5. **Experience & Education Timeline**
- Visual timeline with alternating layout
- Icons for different experience types
- Detailed descriptions
- Responsive stacking on mobile

#### 6. **Featured Projects**
- Rich project cards with hover animations
- Project icons and descriptions
- Technology tags
- Direct links to live projects and code

#### 7. **Contact Section**
- Multiple contact methods (Email, Phone, GitHub, LinkedIn)
- Interactive contact cards
- Clear call-to-action for getting in touch

#### 8. **Footer**
- Social media links
- Copyright information
- Responsive layout

## 🎨 Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| Background Primary | `#0f1725` | Main background |
| Background Secondary | `#1a2332` | Card backgrounds |
| Text Primary | `#ffffff` | Main text |
| Text Secondary | `#b0b8c4` | Secondary text |
| Accent Primary | `#00d9ff` | Primary accent (cyan) |
| Accent Secondary | `#7c3aed` | Secondary accent (purple) |
| Accent Tertiary | `#00f0ff` | Hover accent (bright cyan) |

## 🔤 Typography

- **Headers**: Inter (700 weight) - Modern, clean, professional
- **Body**: Inter (400-600 weight) - Excellent readability
- **Monospace**: JetBrains Mono - Code and technical content

## 🎬 Animations & Interactions

### Page Load Animations
- Fade-in and slide-up effects on sections
- Staggered animations for cards and skill tags
- Smooth opacity transitions

### Hover Effects
- Button elevation and glow
- Card background color changes and shadow depth
- Icon rotation and scaling
- Link underline animations

### Scroll Effects
- Parallax background gradient shift
- Navbar blur and shadow effects on scroll
- Section fade-in on viewport intersection
- Bounce animation on scroll indicator

### Micro-interactions
- Ripple effect on button clicks
- Smooth color transitions on hover
- Transform animations for depth
- Icon bounce effects on contact cards

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - CSS Variables for theming
  - Flexbox & Grid layouts
  - Gradients and Glassmorphism effects
  - Smooth transitions and animations
  - Media queries for responsiveness
- **JavaScript**:
  - Vanilla JS (no framework dependencies)
  - Intersection Observer for scroll animations
  - Event delegation for performance
  - Mobile menu toggle functionality

## 📊 Performance Optimizations

✅ **Lighthouse Optimizations**
- Lazy loading support for images
- Minimal JavaScript (no heavy dependencies)
- Optimized CSS (no unused styles)
- Semantic HTML for better SEO
- Fast animations using transform and opacity

✅ **SEO Friendly**
- Proper meta tags (description, keywords, author)
- Semantic HTML5 structure
- Fast page load times
- Mobile-friendly responsive design
- Open Graph ready (can be extended)

## ♿ Accessibility Features

✅ **WCAG 2.1 Compliance**
- Proper semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Alt text on images
- Keyboard navigation support
- Arrow key navigation for menu items
- Proper color contrast ratios (AACAA)
- Focus visible states on interactive elements
- ARIA labels where appropriate

## 📱 Responsive Breakpoints

```css
Mobile: ≤ 480px
Tablet: 481px - 768px
Desktop: 769px+
Large Desktop: 1200px+
```

## 🚀 Deployment Guide

### Local Testing
1. Open `index.html` in a modern browser
2. Test on different screen sizes using DevTools
3. Check animations and interactions

### GitHub Pages Deployment
1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Your portfolio will be live at `https://yourusername.github.io/repo-name`

### Custom Domain
1. Update CNAME file with your domain
2. Configure DNS settings with your registrar
3. Update GitHub pages settings to use custom domain

## 🔧 Customization Guide

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
  --accent-primary: #yourcolor;
  --accent-secondary: #yourcolor;
  /* ... */
}
```

### Update Content
1. **Navigation**: Edit links in navbar section
2. **Hero Section**: Update headline and description
3. **Skills**: Modify skill tags and categories
4. **Projects**: Update project cards with your work
5. **Contact**: Replace email, phone, and social links

### Add New Sections
1. Create a new `<section>` with unique ID
2. Add corresponding CSS styling
3. Add navigation link pointing to section ID
4. Follow existing animation patterns

### Modify Animations
Adjust timing and effects:
```css
--transition-fast: 0.2s ease-in-out;  /* Fastest */
--transition-normal: 0.3s ease-in-out; /* Preferred */
--transition-slow: 0.5s ease-in-out;   /* Slowest */
```

## 📄 File Structure

```
portfolio/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Comprehensive CSS with animations
├── script.js           # JavaScript for interactions
├── photodemoi2.JPG     # Profile photo
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## 🔐 SEO Checklist

- ✅ Meta tags (description, keywords, author)
- ✅ Semantic HTML structure
- ✅ Mobile responsive design
- ✅ Fast page load times
- ✅ Accessible navigation
- ✅ Open Graph tags ready (add as needed)
- ⭐ Consider adding: Structured data (JSON-LD)
- ⭐ Consider adding: Sitemap and robots.txt

## 🎯 Next Steps to Enhance

1. **Add Project Galleries**: Light gallery or image carousel
2. **Blog Section**: Share your learning journey
3. **Dark/Light Mode Toggle**: Theme switcher
4. **Testimonials**: Social proof from colleagues
5. **Newsletter Signup**: Stay connected with visitors
6. **Analytics**: Google Analytics integration
7. **Contact Form**: Backend integration for messages
8. **PDF Resume**: Direct download option
9. **Resume Timeline**: Interactive resume timeline
10. **Skills Visualization**: Progress bars or charts

## 📞 Contact Information

- **Email**: leni.menage@outlook.fr
- **Phone**: +33 6 16 58 58 06
- **GitHub**: [Your GitHub URL]
- **LinkedIn**: [Your LinkedIn URL]

## 📝 License

This portfolio is fully customizable and ready for your personal use. Feel free to modify and deploy!

---

**Built with ❤️ | Modern, Fast, Responsive**

Created: 2025 | Last Updated: March 2025