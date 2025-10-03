# Bharat Agro Oil - Next.js Application

This is a Next.js conversion of the original HTML website for Bharat Agro Oil, maintaining the exact same UI and functionality.

## Features

- **Exact UI Match**: Preserves all original styling, layout, and visual elements
- **Responsive Design**: Maintains all responsive breakpoints and mobile optimizations
- **Modern Framework**: Built with Next.js 14, TypeScript, and React
- **SEO Optimized**: Proper meta tags, structured data, and performance optimizations
- **Fast Loading**: Optimized images and assets for better performance

## Pages

- **Home** (`/`) - Main landing page with hero section, about, services, and contact
- **About** (`/about`) - Company information, mission, vision, and team
- **Products** (`/products`) - Product catalog with filtering and search
- **Services** (`/services`) - Service offerings and manufacturing process
- **Recipes** (`/recipes`) - Healthy recipes and cooking tips
- **Contact** (`/contact`) - Contact form and company information

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS (preserving original styles)
- **UI Components**: React components
- **Assets**: All original assets preserved in `/public/assets/`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with global styles
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── products/page.tsx   # Products page
│   ├── services/page.tsx   # Services page
│   ├── recipes/page.tsx    # Recipes page
│   ├── contact/page.tsx    # Contact page
│   └── api/contact/route.ts # Contact form API
├── components/
│   ├── Header.tsx          # Header component
│   └── Footer.tsx          # Footer component
└── globals.css             # Global styles

public/
└── assets/                 # All original assets (CSS, JS, images, fonts)
```

## Key Features Preserved

- **Exact Visual Match**: All original styling, colors, fonts, and layouts
- **Interactive Elements**: All JavaScript functionality preserved
- **Responsive Design**: Mobile and tablet optimizations maintained
- **SEO Elements**: Meta tags, structured data, and performance optimizations
- **Contact Forms**: Functional contact forms with API endpoints
- **Image Optimization**: Next.js Image component for better performance

## Assets Migration

All original assets have been preserved in the `/public/assets/` directory:
- CSS files (Bootstrap, custom styles, vendor styles)
- JavaScript files (jQuery, plugins, custom scripts)
- Images (logos, product images, backgrounds)
- Fonts (FontAwesome, custom fonts)

## Performance Optimizations

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered pages for better performance
- **Asset Optimization**: Optimized loading of CSS and JS files

## Deployment

The application can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Original HTML Features Preserved

- ✅ Hero slider with multiple backgrounds
- ✅ About section with tabs and animations
- ✅ Product gallery with filtering
- ✅ Service sections with icons and descriptions
- ✅ Testimonials slider
- ✅ Contact forms with validation
- ✅ Footer with newsletter signup
- ✅ Social media links
- ✅ Responsive navigation
- ✅ All animations and transitions
- ✅ Partner logos section
- ✅ Blog/recipes section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

The application uses modern React patterns and Next.js best practices:
- Server-side rendering for better SEO
- Client-side routing for smooth navigation
- Component-based architecture
- TypeScript for type safety
- Responsive design principles

## Contact

For any questions about this conversion or the original website, please contact the development team.