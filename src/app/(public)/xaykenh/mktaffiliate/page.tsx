import type { Metadata } from 'next'
import MktAffiliateLanding from './MktAffiliateLanding'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

export const metadata: Metadata = {
  title: 'MKT Affiliate — Xây dựng & vận hành hệ thống Affiliate Marketing đa nền tảng | MKT Software',
  description:
    'MKT Affiliate giúp quản lý tài khoản, nội dung, video, link affiliate và tự động phân phối lên TikTok, Facebook, Instagram, YouTube Shorts và Threads chỉ trên một Dashboard duy nhất.',
  alternates: { canonical: `${siteUrl}/xaykenh/mktaffiliate` },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MKT Affiliate',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'MKT Affiliate giúp quản lý tài khoản, nội dung, video, link affiliate và tự động phân phối lên TikTok, Facebook, Instagram, YouTube Shorts và Threads từ một Dashboard.',
  url: `${siteUrl}/xaykenh/mktaffiliate`,
  provider: { '@type': 'Organization', name: 'MKT Software', url: siteUrl },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Xây Kênh', item: `${siteUrl}/xaykenh` },
    { '@type': 'ListItem', position: 3, name: 'MKT Affiliate', item: `${siteUrl}/xaykenh/mktaffiliate` },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MktAffiliateLanding />
    </>
  )
}
