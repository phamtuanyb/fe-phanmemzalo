import Link from 'next/link'
import {
  Zap, Play, ArrowRight, ArrowUpRight, Link2, Layers, Wand2, Film,
  FileText, SlidersHorizontal, Mic, Image as ImageIcon, Server, Cloud,
  ShieldCheck, Lock, Check, type LucideIcon,
} from 'lucide-react'
import TrialModalButton from '../TrialModalButton'
import { ChannelIcon, type Channel } from '../_shared/channels'
import DemoVideo from './_components/DemoVideo'
import CollectionGrid from './_components/CollectionGrid'
import type { XayKenhAiConfig } from './config'

const SOURCE = 'Xây Kênh AI'

const HERO_BG =
  'radial-gradient(120% 90% at 50% -10%, #EBF1FB 0%, rgba(234,243,255,0) 55%), linear-gradient(180deg, #FBFCFE 0%, #FFFFFF 100%)'

// Icon cố định theo vị trí (admin sửa chữ, icon giữ trong code)
const STEP_ICONS: LucideIcon[] = [Link2, Layers, Wand2, Film]
const FEATURE_ICONS: LucideIcon[] = [FileText, SlidersHorizontal, Mic, ImageIcon, Server, Cloud]
const SECURITY_ICONS: LucideIcon[] = [ShieldCheck, Lock]

const Eyebrow = ({ children, color = 'orange' }: { children: React.ReactNode; color?: 'orange' | 'blue' }) => (
  <div className={`text-[12px] font-extrabold uppercase tracking-[0.12em] ${color === 'blue' ? 'text-vs-blue' : 'text-vs-orange'}`}>
    {children}
  </div>
)

