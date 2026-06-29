'use client'

import { useState } from 'react'

export default function StudioImage({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false)

  if (err || !src) {
    return (
      <div
        className="flex aspect-[16/10] w-full items-center justify-center rounded-[12px] border"
        style={{ borderColor: 'rgba(7,27,47,.08)', background: 'radial-gradient(120% 120% at 30% 20%,#0a2342,#071B2F)' }}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl text-[22px] text-white" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>▶</div>
          <span className="font-mono text-[13px] text-[#9fb0c2]">Ảnh giao diện phần mềm MKT Viral</span>
        </div>
      </div>
    )
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className="block w-full rounded-[12px] border" style={{ borderColor: 'rgba(7,27,47,.08)' }} />
  )
}
