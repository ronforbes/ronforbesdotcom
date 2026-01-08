# CLAUDE.md

This file provides guidance to Claude Code (or any AI assistant) when working with this codebase.

## Project Overview

RonForbes.com is a personal website and blog built with modern web technologies. It was migrated from Notion + Super.so to a fully custom Next.js + MDX solution for greater control and performance.

**Live Site:** https://ronforbes.com

## Tech Stack

- **Framework:** Next.js 15 with App Router and TypeScript
- **Styling:** Tailwind CSS with Shadcn UI components
- **Content:** MDX (Markdown with JSX) using `next-mdx-remote`
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4

## Project Structure

```
ronforbes.com/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Landing page (/)
│   ├── blog/               # Blog listing and individual posts
│   │   ├── page.tsx        # /blog
│   │   ├── [slug]/         # /blog/[slug] - individual posts
│   │   └── category/[category]/ # /blog/category/[category]
│   ├── videos/             # Video listing and individual videos
│   ├── about/              # About page
│   ├── tech/               # Tech stack page
│   ├── resume/             # Resume page
│   ├── projects/           # Projects showcase
│   ├── robots.ts           # SEO robots.txt generator
│   └── sitemap.ts          # Dynamic sitemap generator
├── components/             # React components
│   ├── ui/                 # Shadcn UI components (Button, Card)
│   ├── layout/             # Header, Footer, Navigation
│   ├── home/               # Hero, FeaturedContent, CategoryGrid
│   └── NewsletterForm.tsx  # Substack newsletter integration
├── content/                # MDX content files
│   ├── blog/               # Blog post .mdx files
│   └── videos/             # Video post .mdx files
├── lib/                    # Utility functions and configuration
│   ├── constants.ts        # Site config, nav links, blog categories
│   ├── types.ts            # TypeScript interfaces
│   ├── posts.ts            # Content management (getAllBlogPosts, etc.)
│   ├── utils.ts            # Helper functions (cn for classnames)
│   └── analytics.tsx       # Google Analytics component
├── public/                 # Static assets
│   └── images/             # Blog and site images
└── styles/
    └── globals.css         # Tailwind directives + CSS variables
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Build & Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## Creating Content

### Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
date: "2024-01-15"
category: "career"
featured: true
image: "/images/blog/post-image.jpg"
---

Your markdown content here...
```

**Available Categories:**
- `career` - Career development
- `ai` - Artificial intelligence
- `health` - Health and wellness
- `vr` - Virtual reality
- `personal-finance` - Personal finance
- `happiness` - Life and happiness

### Video Posts

Create a new `.mdx` file in `content/videos/`:

```mdx
---
title: "Video Title"
description: "Video description"
date: "2024-01-15"
category: "ai"
videoId: "YouTube-Video-ID"
featured: true
---

Video notes and description...
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `lib/constants.ts` | Site name, URL, navigation links, blog categories |
| `lib/posts.ts` | Content reading/parsing functions |
| `lib/types.ts` | TypeScript interfaces for BlogPost, VideoPost |
| `app/layout.tsx` | Root layout with metadata, Header, Footer |
| `styles/globals.css` | CSS variables for theming (Shadcn style) |
| `tailwind.config.ts` | Tailwind configuration with custom colors |
| `next.config.ts` | Next.js config with MDX plugins |

## Architecture Notes

### Content Management

- Content is stored as MDX files in `content/blog/` and `content/videos/`
- Frontmatter is parsed with `gray-matter`
- MDX is rendered with `next-mdx-remote/rsc` for server-side rendering
- Posts are statically generated at build time using `generateStaticParams()`

### MDX Configuration

The MDX pipeline uses these plugins:
- **remark-gfm**: GitHub Flavored Markdown (tables, strikethrough, etc.)
- **rehype-slug**: Adds IDs to headings
- **rehype-pretty-code**: Syntax highlighting with "github-dark" theme
- **rehype-autolink-headings**: Adds anchor links to headings

### Styling System

- Uses Shadcn UI's CSS variable approach for theming
- Colors defined as HSL values in `globals.css`
- Dark mode configured but currently using light mode
- Typography plugin for prose styling in blog posts

### Path Aliases

TypeScript path aliases are configured:
- `@/components/*` → `./components/*`
- `@/lib/*` → `./lib/*`

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment

The site deploys to Vercel automatically on push to main. Configuration is in `vercel.json`.

## Common Tasks

### Add a New Page

1. Create a new directory under `app/` with a `page.tsx`
2. Export metadata for SEO
3. Add to `NAV_LINKS` in `lib/constants.ts` if needed

### Add a New Blog Category

1. Add to `BLOG_CATEGORIES` array in `lib/constants.ts`
2. The slug becomes the URL path: `/blog/category/[slug]`

### Modify Navigation

Edit the `NAV_LINKS` array in `lib/constants.ts`

### Add UI Components

This project uses Shadcn UI. To add new components:
```bash
npx shadcn@latest add [component-name]
```

## Troubleshooting

### Build Errors
```bash
rm -rf .next
rm -rf node_modules && npm install
```

### Images Not Loading
- Ensure images are in `public/images/`
- Reference with paths starting with `/images/`

### MDX Syntax Errors
- Check frontmatter YAML syntax (quotes, colons)
- Ensure JSX expressions are properly closed
