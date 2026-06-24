'use client'

import { useEffect, useState } from 'react'
import { adminGetTrackingConfig, adminUpdateTrackingConfig } from '@/lib/api/admin'
import AdminPageHeader from '@/components/admin/AdminPageHeader'

const inputCls =
  'w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400'

export default function TrackingSettingsPage() {
  const [ga4Id, setGa4Id] = useState('')
  const [searchConsole, setSearchConsole] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  useEffect(() => {
    adminGetTrackingConfig()
      .then((res) => {
        const d = res.data || {}
        setGa4Id(d.ga4Id || '')
        setSearchConsole(d.searchConsoleVerification || '')
      })
      .catch(() => {
        /* chưa cấu hình lần nào (404) → để trống */
      })
      .finally(() => setLoaded(true))
  }, [])

  function extractGa4(raw: string): string {
    const v = raw.trim()
    const m = v.match(/G-[A-Z0-9]+/i)
    return m ? m[0].toUpperCase() : v
  }
  function extractSc(raw: string): string {
    // Cho phép dán cả thẻ <meta ... content="xxx"> → tự lấy phần content
    const v = raw.trim()
    const m = v.match(/content=["']([^"']+)["']/i)
    return m ? m[1] : v
  }

  async function handleSave() {
    if (saving) return
    setSaving(true)
    setMsg(null)
    try {
      const payload = {
        ga4Id: extractGa4(ga4Id),
        searchConsoleVerification: extractSc(searchConsole),
      }
      await adminUpdateTrackingConfig(payload)
      setGa4Id(payload.ga4Id)
      setSearchConsole(payload.searchConsoleVerification)
      setMsg({ type: 'ok', text: 'Đã lưu. (Người dùng public cần ~1 phút để áp dụng do cache).' })
    } catch (e) {
      setMsg({ type: 'err', text: e instanceof Error ? e.message : 'Lưu thất bại.' })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <AdminPageHeader
        title="Google Analytics & Search Console"
        description="Nhập mã GA4 và mã xác minh Search Console để theo dõi truy cập & SEO."
        showBack={false}
      >
        <button
          onClick={handleSave}
          disabled={saving || !loaded}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors"
        >
          {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </AdminPageHeader>

      {msg && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            msg.type === 'ok'
              ? 'border-green-200 bg-green-50 text-green-700'
              : 'border-red-200 bg-red-50 text-red-600'
          }`}
        >
          {msg.text}
        </div>
      )}

      {/* Google Analytics */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Google Analytics 4 (GA4)</h3>
          <p className="text-xs text-slate-400">Theo dõi lượt truy cập, hành vi người dùng.</p>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">Measurement ID</label>
          <input
            value={ga4Id}
            onChange={(e) => setGa4Id(e.target.value)}
            placeholder="G-XXXXXXXXXX"
            className={inputCls}
          />
          <p className="mt-1 text-xs text-slate-400">
            Dạng <code className="rounded bg-slate-100 px-1">G-XXXXXXXXXX</code>. Lấy ở: GA4 → Admin →
            Data Streams → chọn stream web → <b>Measurement ID</b>. Để trống = tắt tracking.
          </p>
        </div>
      </div>

      {/* Search Console */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Google Search Console</h3>
          <p className="text-xs text-slate-400">Xác minh quyền sở hữu website để theo dõi thứ hạng/SEO.</p>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">Mã xác minh (HTML tag)</label>
          <input
            value={searchConsole}
            onChange={(e) => setSearchConsole(e.target.value)}
            placeholder='Dán mã content hoặc cả thẻ <meta name="google-site-verification" ...>'
            className={inputCls}
          />
          <p className="mt-1 text-xs text-slate-400">
            Search Console → Add property → chọn xác minh <b>HTML tag</b>. Dán cả thẻ{' '}
            <code className="rounded bg-slate-100 px-1">&lt;meta ... content=&quot;...&quot;&gt;</code> hoặc chỉ phần{' '}
            <b>content</b> — hệ thống tự lấy đúng. Site sẽ tự gắn thẻ này vào{' '}
            <code className="rounded bg-slate-100 px-1">&lt;head&gt;</code> để Google xác minh.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
        <h3 className="mb-2 font-bold text-slate-900">Gợi ý</h3>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Sau khi lưu GA4: mở web public bằng tab ẩn danh → trong GA4 → Realtime sẽ thấy lượt truy cập sau ~1 phút.</li>
          <li>Search Console: lưu mã xong, quay lại Search Console bấm <b>Verify</b>. Nếu báo lỗi, đợi 1-2 phút (cache) rồi thử lại.</li>
          <li>Đổi mã bất kỳ lúc nào ở đây, không cần build lại.</li>
        </ul>
      </div>
    </div>
  )
}
