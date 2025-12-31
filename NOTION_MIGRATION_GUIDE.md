# Notion to MDX Migration Guide

This guide will help you migrate your blog posts from Notion (Super.so) to MDX files for your new Next.js website.

## Overview

Your blog posts need to be converted from Notion pages to MDX files with frontmatter. Each MDX file should be placed in the `content/blog` directory with a unique slug as the filename.

## Step-by-Step Migration Process

### 1. Export Content from Notion

1. Open your Notion workspace
2. Navigate to each blog post page
3. Click the `...` menu in the top right
4. Select `Export`
5. Choose format: **Markdown & CSV**
6. Enable: **Include subpages** (if applicable)
7. Download the export

### 2. Prepare MDX Files

For each blog post, create a new `.mdx` file in `content/blog/` with this structure:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and previews (150-160 characters)"
date: "2024-01-15"
category: "career"
featured: true
image: "/images/blog/post-slug.jpg"
---

# Your Post Title

Your content goes here...
```

### 3. Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Post title | `"How to Build a Personal Website"` |
| `description` | Yes | SEO description | `"Learn how to build a modern personal website"` |
| `date` | Yes | Publication date (YYYY-MM-DD) | `"2024-01-15"` |
| `category` | Yes | One of: `career`, `ai`, `health`, `vr`, `personal-finance`, `happiness` | `"career"` |
| `featured` | No | Show on homepage? | `true` or `false` |
| `image` | No | Hero image path | `"/images/blog/my-post.jpg"` |

### 4. Convert Notion Content to MDX

#### Basic Markdown Formatting

Notion exports to Markdown which is mostly compatible with MDX. However, you may need to adjust:

**Headings:**
```markdown
# Heading 1
## Heading 2
### Heading 3
```

**Lists:**
```markdown
- Bullet item
- Another item

1. Numbered item
2. Another numbered item
```

**Links:**
```markdown
[Link text](https://example.com)
```

**Images:**
```markdown
![Alt text](/images/blog/image-name.jpg)
```

**Code blocks:**
````markdown
```javascript
const example = "code";
```
````

#### Notion-Specific Conversions

**Callouts** → Use blockquotes:
```markdown
> This is a callout or important note
```

**Toggle blocks** → Convert to regular headings + content

**Databases** → Convert to tables:
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### 5. Handle Images

1. **Export images** from Notion (they're included in your Notion export)
2. **Optimize images** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
3. **Upload to** `public/images/blog/`
4. **Reference in MDX** using:
   ```markdown
   ![Alt text](/images/blog/image-name.jpg)
   ```

### 6. Example Migration

**Original Notion Page:**
```
Title: "My First Blog Post"
Date: January 15, 2024
Tags: Career

This is my first blog post about career development.

## Key Takeaways
- Point 1
- Point 2
```

**Converted MDX File** (`content/blog/my-first-blog-post.mdx`):
```mdx
---
title: "My First Blog Post"
description: "My thoughts on career development and professional growth"
date: "2024-01-15"
category: "career"
featured: true
image: "/images/blog/first-post.jpg"
---

# My First Blog Post

This is my first blog post about career development.

## Key Takeaways

- Point 1
- Point 2
```

### 7. Filename Conventions

Create slugs from your post titles:

- **Title:** "How to Build a Personal Website in 2024"
- **Filename:** `how-to-build-personal-website-2024.mdx`

Rules:
- All lowercase
- Replace spaces with hyphens
- Remove special characters
- Keep it concise but descriptive

### 8. Batch Migration Script (Optional)

You can create a Node.js script to automate some of this:

```javascript
// scripts/migrate-notion.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Read Notion markdown exports
// Parse and convert to MDX with frontmatter
// Save to content/blog/

// Run with: node scripts/migrate-notion.js
```

### 9. Validation Checklist

After migrating each post:

- [ ] Frontmatter is complete and valid
- [ ] Date format is YYYY-MM-DD
- [ ] Category is one of the valid options
- [ ] Images are uploaded and paths are correct
- [ ] Links work correctly
- [ ] Code blocks render properly
- [ ] Special characters are escaped
- [ ] File is saved as `.mdx` in `content/blog/`

### 10. Testing

After migration:

1. **Run the dev server:**
   ```bash
   npm run dev
   ```

2. **Check each post:**
   - Visit http://localhost:3000/blog
   - Click each post to verify rendering
   - Check images load correctly
   - Verify metadata displays properly

3. **Build for production:**
   ```bash
   npm run build
   ```

## Video Posts

For video content, use the same process but place files in `content/videos/` with this frontmatter:

```mdx
---
title: "Video Title"
description: "Video description"
date: "2024-01-15"
category: "ai"
videoId: "YouTube-Video-ID"
featured: true
thumbnail: "/images/videos/thumbnail.jpg"
---

Additional notes or transcript...
```

The `videoId` should be the YouTube video ID (the part after `v=` in the URL).

## Common Issues

### Issue: Images not displaying
**Solution:** Ensure images are in `public/images/blog/` and paths start with `/images/`

### Issue: Build fails with MDX syntax error
**Solution:** Check for unescaped special characters. Use `&apos;` for apostrophes in JSX.

### Issue: Category not recognized
**Solution:** Use only these categories: `career`, `ai`, `health`, `vr`, `personal-finance`, `happiness`

### Issue: Date format error
**Solution:** Use YYYY-MM-DD format, e.g., `"2024-01-15"`

## Automated Tools

Consider using these tools to help with migration:

- **[notion-to-md](https://github.com/souvikinator/notion-to-md)** - Convert Notion pages to Markdown
- **[Obsidian](https://obsidian.md/)** - Edit and organize MDX files
- **ChatGPT/Claude** - Help convert complex Notion blocks to MDX

## Need Help?

If you encounter issues:

1. Check the Next.js dev server error messages
2. Verify your MDX syntax using an MDX playground
3. Review the sample posts in `content/blog/sample-post.mdx`
4. Check the build output: `npm run build`

## Quick Reference

**Create new post:**
```bash
touch content/blog/my-new-post.mdx
```

**Required frontmatter:**
- title (string)
- description (string)
- date (YYYY-MM-DD)
- category (career|ai|health|vr|personal-finance|happiness)

**Optional frontmatter:**
- featured (boolean)
- image (string path)

**Categories:**
- `career` - Career development and professional growth
- `ai` - Artificial intelligence (formerly Notion)
- `health` - Health and wellness topics
- `vr` - Virtual reality and immersive technology
- `personal-finance` - Money management and financial planning
- `happiness` - Life satisfaction and well-being

Good luck with your migration!
