"use client"

import PageHero from '@/components/common/PageHero';
import { getContactConfig, submitContact } from '@/lib/api/public';
import type { ContactConfig } from '@/types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const FALLBACK_CONFIG: ContactConfig = {
  form: {
    heading: 'Nói chuyện 30 phút — biết ngay có làm được không',
    description:
      'Không ràng buộc. Không phí tư vấn. MKT Software sẽ phân tích bài toán và đề xuất giải pháp phù hợp nhất — dù bạn có chọn chúng tôi hay không.',
    needs: [
      "Phần mềm Xây kênh AI",
      "Phần mềm MKT Viral",
      "Phần mềm MKT Page",
      "Phần mềm MKT Affiliate",
      'Khác',
    ],
    submitText: 'Gửi yêu cầu tư vấn',
    noteText:
      'MKT Software phản hồi trong vòng 2 giờ làm việc. Thông tin của bạn được bảo mật tuyệt đối.',
    successHeading: 'Đã nhận yêu cầu!',
    successText: 'Đội MKT Software sẽ liên hệ với bạn trong vòng 2 giờ làm việc.',
  },
  quickContact: {
    heading: 'Liên hệ ngay — không cần chờ',
    description: 'Cần trao đổi nhanh? Nhắn tin hoặc gọi trực tiếp đội tư vấn MKT Software.',
    zaloText: 'Chat Zalo OA ngay',
    zaloHref: 'https://zalo.me/0862757222',
    phoneText: 'Gọi: 0862 757 222',
    phoneHref: 'tel:+84862757222',
  },
  info: {
    sectionTitle: 'Thông tin liên hệ',
    offices: [{ name: 'Văn phòng Hà Nội', address: '35 Lê Văn Thiêm, Thanh Xuân, Hà Nội' }],
    hotlines: ['0862 757 222'],
    emails: ['tuanpn@mktsoftware.vn'],
  },
  workingHours: {
    sectionTitle: 'Giờ làm việc',
    slots: [
      { day: 'Thứ 2 – 6', time: '8:00 – 18:00' },
      { day: 'Thứ 7', time: '8:00 – 12:00' },
      { day: 'Chủ nhật', time: 'Nghỉ' },
      { day: 'Zalo / Email', time: '24/7 auto' },
    ],
    note: 'Ngoài giờ hành chính: nhắn Zalo, đội tư vấn phản hồi trong vòng 30 phút (7:00–22:00 tất cả các ngày).',
  },
}

type FormValues = {
  name: string
  phone: string
  email: string
  company: string
  need: string
  message: string
}

