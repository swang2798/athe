# everydayathe Cafe Website

A beautiful, modern website for everydayathe Cafe built with React, featuring a responsive design, smooth animations, and an intuitive user experience.

## Features

- **React-based**: Built with React 18 for a modern, component-based architecture
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, elegant design with a warm color scheme perfect for a cafe
- **Interactive Menu**: Tabbed menu system for easy navigation between Coffee, Tea, Food, and Desserts
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Contact Form**: Functional contact form for customer inquiries
- **Mobile Menu**: Hamburger menu for mobile devices
- **Gallery Section**: Placeholder gallery ready for your cafe photos
- **Image Placeholders**: All images replaced with simple placeholder elements

## File Structure

```
everydayathe/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── About.jsx       # About section
│   │   ├── Menu.jsx        # Menu section with tabs
│   │   ├── Gallery.jsx     # Gallery section
│   │   ├── Contact.jsx     # Contact section with form
│   │   └── Footer.jsx      # Footer component
│   ├── App.jsx             # Main App component
│   ├── index.js            # React entry point
│   └── styles.css          # All styling and responsive design
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Colors
Edit the CSS variables in `src/styles.css` to match your brand:
```css
:root {
    --primary-color: #8B4513;    /* Main brand color */
    --secondary-color: #D4A574;  /* Accent color */
    --accent-color: #F5E6D3;     /* Light accent */
}
```

### Content
- Update menu items and prices in `src/components/Menu.jsx`
- Replace placeholder elements in the gallery section (`src/components/Gallery.jsx`)
- Update contact information in `src/components/Contact.jsx`
- Modify the About section in `src/components/About.jsx`

### Images
All images have been replaced with placeholder elements. To add actual images:
- Gallery section: Replace the placeholder divs in `Gallery.jsx` with `<img>` tags
- About section: Replace the placeholder in `About.jsx` with an actual image
- Menu items: Replace the placeholder emojis in `Menu.jsx` with images if desired

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Technologies Used

- React 18
- React DOM
- CSS3 (with CSS Variables)
- Google Fonts (Playfair Display, Inter)

## Future Enhancements

Consider adding:
- Image gallery with lightbox functionality
- Online ordering system
- Reservation booking system
- Blog section
- Social media feed integration
- Google Maps integration for location
- State management (Redux/Context API) for larger features

## License

This website template is free to use and modify for your cafe.
