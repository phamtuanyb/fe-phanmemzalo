import type { Metadata } from 'next'
import MktPageLanding from './MktPageLanding'

export const metadata: Metadata = {
  title: 'MKT Page — Vận hành hàng trăm Fanpage từ một Dashboard duy nhất | MKT Software',
  description:
    'MKT Page giúp doanh nghiệp, Agency và đội ngũ Marketing quản lý tập trung toàn bộ hệ thống Fanpage Facebook: đăng bài hàng loạt, lập lịch, đổi thông tin Page và theo dõi tiến trình từ một Dashboard.',
  alternates: { canonical: '/xaykenh/mktpage' },
}

export default function Page() {
  return <MktPageLanding />
}
