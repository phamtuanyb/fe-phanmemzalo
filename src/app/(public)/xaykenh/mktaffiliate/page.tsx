import type { Metadata } from 'next'
import MktAffiliateLanding from './MktAffiliateLanding'

export const metadata: Metadata = {
  title: 'MKT Affiliate — Xây dựng & vận hành hệ thống Affiliate Marketing đa nền tảng | MKT Software',
  description:
    'MKT Affiliate giúp quản lý tài khoản, nội dung, video, link affiliate và tự động phân phối lên TikTok, Facebook, Instagram, YouTube Shorts và Threads chỉ trên một Dashboard duy nhất.',
  alternates: { canonical: '/xaykenh/mktaffiliate' },
}

export default function Page() {
  return <MktAffiliateLanding />
}
