import type { Metadata } from 'next'
import HomeLanding from './_home/HomeLanding'
import { mergeZmConfig, type ZmHomeConfig } from './_home/config'
import { getZmHomeConfig, getCategoryPosts } from '@/lib/api/public'
import { NEWS_SLUGS } from '@/constants/app.constants'

export const metadata: Metadata = {
  title: 'ZMarketing — Biến Zalo thành phòng kinh doanh tự động',
  description:
    'Nền tảng quản lý hàng trăm tài khoản Zalo: hộp thư hợp nhất, CRM gắn tag khách hàng, gửi tin hàng loạt an toàn và báo cáo hiệu suất từng nhân viên. Dùng thử miễn phí 7 ngày.',
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  // Đọc config admin lưu (key zm-homepage). Chưa có thì dùng mặc định.
  // Song song: lấy 5 bài Tin tức mới nhất cho section "Tin tức & Cập nhật" (giống Header).
  const [res, newsRes] = await Promise.all([
    getZmHomeConfig().catch(() => ({ data: null })),
    getCategoryPosts(NEWS_SLUGS, { limit: 5 }).catch(() => ({ data: [] })),
  ])
  const config: ZmHomeConfig = mergeZmConfig(res?.data as Partial<ZmHomeConfig> | null)
  const newsPosts = newsRes?.data ?? []
  return <HomeLanding config={config} newsPosts={newsPosts} />
}
