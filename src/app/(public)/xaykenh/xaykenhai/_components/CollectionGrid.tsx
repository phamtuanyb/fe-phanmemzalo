'use client'

import { useState } from 'react'
import { Play, Eye, Heart, X } from 'lucide-react'
import { ytEmbed, ytThumb, withAutoplay, isDirectVideo, isPlayable } from './video'
import type { XKAiCollectionItem } from '../config'

export default function CollectionGrid({ items }: { items: XKAiCollectionItem[] }) {
  const [active, setActive] = useState<number | null>(null)
  const cur = active != null ? items[active] : null
  const embed = cur ? ytEmbed(cur.videoUrl) : null

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((v, i) => {
          const playable = isPlayable(v.videoUrl)
          const thumb = ytThumb(v.videoUrl) || v.img || ''
          return (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-2xl border border-vs-gray-200 bg-white shadow-vs transition-all hover:-translate-y-1 hover:shadow-vs-md"
            >
              <button
                type="button"
                disabled={!playable}
                onClick={() => playable && setActive(i)}
                aria-label={playable ? `Xem video: ${v.cat}` : v.cat}
                className={`group relative block aspect-[9/13] w-full overflow-hidden ${playable ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {thumb ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={thumb} alt={v.cat} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <span className="absolute inset-0 bg-gradient-to-br from-vs-blue via-vs-blue-dark to-vs-navy" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />
                <span className="absolute left-3 top-3 rounded-full bg-vs-blue/90 px-2.5 py-1 text-[11px] font-bold text-white">{v.cat}</span>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/45 px-2 py-1 font-mono text-[11.5px] font-semibold text-white">{v.dur}</span>
                <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-110">
                  <Play className="ml-0.5 h-4 w-4 fill-vs-blue text-vs-blue" />
                </span>
              </button>
              <div className="flex flex-1 flex-col gap-2.5 px-4 pb-4 pt-3.5">
                <p className="text-[14.5px] font-semibold leading-[1.45] text-vs-dark">{v.desc}</p>
                <div className="mt-auto flex items-center gap-4 text-[12.5px] text-vs-gray-600">
                  <span className="inline-flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /><span className="font-mono font-semibold text-vs-gray-700">{v.views}</span></span>
                  <span className="inline-flex items-center gap-1.5"><Heart className="h-3.5 w-3.5" /><span className="font-mono font-semibold text-vs-gray-700">{v.likes}</span></span>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Popup phát video */}
      {cur && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/75 p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-[420px]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Đóng"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-2xl">
              {embed ? (
                <iframe
                  src={withAutoplay(embed)}
                  title={cur.cat}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isDirectVideo(cur.videoUrl) ? (
                <video src={cur.videoUrl} controls autoPlay className="h-full w-full object-contain" />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
