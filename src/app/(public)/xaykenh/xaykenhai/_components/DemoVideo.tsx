'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { ytEmbed, ytThumb, withAutoplay, isDirectVideo, isPlayable } from './video'

type Props = {
  videoUrl?: string
  image?: string
  badgeText?: string
  metaText?: string
}

export default function DemoVideo({ videoUrl, image, badgeText, metaText }: Props) {
  const [playing, setPlaying] = useState(false)
  const embed = ytEmbed(videoUrl)
  const playable = isPlayable(videoUrl)
  const poster = ytThumb(videoUrl) || image || ''

  return (
    <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border border-vs-gray-200 bg-black shadow-vs-lg">
      {playing && embed ? (
        <iframe
          src={withAutoplay(embed)}
          title="Demo Xây Kênh AI"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : playing && isDirectVideo(videoUrl) ? (
        <video src={videoUrl} controls autoPlay className="absolute inset-0 h-full w-full object-contain" />
      ) : (
        <button
          type="button"
          onClick={() => playable && setPlaying(true)}
          aria-label="Phát demo"
          className={`group absolute inset-0 h-full w-full ${playable ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {poster ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={poster} alt="Demo Xây Kênh AI" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <span className="absolute inset-0 bg-gradient-to-br from-vs-blue via-vs-blue-dark to-vs-navy" />
          )}
          <span className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55" />
          <span className="absolute left-1/2 top-1/2 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition-transform group-hover:scale-105">
            <Play className="ml-1 h-8 w-8 fill-vs-blue text-vs-blue" />
          </span>
          <span className="absolute bottom-5 left-6 flex items-center gap-2.5 text-white">
            {badgeText && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> {badgeText}
              </span>
            )}
            {metaText && <span className="rounded-lg bg-black/35 px-2.5 py-1 font-mono text-[12.5px]">{metaText}</span>}
          </span>
        </button>
      )}
    </div>
  )
}
