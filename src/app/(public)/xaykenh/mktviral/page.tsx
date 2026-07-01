import type { Metadata } from 'next'
import MktViralLanding from './MktViralLanding'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

export const metadata: Metadata = {
  title: 'MKT Viral — Khai thác & sản xuất hàng loạt video đa nền tảng | MKT Software',
  description:
    'MKT Viral giúp bạn tìm kiếm video từ nhiều nền tảng, tải xuống hàng loạt, chỉnh sửa tự động và xuất bản chỉ trong vài phút. Một thiết lập — hàng nghìn video.',
  alternates: { canonical: `${siteUrl}/xaykenh/mktviral` },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MKT Viral',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'MKT Viral giúp bạn tìm kiếm video từ nhiều nền tảng, tải xuống hàng loạt, chỉnh sửa tự động và xuất bản chỉ trong vài phút.',
  url: `${siteUrl}/xaykenh/mktviral`,
  provider: { '@type': 'Organization', name: 'MKT Software', url: siteUrl },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Xây Kênh', item: `${siteUrl}/xaykenh` },
    { '@type': 'ListItem', position: 3, name: 'MKT Viral', item: `${siteUrl}/xaykenh/mktviral` },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MktViralLanding />
    </>
  )
}
