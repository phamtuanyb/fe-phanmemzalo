'use client'

import { useEffect, useState } from 'react'
import { X, Loader2, CheckCircle2, Rocket, User, Phone, Mail, MessageSquare } from 'lucide-react'
import { submitContact } from '@/lib/api/public'

type Props = {
  children: React.ReactNode
  className?: string
  /** Tên sản phẩm gắn vào lead để biết khách bấm từ đâu */
  source?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function TrialModalButton({ children, className, source = 'Xây Kênh', defaultOpen = false }: Props & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({})

  // Khoá scroll nền + đóng bằng phím Esc khi mở popup
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const close = () => {
    setOpen(false)
    // reset nhẹ sau khi đóng để lần mở sau sạch
    setTimeout(() => {
      setStatus('idle')
      setErrorMsg('')
      setErrors({})
    }, 200)
  }

  const validate = () => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'Vui lòng nhập họ tên'
    if (!form.phone.trim()) e.phone = 'Vui lòng nhập số điện thoại'
    else if (!/^0\d{9}$/.test(form.phone.trim())) e.phone = 'Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0)'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Email không hợp lệ'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (status === 'loading') return
    if (!validate()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      // `need` phải khớp enum ContactNeed của BE → dùng 'Phần mềm marketing'.
      // Ngữ cảnh "Dùng thử + tên sản phẩm" được gắn vào description để lead biết nguồn.
      const note = form.message.trim()
      await submitContact({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        need: 'Phần mềm marketing',
        description: `[Dùng thử miễn phí — ${source}]${note ? ` ${note}` : ''}`,
        source: `Popup dùng thử — ${source}`,
      })
      setStatus('success')
      setForm({ name: '', phone: '', email: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Gửi không thành công, vui lòng thử lại.')
    }
  }

  const inputCls =
    'w-full py-3 pr-4 pl-10 border-[1.5px] border-vs-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors'
  const labelCls = 'mb-1.5 block text-[13px] font-semibold text-vs-dark'
  const iconCls = 'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-vs-gray-400'

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
          />

          {/* card */}
          <div className="relative z-10 w-full max-w-[440px] overflow-hidden rounded-2xl bg-white text-left shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
            <button
              type="button"
              onClick={close}
              aria-label="Đóng"
              className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full text-vs-gray-400 transition-colors hover:bg-vs-bg hover:text-vs-dark"
            >
              <X className="h-5 w-5" />
            </button>

            {status === 'success' ? (
              <div className="px-7 py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-9 w-9 text-green-500" />
                </div>
                <h3 className="text-[20px] font-extrabold text-vs-dark">Đã nhận thông tin!</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-vs-gray-600">
                  Cảm ơn bạn. Đội ngũ sẽ liên hệ trong thời gian sớm nhất để hỗ trợ dùng thử.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 inline-flex items-center justify-center rounded-vs bg-vs-blue px-6 py-2.5 text-[14px] font-bold text-white transition-all hover:bg-vs-blue-dark"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <>
                {/* header gradient */}
                <div className="bg-gradient-to-br from-vs-blue-light via-white to-orange-50 px-7 pb-5 pt-7">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-vs-orange text-white shadow-[0_6px_16px_rgba(244,121,32,0.4)]">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-extrabold leading-snug text-vs-dark">
                    Đăng ký dùng thử miễn phí
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.5] text-vs-gray-600">
                    Để lại thông tin, đội ngũ sẽ liên hệ tư vấn & kích hoạt dùng thử cho bạn.
                  </p>
                </div>

                {/* body */}
                <div className="px-7 pb-7 pt-5">
                  <form onSubmit={onSubmit} className="space-y-3.5" noValidate>
                    <div>
                      <label className={labelCls}>
                        Họ tên <span className="text-vs-orange">*</span>
                      </label>
                      <div className="relative">
                        <User className={iconCls} />
                        <input
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Nguyễn Văn A"
                          className={inputCls}
                        />
                      </div>
                      {errors.name && <div className="mt-1 text-[12.5px] text-red-500">{errors.name}</div>}
                    </div>

                    <div>
                      <label className={labelCls}>
                        Số điện thoại <span className="text-vs-orange">*</span>
                      </label>
                      <div className="relative">
                        <Phone className={iconCls} />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="0912 345 678"
                          className={inputCls}
                        />
                      </div>
                      {errors.phone && <div className="mt-1 text-[12.5px] text-red-500">{errors.phone}</div>}
                    </div>

                    <div>
                      <label className={labelCls}>Email</label>
                      <div className="relative">
                        <Mail className={iconCls} />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="email@cuaban.vn"
                          className={inputCls}
                        />
                      </div>
                      {errors.email && <div className="mt-1 text-[12.5px] text-red-500">{errors.email}</div>}
                    </div>

                    <div>
                      <label className={labelCls}>Lời nhắn</label>
                      <div className="relative">
                        <MessageSquare className="pointer-events-none absolute left-3 top-3.5 h-[18px] w-[18px] text-vs-gray-400" />
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Bạn muốn dùng thử sản phẩm nào? Nhu cầu của bạn là gì?..."
                          rows={3}
                          className={`${inputCls} resize-y`}
                        />
                      </div>
                    </div>

                    {status === 'error' && (
                      <div className="rounded-lg bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="mt-1 flex w-full items-center justify-center gap-2 rounded-vs bg-vs-orange px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_22px_rgba(244,121,32,0.35)] transition-all hover:bg-vs-orange-dark disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Đang gửi...
                        </>
                      ) : (
                        'Gửi đăng ký'
                      )}
                    </button>

                    <p className="pt-1 text-center text-[11.5px] leading-[1.5] text-vs-gray-400">
                      Thông tin của bạn được bảo mật, chỉ dùng để liên hệ tư vấn.
                    </p>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
