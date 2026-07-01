import { MetadataRoute } from 'next'
import { getCategories, getCategoryPosts, getPosts } from '@/lib/api/public'
import { SERVICES_SLUGS } from '@/constants/app.constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

  // 1. Static routes
  const staticRoutes = [
    '',
    '/dich-vu',
    '/xaykenh',
    '/xaykenh/xaykenhai',
    '/xaykenh/mktviral',
    '/xaykenh/mktpage',
    '/xaykenh/mktaffiliate',
    '/introduction',
    '/lien-he',
    '/tin-tuc',
    '/chinh-sach-bao-mat',
    '/dieu-khoan-su-dung',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : route.startsWith('/xaykenh') || route === '/dich-vu' ? 0.9 : 0.8,
  }))

  try {
    const [categoriesRes, postsRes, servicesRes] = await Promise.all([
      getCategories().catch(() => ({ data: [] })),
      getPosts({ limit: 500 }).catch(() => ({ data: [] })),
      getCategoryPosts(SERVICES_SLUGS, { limit: 100 }).catch(() => ({ data: [] })),
    ])

    const categories = categoriesRes?.data ?? []
    const posts = postsRes?.data ?? []
    const services = servicesRes?.data ?? []

    // 2. Category routes — dùng /chuyen-muc/ (route chuẩn tiếng Việt)
    const categoryRoutes = categories.map((cat) => ({
      url: `${siteUrl}/chuyen-muc/${cat.slug}`,
      lastModified: new Date(cat.updatedAt || new Date().toISOString()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    // 3. Bài viết tin tức
    const postRoutes = posts.map((post) => ({
      url: `${siteUrl}/tin-tuc/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    // 4. Trang dịch vụ chi tiết
    const serviceRoutes = services.map((svc) => ({
      url: `${siteUrl}/dich-vu/${svc.slug}`,
      lastModified: new Date(svc.updatedAt || svc.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    return [
      ...staticRoutes,
      ...categoryRoutes,
      ...postRoutes,
      ...serviceRoutes,
    ]
  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    return staticRoutes
  }
}
