import type { Metadata } from 'next'
import HomeLanding from './_home/HomeLanding'
import TrialModal from './_home/TrialModal'
import { mergeZmConfig, type ZmHomeConfig } from './_home/config'
import { getZmHomeConfig, getCategoryPosts } from '@/lib/api/public'
import { NEWS_SLUGS } from '@/constants/app.constants'

export const metadata: Metadata = {
  title: 'Phần Mềm Zalo ZMarketing - Giải Pháp Marketing Zalo Cho Doanh Nghiệp',
  description:
    'Nền tảng quản lý hàng trăm tài khoản Zalo: hộp thư hợp nhất, CRM gắn tag khách hàng, gửi tin hàng loạt an toàn và báo cáo hiệu suất từng nhân viên. Dùng thử miễn phí 7 ngày.',
}

export const revalidate = 60

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

export default async function HomePage() {
  const [res, newsRes] = await Promise.all([
    getZmHomeConfig().catch(() => ({ data: null })),
    getCategoryPosts(NEWS_SLUGS, { limit: 5 }).catch(() => ({ data: [] })),
  ])
  const config: ZmHomeConfig = mergeZmConfig(res?.data as Partial<ZmHomeConfig> | null)
  const newsPosts = newsRes?.data ?? []

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ZMarketing',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Nền tảng quản lý hàng trăm tài khoản Zalo: hộp thư hợp nhất, CRM gắn tag khách hàng, gửi tin hàng loạt an toàn và báo cáo hiệu suất từng nhân viên.',
    url: siteUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'VND',
      description: 'Dùng thử miễn phí 7 ngày',
    },
    provider: { '@type': 'Organization', name: 'MKT Software', url: siteUrl },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeLanding config={config} newsPosts={newsPosts} />
      <TrialModal />
    </>
  )
}
