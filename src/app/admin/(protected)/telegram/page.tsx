'use client'

import { useEffect, useState } from 'react'
import {
  adminGetTelegramConfig,
  adminUpdateTelegramConfig,
  adminTestTelegram,
} from '@/lib/api/admin'
import AdminPageHeader from '@/components/admin/AdminPageHeader'

const inputCls =
  'w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400'

export default function TelegramSettingsPage() {
  const [enabled, setEnabled] = useState(false)
  const [chatId, setChatId] = useState('')
  const [botToken, setBotToken] = useState('') // để trống = giữ token cũ
  const [hasToken, setHasToken] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const [saving, setSaving] = useState(false)
  const [testing, setTesting] = useState(false)
  const [msg, setMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  useEffect(() => {
    adminGetTelegramConfig()
      .then((res) => {
        const d = res.data || {}
        setEnabled(!!d.enabled)
        setChatId(d.chatId || '')
        setHasToken(!!d.hasToken)
      })
      .catch(() => {
        // chưa cấu hình lần nào (404) → giữ mặc định trống
      })
      .finally(() => setLoaded(true))
  }, [])

  async function handleSave() {
    if (saving) return
    setSaving(true)
    setMsg(null)
    try {
      const res = await adminUpdateTelegramConfig({
        enabled,
        chatId: chatId.trim(),
        botToken: botToken.trim() || undefined, // trống → BE giữ token cũ
      })
      setHasToken(!!res.data?.hasToken)
      setBotToken('')
      setMsg({ type: 'ok', text: 'Đã lưu cấu hình Telegram.' })
    } catch (e) {
      setMsg({ type: 'err', text: e instanceof Error ? e.message : 'Lưu thất bại.' })
    } finally {
      setSaving(false)
    }
  }

  async function handleTest() {
    if (testing) return
    setTesting(true)
    setMsg(null)
    try {
      const res = await adminTestTelegram()
      setMsg({ type: 'ok', text: res.data?.message || 'Đã gửi tin test.' })
    } catch (e) {
      setMsg({ type: 'err', text: e instanceof Error ? e.message : 'Gửi test thất bại.' })
    } finally {
      setTesting(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <AdminPageHeader
        title="Tích hợp Telegram"
        description="Tự động gửi thông tin khách đăng ký (lead) về nhóm/chat Telegram của bạn."
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

      {/* Cấu hình */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-5">
        {/* bật/tắt */}
        <label className="flex items-center justify-between gap-4">
          <span>
            <span className="block text-sm font-semibold text-slate-900">Bật gửi lead về Telegram</span>
            <span className="block text-xs text-slate-400">Khi bật, mỗi lead đăng ký sẽ được gửi ngay vào chat.</span>
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            onClick={() => setEnabled((v) => !v)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${enabled ? 'bg-indigo-600' : 'bg-slate-300'}`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${enabled ? 'left-0.5 translate-x-5' : 'left-0.5'}`}
            />
          </button>
        </label>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">
            Bot Token <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={botToken}
            onChange={(e) => setBotToken(e.target.value)}
            placeholder={hasToken ? '•••••••••• (đã lưu — để trống nếu không đổi)' : 'VD: 123456789:ABCdef...'}
            className={inputCls}
            autoComplete="new-password"
          />
          <p className="mt-1 text-xs text-slate-400">
            {hasToken
              ? 'Token đã được lưu (ẩn vì lý do bảo mật). Để trống nếu không muốn thay đổi.'
              : 'Lấy từ @BotFather sau khi tạo bot.'}
          </p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">
            Chat ID <span className="text-red-500">*</span>
          </label>
          <input
            value={chatId}
            onChange={(e) => setChatId(e.target.value)}
            placeholder="VD: -1001234567890 (nhóm) hoặc 123456789 (cá nhân)"
            className={inputCls}
          />
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={handleTest}
            disabled={testing}
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-100 disabled:opacity-50 transition-colors"
          >
            {testing ? 'Đang gửi...' : 'Gửi tin test'}
          </button>
          <span className="text-xs text-slate-400">Lưu trước, rồi bấm để kiểm tra kết nối.</span>
        </div>
      </div>

      {/* Hướng dẫn */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
        <h3 className="mb-2 font-bold text-slate-900">Cách lấy Bot Token & Chat ID</h3>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Mở Telegram, tìm <b>@BotFather</b> → gõ <code className="rounded bg-slate-200 px-1">/newbot</code> → đặt tên → nhận <b>Bot Token</b>.</li>
          <li>Tạo 1 nhóm (hoặc dùng chat cá nhân), thêm bot bạn vừa tạo vào nhóm.</li>
          <li>Lấy <b>Chat ID</b>: thêm <b>@getidsbot</b> (hoặc @RawDataBot) vào nhóm → nó báo Chat ID. Nhóm thường có dạng <code className="rounded bg-slate-200 px-1">-100...</code>.</li>
          <li>Dán Token + Chat ID vào trên → <b>Lưu</b> → bấm <b>Gửi tin test</b> để kiểm tra.</li>
        </ol>
      </div>
    </div>
  )
}
