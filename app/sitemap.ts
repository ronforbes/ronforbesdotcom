import { MetadataRoute } from 'next'
import { getAllBlogPosts, getAllVideos } from '@/lib/posts'
import { SITE_URL, BLOG_CATEGORIES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts()
  const videos = getAllVideos()

  const blogPostUrls = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const videoUrls = videos.map((video) => ({
    url: `${SITE_URL}/videos/${video.slug}`,
    lastModified: new Date(video.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const categoryUrls = BLOG_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/blog/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/videos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tech`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...categoryUrls,
    ...blogPostUrls,
    ...videoUrls,
  ]
}