export default function XayKenhAiLanding({ config }: { config: XayKenhAiConfig }) {
  const { hero, comparison, workflow, demo, collection, features, security, cta } = config

  return (
    <div className="bg-white">
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative overflow-hidden" style={{ background: HERO_BG }}>
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-12 text-center md:pt-16">
          <nav className="mb-6 text-[12.5px] text-vs-gray-600">
            <Link href="/" className="hover:text-vs-blue">Trang chủ</Link>
            <span className="mx-1.5">/</span>
            <Link href="/xaykenh" className="hover:text-vs-blue">Xây Kênh</Link>
            <span className="mx-1.5">/</span>
            <span className="text-vs-dark">Xây Kênh AI</span>
          </nav>

          {hero.badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-vs-gray-200 bg-white px-4 py-1.5 text-[13px] font-semibold text-vs-dark shadow-vs">
              <Zap className="h-4 w-4 text-vs-orange" /> {hero.badge}
            </span>
          )}

          <h1 className="mx-auto mt-5 max-w-4xl text-[clamp(30px,5.2vw,52px)] font-extrabold leading-[1.1] tracking-tight text-vs-dark">
            {hero.titlePrefix}<span className="text-vs-blue">{hero.titleHighlight}</span>{hero.titleSuffix}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.65] text-vs-gray-600">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <TrialModalButton
              source={SOURCE}
              className="inline-flex items-center gap-2 rounded-vs bg-vs-orange px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_26px_rgba(244,121,32,0.35)] transition-all hover:-translate-y-0.5 hover:bg-vs-orange-dark"
            >
              {hero.ctaPrimaryText}
            </TrialModalButton>
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 rounded-vs border border-vs-gray-200 bg-white px-7 py-3.5 text-[15px] font-bold text-vs-dark shadow-vs transition-all hover:border-vs-blue hover:text-vs-blue"
            >
              <Play className="h-4 w-4 fill-current" /> {hero.ctaSecondaryText}
            </Link>
          </div>
          {hero.note && <p className="mt-4 text-[13.5px] text-vs-gray-400">{hero.note}</p>}

          {/* So sánh thủ công vs AI */}
          {comparison.show && (
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-2xl border border-vs-gray-200 bg-white p-6 text-left shadow-vs">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-vs-gray-600">{comparison.manualLabel}</span>
                  <span className="rounded-full bg-vs-gray-200 px-2.5 py-1 text-[11px] font-extrabold text-vs-gray-700">{comparison.manualBadge}</span>
                </div>
                <div className="flex flex-col gap-2.5 text-[13.5px] text-vs-gray-700">
                  {comparison.manualRows.map((r, i) => (
                    <div key={i} className="flex justify-between"><span>{r.label}</span><span className="font-mono text-vs-gray-400">{r.value}</span></div>
                  ))}
                </div>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-vs-gradient text-white shadow-[0_8px_20px_rgba(30,91,198,0.4)]">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-vs-blue via-vs-blue-dark to-vs-navy p-6 text-left text-white shadow-[0_18px_40px_rgba(30,91,198,0.30)]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[13px] font-bold">{comparison.aiLabel}</span>
                  <span className="rounded-full bg-vs-orange px-2.5 py-1 text-[11px] font-extrabold text-white">{comparison.aiBadge}</span>
                </div>
                <div className="flex flex-col gap-2.5 text-[13.5px] text-white/85">
                  {comparison.aiRows.map((r, i) => (
                    <div key={i} className="flex justify-between"><span>{r.label}</span><span className="font-mono">{r.value}</span></div>
                  ))}
                </div>
                {comparison.savings && (
                  <div className="mt-4 border-t border-white/15 pt-3 text-[13px] font-bold text-vs-orange-light">{comparison.savings}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ════════════════ QUY TRÌNH ════════════════ */}
      <section id="workflow" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>{workflow.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,3.6vw,38px)] font-extrabold tracking-tight text-vs-dark">{workflow.heading}</h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-vs-gray-600">{workflow.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.steps.map((s, i) => {
              const Icon = STEP_ICONS[i] ?? Film
              const accent = i === 2
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-vs-md ${
                    accent
                      ? 'border-[1.5px] border-vs-blue/30 bg-vs-blue-light shadow-[0_10px_30px_rgba(30,91,198,0.10)]'
                      : 'border border-vs-gray-200 bg-vs-bg'
                  }`}
                >
                  <span className="pointer-events-none absolute right-5 top-4 font-mono text-[40px] font-extrabold leading-none text-vs-blue/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${accent ? 'bg-vs-orange text-white shadow-[0_8px_20px_rgba(244,121,32,0.35)]' : 'bg-white text-vs-blue shadow-vs'}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-[18px] font-bold text-vs-dark">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-vs-gray-600">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ DEMO ════════════════ */}
      <section id="demo" className="bg-vs-bg py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Eyebrow>{demo.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,3.6vw,38px)] font-extrabold tracking-tight text-vs-dark">{demo.heading}</h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-vs-gray-600">{demo.subtitle}</p>
          </div>

          <DemoVideo image={demo.image} videoUrl={demo.videoUrl} badgeText={demo.badgeText} metaText={demo.metaText} />
        </div>
      </section>

      {/* ════════════════ BỘ SƯU TẬP ════════════════ */}
      <section id="collection" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-11 max-w-2xl text-center">
            <Eyebrow>{collection.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[clamp(24px,3.6vw,38px)] font-extrabold tracking-tight text-vs-dark">{collection.heading}</h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-vs-gray-600">{collection.subtitle}</p>
          </div>

          <CollectionGrid items={collection.items} />
        </div>
      </section>

      {/* ════════════════ TÍNH NĂNG ════════════════ */}
      <section id="features" className="bg-vs-bg py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>{features.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,3.6vw,38px)] font-extrabold tracking-tight text-vs-dark">{features.heading}</h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-vs-gray-600">{features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.items.map((f, i) => {
              const Icon = FEATURE_ICONS[i] ?? Cloud
              return (
                <div key={i} className="rounded-2xl border border-vs-gray-200 bg-white p-7 shadow-vs transition-all hover:-translate-y-1 hover:shadow-vs-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-vs-orange-light text-vs-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-[18px] font-bold text-vs-dark">{f.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-vs-gray-600">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ BẢO MẬT & KẾT NỐI ════════════════ */}
      <section id="security" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          {/* left */}
          <div>
            <Eyebrow>{security.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[clamp(24px,3.4vw,36px)] font-extrabold leading-tight tracking-tight text-vs-dark">{security.heading}</h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-vs-gray-600">{security.subtitle}</p>

            <div className="mt-6 flex flex-col gap-4">
              {security.points.map((pt, i) => {
                const Icon = SECURITY_ICONS[i] ?? ShieldCheck
                const orange = i % 2 === 1
                return (
                  <div key={i} className="flex gap-3.5">
                    <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${orange ? 'bg-vs-orange-light text-vs-orange' : 'bg-vs-blue-light text-vs-blue'}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold text-vs-dark">{pt.title}</h3>
                      <p className="mt-1 text-[14.5px] leading-[1.55] text-vs-gray-600">{pt.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {security.note && (
              <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3.5 text-[14px] text-green-700">
                <Check className="mt-0.5 h-4 w-4 flex-none" />
                <span>{security.note}</span>
              </div>
            )}
          </div>

          {/* right: trung tâm kết nối */}
          <div className="rounded-3xl bg-vs-dark-gradient p-7 shadow-[0_24px_60px_rgba(13,39,87,0.35)]">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-[16px] font-extrabold">M</span>
                <div className="leading-tight">
                  <div className="text-[15px] font-bold">{security.panelTitle}</div>
                  <div className="text-[12px] text-white/60">{security.panelSubtitle}</div>
                </div>
              </div>
              {security.activeLabel && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-2.5 py-1 text-[11px] font-bold text-green-300 ring-1 ring-green-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> {security.activeLabel}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              {security.channels.map((c, i) => (
                <div key={i} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-3.5 py-3">
                  <span className="flex-none">
                    {c.ch === 'threads' ? (
                      <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-black text-[14px] font-bold text-white">@</span>
                    ) : (
                      <ChannelIcon ch={c.ch as Channel} size={26} />
                    )}
                  </span>
                  <span className="flex-1 text-[14.5px] font-semibold text-white">{c.name}</span>
                  {c.ready ? (
                    <span className="rounded-full bg-green-500/20 px-2.5 py-1 text-[11px] font-bold text-green-300 ring-1 ring-green-400/30">Sẵn sàng</span>
                  ) : (
                    <span className="rounded-full bg-white/[0.08] px-2.5 py-1 text-[11px] font-semibold text-white/55 ring-1 ring-white/10">Chưa kích hoạt</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 text-center font-mono text-[12px] tracking-[0.14em] text-white/50">
              SECURED · OAuth 2.0 · AES-256-GCM
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ════════════════ */}
      <section id="pricing" className="bg-white pb-24 pt-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-vs-blue via-vs-blue-dark to-vs-navy px-8 py-16 text-center shadow-[0_30px_70px_rgba(30,91,198,0.30)]">
            <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(80% 120% at 80% 0%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 50%)' }} />
            <div className="relative">
              <Eyebrow color="blue"><span className="text-white/85">{cta.eyebrow}</span></Eyebrow>
              <h2 className="mx-auto mt-3 max-w-2xl text-[clamp(28px,4.4vw,46px)] font-extrabold tracking-tight text-white">{cta.heading}</h2>
              <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-white/90">{cta.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <TrialModalButton
                  source={SOURCE}
                  className="inline-flex items-center gap-2 rounded-vs bg-white px-8 py-3.5 text-[15px] font-bold text-vs-blue-dark shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5"
                >
                  {cta.ctaPrimaryText}
                </TrialModalButton>
                <Link
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-vs border border-white/35 bg-white/10 px-8 py-3.5 text-[15px] font-bold text-white transition-all hover:bg-white/20"
                >
                  <Play className="h-4 w-4 fill-current" /> {cta.ctaSecondaryText}
                </Link>
                <Link href="/xaykenh" className="inline-flex items-center gap-1.5 px-2 text-[14px] font-bold text-white/85 transition-[gap] hover:gap-2.5 hover:text-white">
                  Sản phẩm khác <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
