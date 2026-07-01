'use client'
import { submitContact } from '@/lib/api/public';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const NEEDS = [
  'Phần mềm Zalo Marketing (ZMarketing)',
  "Phần mềm Xây kênh AI",
  "Phần mềm MKT Viral",
  "Phần mềm MKT Page",
  "Phần mềm MKT Affiliate",
  'Khác',
]

type FormValues = {
  name: string
  phone: string
  email: string
  company: string
  need: string
  description: string
}

export default function TrialModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('[data-open-trial-modal]')
      if (target) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
    }
  }, [open])

  function close() {
    setOpen(false)
    setSubmitted(false)
    reset()
  }

  async function onSubmit(data: FormValues) {
    setLoading(true)
    try {
      await submitContact({
        name: data.name,
        phone: data.phone,
        email: data.email,
        company: data.company,
        need: data.need,
        description: data.description,
        source: 'Popup dùng thử',
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div className="bg-white rounded-[20px] w-full max-w-[620px] max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-8">
          <h2 className="text-[22px] font-extrabold text-vs-dark mb-2 leading-[1.3] pr-8">
            Nói chuyện 30 phút – biết ngay có làm được không
          </h2>
          <p className="text-[13.5px] text-vs-gray-600 mb-6 leading-[1.65]">
            Không ràng buộc. Không phí tư vấn. MKT Software sẽ phân tích bài toán và đề xuất giải pháp phù hợp nhất — dù bạn có chọn chúng tôi hay không.
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-[48px] mb-4">✅</div>
              <h3 className="text-[20px] font-extrabold text-vs-dark mb-2">Đã nhận yêu cầu!</h3>
              <p className="text-[14px] text-vs-gray-600 leading-[1.65]">
                Đội ZMarketing sẽ liên hệ với bạn trong vòng 2 giờ làm việc.
              </p>
              <button
                onClick={close}
                className="mt-6 px-6 py-3 bg-vs-blue text-white rounded-lg font-bold text-[14px] hover:bg-vs-blue-dark transition-colors"
              >
                Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Bắt buộc' })}
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors"
                  />
                  {errors.name && <p className="text-[12px] text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Bắt buộc',
                      pattern: { value: /^0\d{9}$/, message: 'Không hợp lệ' },
                    })}
                    type="tel"
                    placeholder="0912 345 678"
                    className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors"
                  />
                  {errors.phone && <p className="text-[12px] text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="email@doanhnghiep.vn"
                  className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Tên doanh nghiệp</label>
                <input
                  {...register('company')}
                  type="text"
                  placeholder="Công ty / Cửa hàng của bạn"
                  className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">
                  Bạn đang cần <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('need', { required: 'Vui lòng chọn' })}
                  className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors"
                >
                  <option value="">Chọn nhu cầu...</option>
                  {NEEDS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                {errors.need && <p className="text-[12px] text-red-500 mt-1">{errors.need.message}</p>}
              </div>

              <div className="mb-5">
                <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Mô tả bài toán của bạn</label>
                <textarea
                  {...register('description')}
                  placeholder="Doanh nghiệp bạn đang gặp vấn đề gì? Quy mô bao nhiêu người? Đang dùng công cụ nào?..."
                  rows={4}
                  className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-vs-blue text-white rounded-lg text-[15px] font-extrabold cursor-pointer border-none flex items-center justify-center gap-2 hover:bg-vs-blue-dark transition-all disabled:opacity-60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
                {loading ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}
              </button>

              <p className="text-[11.5px] text-gray-400 text-center mt-3 leading-[1.5]">
                MKT Software phản hồi trong vòng 2 giờ làm việc. Thông tin của bạn được bảo mật tuyệt đối.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
