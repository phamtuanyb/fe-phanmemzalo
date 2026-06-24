import { HEIGHT_HEADER_PUBLIC } from "@/constants/app.constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import MegaMenuFooter from "./MegaMenuFooter"

export type XayKenhProduct = {
  name: string
  sub: string
  img: string
  href: string
}

// 4 sản phẩm Xây Kênh — ảnh box trong /public/box, link tới landing chi tiết từng sản phẩm.
export const XAYKENH_PRODUCTS: XayKenhProduct[] = [
  { name: 'Xây Kênh AI', sub: 'AI tạo video & auto đăng đa nền tảng', img: '/box/xaykenhai.png', href: '/xaykenh/xaykenhai' },
  { name: 'MKT Viral', sub: 'Sản xuất hàng loạt video đa kênh', img: '/box/mktviral.png', href: '/xaykenh/mktviral' },
  { name: 'MKT Page', sub: 'Quản lý & xây dựng fanpage Facebook', img: '/box/mktpage.png', href: '/xaykenh/mktpage' },
  { name: 'MKT Affiliate', sub: 'Làm Affiliate đa kênh', img: '/box/mktaffiliate.png', href: '/xaykenh/mktaffiliate' },
]

type Props = {
  isOpen: boolean
}

const XayKenhMegaMenu = ({ isOpen }: Props) => (
  <div
    className={cn(
      `fixed left-0 right-0 bg-white border-t-2 border-b border-vs-blue-200 shadow-[0_16px_48px_rgba(0,0,0,0.12)] z-[200] transition-all duration-[180ms]`,
      {
        'opacity-100 visible translate-y-0 pointer-events-auto': isOpen,
        'opacity-0 invisible -translate-y-1.5 pointer-events-none': !isOpen,
      }
    )}
    style={{ top: HEIGHT_HEADER_PUBLIC }}
  >
    <div className="max-w-8xl mx-auto px-6 pt-5 pb-5">
      <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-vs-blue mb-4 flex items-center gap-2 before:content-[''] before:inline-block before:w-[3px] before:h-[14px] before:rounded-sm before:bg-current">
        Hệ sinh thái phần mềm xây kênh
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {XAYKENH_PRODUCTS.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="group flex flex-col rounded-2xl border border-vs-gray-200 bg-white p-3 transition-all hover:-translate-y-1 hover:shadow-vs-md hover:border-vs-blue no-underline"
          >
            <div className="rounded-xl bg-gradient-to-b from-vs-blue-light to-white overflow-hidden flex items-center justify-center h-[180px]">
              <Image
                src={p.img}
                alt={p.name}
                width={760}
                height={918}
                className="h-[168px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-3 px-1">
              <div className="text-[15px] font-extrabold text-vs-dark leading-snug transition-colors group-hover:text-vs-blue">
                {p.name}
              </div>
              <div className="text-[12.5px] text-vs-gray-600 mt-1 leading-snug">
                {p.sub}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <MegaMenuFooter
      heading="Khám phá toàn bộ phần mềm Xây Kênh"
      sub="4 phần mềm xây kênh & marketing đa nền tảng — chọn giải pháp phù hợp."
      cta="Tất cả sản phẩm →"
      ctaHref="/xaykenh"
    />
  </div>
)

export default XayKenhMegaMenu
