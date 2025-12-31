# RonForbes.com Migration Plan
## Next.js + Tailwind CSS + Shadcn + MDX + Vercel

**Current Stack:** Notion + Super.so
**Target Stack:** Next.js 15, Tailwind CSS, Shadcn UI, MDX, Vercel
**Domain:** ronforbes.com

---

## 1. Project Architecture

### Tech Stack
- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS v3+ with custom configuration
- **UI Components:** Shadcn UI (radix-ui based)
- **Content:** MDX for blog posts and video posts
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4

### Project Structure
```
ronforbes.com/
├── app/
│   ├── layout.tsx                 # Root layout with navigation
│   ├── page.tsx                   # Landing page
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── page.tsx              # All blog posts
│   │   ├── [slug]/page.tsx       # Individual blog post
│   │   └── category/
│   │       └── [category]/page.tsx
│   ├── videos/
│   │   ├── page.tsx              # All videos
│   │   └── [slug]/page.tsx       # Individual video
│   ├── tech/page.tsx
│   ├── resume/page.tsx
│   └── projects/page.tsx
├── components/
│   ├── ui/                        # Shadcn components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── CategoryGrid.tsx
│   │   └── FeaturedContent.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogList.tsx
│   │   └── CategoryNav.tsx
│   ├── video/
│   │   ├── VideoCard.tsx
│   │   └── YouTubeEmbed.tsx
│   └── NewsletterForm.tsx
├── content/
│   ├── blog/                      # MDX blog posts
│   │   ├── post-1.mdx
│   │   └── post-2.mdx
│   └── videos/                    # MDX video posts
│       ├── video-1.mdx
│       └── video-2.mdx
├── lib/
│   ├── mdx.ts                     # MDX utilities
│   ├── posts.ts                   # Post fetching/filtering
│   └── constants.ts               # Categories, config
├── public/
│   ├── images/
│   └── videos/
└── styles/
    └── globals.css
```

---

## 2. Content Types

### Blog Posts (MDX)
```markdown
---
title: "Post Title"
description: "Post description for SEO"
date: "2024-01-15"
category: "career"
featured: true
image: "/images/blog/post-image.jpg"
---

Post content here...
```

### Video Posts (MDX)
```markdown
---
title: "Video Title"
description: "Video description"
date: "2024-01-15"
category: "tech"
videoId: "youtube-video-id"
featured: true
thumbnail: "/images/videos/thumbnail.jpg"
---

Video description and notes...
```

### Categories
- Career
- AI (formerly Notion)
- Health
- VR
- Personal Finance
- Happiness

---

## 3. Page Specifications

### Landing Page (`/`)
**Sections:**
1. **Hero Section**
   - Large hero image
   - Introduction text
   - CTA to newsletter or main content

2. **Newsletter Subscription #1**
   - Substack iframe embed
   - Positioned after hero

3. **Blog Categories**
   - Grid of category cards
   - Each links to `/blog/category/[category]`
   - Shows post count per category

4. **Featured Content**
   - Featured blog posts (3-4)
   - Featured videos (2-3)
   - "View All" links

5. **Newsletter Subscription #2**
   - Substack iframe embed
   - Bottom of page before footer

### Blog Page (`/blog`)
- List of all blog posts (paginated or infinite scroll)
- Category filter navigation
- Search functionality (optional for v2)
- Each post shows: thumbnail, title, excerpt, date, category

### Blog Post Page (`/blog/[slug]`)
- Full MDX content
- Table of contents
- Related posts
- Newsletter subscription CTA
- Social sharing buttons

### Videos Page (`/videos`)
- Grid of video cards
- YouTube thumbnail
- Title, date, category
- Click to video detail page

### Video Page (`/videos/[slug]`)
- YouTube embed
- Video title and description
- MDX content for notes
- Related videos

### About Page (`/about`)
- Professional bio
- Photo
- Links to social media

### Tech Page (`/tech`)
- Personal tech stack
- Categorized list of tools/apps/hardware
- With descriptions and links

### Resume Page (`/resume`)
- Professional experience timeline
- Education
- Skills
- Downloadable PDF version

### Projects Page (`/projects`)
- Showcase of past work
- Project cards with images
- Links to live sites/repos

---

## 4. Design System

### Color Palette (Clean & Approachable)
```css
/* Light Mode (Primary) */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 221.2 83.2% 53.3%;
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96.1%;
--accent: 210 40% 96.1%;
--muted: 210 40% 96.1%;
--border: 214.3 31.8% 91.4%;

/* Dark Mode (Optional for v2) */
```

### Typography
- **Headings:** Inter or Satoshi (clean, modern sans-serif)
- **Body:** Inter or System UI stack
- **Code:** Fira Code or JetBrains Mono

### Components (Shadcn)
- Button
- Card
- Badge (for categories)
- Separator
- Navigation Menu
- Dropdown Menu
- Dialog
- Input (for future custom newsletter form)

---

## 5. Features & Functionality

