# RonForbes.com

A modern personal website built with Next.js, Tailwind CSS, Shadcn UI, and MDX.

## 🚀 Features

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
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Landing page
│   ├── blog/              # Blog pages and routes
│   ├── videos/            # Video pages and routes
│   ├── about/             # About page
│   ├── tech/              # Tech stack page
│   ├── resume/            # Resume page
│   ├── projects/          # Projects showcase
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── layout/           # Header, Footer, Navigation
│   ├── home/             # Landing page components
│   ├── blog/             # Blog components
│   └── video/            # Video components
├── content/              # MDX content
│   ├── blog/            # Blog post MDX files
│   └── videos/          # Video post MDX files
├── lib/                 # Utility functions
│   ├── constants.ts     # Site configuration
│   ├── types.ts         # TypeScript types
│   ├── posts.ts         # Content management
│   ├── utils.ts         # Helper functions
│   └── analytics.tsx    # Google Analytics
├── public/              # Static assets
│   ├── images/
│   └── videos/
└── styles/              # Global styles
    └── globals.css
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

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
   - Google Analytics ID
   - Site URL (for production)

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

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

# Your Post Title

Your content here...
```

**Available Categories:**
- `career` - Career development
- `ai` - Artificial intelligence
- `health` - Health and wellness
- `vr` - Virtual reality
- `personal-finance` - Personal finance
- `happiness` - Life and happiness

### Videos

Create a new MDX file in `content/videos/`:

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
   - Add `ronforbes.com`
   - Follow DNS configuration instructions

## 🔧 Configuration

### Site Settings

Edit `lib/constants.ts` to update:
- Site name and description
- Navigation links
- Blog categories
- Social media links

### Styling

- **Colors:** Edit CSS variables in `styles/globals.css`
- **Theme:** Modify Tailwind config in `tailwind.config.ts`
- **Components:** Customize Shadcn components in `components/ui/`

### Analytics

Add your Google Analytics ID to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔄 Migrating from Notion

See [NOTION_MIGRATION_GUIDE.md](NOTION_MIGRATION_GUIDE.md) for detailed instructions on migrating content from Notion to MDX.

## 📚 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Content:** [MDX](https://mdxjs.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Analytics:** Google Analytics 4

## 🎨 Customization

### Adding Pages

Create a new page in the `app/` directory:

```typescript
// app/new-page/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Page",
  description: "Page description",
};

export default function NewPage() {
  return <div>Your content</div>;
}
```

### Customizing Components

All components are in `components/`. Feel free to modify them to match your style.

### Updating Navigation

Edit `lib/constants.ts` to add/remove navigation links:

```typescript
export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  // Add more links
] as const;
```

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

Verify your category slugs match those defined in `lib/constants.ts`.

## 📄 License

MIT License - feel free to use this for your own personal website!

## 🙏 Acknowledgments

- Design inspiration from [Ali Abdaal](https://aliabdaal.com)
- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn](https://ui.shadcn.com/)

---

**Questions or issues?** Open an issue on GitHub or reach out on [Twitter](https://twitter.com/ronforbes).
