import type { Metadata } from 'next'
import { Manrope, Be_Vietnam_Pro } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { getTrackingConfig } from '@/lib/api/public'

const manrope = Manrope({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

// Font cho landing trang chủ (mẫu ZMarketing) — expose qua biến --font-bvp
// preload:false → không thêm vào critical resource chain (font chỉ cần ở trang chủ)
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700', '800'],
  variable: '--font-bvp',
  display: 'swap',
  preload: false,
})

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'ZMarketing'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

// Tracking config (GA4 + Search Console) đọc từ admin → DB. Fallback an toàn nếu chưa cấu hình.
async function readTracking() {
  return getTrackingConfig()
    .then((r) => r.data)
    .catch(() => ({} as { ga4Id?: string; searchConsoleVerification?: string }))
}

export async function generateMetadata(): Promise<Metadata> {
  const tracking = await readTracking()
  const meta: Metadata = {
    metadataBase: new URL(siteUrl),
    title: { default: 'ZMarketing — Biến Zalo thành phòng kinh doanh tự động', template: `%s | ${siteName}` },
    description:
      'Nền tảng quản lý hàng trăm tài khoản Zalo: hộp thư hợp nhất, CRM gắn tag khách hàng, gửi tin hàng loạt an toàn và báo cáo hiệu suất từng nhân viên. Dùng thử miễn phí 7 ngày.',
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
    },
    openGraph: {
      siteName,
      type: 'website',
      locale: 'vi_VN',
      images: ['/logo-ngang.png'],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@zmarketing_vn',
      images: ['/logo-ngang.png'],
    },
  }
  // Google Search Console: render <meta name="google-site-verification" content="...">
  const gscKey = tracking.searchConsoleVerification || 'OJ7R_YBgqO0wFNTzE68IFG9MlkjgvFBbih9wkR-hMCs'
  meta.verification = { google: gscKey }
  return meta
}

// JSON-LD Organization + WebSite — giúp Google nhận diện thương hiệu (logo, sitelinks search).
const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/logo-ngang.png`,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: 'vi-VN',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const tracking = await readTracking()
  // Ưu tiên ID nhập từ admin → env (build-time) → tắt.
  const gaId = tracking.ga4Id || process.env.NEXT_PUBLIC_GA_ID || 'G-TWNCN1ZYDX'

  return (
    <html lang="vi" className={`${manrope.variable} ${beVietnamPro.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://api.phanmemzalo.com" />
      </head>
      <body className={`${manrope.className} bg-white text-vs-dark antialiased`} style={{ overflowX: 'clip' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
