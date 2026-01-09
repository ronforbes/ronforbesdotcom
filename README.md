# RonForbes.com

A modern personal website built with Next.js, Tailwind CSS, Shadcn UI, and MDX. Designed to be easily forked and customized for your own personal brand.

## 🚀 Quick Start (For Forking)

```bash
# 1. Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/your-site.git
cd your-site

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open http://localhost:3000 and start customizing!
```

**First things to change:**
1. Edit `lib/constants.ts` for site identity and categories
2. Replace content in `content/blog/` and `content/videos/`
3. Update `app/about/page.tsx` with your bio
4. Replace `public/HeadshotCircle128x128.png` with your photo

---

## ✨ Features

- ✅ **Next.js 15** with App Router and TypeScript
- ✅ **Tailwind CSS** for styling with Shadcn UI components
- ✅ **MDX** for rich, interactive blog content
- ✅ **Blog & Videos** with category filtering
- ✅ **SEO Optimized** with metadata, sitemap, and robots.txt
- ✅ **Google Analytics** integration
- ✅ **Substack Newsletter** integration
- ✅ **Fully Responsive** mobile-first design
- ✅ **Fast Performance** with static generation
- ✅ **Vercel Ready** for deployment

## 📁 Project Structure

```
ronforbes.com/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout with navigation
│   ├── page.tsx                # Landing page
│   ├── about/                  # About page
│   ├── blog/                   # Blog pages and routes
│   ├── projects/               # Projects showcase
│   ├── tech/                   # Tech stack page
│   ├── videos/                 # Video pages and routes
│   ├── robots.ts               # SEO robots.txt
│   └── sitemap.ts              # Dynamic sitemap
├── components/                 # React components
│   ├── NewsletterForm.tsx      # Newsletter signup component
│   ├── home/                   # Landing page components
│   │   ├── CategoryGrid.tsx
│   │   ├── FeaturedContent.tsx
│   │   └── Hero.tsx
│   ├── layout/                 # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Navigation.tsx
│   └── ui/                     # Shadcn UI components
│       ├── button.tsx
│       └── card.tsx
├── content/                    # MDX content
│   ├── blog/                   # Blog post MDX files
│   └── videos/                 # Video post MDX files
├── lib/                        # Utility functions
│   ├── constants.ts            # Site configuration
│   ├── types.ts                # TypeScript types
│   ├── posts.ts                # Content management
│   ├── utils.ts                # Helper functions
│   └── analytics.tsx           # Google Analytics
├── public/                     # Static assets
│   ├── HeadshotCircle128x128.png
│   └── images/
├── styles/                     # Global styles
│   └── globals.css
├── mdx-components.tsx          # Custom MDX components
├── components.json             # Shadcn UI configuration
├── next.config.ts              # Next.js configuration
├── vercel.json                 # Vercel deployment settings
├── tailwind.config.ts          # Tailwind CSS configuration
└── CLAUDE.md                   # AI development context
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17+ (required for Next.js 15)
- npm 9+ recommended

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ronforbes.com.git
   cd ronforbes.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your:
   - Google Analytics ID (`NEXT_PUBLIC_GA_ID`)
   - Site URL (`NEXT_PUBLIC_SITE_URL`)

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎯 Making It Your Own

This template is designed to be easily customized. Follow these steps to make it yours:

### Step 1: Update Site Identity

Edit `lib/constants.ts` to change your site's core settings:

```typescript
export const SITE_NAME = "Your Name";
export const SITE_DESCRIPTION = "Your site description for SEO";
export const SITE_URL = "https://yoursite.com";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  // Add or remove links as needed
] as const;
```

### Step 2: Replace Personal Content

1. **Blog posts:** Delete existing files in `content/blog/` and add your own
2. **Videos:** Delete existing files in `content/videos/` and add your own
3. **Profile photo:** Replace `public/HeadshotCircle128x128.png` with your image
4. **About page:** Update `app/about/page.tsx` with your bio
5. **Tech/Tools page:** Update `app/tech/page.tsx` with your preferred tools
6. **Projects page:** Update `app/projects/page.tsx` with your projects

### Step 3: Configure Categories

Edit `BLOG_CATEGORIES` in `lib/constants.ts` to match your content focus:

```typescript
export const BLOG_CATEGORIES = [
  { slug: "tech", name: "Technology", description: "Tech insights and tutorials" },
  { slug: "life", name: "Life", description: "Personal stories and reflections" },
  // Add your own categories
] as const;
```

### Step 4: Update Footer & Social Links

Edit `components/layout/Footer.tsx` to update:
- Your tagline/description
- Twitter/X handle
- LinkedIn profile
- Newsletter link
- Any other social links

---

## 📝 Creating Content

### Blog Posts

Create a new MDX file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO"
date: "2024-01-15"
category: "career"
featured: true
image: "/images/blog/post-image.jpg"
---

Your content here using Markdown syntax...
```

**Blog Frontmatter Fields:**
| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Post title displayed on the page |
| `description` | ✅ | SEO description and preview text |
| `date` | ✅ | Publication date in `YYYY-MM-DD` format |
| `category` | ✅ | Must match a slug in `BLOG_CATEGORIES` |
| `featured` | ❌ | Set to `true` to show on homepage |
| `image` | ❌ | Path to header image (e.g., `/images/blog/image.jpg`) |

