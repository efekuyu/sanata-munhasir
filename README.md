# Atölye Sanata Münhasır

Modern, ultra-minimal, high-performance website for a traditional Turkish marbling (Ebru) art studio based in Konya, Turkey.

## Features

- **Multi-language support** (Turkish/English) with next-intl
- **8 complete pages**: Home, About, Gallery, Courses, Enrollment, Shop, Blog, Contact
- **Premium design**: Minimal, elegant, artistic aesthetic inspired by traditional Ebru
- **Fully responsive**: Mobile-first design with Tailwind CSS
- **Performance optimized**: Next.js App Router, lazy loading, optimized rendering
- **Form validation**: Client-side validation for enrollment and contact forms
- **Clean architecture**: Reusable components, centralized content management

## Tech Stack

- **Framework**: Next.js (latest) with App Router
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Fonts**: Playfair Display (headings), Inter (body)
- **TypeScript**: Full type safety

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── layout.tsx     # Locale-specific layout with Navbar/Footer
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   ├── gallery/       # Gallery page with filtering
│   │   ├── courses/       # Courses listing
│   │   ├── enrollment/    # Registration form
│   │   ├── shop/          # Product catalog
│   │   ├── blog/          # Blog posts
│   │   └── contact/       # Contact form
│   ├── globals.css        # Global styles and custom CSS
│   └── layout.tsx         # Root layout with metadata
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Main navigation
│   │   └── Footer.tsx     # Footer with map and social links
│   └── ui/                # Reusable UI components
│       ├── Container.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       └── LanguageSwitcher.tsx
├── data/                  # Content data layers
│   ├── types.ts
│   ├── gallery.ts
│   ├── blog.ts
│   └── shop.ts
├── i18n/                  # Internationalization config
│   ├── request.ts
│   └── routing.ts
└── middleware.ts          # Locale routing middleware
messages/
├── tr.json                # Turkish translations
└── en.json                # English translations
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

- Default language: Turkish (`/tr`)
- Switch to English: `/en`

### Build

```bash
npm run build
npm start
```

## Design System

### Colors

- **Background**: `#fefdfb` (warm cream white)
- **Foreground**: `#1a1614` (dark brown)
- **Accent**: `#c45a2c` (burnt orange)
- **Cream**: `#f8f6f3`
- **Grey**: `#6b6560`

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Custom CSS Classes

- `.ebru-gradient`: Subtle gradient background
- `.ebru-texture`: Organic texture overlay effect

## Pages Overview

1. **Home** (`/`): Hero section, featured works, course options
2. **About** (`/about`): Instructor bio, studio story, philosophy
3. **Courses** (`/courses`): In-person, online private, and group lessons
4. **Gallery** (`/gallery`): Artwork showcase with category filtering
5. **Enrollment** (`/enrollment`): Registration form with validation
6. **Shop** (`/shop`): Art prints and supplies catalog
7. **Blog** (`/blog`): Articles on Ebru techniques, history, and stories
8. **Contact** (`/contact`): Contact form, info, and embedded map

## Content Management

All content is managed through:

- **Translation files**: `messages/tr.json` and `messages/en.json`
- **Data modules**: `src/data/*.ts` for structured content (gallery, blog, shop)

To update content, edit the relevant JSON or TypeScript files.

## Contact Information (Placeholder)

- **Address**: Mevlâna Mah. Selçuklu/Konya
- **Email**: info@sanatamunhasir.com
- **Phone**: +90 532 000 00 00
- **Instagram**: @sanatamunhasir
- **WhatsApp**: Available via footer link

## Future Enhancements

- Add CMS integration (Sanity, Contentful, etc.)
- Implement actual form submission (API routes or third-party service)
- Add real artwork images
- E-commerce functionality for shop
- Blog detail pages with dynamic routing
- Analytics integration

## License

Private project for Atölye Sanata Münhasır.

---

Built with passion for traditional Turkish art. 🎨
