'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

/** Accordion FAQ — island client nhỏ. Nhận mảng {q,a} (chuỗi thuần, serializable). */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className={`faq-item${open === i ? ' open' : ''}`} key={item.q}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
            <span className="arrow"><ChevronDown className="ic" /></span>
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? 400 : 0 }}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
