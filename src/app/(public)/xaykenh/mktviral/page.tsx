import type { Metadata } from 'next'
import MktViralLanding from './MktViralLanding'

export const metadata: Metadata = {
  title: 'MKT Viral — Khai thác & sản xuất hàng loạt video đa nền tảng | MKT Software',
  description:
    'MKT Viral giúp bạn tìm kiếm video từ nhiều nền tảng, tải xuống hàng loạt, chỉnh sửa tự động và xuất bản chỉ trong vài phút. Một thiết lập — hàng nghìn video.',
  alternates: { canonical: '/xaykenh/mktviral' },
}

export default function Page() {
  return <MktViralLanding />
}
