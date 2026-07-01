import type { Metadata } from 'next'
import XayKenhAiLanding from './XayKenhAiLanding'
import { getXayKenhAiConfig } from '@/lib/api/public'
import { withXayKenhAiDefaults } from './config'

export const revalidate = 60

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

async function loadConfig() {
  const raw = await getXayKenhAiConfig().then((r) => r.data).catch(() => null)
  return withXayKenhAiDefaults(raw)
}

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await loadConfig()
  return {
    title: cfg.seoTitle,
    description: cfg.seoDescription,
    alternates: { canonical: `${siteUrl}/xaykenh/xaykenhai` },
  }
}

export default async function Page() {
  const cfg = await loadConfig()

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Xây Kênh AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: cfg.seoDescription,
    url: `${siteUrl}/xaykenh/xaykenhai`,
    provider: { '@type': 'Organization', name: 'MKT Software', url: siteUrl },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Xây Kênh', item: `${siteUrl}/xaykenh` },
      { '@type': 'ListItem', position: 3, name: 'XayKenh AI', item: `${siteUrl}/xaykenh/xaykenhai` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <XayKenhAiLanding config={cfg} />
    </>
  )
}
