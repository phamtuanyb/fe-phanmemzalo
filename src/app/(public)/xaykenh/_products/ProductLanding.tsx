import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import TrialModalButton from '../TrialModalButton'
import { ChannelIcon } from '../_shared/channels'
import type { ProductConfig } from './data'

const HERO_BG =
  'radial-gradient(1100px 560px at 80% -10%, rgba(100,181,246,.28), transparent 60%), radial-gradient(900px 520px at 5% 10%, rgba(255,140,0,.08), transparent 55%), linear-gradient(180deg, #F4F9FF 0%, #FFFFFF 70%)'

export default function ProductLanding({ product: p }: { product: ProductConfig }) {
  return (
    <div className="bg-vs-bg">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ background: HERO_BG }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(21,101,192,.07) 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
            maskImage: 'linear-gradient(180deg, #000 0%, transparent 75%)',
            WebkitMaskImage: 'linear-gradient(180deg, #000 0%, transparent 75%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-2">
          {/* left */}
          <div>
            <nav className="mb-5 text-[12.5px] text-vs-gray-600">
              <Link href="/" className="hover:text-vs-blue">Trang chủ</Link>
              <span className="mx-1.5">/</span>
              <Link href="/xaykenh" className="hover:text-vs-blue">Xây Kênh</Link>
              <span className="mx-1.5">/</span>
              <span className="text-vs-dark">{p.name}</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-vs-gray-200 bg-white/70 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.12em] text-vs-orange shadow-vs backdrop-blur">
              {p.eyebrow}
            </span>

            <h1 className="mt-4 text-[clamp(28px,4.4vw,46px)] font-extrabold leading-[1.12] text-vs-dark">
              {p.name}
            </h1>
            <p className="mt-2 text-[clamp(16px,2vw,20px)] font-bold text-vs-blue">{p.tagline}</p>
            <p className="mt-4 max-w-xl text-[15.5px] leading-[1.7] text-vs-gray-700">{p.description}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <TrialModalButton
                source={p.name}
                className="inline-flex items-center gap-2 rounded-vs bg-vs-orange px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_26px_rgba(244,121,32,0.35)] transition-all hover:bg-vs-orange-dark hover:-translate-y-0.5"
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

            <div className="mt-7 flex items-center gap-2.5">
              <span className="text-[12.5px] font-semibold text-vs-gray-400">Kênh hỗ trợ</span>
              <div className="flex items-center gap-1.5">
                {p.channels.map((ch) => (
                  <ChannelIcon key={ch} ch={ch} />
                ))}
              </div>
            </div>
          </div>

          {/* right: box image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="pointer-events-none absolute inset-0 -z-0 mx-auto h-[78%] w-[78%] self-center rounded-full bg-vs-blue/15 blur-[90px]" />
            <Image
              src={p.img}
              alt={p.name}
              width={760}
              height={918}
              priority
              className="relative z-10 h-auto w-[300px] max-w-full object-contain drop-shadow-2xl sm:w-[360px]"
            />
          </div>
        </div>
      </section>

      {/* ===== TÍNH NĂNG ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-vs-blue">Tính năng</span>
            <h2 className="mt-2 text-[clamp(24px,3.2vw,34px)] font-extrabold text-vs-dark">
              Tính năng nổi bật của {p.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-vs-gray-200 bg-white p-6 shadow-vs transition-all hover:-translate-y-1 hover:shadow-vs-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-vs-blue-light text-vs-blue">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-[16.5px] font-extrabold text-vs-dark">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-vs-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CÁCH HOẠT ĐỘNG ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-vs-orange">Quy trình</span>
            <h2 className="mt-2 text-[clamp(24px,3.2vw,34px)] font-extrabold text-vs-dark">Cách hoạt động</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-vs-gray-200 bg-vs-bg p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-vs-blue text-[16px] font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="text-[15.5px] font-extrabold text-vs-dark">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.55] text-vs-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-gradient-to-r from-vs-blue to-vs-blue-dark py-12">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-16 gap-y-6 px-6 text-center">
          {p.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[34px] font-extrabold text-white">{s.num}</div>
              <div className="mt-1 text-[13.5px] text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-vs-gray-200 bg-white p-8 text-center shadow-vs-md md:p-12">
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-vs-dark">{p.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.65] text-vs-gray-600">{p.ctaDesc}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <TrialModalButton
                source={p.name}
                className="inline-flex items-center gap-2 rounded-vs bg-vs-orange px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_26px_rgba(244,121,32,0.35)] transition-all hover:bg-vs-orange-dark hover:-translate-y-0.5"
              >
                Dùng thử miễn phí
              </TrialModalButton>
              <Link
                href="/xaykenh"
                className="inline-flex items-center gap-1.5 text-[14px] font-bold text-vs-blue transition-[gap] hover:gap-2.5"
              >
                Xem các sản phẩm khác <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-vs-gray-500">
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Miễn phí dùng thử</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Hỗ trợ cài đặt 1-1</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Không cần thẻ thanh toán</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
