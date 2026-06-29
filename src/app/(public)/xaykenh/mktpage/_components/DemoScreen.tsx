'use client'

import { useState } from 'react'

function ytId(url: string): string | null {
  if (!url) return null
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|live\/|embed\/))([\w-]{6,})/)
  return m ? m[1] : null
}

export default function DemoScreen({ videoUrl, label }: { videoUrl: string; label?: string }) {
  const [playing, setPlaying] = useState(false)
  const [lvl, setLvl] = useState(0)
  const id = ytId(videoUrl)
  const embed = id ? `https://www.youtube.com/embed/${id}` : null
  const thumb = id ? (lvl === 0 ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : lvl === 1 ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '') : ''

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-[24px] border border-white/10 shadow-[0_50px_100px_-34px_rgba(7,27,47,.6)]"
      style={{ background: 'linear-gradient(160deg,#0B2034,#071B2F)' }}
    >
      {playing && embed ? (
        <iframe
          src={`${embed}?autoplay=1&rel=0`}
          title="Video demo MKT Page"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button type="button" onClick={() => embed && setPlaying(true)} aria-label="Phát video demo" className="group absolute inset-0 grid h-full w-full place-items-center">
          {thumb && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={thumb} alt="Ảnh xem trước video demo MKT Page" loading="lazy" onError={() => setLvl((l) => l + 1)} className="absolute inset-0 h-full w-full object-cover opacity-50" />
          )}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 45%,rgba(10,132,255,.4),rgba(7,27,47,.55) 70%)' }} />
          <div className="absolute left-4 top-4 flex gap-1.5">
            <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" /><span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" /><span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
          </div>
          <div className="relative flex flex-col items-center gap-4">
            <span className="grid h-[84px] w-[84px] place-items-center rounded-full bg-white/95 shadow-[0_16px_40px_rgba(10,132,255,.6)] transition-transform group-hover:scale-105">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#0A84FF" style={{ marginLeft: 5 }}><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="text-[15px] font-semibold text-white">{label || 'Xem demo'}</span>
          </div>
        </button>
      )}
    </div>
  )
}
