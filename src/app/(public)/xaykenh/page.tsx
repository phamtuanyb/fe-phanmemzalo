import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import TrialModalButton from './TrialModalButton'
import { ChannelIcon, type Channel } from './_shared/channels'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phanmemzalo.com'

export const metadata: Metadata = {
  title: 'Phần mềm Xây Kênh — Bộ công cụ xây kênh online & bán hàng | MKT Software',
  description:
    '4 sản phẩm chủ lực giúp bạn sản xuất nội dung, nuôi kênh và bán hàng đa nền tảng: Xây Kênh AI, MKT Viral, MKT Page, MKT Affiliate — tự động hoá quy trình 24/7.',
  alternates: { canonical: `${siteUrl}/xaykenh` },
}

const REGISTER = 'https://khachhang.phanmemmkt.vn/vi/register'

// ─── Dữ liệu 4 sản phẩm ───────────────────────────────────────────────────────
type Product = {
  name: string
  badge: string
  eyebrow: string
  desc: string
  img: string
  channels: Channel[]
  trialHref: string
  detailHref: string
}

const PRODUCTS: Product[] = [
  {
    name: 'Xây Kênh AI',
    badge: 'MỚI',
    eyebrow: 'AI VIDEO · TỰ ĐỘNG',
    desc: 'Tạo video AI từ prompt (Kling, Veo 3, Sora) và tự động đăng đa kênh – sản xuất nội dung không giới hạn, không cần ekip.',
    img: '/box/xaykenhai.png',
    channels: ['tiktok', 'youtube', 'facebook', 'instagram'],
    trialHref: REGISTER,
    detailHref: '/xaykenh/xaykenhai',
  },
  {
    name: 'MKT Viral',
    badge: 'HOT',
    eyebrow: 'VIDEO · ĐA NỀN TẢNG',
    desc: 'Tải & chỉnh sửa video số lượng lớn, đăng viral đồng loạt lên nhiều nền tảng chỉ với một thao tác.',
    img: '/box/mktviral.png',
    channels: ['tiktok', 'youtube', 'facebook'],
    trialHref: REGISTER,
    detailHref: '/xaykenh/mktviral',
  },
  {
    name: 'MKT Page',
    badge: 'PHỔ BIẾN',
    eyebrow: 'FACEBOOK · FANPAGE',
    desc: 'Quản lý & nuôi fanpage hàng loạt, lên lịch đăng bài và seeding tự động 24/7 – phủ kênh không cần nhân sự.',
    img: '/box/mktpage.png',
    channels: ['facebook'],
    trialHref: REGISTER,
    detailHref: '/xaykenh/mktpage',
  },
  {
    name: 'MKT Affiliate',
    badge: 'HOT',
    eyebrow: 'AFFILIATE · HOA HỒNG',
    desc: 'Xây dựng & tối ưu hệ thống tiếp thị liên kết, tự động theo dõi đơn và chia hoa hồng minh bạch.',
    img: '/box/mktaffiliate.png',
    channels: ['facebook', 'tiktok', 'shopee'],
    trialHref: REGISTER,
    detailHref: '/xaykenh/mktaffiliate',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bộ công cụ Xây Kênh — MKT Software',
  url: `${siteUrl}/xaykenh`,
  numberOfItems: PRODUCTS.length,
  itemListElement: PRODUCTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    description: p.desc,
    url: `${siteUrl}${p.detailHref}`,
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Xây Kênh', item: `${siteUrl}/xaykenh` },
  ],
}

