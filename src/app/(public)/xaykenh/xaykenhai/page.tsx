import type { Metadata } from 'next'
import XayKenhAiLanding from './XayKenhAiLanding'
import { getXayKenhAiConfig } from '@/lib/api/public'
import { withXayKenhAiDefaults } from './config'

// ISR: trang tự cập nhật trong ~60s sau khi sửa config trong admin.
export const revalidate = 60

async function loadConfig() {
  const raw = await getXayKenhAiConfig().then((r) => r.data).catch(() => null)
  return withXayKenhAiDefaults(raw)
}

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await loadConfig()
  return {
    title: cfg.seoTitle,
    description: cfg.seoDescription,
    alternates: { canonical: '/xaykenh/xaykenhai' },
  }
}

export default async function Page() {
  const cfg = await loadConfig()
  return <XayKenhAiLanding config={cfg} />
}
