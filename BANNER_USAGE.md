# Page Banner Component Usage Guide

## Overview
The `PageBanner` component provides a consistent banner implementation across all pages (except the home page) with the same UI and size, but allows for different background images.

## Component Location
- **Component**: `src/components/PageBanner.tsx`
- **Configuration**: `src/config/bannerImages.ts`

## Usage

### Basic Usage
```tsx
import PageBanner from '@/components/PageBanner'

<PageBanner 
  backgroundImage="https://example.com/image.jpg"
  title="Page Title"
  subtitle="Page subtitle or description"
/>
```

### Using Pre-configured Images
```tsx
import PageBanner from '@/components/PageBanner'
import { getBannerImage } from '@/config/bannerImages'

<PageBanner 
  backgroundImage={getBannerImage('products')}
  title="Our Products"
  subtitle="Premium quality edible oils"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `backgroundImage` | string | required | URL of the background image |
| `title` | string | optional | Main title displayed on the banner |
| `subtitle` | string | optional | Subtitle displayed below the title |
| `showBrandCard` | boolean | true | Whether to show the brand logo and text |
| `height` | string | '600px' | Height of the banner section |

## Pre-configured Images

The following images are available in `src/config/bannerImages.ts`:

- `default` - Default banner image
- `about` - About page banner
- `contact` - Contact page banner  
- `products` - Products page banner
- `services` - Services page banner
- `recipes` - Recipes page banner
- `manufacturing` - Manufacturing facility image
- `quality` - Quality control image
- `traditional` - Traditional process image

## Adding New Images

To add new banner images:

1. Add the image URL to `src/config/bannerImages.ts`:
```typescript
export const bannerImages = {
  // ... existing images
  newPage: "https://example.com/new-image.jpg"
}
```

2. Use it in your page:
```tsx
<PageBanner 
  backgroundImage={getBannerImage('newPage')}
  title="New Page"
  subtitle="Description"
/>
```

## Current Implementation

All pages except the home page now use the `PageBanner` component:

- **About Page**: Uses `about` image with "About Us" title
- **Contact Page**: Uses `contact` image with "Contact Us" title  
- **Products Page**: Uses `products` image with "Our Premium Products" title
- **Services Page**: Uses `services` image with "Our Services" title
- **Recipes Page**: Uses `recipes` image with "Healthy Recipes" title

## Benefits

1. **Consistency**: All banners have the same UI, size, and styling
2. **Maintainability**: Easy to update banner styling in one place
3. **Flexibility**: Easy to change images for different pages
4. **Reusability**: Can be used for new pages with minimal code
5. **Type Safety**: TypeScript support for all props and configurations

## Home Page Exception

The home page maintains its custom hero slider implementation and is not affected by this banner system.
