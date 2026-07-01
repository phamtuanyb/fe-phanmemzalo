import type { Metadata } from 'next'
import MktPageLanding from './MktPageLanding'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

export const metadata: Metadata = {
  title: 'MKT Page — Vận hành hàng trăm Fanpage từ một Dashboard duy nhất | MKT Software',
  description:
    'MKT Page giúp doanh nghiệp, Agency và đội ngũ Marketing quản lý tập trung toàn bộ hệ thống Fanpage Facebook: đăng bài hàng loạt, lập lịch, đổi thông tin Page và theo dõi tiến trình từ một Dashboard.',
  alternates: { canonical: `${siteUrl}/xaykenh/mktpage` },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MKT Page',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'MKT Page giúp quản lý tập trung toàn bộ hệ thống Fanpage Facebook: đăng bài hàng loạt, lập lịch, đổi thông tin Page và theo dõi tiến trình từ một Dashboard.',
  url: `${siteUrl}/xaykenh/mktpage`,
  provider: { '@type': 'Organization', name: 'MKT Software', url: siteUrl },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Xây Kênh', item: `${siteUrl}/xaykenh` },
    { '@type': 'ListItem', position: 3, name: 'MKT Page', item: `${siteUrl}/xaykenh/mktpage` },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MktPageLanding />
    </>
  )
}
