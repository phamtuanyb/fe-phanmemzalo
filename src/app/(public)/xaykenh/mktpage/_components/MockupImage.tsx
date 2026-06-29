'use client'

import { useState } from 'react'

// Ảnh chụp giao diện phần mềm; nếu thiếu thì hiện placeholder thay vì vỡ ảnh.
export default function MockupImage({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false)

  if (err || !src) {
    return (
      <div className="grid aspect-[16/9] w-full place-items-center" style={{ background: 'linear-gradient(135deg,#EAF3FF,#F7FAFF)' }}>
        <div className="text-center">
          <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="m21 15-5-5L5 21" /><circle cx="8.5" cy="8.5" r="1.5" /></svg>
          </div>
          <span className="px-4 text-[13px] text-[#94A3B8]">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className="block h-auto w-full" />
  )
}
