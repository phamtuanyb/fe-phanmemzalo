import { cn } from "@/lib/utils"
import Link from "next/link"
import XayKenhMegaMenu from "./XayKenhMegaMenu"

type Props = {
  label: string
  href: string
  isActive: boolean
  isOpen: boolean
  onShow: () => void
  onHide: () => void
}

const XayKenhMegaMenuTrigger = ({ label, href, isActive, isOpen, onShow, onHide }: Props) => {
  return (
    <div className="relative flex items-center" onMouseEnter={onShow} onMouseLeave={onHide}>
      <Link
        href={href}
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-[14px] font-extrabold rounded-vs transition-all whitespace-nowrap uppercase tracking-[0.05em]',
          {
            'text-vs-blue': isActive,
            'text-vs-gray-700 hover:text-vs-blue hover:bg-vs-blue-light': !isActive,
          }
        )}
      >
        {label}
        <span className={cn('text-[10px] opacity-50 transition-transform', isOpen ? 'rotate-180' : '')}>
          ▾
        </span>
      </Link>
      <XayKenhMegaMenu isOpen={isOpen} />
    </div>
  )
}

export default XayKenhMegaMenuTrigger