export default function LienHePage() {
  const [config, setConfig] = useState<ContactConfig>(FALLBACK_CONFIG)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()

  useEffect(() => {
    getContactConfig()
      .then((res) => { if (res.data) setConfig(res.data) })
      .catch(() => { /* keep fallback */ })
  }, [])

  async function onSubmit(data: FormValues) {
    const payload = {
      name: data.name || '',
      phone: data.phone || '',
      email: data.email || '',
      company: data.company || '',
      need: data.need || '',
      description: data.message || '',
      source: 'Trang Liên hệ',
    }

    setLoading(true)
    try {
      const res = await submitContact(payload)
      const msg = res?.data?.message || config.form.successText
      setServerMessage(msg)
      setSubmitted(true)
      reset()
    } catch {
      setServerMessage('Không thể gửi yêu cầu. Vui lòng thử lại sau.')
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const { form, quickContact, info, workingHours } = config

  return (
    <>
      <PageHero
        title="Liên Hệ MKT Software"
        titleEm="Hệ"
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Liên hệ' }]}
      />

      <section className="py-16 bg-vs-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">

            <div className="bg-white rounded-[20px] p-10 shadow-vs-md">
              <h2 className="text-[24px] font-extrabold text-vs-dark mb-2">{form.heading}</h2>
              <p className="text-[14.5px] text-vs-gray-600 mb-8 leading-[1.65] whitespace-pre-line">{form.description}</p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-[48px] mb-4">✅</div>
                  <h3 className="text-[20px] font-extrabold text-vs-dark mb-2.5">{form.successHeading}</h3>
                  <p className="text-[15px] text-vs-gray-600 leading-[1.65]">{serverMessage ?? form.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[18px]">

                    <div>
                      <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Họ và tên <span className="text-vs-orange">*</span></label>
                      <input {...register('name', { required: 'Họ và tên là bắt buộc' })} type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 border-[1.5px] border-vs-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors" />
                      {errors.name && <div className="text-[13px] text-red-500 mt-1">{errors.name.message}</div>}
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Số điện thoại <span className="text-vs-orange">*</span></label>
                      <input {...register('phone', { required: 'Số điện thoại là bắt buộc', pattern: { value: /^0\d{9}$/, message: 'Số điện thoại không hợp lệ' } })} type="tel" placeholder="0912 345 678" className="w-full px-4 py-3 border-[1.5px] border-vs-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors" />
                      {errors.phone && <div className="text-[13px] text-red-500 mt-1">{errors.phone.message}</div>}
                    </div>

                  </div>

                  <div className="mb-[18px]">
                    <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Email</label>
                    <input {...register('email', { required: 'Email là bắt buộc', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email không hợp lệ' } })} type="email" placeholder="email@doanhnghiep.vn" className="w-full px-4 py-3 border-[1.5px] border-vs-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors" />
                    {errors.email && <div className="text-[13px] text-red-500 mt-1">{errors.email.message}</div>}
                  </div>

                  <div className="mb-[18px]">
                    <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Tên doanh nghiệp</label>
                    <input {...register('company', { required: 'Tên doanh nghiệp là bắt buộc' })} type="text" placeholder="Công ty / Cửa hàng của bạn" className="w-full px-4 py-3 border-[1.5px] border-vs-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors" />
                    {errors.company && <div className="text-[13px] text-red-500 mt-1">{errors.company.message}</div>}
                  </div>

                  <div className="mb-[18px]">
                    <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Bạn đang cần <span className="text-vs-orange">*</span></label>
                    <select {...register('need', { required: 'Vui lòng chọn nhu cầu' })} className="w-full px-4 py-3 border-[1.5px] border-vs-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors">
                      <option value="" disabled defaultValue="">Chọn nhu cầu...</option>
                      {form.needs.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                    {errors.need && <div className="text-[13px] text-red-500 mt-1">{errors.need.message}</div>}
                  </div>

                  <div className="mb-[18px]">
                    <label className="block text-[13px] font-bold text-vs-gray-700 mb-1.5">Mô tả bài toán của bạn</label>
                    <textarea {...register('message', { required: 'Vui lòng mô tả ngắn gọn bài toán' })} placeholder="Doanh nghiệp bạn đang gặp vấn đề gì? Quy mô bao nhiêu người? Đang dùng công cụ nào?..." rows={4} className="w-full px-4 py-3 border-[1.5px] border-vs-gray-200 rounded-lg text-[14px] text-vs-dark bg-white outline-none focus:border-vs-blue transition-colors resize-y" />
                    {errors.message && <div className="text-[13px] text-red-500 mt-1">{errors.message.message}</div>}
                  </div>

                  <button type="submit" disabled={loading} className="w-full py-4 bg-vs-blue text-white rounded-lg text-[16px] font-extrabold cursor-pointer border-none flex items-center justify-center gap-2.5 hover:bg-vs-blue-dark hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(30,91,198,0.25)] transition-all mt-2 disabled:opacity-60">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" /></svg>
                    {loading ? 'Đang gửi...' : form.submitText}
                  </button>

                  <p className="text-[12px] text-vs-gray-400 text-center mt-3 leading-[1.5]">{form.noteText}</p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              <div className="bg-vs-gradient rounded-2xl p-7 text-center">
                <h3 className="text-[17px] font-extrabold text-white mb-2">{quickContact.heading}</h3>
                <p className="text-[13px] text-white/75 mb-5 leading-[1.5] whitespace-pre-line">{quickContact.description}</p>
                <div className="flex flex-col gap-2.5">
                  <a href={quickContact.zaloHref} className="flex items-center gap-2.5 px-5 py-3.5 rounded-[10px] bg-white/15 text-white border border-white/20 font-extrabold text-[14px] no-underline hover:bg-white/25 transition-all">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    {quickContact.zaloText}
                  </a>
                  <a href={quickContact.phoneHref} className="flex items-center gap-2.5 px-5 py-3.5 rounded-[10px] bg-vs-orange text-white font-extrabold text-[14px] no-underline hover:bg-vs-orange-dark transition-all">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    {quickContact.phoneText}
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-vs">
                <div className="text-[16px] font-extrabold text-vs-dark mb-5 flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-vs-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {info.sectionTitle}
                </div>

                {info.offices.map((office, i) => (
                  <div key={i} className="flex items-start gap-3.5 mb-[18px]">
                    <div className="w-11 h-11 rounded-xl bg-vs-blue-light flex items-center justify-center flex-shrink-0 text-vs-blue">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <strong className="text-[14px] font-extrabold text-vs-dark block mb-0.5">{office.name}</strong>
                      <span className="text-[13.5px] text-vs-gray-600">{office.address}</span>
                    </div>
                  </div>
                ))}

                {info.hotlines.length > 0 && (
                  <div className="flex items-start gap-3.5 mb-[18px]">
                    <div className="w-11 h-11 rounded-xl bg-vs-blue-light flex items-center justify-center flex-shrink-0 text-vs-blue">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <strong className="text-[14px] font-extrabold text-vs-dark block mb-0.5">Hotline tư vấn</strong>
                      {info.hotlines.map((tel) => (
                        <a
                          key={tel}
                          href={`tel:${tel.replace(/\s/g, '')}`}
                          className="text-[13.5px] text-vs-gray-600 no-underline block hover:text-vs-blue"
                        >
                          {tel}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {info.emails.length > 0 && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-vs-orange-light flex items-center justify-center flex-shrink-0 text-vs-orange">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div>
                      <strong className="text-[14px] font-extrabold text-vs-dark block mb-0.5">Email</strong>
                      {info.emails.map((em) => (
                        <a
                          key={em}
                          href={`mailto:${em}`}
                          className="text-[13.5px] text-vs-gray-600 no-underline block hover:text-vs-blue"
                        >
                          {em}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-vs">
                <div className="text-[16px] font-extrabold text-vs-dark mb-5 flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-vs-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  {workingHours.sectionTitle}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {workingHours.slots.map((h, i) => (
                    <div key={i} className="bg-vs-bg rounded-lg px-3.5 py-3">
                      <div className="text-[12px] font-bold text-vs-gray-400 uppercase tracking-[0.06em] mb-1">{h.day}</div>
                      <div className={`text-[14px] font-extrabold ${h.time.toLowerCase() === 'nghỉ' ? 'text-vs-gray-400' : 'text-vs-dark'}`}>{h.time}</div>
                    </div>
                  ))}
                </div>
                {workingHours.note && (
                  <p className="text-[12.5px] text-vs-gray-400 mt-4 leading-[1.5]">{workingHours.note}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
