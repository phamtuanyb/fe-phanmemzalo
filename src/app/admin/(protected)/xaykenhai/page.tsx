'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { adminGetXayKenhAiConfig, adminUpdateXayKenhAiConfig } from '@/lib/api/admin'
import { XAYKENHAI_DEFAULT, withXayKenhAiDefaults, type XayKenhAiConfig, type XKAiChannelKind } from '@/app/(public)/xaykenh/xaykenhai/config'
import { getErrorMessage } from '@/lib/error'
import AdminPageHeader from '@/components/admin/AdminPageHeader'
import Button from '@/components/ui/Button'
import Toast from '@/components/ui/Toast'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

const inputCls =
  'w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400'

const CHANNEL_KINDS: XKAiChannelKind[] = ['tiktok', 'youtube', 'facebook', 'instagram', 'shopee', 'threads']

// Các section dạng object (loại trừ seoTitle/seoDescription là string)
type ObjSection = Exclude<keyof XayKenhAiConfig, 'seoTitle' | 'seoDescription'>

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-semibold text-slate-600">{label}</span>
      {children}
    </label>
  )
}

function Card({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 border-b border-slate-100 pb-3">
        <h2 className="text-[15px] font-bold text-slate-800">{title}</h2>
        {desc && <p className="mt-0.5 text-[12.5px] text-slate-500">{desc}</p>}
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

function ListEditor<T>({ items, onChange, newItem, addLabel, render }: {
  items: T[]
  onChange: (items: T[]) => void
  newItem: () => T
  addLabel: string
  render: (item: T, patch: (p: Partial<T>) => void, idx: number) => React.ReactNode
}) {
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="relative rounded-xl border border-slate-200 bg-slate-50/50 p-3 pr-9">
          <button
            type="button"
            onClick={() => onChange(items.filter((_, j) => j !== i))}
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm hover:bg-red-50 hover:text-red-500"
            aria-label="Xoá"
          >
            ✕
          </button>
          {render(it, (p) => onChange(items.map((x, j) => (j === i ? { ...x, ...p } : x))), i)}
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, newItem()])}
        className="w-full rounded-lg border border-dashed border-slate-300 py-2 text-[13px] font-semibold text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/40"
      >
        + {addLabel}
      </button>
    </div>
  )
}

