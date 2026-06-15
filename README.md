# GameSphere – Gaming Hub Website

## 📋 Project Overview
GameSphere is a modern, responsive, dark‑themed website built for gaming enthusiasts. It showcases the latest gaming news, featured titles, and community links, all wrapped in a clean, accessible design that works flawlessly on any device.

### Key Features
- **Mobile‑first responsive layout** using CSS Grid & Flexbox.
- **Dark mode as the default theme**, with a lightweight light‑mode toggle (uses CSS custom properties).
- **Smooth CSS animations** (fade‑in on scroll, button hovers, card lifts).
- **Semantic HTML5** structure for SEO and accessibility.
- **Pure vanilla JavaScript** (no external libraries) for:
  - Mobile navigation drawer
  - Theme switching with persistence (`localStorage`)
  - Scroll‑into‑view fade animations (IntersectionObserver)
- **ARIA attributes** and focus outlines for keyboard navigation.
- Fully self‑contained – all assets are loaded via external image URLs, no build step required.

## 🗂 Project Structure
```
/ (root)
│
├─ index.html      – Main page markup
├─ styles.css      – All styling, dark theme defaults, custom properties
├─ script.js       – Interaction logic (menu, theme, scroll animations)
└─ README.md       – This documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- No server is required – the site runs directly from the file system.

### Installation
1. **Clone / download** the repository.
   ```bash
   git clone https://github.com/yourusername/gamesphere.git
   ```
2. Open `index.html` in your browser:
   - Double‑click the file, or
   - Serve locally with a simple HTTP server (optional):
     ```bash
     # Python 3
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## 🎨 Customisation

### Changing Theme Colours
All colours are stored as CSS custom properties at the top of `styles.css`.  
Example:
```css
:root {
    --color-primary: #58a6ff;   /* Accent colour */
    --color-background: #0d1117; /* Dark background */
}
```
Modify these values to match your brand.

### Adding New News or Game Cards
- Duplicate an existing `<article class="news-card">` or `<article class="game-card">` element inside the corresponding section.
- Replace the placeholder image URL (`https://source.unsplash.com/...`) with your own.
- Update titles, descriptions, and links as needed.

## 🛠️ Development Notes

### Accessibility
- Interactive elements have `aria-label` and `aria-controls`.
- Focus outlines are preserved for keyboard users.
- Colour contrast follows WCAG AA standards for dark mode.

### Performance
- Images are loaded from Unsplash with size‑appropriate URLs.
- CSS `prefers-color-scheme` is respected on first load.
- IntersectionObserver only observes sections once to keep the script lightweight.

## 📄 License
This project is released under the **MIT License** – feel free to use, modify, and distribute it for personal or commercial projects.

---

*Happy gaming! 🎮*