export default function XayKenhPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-vs-bg">
      {/* ===== HERO (nền sáng, đồng bộ trang chủ) ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(1100px 560px at 78% -8%, rgba(100,181,246,.30), transparent 60%), radial-gradient(900px 520px at 8% 8%, rgba(255,140,0,.07), transparent 55%), linear-gradient(180deg, #F4F9FF 0%, #FFFFFF 72%)',
        }}
      >
        {/* chấm bi mờ giống trang chủ */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(21,101,192,.07) 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
            maskImage: 'linear-gradient(180deg, #000 0%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(180deg, #000 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-vs-gray-200 bg-white/70 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-vs-gray-700 shadow-vs backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-vs-orange" />
            Bộ công cụ xây kênh online
          </span>

          <h1 className="mt-7 text-[clamp(30px,5.2vw,54px)] font-extrabold leading-[1.12] text-vs-dark">
            Toàn bộ công cụ giúp bạn
            <br />
            <span className="bg-gradient-to-r from-vs-blue to-[#4d8df0] bg-clip-text text-transparent">
              Xây Kênh Online và Bán Hàng
            </span>
            <br />
            <span className="bg-gradient-to-r from-vs-orange to-[#fbab3a] bg-clip-text text-transparent">
              Hiệu Quả
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-vs-gray-600">
            4 sản phẩm chủ lực giúp bạn sản xuất nội dung, nuôi kênh và bán hàng
            đa nền tảng — tự động hoá quy trình thực tế 24/7.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <TrialModalButton
              source="Trang Xây Kênh"
              className="inline-flex items-center gap-2 rounded-vs bg-vs-orange px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_28px_rgba(244,121,32,0.35)] transition-all hover:bg-vs-orange-dark hover:-translate-y-0.5"
            >
              Dùng thử miễn phí
            </TrialModalButton>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-vs border border-vs-gray-200 bg-white px-7 py-3.5 text-[15px] font-bold text-vs-dark shadow-vs transition-all hover:border-vs-blue hover:text-vs-blue"
            >
              Nhận tư vấn 1-1
            </Link>
          </div>

          {/* stats */}
          <div className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-4 sm:gap-12">
            {[
              { num: '100.000+', label: 'khách hàng & đối tác' },
              { num: '15+', label: 'năm kinh nghiệm' },
              { num: '24/7', label: 'tự động hoá' },
            ].map((s, i) => (
              <div
                key={s.num}
                className={i > 0 ? 'border-l border-vs-gray-200 pl-4 sm:pl-12' : ''}
              >
                <div className="text-[22px] font-extrabold text-vs-dark sm:text-[30px]">{s.num}</div>
                <div className="mt-1 text-[11.5px] leading-tight text-vs-gray-600 sm:text-[12.5px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4 SẢN PHẨM ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 px-6 lg:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-3xl border border-vs-gray-200 bg-white p-5 shadow-vs transition-all hover:-translate-y-1 hover:shadow-vs-md"
            >
              {/* image */}
              <div className="relative">
                <div className="relative h-[240px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-white to-orange-50">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-vs-orange px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.06em] text-white shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                  {p.badge}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col px-1 pt-5">
                <div className="text-[11.5px] font-extrabold uppercase tracking-[0.1em] text-vs-orange">
                  {p.eyebrow}
                </div>
                <h3 className="mt-2 text-[22px] font-extrabold leading-snug text-vs-dark">
                  {p.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-vs-gray-600">
                  {p.desc}
                </p>

                {/* channels */}
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="text-[12.5px] font-semibold text-vs-gray-400">Kênh</span>
                  <div className="flex items-center gap-1.5">
                    {p.channels.map((ch) => (
                      <ChannelIcon key={ch} ch={ch} />
                    ))}
                  </div>
                </div>

                <hr className="my-5 border-vs-gray-200" />

                {/* actions */}
                <div className="mt-auto flex items-center gap-4">
                  <TrialModalButton
                    source={p.name}
                    className="inline-flex items-center gap-2 rounded-vs bg-vs-blue px-5 py-2.5 text-[14px] font-bold text-white transition-all hover:bg-vs-blue-dark"
                  >
                    Dùng thử
                  </TrialModalButton>
                  <Link
                    href={p.detailHref}
                    className="inline-flex items-center gap-1.5 text-[14px] font-bold text-vs-blue transition-[gap] hover:gap-2.5"
                  >
                    Xem chi tiết <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
