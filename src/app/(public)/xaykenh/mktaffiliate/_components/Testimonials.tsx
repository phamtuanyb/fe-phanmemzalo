'use client'

import { useState } from 'react'

type Item = { quote: string; name: string; role: string; initials: string }

const ITEMS: Item[] = [
  { quote: 'Trước đây team mình quản lý 200 tài khoản trên file Excel. Chuyển sang MKT Affiliate, mọi thứ về một Dashboard — đăng đa nền tảng và gắn link tự động, đỡ hẳn 70% thời gian vận hành.', name: 'Nguyễn Hoàng', role: 'Founder · Mega Deal Agency', initials: 'NH' },
  { quote: 'Mình là affiliate cá nhân, một mình chạy gần 50 nick TikTok. Tính năng hàng đợi đăng video giúp mình lên nội dung đều mỗi ngày mà không kiệt sức. Doanh số tăng gấp đôi sau 2 tháng.', name: 'Trần Mai', role: 'Affiliate Creator', initials: 'TM' },
  { quote: 'Báo cáo click, CTR, conversion theo từng chiến dịch là thứ mình cần nhất. Giờ mình biết chính xác nội dung nào ra đơn để nhân bản nó lên hàng trăm tài khoản.', name: 'Lê Phong', role: 'Trưởng nhóm Media · Shop Mỹ phẩm', initials: 'LP' },
  { quote: 'Doanh nghiệp mình scale lên 1.000+ tài khoản với proxy riêng cho từng nhóm. Hệ thống ổn định, phân quyền rõ ràng và đội hỗ trợ phản hồi rất nhanh.', name: 'Vũ Quân', role: 'Giám đốc Marketing · TMĐT', initials: 'VQ' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((p) => (p + d + ITEMS.length) % ITEMS.length)

  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
          {ITEMS.map((t) => (
            <div key={t.name} className="min-w-full px-2">
              <div className="rounded-[20px] border bg-white p-[34px] shadow-[0_10px_30px_-16px_rgba(12,33,56,.18)]" style={{ borderColor: '#E4EAF3' }}>
                <p className="text-[clamp(17px,2vw,20px)] font-medium leading-[1.6] text-[#1F2D40]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-[22px] flex items-center justify-center gap-[13px]">
                  <span className="grid h-[46px] w-[46px] place-items-center rounded-full font-bold text-white" style={{ background: 'linear-gradient(135deg,#0A84FF,#FF7A00)' }}>{t.initials}</span>
                  <div className="text-left">
                    <div className="font-bold text-[#0C2138]">{t.name}</div>
                    <div className="text-[13px] text-[#6B7C95]">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2.5">
        <button type="button" onClick={() => go(-1)} aria-label="Trước" className="grid h-[38px] w-[38px] place-items-center rounded-full border bg-white text-[#0C2138] shadow-[0_1px_3px_rgba(12,33,56,.06)] transition-colors hover:border-[#0A84FF]" style={{ borderColor: '#DDE4EE' }}>‹</button>
        <div className="flex items-center gap-[7px]">
          {ITEMS.map((_, d) => (
            <button key={d} type="button" onClick={() => setI(d)} aria-label={`Slide ${d + 1}`} className="h-[9px] rounded-full transition-all" style={{ width: d === i ? 26 : 9, background: d === i ? '#0A84FF' : '#C3CEDD' }} />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Sau" className="grid h-[38px] w-[38px] place-items-center rounded-full border bg-white text-[#0C2138] shadow-[0_1px_3px_rgba(12,33,56,.06)] transition-colors hover:border-[#0A84FF]" style={{ borderColor: '#DDE4EE' }}>›</button>
      </div>
    </div>
  )
}