export default function AdminXayKenhAiPage() {
  const [cfg, setCfg] = useState<XayKenhAiConfig | null>(null)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    adminGetXayKenhAiConfig()
      .then((res) => setCfg(JSON.parse(JSON.stringify(withXayKenhAiDefaults(res.data)))))
      .catch(() => setCfg(JSON.parse(JSON.stringify(XAYKENHAI_DEFAULT))))
  }, [])

  function patch<K extends ObjSection>(section: K, p: Partial<XayKenhAiConfig[K]>) {
    setCfg((c) => (c ? ({ ...c, [section]: { ...(c[section] as XayKenhAiConfig[K]), ...p } } as XayKenhAiConfig) : c))
  }

  async function save() {
    if (!cfg) return
    setSaving(true)
    try {
      await adminUpdateXayKenhAiConfig(cfg)
      setToast({ message: 'Đã lưu landing Xây Kênh AI', type: 'success' })
    } catch (err) {
      setToast({ message: getErrorMessage(err) || 'Lưu thất bại', type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  function resetDefault() {
    if (confirm('Khôi phục toàn bộ nội dung về mặc định? Thay đổi chưa lưu sẽ mất.')) {
      setCfg(JSON.parse(JSON.stringify(XAYKENHAI_DEFAULT)))
    }
  }

  if (!cfg) {
    return (
      <div className="space-y-6">
        <AdminPageHeader title="Landing Xây Kênh AI" description="Đang tải..." />
        <LoadingSpinner className="py-20" text="Đang tải cấu hình..." />
      </div>
    )
  }

  const SaveBtn = (
    <>
      <Link href="/xaykenh/xaykenhai" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm">Xem trang ↗</Button>
      </Link>
      <Button variant="ghost" size="sm" onClick={resetDefault}>Khôi phục mặc định</Button>
      <Button size="sm" onClick={save} loading={saving}>Lưu thay đổi</Button>
    </>
  )

  return (
    <div className="space-y-6">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <AdminPageHeader
        title="Landing Xây Kênh AI"
        description="Sửa toàn bộ nội dung trang /xaykenh/xaykenhai"
      >
        {SaveBtn}
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* SEO */}
        <Card title="SEO" desc="Tiêu đề & mô tả khi chia sẻ / tìm kiếm">
          <Field label="SEO Title"><input className={inputCls} value={cfg.seoTitle} onChange={(e) => setCfg({ ...cfg, seoTitle: e.target.value })} /></Field>
          <Field label="SEO Description"><textarea rows={2} className={inputCls} value={cfg.seoDescription} onChange={(e) => setCfg({ ...cfg, seoDescription: e.target.value })} /></Field>
        </Card>

        {/* HERO */}
        <Card title="Hero (đầu trang)">
          <Field label="Badge"><input className={inputCls} value={cfg.hero.badge} onChange={(e) => patch('hero', { badge: e.target.value })} /></Field>
          <div className="grid grid-cols-3 gap-2">
            <Field label="Tiêu đề (trước)"><input className={inputCls} value={cfg.hero.titlePrefix} onChange={(e) => patch('hero', { titlePrefix: e.target.value })} /></Field>
            <Field label="Phần tô xanh"><input className={inputCls} value={cfg.hero.titleHighlight} onChange={(e) => patch('hero', { titleHighlight: e.target.value })} /></Field>
            <Field label="Tiêu đề (sau)"><input className={inputCls} value={cfg.hero.titleSuffix} onChange={(e) => patch('hero', { titleSuffix: e.target.value })} /></Field>
          </div>
          <Field label="Mô tả"><textarea rows={3} className={inputCls} value={cfg.hero.subtitle} onChange={(e) => patch('hero', { subtitle: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Nút chính"><input className={inputCls} value={cfg.hero.ctaPrimaryText} onChange={(e) => patch('hero', { ctaPrimaryText: e.target.value })} /></Field>
            <Field label="Nút phụ"><input className={inputCls} value={cfg.hero.ctaSecondaryText} onChange={(e) => patch('hero', { ctaSecondaryText: e.target.value })} /></Field>
          </div>
          <Field label="Ghi chú dưới nút"><input className={inputCls} value={cfg.hero.note} onChange={(e) => patch('hero', { note: e.target.value })} /></Field>
        </Card>

        {/* SO SÁNH */}
        <Card title="Bảng so sánh (thủ công vs AI)">
          <label className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
            <input type="checkbox" checked={cfg.comparison.show} onChange={(e) => patch('comparison', { show: e.target.checked })} /> Hiển thị bảng so sánh
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Nhãn cột thủ công"><input className={inputCls} value={cfg.comparison.manualLabel} onChange={(e) => patch('comparison', { manualLabel: e.target.value })} /></Field>
            <Field label="Badge thủ công"><input className={inputCls} value={cfg.comparison.manualBadge} onChange={(e) => patch('comparison', { manualBadge: e.target.value })} /></Field>
          </div>
          <Field label="Các dòng (thủ công)">
            <ListEditor
              items={cfg.comparison.manualRows}
              onChange={(rows) => patch('comparison', { manualRows: rows })}
              newItem={() => ({ label: '', value: '' })}
              addLabel="Thêm dòng"
              render={(r, p) => (
                <div className="grid grid-cols-2 gap-2">
                  <input className={inputCls} placeholder="Việc" value={r.label} onChange={(e) => p({ label: e.target.value })} />
                  <input className={inputCls} placeholder="Thời gian" value={r.value} onChange={(e) => p({ value: e.target.value })} />
                </div>
              )}
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Nhãn cột AI"><input className={inputCls} value={cfg.comparison.aiLabel} onChange={(e) => patch('comparison', { aiLabel: e.target.value })} /></Field>
            <Field label="Badge AI"><input className={inputCls} value={cfg.comparison.aiBadge} onChange={(e) => patch('comparison', { aiBadge: e.target.value })} /></Field>
          </div>
          <Field label="Các dòng (AI)">
            <ListEditor
              items={cfg.comparison.aiRows}
              onChange={(rows) => patch('comparison', { aiRows: rows })}
              newItem={() => ({ label: '', value: '' })}
              addLabel="Thêm dòng"
              render={(r, p) => (
                <div className="grid grid-cols-2 gap-2">
                  <input className={inputCls} placeholder="Việc" value={r.label} onChange={(e) => p({ label: e.target.value })} />
                  <input className={inputCls} placeholder="Thời gian" value={r.value} onChange={(e) => p({ value: e.target.value })} />
                </div>
              )}
            />
          </Field>
          <Field label="Dòng tiết kiệm (footer cột AI)"><input className={inputCls} value={cfg.comparison.savings} onChange={(e) => patch('comparison', { savings: e.target.value })} /></Field>
        </Card>

        {/* QUY TRÌNH */}
        <Card title="Quy trình sản xuất" desc="Icon cố định theo thứ tự (bước 3 nổi bật)">
          <div className="grid grid-cols-1 gap-2">
            <Field label="Eyebrow"><input className={inputCls} value={cfg.workflow.eyebrow} onChange={(e) => patch('workflow', { eyebrow: e.target.value })} /></Field>
            <Field label="Tiêu đề"><input className={inputCls} value={cfg.workflow.heading} onChange={(e) => patch('workflow', { heading: e.target.value })} /></Field>
            <Field label="Mô tả"><textarea rows={2} className={inputCls} value={cfg.workflow.subtitle} onChange={(e) => patch('workflow', { subtitle: e.target.value })} /></Field>
          </div>
          <ListEditor
            items={cfg.workflow.steps}
            onChange={(steps) => patch('workflow', { steps })}
            newItem={() => ({ title: '', desc: '' })}
            addLabel="Thêm bước"
            render={(s, p) => (
              <div className="space-y-2">
                <input className={inputCls} placeholder="Tiêu đề bước" value={s.title} onChange={(e) => p({ title: e.target.value })} />
                <textarea rows={2} className={inputCls} placeholder="Mô tả" value={s.desc} onChange={(e) => p({ desc: e.target.value })} />
              </div>
            )}
          />
        </Card>

        {/* DEMO */}
        <Card title="Video Demo">
          <Field label="Eyebrow"><input className={inputCls} value={cfg.demo.eyebrow} onChange={(e) => patch('demo', { eyebrow: e.target.value })} /></Field>
          <Field label="Tiêu đề"><input className={inputCls} value={cfg.demo.heading} onChange={(e) => patch('demo', { heading: e.target.value })} /></Field>
          <Field label="Mô tả"><textarea rows={2} className={inputCls} value={cfg.demo.subtitle} onChange={(e) => patch('demo', { subtitle: e.target.value })} /></Field>
          <Field label="Link video YouTube (ảnh thumbnail tự lấy từ video)">
            <input className={inputCls} placeholder="Dán link YouTube, vd https://youtu.be/abc123" value={cfg.demo.videoUrl ?? ''} onChange={(e) => patch('demo', { videoUrl: e.target.value })} />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Badge (góc dưới)"><input className={inputCls} value={cfg.demo.badgeText} onChange={(e) => patch('demo', { badgeText: e.target.value })} /></Field>
            <Field label="Meta (định dạng)"><input className={inputCls} value={cfg.demo.metaText} onChange={(e) => patch('demo', { metaText: e.target.value })} /></Field>
          </div>
        </Card>

        {/* TÍNH NĂNG */}
        <Card title="Tính năng tối ưu" desc="Icon cố định theo thứ tự (tối đa 6 cái có icon)">
          <Field label="Eyebrow"><input className={inputCls} value={cfg.features.eyebrow} onChange={(e) => patch('features', { eyebrow: e.target.value })} /></Field>
          <Field label="Tiêu đề"><input className={inputCls} value={cfg.features.heading} onChange={(e) => patch('features', { heading: e.target.value })} /></Field>
          <Field label="Mô tả"><textarea rows={2} className={inputCls} value={cfg.features.subtitle} onChange={(e) => patch('features', { subtitle: e.target.value })} /></Field>
          <ListEditor
            items={cfg.features.items}
            onChange={(items) => patch('features', { items })}
            newItem={() => ({ title: '', desc: '' })}
            addLabel="Thêm tính năng"
            render={(f, p) => (
              <div className="space-y-2">
                <input className={inputCls} placeholder="Tên tính năng" value={f.title} onChange={(e) => p({ title: e.target.value })} />
                <textarea rows={2} className={inputCls} placeholder="Mô tả" value={f.desc} onChange={(e) => p({ desc: e.target.value })} />
              </div>
            )}
          />
        </Card>

        {/* BẢO MẬT */}
        <Card title="Bảo mật & Kết nối">
          <Field label="Eyebrow"><input className={inputCls} value={cfg.security.eyebrow} onChange={(e) => patch('security', { eyebrow: e.target.value })} /></Field>
          <Field label="Tiêu đề"><input className={inputCls} value={cfg.security.heading} onChange={(e) => patch('security', { heading: e.target.value })} /></Field>
          <Field label="Mô tả"><textarea rows={3} className={inputCls} value={cfg.security.subtitle} onChange={(e) => patch('security', { subtitle: e.target.value })} /></Field>
          <Field label="Các điểm bảo mật (icon cố định)">
            <ListEditor
              items={cfg.security.points}
              onChange={(points) => patch('security', { points })}
              newItem={() => ({ title: '', desc: '' })}
              addLabel="Thêm điểm"
              render={(pt, p) => (
                <div className="space-y-2">
                  <input className={inputCls} placeholder="Tiêu đề" value={pt.title} onChange={(e) => p({ title: e.target.value })} />
                  <textarea rows={2} className={inputCls} placeholder="Mô tả" value={pt.desc} onChange={(e) => p({ desc: e.target.value })} />
                </div>
              )}
            />
          </Field>
          <Field label="Dòng ghi chú (nền xanh lá)"><textarea rows={2} className={inputCls} value={cfg.security.note} onChange={(e) => patch('security', { note: e.target.value })} /></Field>
          <div className="grid grid-cols-3 gap-2">
            <Field label="Tên panel"><input className={inputCls} value={cfg.security.panelTitle} onChange={(e) => patch('security', { panelTitle: e.target.value })} /></Field>
            <Field label="Phụ đề panel"><input className={inputCls} value={cfg.security.panelSubtitle} onChange={(e) => patch('security', { panelSubtitle: e.target.value })} /></Field>
            <Field label="Nhãn 'active'"><input className={inputCls} value={cfg.security.activeLabel} onChange={(e) => patch('security', { activeLabel: e.target.value })} /></Field>
          </div>
          <Field label="Danh sách kênh">
            <ListEditor
              items={cfg.security.channels}
              onChange={(channels) => patch('security', { channels })}
              newItem={() => ({ name: '', ch: 'tiktok' as XKAiChannelKind, ready: false })}
              addLabel="Thêm kênh"
              render={(c, p) => (
                <div className="flex flex-wrap items-center gap-2">
                  <input className={`${inputCls} flex-1 min-w-[140px]`} placeholder="Tên kênh" value={c.name} onChange={(e) => p({ name: e.target.value })} />
                  <select className={`${inputCls} w-auto`} value={c.ch} onChange={(e) => p({ ch: e.target.value as XKAiChannelKind })}>
                    {CHANNEL_KINDS.map((k) => <option key={k} value={k}>{k}</option>)}
                  </select>
                  <label className="flex items-center gap-1.5 text-[12.5px] font-semibold text-slate-600">
                    <input type="checkbox" checked={c.ready} onChange={(e) => p({ ready: e.target.checked })} /> Sẵn sàng
                  </label>
                </div>
              )}
            />
          </Field>
        </Card>

        {/* BỘ SƯU TẬP */}
        <Card title="Bộ sưu tập video" desc="Mỗi thẻ: danh mục, mô tả, thời lượng, view, like, ảnh">
          <Field label="Eyebrow"><input className={inputCls} value={cfg.collection.eyebrow} onChange={(e) => patch('collection', { eyebrow: e.target.value })} /></Field>
          <Field label="Tiêu đề"><input className={inputCls} value={cfg.collection.heading} onChange={(e) => patch('collection', { heading: e.target.value })} /></Field>
          <Field label="Mô tả"><textarea rows={2} className={inputCls} value={cfg.collection.subtitle} onChange={(e) => patch('collection', { subtitle: e.target.value })} /></Field>
          <ListEditor
            items={cfg.collection.items}
            onChange={(items) => patch('collection', { items })}
            newItem={() => ({ cat: '', desc: '', dur: '0:30', views: '0', likes: '0', videoUrl: '' })}
            addLabel="Thêm video"
            render={(v, p) => (
              <div className="space-y-2">
                <input className={inputCls} placeholder="Link video YouTube (ảnh tự lấy từ video)" value={v.videoUrl ?? ''} onChange={(e) => p({ videoUrl: e.target.value })} />
                <div className="grid grid-cols-2 gap-2">
                  <input className={inputCls} placeholder="Danh mục" value={v.cat} onChange={(e) => p({ cat: e.target.value })} />
                  <input className={inputCls} placeholder="Thời lượng (0:45)" value={v.dur} onChange={(e) => p({ dur: e.target.value })} />
                </div>
                <textarea rows={2} className={inputCls} placeholder="Mô tả" value={v.desc} onChange={(e) => p({ desc: e.target.value })} />
                <div className="grid grid-cols-2 gap-2">
                  <input className={inputCls} placeholder="View (1.2M)" value={v.views} onChange={(e) => p({ views: e.target.value })} />
                  <input className={inputCls} placeholder="Like (48K)" value={v.likes} onChange={(e) => p({ likes: e.target.value })} />
                </div>
              </div>
            )}
          />
        </Card>

        {/* CTA */}
        <Card title="CTA cuối trang">
          <Field label="Eyebrow"><input className={inputCls} value={cfg.cta.eyebrow} onChange={(e) => patch('cta', { eyebrow: e.target.value })} /></Field>
          <Field label="Tiêu đề"><input className={inputCls} value={cfg.cta.heading} onChange={(e) => patch('cta', { heading: e.target.value })} /></Field>
          <Field label="Mô tả"><textarea rows={2} className={inputCls} value={cfg.cta.subtitle} onChange={(e) => patch('cta', { subtitle: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Nút chính"><input className={inputCls} value={cfg.cta.ctaPrimaryText} onChange={(e) => patch('cta', { ctaPrimaryText: e.target.value })} /></Field>
            <Field label="Nút phụ"><input className={inputCls} value={cfg.cta.ctaSecondaryText} onChange={(e) => patch('cta', { ctaSecondaryText: e.target.value })} /></Field>
          </div>
        </Card>
      </div>

      <div className="flex justify-end gap-2 pb-4">{SaveBtn}</div>
    </div>
  )
}
