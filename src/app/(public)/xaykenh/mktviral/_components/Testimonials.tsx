'use client'

import { useState } from 'react'

export type Testimonial = { quote: string; name: string; role: string; avatar: string }

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0)
  const t = items[i]
  const prev = () => setI((p) => (p - 1 + items.length) % items.length)
  const next = () => setI((p) => (p + 1) % items.length)

  return (
    <>
      <div className="mv-card relative min-h-[230px] rounded-3xl bg-white p-8 sm:p-12 shadow-[0_24px_60px_rgba(7,27,47,.10)] border border-[rgba(7,27,47,.08)]">
        <div className="h-7 text-[60px] leading-none text-[rgba(10,132,255,.3)]">”</div>
        <p className="mb-7 min-h-[90px] text-[clamp(19px,2.2vw,26px)] font-medium leading-[1.5] text-[#071B2F]">{t.quote}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.avatar} alt={t.name} loading="lazy" className="h-[50px] w-[50px] rounded-full border-2 border-[rgba(10,132,255,.35)] object-cover" />
            <div>
              <div className="text-[16px] font-semibold text-[#071B2F]">{t.name}</div>
              <div className="text-[13px] text-[#8190A0]">{t.role}</div>
            </div>
          </div>
          <div className="flex gap-2.5">
            <button onClick={prev} aria-label="Trước" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(7,27,47,.12)] bg-white text-[#071B2F] transition-colors hover:bg-[#F4F8FD]">‹</button>
            <button onClick={next} aria-label="Sau" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(7,27,47,.12)] bg-white text-[#071B2F] transition-colors hover:bg-[#F4F8FD]">›</button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Đánh giá ${idx + 1}`}
            className={`h-[9px] rounded-full transition-all ${idx === i ? 'w-6 bg-[#0A84FF]' : 'w-[9px] bg-[rgba(7,27,47,.15)]'}`}
          />
        ))}
      </div>
    </>
  )
}