**Available Categories:**
- `career` - Career development
- `ai` - AI tools and workflows
- `productivity` - Tips and tools for efficiency
- `health` - Health and wellness
- `vr` - Spatial Computing (Meta Quest)
- `personal-finance` - Personal finance
- `happiness` - Life satisfaction
- `pkm` - Personal Knowledge Management

### Videos

Create a new MDX file in `content/videos/`:

```mdx
---
title: "Video Title"
description: "Video description for SEO"
date: "2024-01-15"
category: "ai"
videoId: "dQw4w9WgXcQ"
featured: true
thumbnail: "/images/videos/custom-thumbnail.jpg"
---

Video notes and description...
```

**Video Frontmatter Fields:**
| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Video title |
| `description` | ✅ | SEO description and preview text |
| `date` | ✅ | Publication date in `YYYY-MM-DD` format |
| `category` | ✅ | Must match a slug in `BLOG_CATEGORIES` |
| `videoId` | ✅ | YouTube video ID (from URL: `youtube.com/watch?v=VIDEO_ID`) |
| `featured` | ❌ | Set to `true` to show on homepage |
| `thumbnail` | ❌ | Path to custom thumbnail image |

---

## 🏗️ Architecture Overview

### MDX Content Pipeline

The site uses a file-based content system:

1. **Content Storage:** MDX files in `content/blog/` and `content/videos/`
2. **Frontmatter Parsing:** `gray-matter` extracts metadata from MDX files
3. **Content Functions:** `lib/posts.ts` provides functions like:
   - `getAllBlogPosts()` - Fetch all blog posts
   - `getBlogPostBySlug(slug)` - Fetch a single post
   - `getFeaturedBlogPosts(limit)` - Fetch featured posts
   - `getBlogPostsByCategory(category)` - Filter by category
4. **Static Generation:** `generateStaticParams` pre-renders all pages at build time

### Custom MDX Components

The `mdx-components.tsx` file customizes how MDX content is rendered:

```typescript
// Current: Automatic image optimization
img: (props) => (
  <Image
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
    {...(props as ImageProps)}
  />
)
```

**Adding Custom Components:**

You can add callouts, code blocks, or any custom component:

```typescript
// In mdx-components.tsx
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom callout component
    Callout: ({ children, type = "info" }) => (
      <div className={`callout callout-${type}`}>{children}</div>
    ),
    // ... other components
    ...components,
  };
}
```

Then use in your MDX files:
```mdx
<Callout type="warning">
  This is an important note!
</Callout>
```

---

## 🔧 Configuration

### Site Settings

Edit `lib/constants.ts` to update:
- Site name and description
- Navigation links
- Blog categories

### Styling

- **Colors:** Edit CSS variables in `styles/globals.css`
- **Theme:** Modify Tailwind config in `tailwind.config.ts`
- **Components:** Customize Shadcn components in `components/ui/`

**Changing the Color Scheme:**

Edit the CSS variables in `styles/globals.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* Modify these values to change your color scheme */
}
```

### Analytics

Add your Google Analytics ID to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Adding Shadcn UI Components

Add new components using the CLI:
```bash
npx shadcn-ui@latest add [component-name]

# Examples:
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add avatar
```

---

## 📚 Common Customizations

### Adding a New Page Type

Example: Adding a podcast page

1. Create the content directory: `content/podcasts/`
2. Add type definition in `lib/types.ts`:
   ```typescript
   export interface PodcastEpisode {
     slug: string;
     title: string;
     description: string;
     date: string;
     audioUrl: string;
     // ...
   }
   ```
3. Add content functions in `lib/posts.ts`
4. Create pages in `app/podcasts/`

### Adding New Navigation Links

Edit `lib/constants.ts`:
```typescript
export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/podcasts", label: "Podcasts" }, // New link
] as const;
```

### Development Workflow

- **Hot reload:** MDX files hot-reload automatically during development
- **TypeScript:** Full type checking with `npm run lint`
- **Build:** Run `npm run build` to ensure everything compiles

---

## 📤 Deploying to Vercel

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Configure custom domain:**
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔄 Migrating from Notion

See [NOTION_MIGRATION_GUIDE.md](NOTION_MIGRATION_GUIDE.md) for detailed instructions on migrating content from Notion to MDX.

---

## 📚 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Content:** [MDX](https://mdxjs.com/) with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Deployment:** [Vercel](https://vercel.com/)
- **Analytics:** Google Analytics 4

---

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear the cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check MDX syntax in your content files

### Images Not Loading

Ensure images are:
- Placed in `public/images/`
- Referenced with paths starting with `/images/`

### Categories Not Working

Verify your category slugs in MDX frontmatter match those defined in `lib/constants.ts`.

### Hot Reload Not Working

If MDX changes aren't reflecting:
1. Save the file again
2. Try restarting the dev server: `npm run dev`

---

## 📄 License

MIT License - feel free to use this for your own personal website!

## 🙏 Acknowledgments

- Design inspiration from [Ali Abdaal](https://aliabdaal.com)
- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn](https://ui.shadcn.com/)

---

**Questions or issues?** Open an issue on GitHub or reach out on [Twitter](https://twitter.com/ronforbes).
