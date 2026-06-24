'use client'

import { useEffect, useState } from 'react'
import AdminPageHeader from '@/components/admin/AdminPageHeader'
import { adminGetZmHomeConfig, adminUpdateZmHomeConfig } from '@/lib/api/admin'
import {
  ZM_DEFAULTS, mergeZmConfig, ZM_ICON_NAMES,
  type ZmHomeConfig, type ZmPricingPlan, type ZmFeat,
} from '@/app/(public)/_home/config'

const INP = 'w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none'
const BTN_ADD = 'inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100'
const BTN_DEL = 'rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-100'
const CARD = 'rounded-xl border border-slate-200 bg-white p-4 space-y-3'

function Lbl({ children }: { children: React.ReactNode }) {
  return <span className="mb-1 block text-xs font-semibold text-slate-500">{children}</span>
}
function T({ label, value, onChange, ph }: { label?: string; value: string; onChange: (v: string) => void; ph?: string }) {
  return <label className="block">{label && <Lbl>{label}</Lbl>}<input className={INP} value={value ?? ''} placeholder={ph} onChange={(e) => onChange(e.target.value)} /></label>
}
function TA({ label, value, onChange, rows = 3 }: { label?: string; value: string; onChange: (v: string) => void; rows?: number }) {
  return <label className="block">{label && <Lbl>{label}</Lbl>}<textarea className={INP} rows={rows} value={value ?? ''} onChange={(e) => onChange(e.target.value)} /></label>
}
function Num({ label, value, onChange }: { label?: string; value: number; onChange: (v: number) => void }) {
  return <label className="block">{label && <Lbl>{label}</Lbl>}<input type="number" className={INP} value={value} onChange={(e) => onChange(Number(e.target.value) || 0)} /></label>
}
function IconSel({ label, value, onChange }: { label?: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">{label && <Lbl>{label}</Lbl>}
      <select className={INP} value={value} onChange={(e) => onChange(e.target.value)}>
        {ZM_ICON_NAMES.map((n) => <option key={n} value={n}>{n}</option>)}
      </select>
    </label>
  )
}
function Chk({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-slate-700">
      <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} className="h-4 w-4 rounded border-slate-300" />
      {label}
    </label>
  )
}

type Tab = 'hero' | 'stats' | 'pain' | 'solution' | 'video' | 'features' | 'audience' | 'testi' | 'pricing' | 'bonus' | 'faq' | 'cta' | 'show'
const TABS: { key: Tab; label: string }[] = [
  { key: 'hero', label: 'Hero & Link' }, { key: 'stats', label: 'Số liệu' }, { key: 'pain', label: 'Nỗi đau' },
  { key: 'solution', label: 'Giải pháp' }, { key: 'video', label: 'Video demo' }, { key: 'features', label: 'Tính năng' },
  { key: 'audience', label: 'Dành cho ai' }, { key: 'testi', label: 'Khách hàng' }, { key: 'pricing', label: 'Bảng giá' },
  { key: 'bonus', label: 'Quà tặng' }, { key: 'faq', label: 'FAQ' }, { key: 'cta', label: 'CTA cuối' }, { key: 'show', label: 'Ẩn/Hiện' },
]

