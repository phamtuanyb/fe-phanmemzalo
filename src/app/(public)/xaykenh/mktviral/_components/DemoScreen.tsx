'use client'

import { useState } from 'react'

function ytEmbed(url: string): string | null {
  if (!url) return null
  if (url.includes('/embed/')) return url
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|live\/))([\w-]{6,})/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : null
}

export default function DemoScreen({ videoUrl, caption }: { videoUrl: string; caption?: string }) {
  const [playing, setPlaying] = useState(false)
  const embed = ytEmbed(videoUrl)

  return (
    <div className="relative aspect-video overflow-hidden rounded-[10px]" style={{ background: 'radial-gradient(120% 120% at 30% 20%,#0a2342,#071B2F)' }}>
      {playing && embed ? (
        <iframe
          src={`${embed}?autoplay=1`}
          title="Demo MKT Viral"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <button
            type="button"
            onClick={() => embed && setPlaying(true)}
            aria-label="Phát video demo"
            className={`absolute left-1/2 top-1/2 grid h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white transition-transform hover:scale-105 ${embed ? 'cursor-pointer' : 'cursor-default'}`}
            style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)', boxShadow: '0 14px 38px rgba(10,132,255,.5)' }}
          >
            <span className="ml-1 text-[26px]">▶</span>
          </button>
          {caption && <span className="absolute bottom-3.5 left-4 font-mono text-[12px] text-[#9fb0c2]">{caption}</span>}
        </>
      )}
    </div>
  )
}
