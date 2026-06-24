'use client'

import { useEffect, useState } from 'react'

/** Số đếm tăng dần — island client nhỏ, tách khỏi phần tĩnh để không ảnh hưởng cả trang nếu lỗi. */
export default function CountUp({ target }: { target: number }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    let raf = 0
    const dur = 1500
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setN(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])
  return <>{n}</>
}