export default function AdminZmHomePage() {
  const [cfg, setCfg] = useState<ZmHomeConfig | null>(null)
  const [tab, setTab] = useState<Tab>('hero')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    adminGetZmHomeConfig()
      .then((r) => setCfg(mergeZmConfig(r?.data as Partial<ZmHomeConfig> | null)))
      .catch(() => setCfg(mergeZmConfig(null)))
  }, [])

  // Cập nhật bất biến: clone rồi sửa trực tiếp.
  const patch = (fn: (c: ZmHomeConfig) => void) =>
    setCfg((prev) => { const next = structuredClone(prev as ZmHomeConfig); fn(next); return next })

  const handleSave = async () => {
    if (!cfg) return
    setSaving(true); setError('')
    try {
      await adminUpdateZmHomeConfig(cfg)
      setSaved(true); setTimeout(() => setSaved(false), 3000)
    } catch {
      setError('Lưu thất bại, thử lại.')
    } finally { setSaving(false) }
  }

  const resetDefaults = () => { if (confirm('Khôi phục toàn bộ nội dung mặc định? Thay đổi chưa lưu sẽ mất.')) setCfg(structuredClone(ZM_DEFAULTS)) }

  if (!cfg) return <div className="py-20 text-center text-sm text-slate-400">Đang tải…</div>

  return (
    <div className="max-w-4xl space-y-6">
      <AdminPageHeader title="Trang chủ (ZMarketing)" description="Chỉnh sửa toàn bộ nội dung trang chủ mới" showBack={false}>
        <div className="flex items-center gap-2">
          <button onClick={resetDefaults} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Khôi phục mặc định</button>
          <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50">
            {saving ? 'Đang lưu…' : saved ? '✓ Đã lưu' : 'Lưu thay đổi'}
          </button>
        </div>
      </AdminPageHeader>

      {error && <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-xs text-amber-700">
        💡 Icon nhập theo tên (vd: <b>Inbox, Send, ShieldCheck</b>). Video dán link nhúng YouTube dạng <b>https://www.youtube.com/embed/XXXX</b>.
      </div>

      <div className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1">
        {TABS.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${tab === t.key ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ===== HERO & LINKS ===== */}
      {tab === 'hero' && (
        <div className="space-y-4">
          <div className={CARD}>
            <h3 className="text-sm font-bold text-slate-700">Link nút bấm (dùng chung)</h3>
            <div className="grid grid-cols-2 gap-3">
              <T label="Link Đăng ký / Dùng thử" value={cfg.links.register} onChange={(v) => patch((c) => { c.links.register = v })} />
              <T label="Link Hotline (tel:…)" value={cfg.links.hotline} onChange={(v) => patch((c) => { c.links.hotline = v })} />
            </div>
          </div>
          <div className={CARD}>
            <h3 className="text-sm font-bold text-slate-700">Hero (đầu trang)</h3>
            <div className="grid grid-cols-2 gap-3">
              <T label="Badge - chữ đậm" value={cfg.hero.badgeStrong} onChange={(v) => patch((c) => { c.hero.badgeStrong = v })} />
              <T label="Badge - chữ thường" value={cfg.hero.badgeText} onChange={(v) => patch((c) => { c.hero.badgeText = v })} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <T label="Tiêu đề dòng 1" value={cfg.hero.titleTop} onChange={(v) => patch((c) => { c.hero.titleTop = v })} />
              <T label="Tiêu đề (tô màu)" value={cfg.hero.titleHl} onChange={(v) => patch((c) => { c.hero.titleHl = v })} />
              <T label="Tiêu đề dòng 3" value={cfg.hero.titleBottom} onChange={(v) => patch((c) => { c.hero.titleBottom = v })} />
            </div>
            <TA label="Mô tả" value={cfg.hero.sub} onChange={(v) => patch((c) => { c.hero.sub = v })} />
            <div>
              <Lbl>Các nhãn nhỏ (pill)</Lbl>
              {cfg.hero.feats.map((f, i) => (
                <div key={i} className="mb-2 flex gap-2">
                  <input className={INP} value={f} onChange={(e) => patch((c) => { c.hero.feats[i] = e.target.value })} />
                  <button className={BTN_DEL} onClick={() => patch((c) => { c.hero.feats.splice(i, 1) })}>Xóa</button>
                </div>
              ))}
              <button className={BTN_ADD} onClick={() => patch((c) => { c.hero.feats.push('Nhãn mới') })}>+ Thêm nhãn</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <T label="Nút chính" value={cfg.hero.ctaPrimary} onChange={(v) => patch((c) => { c.hero.ctaPrimary = v })} />
              <T label="Nút phụ" value={cfg.hero.ctaSecondary} onChange={(v) => patch((c) => { c.hero.ctaSecondary = v })} />
            </div>
            <TA label="Dòng tin tưởng (proof)" value={cfg.hero.proof} onChange={(v) => patch((c) => { c.hero.proof = v })} rows={2} />
          </div>
        </div>
      )}

      {/* ===== STATS ===== */}
      {tab === 'stats' && (
        <div className={CARD}>
          <h3 className="text-sm font-bold text-slate-700">Số liệu nổi bật</h3>
          {cfg.stats.items.map((s, i) => (
            <div key={i} className="grid grid-cols-[80px_90px_90px_1fr_auto] items-end gap-2">
              <T label="Tiền tố" value={s.prefix || ''} onChange={(v) => patch((c) => { c.stats.items[i].prefix = v })} />
              <Num label="Số" value={s.num} onChange={(v) => patch((c) => { c.stats.items[i].num = v })} />
              <T label="Hậu tố" value={s.suffix || ''} onChange={(v) => patch((c) => { c.stats.items[i].suffix = v })} />
              <T label="Nhãn" value={s.label} onChange={(v) => patch((c) => { c.stats.items[i].label = v })} />
              <button className={BTN_DEL} onClick={() => patch((c) => { c.stats.items.splice(i, 1) })}>Xóa</button>
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.stats.items.push({ num: 0, suffix: '', label: 'Nhãn mới' }) })}>+ Thêm số liệu</button>
        </div>
      )}

      {/* ===== PAIN ===== */}
      {tab === 'pain' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.pain.eyebrow} onChange={(v) => patch((c) => { c.pain.eyebrow = v })} />
            <T label="Tiêu đề" value={cfg.pain.title} onChange={(v) => patch((c) => { c.pain.title = v })} />
            <TA label="Mô tả" value={cfg.pain.sub} onChange={(v) => patch((c) => { c.pain.sub = v })} />
          </div>
          {cfg.pain.items.map((it, i) => (
            <div key={i} className={CARD}>
              <div className="flex items-center justify-between"><b className="text-xs text-slate-400">Thẻ #{i + 1}</b><button className={BTN_DEL} onClick={() => patch((c) => { c.pain.items.splice(i, 1) })}>Xóa</button></div>
              <div className="grid grid-cols-[200px_1fr] gap-3">
                <IconSel label="Icon" value={it.icon} onChange={(v) => patch((c) => { c.pain.items[i].icon = v })} />
                <T label="Tiêu đề" value={it.title} onChange={(v) => patch((c) => { c.pain.items[i].title = v })} />
              </div>
              <TA label="Mô tả" value={it.desc} onChange={(v) => patch((c) => { c.pain.items[i].desc = v })} />
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.pain.items.push({ icon: 'Smartphone', title: 'Tiêu đề', desc: 'Mô tả' }) })}>+ Thêm thẻ</button>
        </div>
      )}

      {/* ===== SOLUTION ===== */}
      {tab === 'solution' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.solution.eyebrow} onChange={(v) => patch((c) => { c.solution.eyebrow = v })} />
            <div className="grid grid-cols-3 gap-3">
              <T label="Tiêu đề (trước)" value={cfg.solution.titleA} onChange={(v) => patch((c) => { c.solution.titleA = v })} />
              <T label="Tiêu đề (tô màu)" value={cfg.solution.titleHl} onChange={(v) => patch((c) => { c.solution.titleHl = v })} />
              <T label="Tiêu đề (sau)" value={cfg.solution.titleB} onChange={(v) => patch((c) => { c.solution.titleB = v })} />
            </div>
            <TA label="Lead" value={cfg.solution.lead} onChange={(v) => patch((c) => { c.solution.lead = v })} />
            <T label="Nút CTA" value={cfg.solution.cta} onChange={(v) => patch((c) => { c.solution.cta = v })} />
          </div>
          <div className={CARD}>
            <h3 className="text-sm font-bold text-slate-700">Danh sách lợi ích (bên trái)</h3>
            {cfg.solution.checks.map((ck, i) => (
              <div key={i} className="grid grid-cols-[160px_1fr_1.4fr_auto] items-end gap-2">
                <IconSel label="Icon" value={ck.icon} onChange={(v) => patch((c) => { c.solution.checks[i].icon = v })} />
                <T label="Chữ đậm" value={ck.strong} onChange={(v) => patch((c) => { c.solution.checks[i].strong = v })} />
                <T label="Nội dung" value={ck.text} onChange={(v) => patch((c) => { c.solution.checks[i].text = v })} />
                <button className={BTN_DEL} onClick={() => patch((c) => { c.solution.checks.splice(i, 1) })}>Xóa</button>
              </div>
            ))}
            <button className={BTN_ADD} onClick={() => patch((c) => { c.solution.checks.push({ icon: 'Inbox', strong: 'Tiêu đề:', text: ' nội dung' }) })}>+ Thêm dòng</button>
          </div>
          <div className={CARD}>
            <h3 className="text-sm font-bold text-slate-700">Khối minh họa (bên phải)</h3>
            {cfg.solution.visual.map((v, i) => (
              <div key={i} className="grid grid-cols-[160px_1fr_1.4fr_auto] items-end gap-2">
                <IconSel label="Icon" value={v.icon} onChange={(x) => patch((c) => { c.solution.visual[i].icon = x })} />
                <T label="Tiêu đề" value={v.title} onChange={(x) => patch((c) => { c.solution.visual[i].title = x })} />
                <T label="Phụ đề" value={v.sub} onChange={(x) => patch((c) => { c.solution.visual[i].sub = x })} />
                <button className={BTN_DEL} onClick={() => patch((c) => { c.solution.visual.splice(i, 1) })}>Xóa</button>
              </div>
            ))}
            <button className={BTN_ADD} onClick={() => patch((c) => { c.solution.visual.push({ icon: 'Inbox', title: 'Tiêu đề', sub: 'Phụ đề' }) })}>+ Thêm dòng</button>
          </div>
        </div>
      )}

      {/* ===== VIDEO ===== */}
      {tab === 'video' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.video.eyebrow} onChange={(v) => patch((c) => { c.video.eyebrow = v })} />
            <T label="Tiêu đề" value={cfg.video.title} onChange={(v) => patch((c) => { c.video.title = v })} />
            <TA label="Mô tả" value={cfg.video.sub} onChange={(v) => patch((c) => { c.video.sub = v })} />
            <T label="Link video (YouTube embed)" value={cfg.video.url} onChange={(v) => patch((c) => { c.video.url = v })} ph="https://www.youtube.com/embed/XXXX" />
          </div>
          <div className={CARD}>
            <h3 className="text-sm font-bold text-slate-700">Các dòng bullet</h3>
            {cfg.video.bullets.map((b, i) => (
              <div key={i} className="grid grid-cols-[200px_1fr_auto] items-end gap-2">
                <IconSel label="Icon" value={b.icon} onChange={(v) => patch((c) => { c.video.bullets[i].icon = v })} />
                <T label="Nội dung" value={b.text} onChange={(v) => patch((c) => { c.video.bullets[i].text = v })} />
                <button className={BTN_DEL} onClick={() => patch((c) => { c.video.bullets.splice(i, 1) })}>Xóa</button>
              </div>
            ))}
            <button className={BTN_ADD} onClick={() => patch((c) => { c.video.bullets.push({ icon: 'Activity', text: 'Nội dung' }) })}>+ Thêm bullet</button>
          </div>
        </div>
      )}

      {/* ===== FEATURES ===== */}
      {tab === 'features' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.features.eyebrow} onChange={(v) => patch((c) => { c.features.eyebrow = v })} />
            <T label="Tiêu đề" value={cfg.features.title} onChange={(v) => patch((c) => { c.features.title = v })} />
            <TA label="Mô tả" value={cfg.features.sub} onChange={(v) => patch((c) => { c.features.sub = v })} />
          </div>
          {cfg.features.items.map((f, i) => (
            <div key={i} className={CARD}>
              <div className="flex items-center justify-between"><b className="text-xs text-slate-400">Tính năng #{i + 1}</b><button className={BTN_DEL} onClick={() => patch((c) => { c.features.items.splice(i, 1) })}>Xóa</button></div>
              <div className="grid grid-cols-[200px_1fr] gap-3">
                <IconSel label="Icon" value={f.icon} onChange={(v) => patch((c) => { c.features.items[i].icon = v })} />
                <T label="Tiêu đề" value={f.title} onChange={(v) => patch((c) => { c.features.items[i].title = v })} />
              </div>
              <TA label="Mô tả" value={f.desc} onChange={(v) => patch((c) => { c.features.items[i].desc = v })} />
              <div className="grid grid-cols-[200px_1fr] gap-3">
                <IconSel label="Icon nhãn" value={f.tagIcon} onChange={(v) => patch((c) => { c.features.items[i].tagIcon = v })} />
                <T label="Nhãn (tag)" value={f.tag} onChange={(v) => patch((c) => { c.features.items[i].tag = v })} />
              </div>
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.features.items.push({ icon: 'Zap', title: 'Tính năng', desc: 'Mô tả', tag: 'Nhãn', tagIcon: 'Zap' }) })}>+ Thêm tính năng</button>
        </div>
      )}

      {/* ===== AUDIENCE ===== */}
      {tab === 'audience' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.audience.eyebrow} onChange={(v) => patch((c) => { c.audience.eyebrow = v })} />
            <T label="Tiêu đề" value={cfg.audience.title} onChange={(v) => patch((c) => { c.audience.title = v })} />
            <TA label="Mô tả" value={cfg.audience.sub} onChange={(v) => patch((c) => { c.audience.sub = v })} />
          </div>
          {cfg.audience.items.map((a, i) => (
            <div key={i} className={CARD}>
              <div className="flex items-center justify-between"><b className="text-xs text-slate-400">Đối tượng #{i + 1}</b><button className={BTN_DEL} onClick={() => patch((c) => { c.audience.items.splice(i, 1) })}>Xóa</button></div>
              <div className="grid grid-cols-[200px_1fr] gap-3">
                <IconSel label="Icon" value={a.icon} onChange={(v) => patch((c) => { c.audience.items[i].icon = v })} />
                <T label="Tiêu đề" value={a.title} onChange={(v) => patch((c) => { c.audience.items[i].title = v })} />
              </div>
              <TA label="Mô tả" value={a.desc} onChange={(v) => patch((c) => { c.audience.items[i].desc = v })} rows={2} />
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.audience.items.push({ icon: 'ShoppingBag', title: 'Đối tượng', desc: 'Mô tả' }) })}>+ Thêm đối tượng</button>
        </div>
      )}

      {/* ===== TESTIMONIALS ===== */}
      {tab === 'testi' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.testimonials.eyebrow} onChange={(v) => patch((c) => { c.testimonials.eyebrow = v })} />
            <T label="Tiêu đề" value={cfg.testimonials.title} onChange={(v) => patch((c) => { c.testimonials.title = v })} />
            <TA label="Mô tả" value={cfg.testimonials.sub} onChange={(v) => patch((c) => { c.testimonials.sub = v })} />
          </div>
          {cfg.testimonials.items.map((t, i) => (
            <div key={i} className={CARD}>
              <div className="flex items-center justify-between"><b className="text-xs text-slate-400">Video #{i + 1}</b><button className={BTN_DEL} onClick={() => patch((c) => { c.testimonials.items.splice(i, 1) })}>Xóa</button></div>
              <T label="Link video (YouTube embed)" value={t.url} onChange={(v) => patch((c) => { c.testimonials.items[i].url = v })} ph="https://www.youtube.com/embed/XXXX" />
              <div className="grid grid-cols-2 gap-3">
                <T label="Tên khách" value={t.name} onChange={(v) => patch((c) => { c.testimonials.items[i].name = v })} />
                <T label="Chức danh" value={t.role} onChange={(v) => patch((c) => { c.testimonials.items[i].role = v })} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <T label="Chữ avatar (1 ký tự)" value={t.av} onChange={(v) => patch((c) => { c.testimonials.items[i].av = v })} />
                <T label="Màu avatar (gradient CSS)" value={t.grad} onChange={(v) => patch((c) => { c.testimonials.items[i].grad = v })} />
              </div>
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.testimonials.items.push({ av: 'A', grad: 'linear-gradient(135deg,#1565C0,#42A5F5)', name: 'Tên khách', role: 'Chức danh', url: 'https://www.youtube.com/embed/nWJnGt7J0J4' }) })}>+ Thêm video khách</button>
        </div>
      )}

      {/* ===== PRICING ===== */}
      {tab === 'pricing' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.pricing.eyebrow} onChange={(v) => patch((c) => { c.pricing.eyebrow = v })} />
            <T label="Tiêu đề" value={cfg.pricing.title} onChange={(v) => patch((c) => { c.pricing.title = v })} />
            <TA label="Mô tả" value={cfg.pricing.sub} onChange={(v) => patch((c) => { c.pricing.sub = v })} />
            <TA label="Ghi chú dưới bảng" value={cfg.pricing.note} onChange={(v) => patch((c) => { c.pricing.note = v })} rows={2} />
          </div>
          {cfg.pricing.plans.map((p, i) => (
            <div key={i} className={CARD}>
              <div className="flex items-center justify-between">
                <b className="text-xs text-slate-400">Gói #{i + 1}</b>
                <button className={BTN_DEL} onClick={() => patch((c) => { c.pricing.plans.splice(i, 1) })}>Xóa gói</button>
              </div>
              <div className="grid grid-cols-[1fr_200px] gap-3">
                <T label="Tên gói" value={p.name} onChange={(v) => patch((c) => { c.pricing.plans[i].name = v })} />
                <IconSel label="Icon" value={p.icon} onChange={(v) => patch((c) => { c.pricing.plans[i].icon = v })} />
              </div>
              <T label="Mô tả ngắn" value={p.desc} onChange={(v) => patch((c) => { c.pricing.plans[i].desc = v })} />
              <div className="grid grid-cols-3 gap-3">
                <T label="Giá" value={p.val} onChange={(v) => patch((c) => { c.pricing.plans[i].val = v })} />
                <T label="Đơn vị (/năm…)" value={p.valSmall || ''} onChange={(v) => patch((c) => { c.pricing.plans[i].valSmall = v })} />
                <T label="Giá gạch (cũ)" value={p.old || ''} onChange={(v) => patch((c) => { c.pricing.plans[i].old = v })} />
              </div>
              <T label="Dòng ghi chú giá" value={p.year} onChange={(v) => patch((c) => { c.pricing.plans[i].year = v })} />
              <div className="grid grid-cols-2 gap-3">
                <T label="Chữ nút" value={p.cta} onChange={(v) => patch((c) => { c.pricing.plans[i].cta = v })} />
                <T label="Link nút" value={p.ctaHref} onChange={(v) => patch((c) => { c.pricing.plans[i].ctaHref = v })} />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Chk label="Gói nổi bật (Phổ biến nhất)" value={!!p.featured} onChange={(v) => patch((c) => { c.pricing.plans[i].featured = v })} />
                <Chk label="Nút màu cam (solid)" value={!!p.ctaSolid} onChange={(v) => patch((c) => { c.pricing.plans[i].ctaSolid = v })} />
              </div>
              <div>
                <Lbl>Dòng tính năng (đậm = spec chính)</Lbl>
                {p.feats.map((ft, j) => (
                  <div key={j} className="mb-2 flex items-center gap-2">
                    <input className={INP} value={ft.t} onChange={(e) => patch((c) => { c.pricing.plans[i].feats[j].t = e.target.value })} />
                    <Chk label="Đậm" value={!!ft.b} onChange={(v) => patch((c) => { c.pricing.plans[i].feats[j].b = v })} />
                    <Chk label="Gạch (—)" value={!!ft.no} onChange={(v) => patch((c) => { c.pricing.plans[i].feats[j].no = v })} />
                    <button className={BTN_DEL} onClick={() => patch((c) => { c.pricing.plans[i].feats.splice(j, 1) })}>Xóa</button>
                  </div>
                ))}
                <button className={BTN_ADD} onClick={() => patch((c) => { c.pricing.plans[i].feats.push({ t: 'Tính năng' } as ZmFeat) })}>+ Thêm dòng</button>
              </div>
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.pricing.plans.push({ name: 'GÓI MỚI', icon: 'Rocket', desc: '', val: '0đ', valSmall: '/năm', year: 'Giá trọn gói 1 năm', cta: 'Đăng ký gói', ctaHref: cfg.links.register, feats: [{ t: 'Tính năng', b: true }] } as ZmPricingPlan) })}>+ Thêm gói</button>
        </div>
      )}

      {/* ===== BONUS ===== */}
      {tab === 'bonus' && (
        <div className="space-y-4">
          <div className={CARD}>
            <div className="grid grid-cols-3 gap-3">
              <T label="Tiêu đề (trước)" value={cfg.bonus.titlePre} onChange={(v) => patch((c) => { c.bonus.titlePre = v })} />
              <T label="Tiêu đề (nổi bật)" value={cfg.bonus.titleEm} onChange={(v) => patch((c) => { c.bonus.titleEm = v })} />
              <T label="Tiêu đề (sau)" value={cfg.bonus.titlePost} onChange={(v) => patch((c) => { c.bonus.titlePost = v })} />
            </div>
            <TA label="Mô tả" value={cfg.bonus.sub} onChange={(v) => patch((c) => { c.bonus.sub = v })} rows={2} />
          </div>
          {cfg.bonus.items.map((g, i) => (
            <div key={i} className={CARD}>
              <div className="flex items-center justify-between"><b className="text-xs text-slate-400">Quà #{i + 1}</b><button className={BTN_DEL} onClick={() => patch((c) => { c.bonus.items.splice(i, 1) })}>Xóa</button></div>
              <div className="grid grid-cols-[200px_1fr] gap-3">
                <IconSel label="Icon" value={g.icon} onChange={(v) => patch((c) => { c.bonus.items[i].icon = v })} />
                <T label="Chữ trước" value={g.pre || ''} onChange={(v) => patch((c) => { c.bonus.items[i].pre = v })} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <T label="Chữ đậm" value={g.strong} onChange={(v) => patch((c) => { c.bonus.items[i].strong = v })} />
                <T label="Chữ sau" value={g.post || ''} onChange={(v) => patch((c) => { c.bonus.items[i].post = v })} />
              </div>
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.bonus.items.push({ icon: 'Gift', strong: 'Quà tặng', post: '' }) })}>+ Thêm quà</button>
        </div>
      )}

      {/* ===== FAQ ===== */}
      {tab === 'faq' && (
        <div className="space-y-4">
          <div className={CARD}>
            <T label="Eyebrow" value={cfg.faq.eyebrow} onChange={(v) => patch((c) => { c.faq.eyebrow = v })} />
            <T label="Tiêu đề" value={cfg.faq.title} onChange={(v) => patch((c) => { c.faq.title = v })} />
            <TA label="Mô tả" value={cfg.faq.sub} onChange={(v) => patch((c) => { c.faq.sub = v })} rows={2} />
          </div>
          {cfg.faq.items.map((q, i) => (
            <div key={i} className={CARD}>
              <div className="flex items-center justify-between"><b className="text-xs text-slate-400">Câu hỏi #{i + 1}</b><button className={BTN_DEL} onClick={() => patch((c) => { c.faq.items.splice(i, 1) })}>Xóa</button></div>
              <T label="Câu hỏi" value={q.q} onChange={(v) => patch((c) => { c.faq.items[i].q = v })} />
              <TA label="Trả lời" value={q.a} onChange={(v) => patch((c) => { c.faq.items[i].a = v })} rows={4} />
            </div>
          ))}
          <button className={BTN_ADD} onClick={() => patch((c) => { c.faq.items.push({ q: 'Câu hỏi?', a: 'Trả lời.' }) })}>+ Thêm câu hỏi</button>
        </div>
      )}

      {/* ===== FINAL CTA ===== */}
      {tab === 'cta' && (
        <div className={CARD}>
          <T label="Dòng khẩn (urgency)" value={cfg.finalCta.urgency} onChange={(v) => patch((c) => { c.finalCta.urgency = v })} />
          <div className="grid grid-cols-2 gap-3">
            <T label="Tiêu đề (trước)" value={cfg.finalCta.titleA} onChange={(v) => patch((c) => { c.finalCta.titleA = v })} />
            <T label="Tiêu đề (tô màu)" value={cfg.finalCta.titleHl} onChange={(v) => patch((c) => { c.finalCta.titleHl = v })} />
          </div>
          <TA label="Mô tả" value={cfg.finalCta.sub} onChange={(v) => patch((c) => { c.finalCta.sub = v })} />
          <T label="Chữ nút" value={cfg.finalCta.cta} onChange={(v) => patch((c) => { c.finalCta.cta = v })} />
          <div>
            <Lbl>Các cam kết (dòng dưới nút)</Lbl>
            {cfg.finalCta.guarantees.map((g, i) => (
              <div key={i} className="mb-2 flex gap-2">
                <input className={INP} value={g} onChange={(e) => patch((c) => { c.finalCta.guarantees[i] = e.target.value })} />
                <button className={BTN_DEL} onClick={() => patch((c) => { c.finalCta.guarantees.splice(i, 1) })}>Xóa</button>
              </div>
            ))}
            <button className={BTN_ADD} onClick={() => patch((c) => { c.finalCta.guarantees.push('Cam kết mới') })}>+ Thêm cam kết</button>
          </div>
        </div>
      )}

      {/* ===== SHOW / HIDE ===== */}
      {tab === 'show' && (
        <div className={CARD}>
          <h3 className="text-sm font-bold text-slate-700">Bật / tắt từng mục trên trang chủ</h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {([
              ['stats', 'Số liệu'], ['pain', 'Nỗi đau'], ['solution', 'Giải pháp'], ['video', 'Video demo'],
              ['features', 'Tính năng'], ['audience', 'Dành cho ai'], ['testimonials', 'Khách hàng'], ['pricing', 'Bảng giá'],
              ['bonus', 'Quà tặng'], ['news', 'Tin tức'], ['faq', 'FAQ'], ['finalCta', 'CTA cuối'],
            ] as [keyof ZmHomeConfig['show'], string][]).map(([k, label]) => (
              <Chk key={k} label={label} value={cfg.show[k]} onChange={(v) => patch((c) => { c.show[k] = v })} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
