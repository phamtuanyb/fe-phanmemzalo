// Tiện ích video: lấy ID YouTube, URL nhúng, ảnh thumbnail tự động, nhận diện .mp4.

export function ytId(url?: string): string | null {
  if (!url) return null
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|live\/|embed\/))([\w-]{6,})/)
  return m ? m[1] : null
}

export function ytEmbed(url?: string): string | null {
  const id = ytId(url)
  return id ? `https://www.youtube.com/embed/${id}` : null
}

// Ảnh thumbnail tự động từ link YouTube (không cần ảnh ngoài).
export function ytThumb(url?: string): string | null {
  const id = ytId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null
}

export function withAutoplay(embed: string): string {
  return embed.includes('?') ? `${embed}&autoplay=1` : `${embed}?autoplay=1`
}

export function isDirectVideo(url?: string): boolean {
  return !!url && /\.(mp4|webm|ogg)(\?|$)/i.test(url)
}

export function isPlayable(url?: string): boolean {
  return !!ytEmbed(url) || isDirectVideo(url)
}