### Core Features (v1)
- ✅ Responsive design (mobile-first)
- ✅ MDX blog posts with syntax highlighting
- ✅ YouTube video embeds
- ✅ Category filtering
- ✅ Substack newsletter integration (iframe)
- ✅ SEO optimization
- ✅ Google Analytics
- ✅ RSS feed
- ✅ Sitemap generation
- ✅ Open Graph images

### Future Enhancements (v2)
- ⏳ Custom newsletter form with Substack API
- ⏳ Search functionality
- ⏳ Dark mode toggle
- ⏳ Comments system
- ⏳ CMS integration (Sanity, Contentful, or custom)
- ⏳ Reading time estimates
- ⏳ View counter
- ⏳ Related posts algorithm

---

## 6. SEO Strategy

### On-Page SEO
- Semantic HTML structure
- Meta tags (title, description, OG tags)
- Structured data (JSON-LD for articles, videos)
- Alt text for all images
- Clean URL structure (`/blog/post-title`)
- Internal linking between posts

### Technical SEO
- Sitemap.xml
- Robots.txt
- Fast page load times (Vercel Edge)
- Mobile-responsive
- Lighthouse score >90

### Content SEO
- Keyword optimization in frontmatter
- Category-based organization
- Canonical URLs
- RSS feed for syndication

---

## 7. Content Migration from Notion

### Migration Process
1. **Export from Notion**
   - Export each blog post as Markdown
   - Download all images/media

2. **Convert to MDX**
   - Add frontmatter (title, date, category, etc.)
   - Convert Notion blocks to MDX components
   - Optimize images (Next.js Image component)

3. **Migration Script**
   - Create script to batch convert Notion exports
   - Automate frontmatter generation
   - Validate MDX syntax

4. **Content Review**
   - Check formatting
   - Verify links
   - Test images
   - Ensure categories are correct

### Migration Tool (to be built)
```bash
npm run migrate:notion -- --input ./notion-exports --output ./content/blog
```

---

## 8. Development Phases

### Phase 1: Foundation (Week 1)
- [x] Initialize Next.js project
- [x] Configure Tailwind CSS + Shadcn
- [x] Set up MDX processing
- [x] Create basic layout (Header, Footer)
- [x] Design system setup

### Phase 2: Core Pages (Week 2)
- [ ] Landing page with hero
- [ ] Blog listing and detail pages
- [ ] Videos listing and detail pages
- [ ] Category pages
- [ ] Newsletter form integration

### Phase 3: Additional Pages (Week 3)
- [ ] About page
- [ ] Tech stack page
- [ ] Resume page
- [ ] Projects page

### Phase 4: Content Migration (Week 4)
- [ ] Export Notion content
- [ ] Convert to MDX
- [ ] Upload images to public folder
- [ ] Create migration script

### Phase 5: SEO & Analytics (Week 5)
- [ ] Google Analytics integration
- [ ] Meta tags and OG images
- [ ] Sitemap generation
- [ ] Structured data
- [ ] Performance optimization

### Phase 6: Testing & Deployment (Week 6)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Accessibility audit
- [ ] Deploy to Vercel
- [ ] Configure ronforbes.com domain
- [ ] SSL setup
- [ ] Final QA

---

## 9. Deployment Checklist

### Pre-Deployment
- [ ] All pages render correctly
- [ ] All links work
- [ ] Images optimized
- [ ] SEO tags in place
- [ ] Analytics tracking
- [ ] No console errors
- [ ] Lighthouse audit passed

### Vercel Setup
- [ ] Connect GitHub repo
- [ ] Configure build settings
- [ ] Set environment variables
- [ ] Configure custom domain (ronforbes.com)
- [ ] Set up redirects from old URLs
- [ ] Enable analytics

### Post-Deployment
- [ ] Verify domain works
- [ ] Test all pages in production
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor analytics
- [ ] Check Core Web Vitals

---

## 10. Environment Variables

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Substack (future custom form)
SUBSTACK_API_KEY=xxx

# Build
NEXT_PUBLIC_SITE_URL=https://ronforbes.com
```

---

## 11. Performance Targets

- **Lighthouse Score:** >90 on all metrics
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Time to Interactive:** <3.5s
- **Cumulative Layout Shift:** <0.1
- **Bundle Size:** <200KB initial JS

---

## 12. Success Metrics

### Technical
- Zero critical accessibility issues
- 100% uptime on Vercel
- <200ms TTFB on Vercel Edge

### Content
- All Notion posts migrated successfully
- All YouTube videos embedded correctly
- All images optimized and loading

### Business
- Newsletter signup rate maintained or improved
- Page load time faster than current site
- SEO rankings maintained during migration

---

## Next Steps

1. **Immediate:** Initialize Next.js project with dependencies
2. **Today:** Set up basic layout and routing
3. **This Week:** Build landing page and blog functionality
4. **Next Week:** Migrate content from Notion

**Ready to begin implementation!**
