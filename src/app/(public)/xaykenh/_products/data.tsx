// ============================================================================
// NỘI DUNG LANDING CHI TIẾT TỪNG SẢN PHẨM (demo — chỉnh sửa thoải mái ở đây).
// Mỗi sản phẩm map theo slug: /xaykenh/<slug>.
// ============================================================================
import type { LucideIcon } from 'lucide-react'
import {
  Sparkles, Wand2, Send, CalendarClock, Mic, BarChart3,
  Upload, Scissors, Layers, Rocket, Shield, Repeat,
  Facebook, MessagesSquare, Bot, ClipboardList,
  Users, LineChart, Wallet, Link2, Megaphone, Network,
} from 'lucide-react'
import type { Channel } from '../_shared/channels'

export type Feature = { icon: LucideIcon; title: string; desc: string }
export type Step = { title: string; desc: string }
export type Stat = { num: string; label: string }

export type ProductConfig = {
  slug: string
  name: string
  eyebrow: string
  tagline: string
  description: string
  img: string
  channels: Channel[]
  features: Feature[]
  steps: Step[]
  stats: Stat[]
  ctaTitle: string
  ctaDesc: string
}

export const PRODUCTS: Record<string, ProductConfig> = {
  // ─────────────────────────────────────────────── XÂY KÊNH AI
  xaykenhai: {
    slug: 'xaykenhai',
    name: 'Xây Kênh AI',
    eyebrow: 'AI VIDEO · TỰ ĐỘNG',
    tagline: 'Tạo video AI & tự động đăng đa nền tảng',
    description:
      'Biến một câu prompt thành hàng loạt video chuẩn xu hướng, rồi tự động đăng lên TikTok, YouTube, Facebook, Instagram — sản xuất nội dung không giới hạn, không cần ekip quay dựng.',
    img: '/box/xaykenhai.png',
    channels: ['tiktok', 'youtube', 'facebook', 'instagram'],
    features: [
      { icon: Wand2, title: 'Tạo video từ prompt', desc: 'Sinh video bằng AI (Kling, Veo 3, Sora) chỉ từ ý tưởng văn bản — không cần quay dựng.' },
      { icon: Send, title: 'Tự động đăng đa kênh', desc: 'Đăng đồng loạt lên TikTok, YouTube, Facebook, Instagram chỉ với một lần thiết lập.' },
      { icon: CalendarClock, title: 'Lên lịch thông minh', desc: 'Đặt lịch đăng theo khung giờ vàng từng nền tảng, chạy tự động 24/7.' },
      { icon: Sparkles, title: 'Kho template xu hướng', desc: 'Thư viện mẫu video bắt trend, cập nhật liên tục để nội dung luôn mới.' },
      { icon: Mic, title: 'Voiceover & phụ đề AI', desc: 'Tự động lồng giọng đọc và tạo phụ đề chuẩn, đa ngôn ngữ.' },
      { icon: BarChart3, title: 'Phân tích hiệu suất', desc: 'Theo dõi lượt xem, tương tác từng kênh trên một dashboard duy nhất.' },
    ],
    steps: [
      { title: 'Nhập ý tưởng', desc: 'Gõ prompt hoặc chọn chủ đề — AI gợi ý kịch bản phù hợp.' },
      { title: 'AI sản xuất video', desc: 'Hệ thống sinh video, lồng tiếng, gắn phụ đề tự động.' },
      { title: 'Duyệt & lên lịch', desc: 'Xem trước, chỉnh nhanh rồi xếp lịch đăng đa kênh.' },
      { title: 'Tự động đăng & báo cáo', desc: 'Video lên sóng đúng giờ, số liệu đổ về realtime.' },
    ],
    stats: [
      { num: '1.000+', label: 'video/tháng' },
      { num: '4', label: 'nền tảng' },
      { num: '24/7', label: 'tự động hoá' },
    ],
    ctaTitle: 'Sẵn sàng phủ kênh bằng video AI?',
    ctaDesc: 'Dùng thử miễn phí — trải nghiệm sản xuất & đăng video tự động ngay hôm nay.',
  },

  // ─────────────────────────────────────────────── MKT VIRAL
  mktviral: {
    slug: 'mktviral',
    name: 'MKT Viral',
    eyebrow: 'VIDEO · ĐA NỀN TẢNG',
    tagline: 'Sản xuất & đăng video số lượng lớn',
    description:
      'Tải, làm mới và chỉnh sửa video hàng loạt, rồi đăng viral đồng loạt lên nhiều nền tảng chỉ với một thao tác — nhân bản nội dung nhanh gấp nhiều lần.',
    img: '/box/mktviral.png',
    channels: ['tiktok', 'youtube', 'facebook'],
    features: [
      { icon: Upload, title: 'Tải video hàng loạt', desc: 'Kéo về và quản lý kho video số lượng lớn theo chiến dịch.' },
      { icon: Scissors, title: 'Làm mới tránh trùng lặp', desc: 'Tự động chỉnh sửa, đổi khung hình để vượt kiểm duyệt trùng lặp.' },
      { icon: Layers, title: 'Nhân bản nội dung', desc: 'Tạo nhiều phiên bản từ một video gốc cho nhiều kênh.' },
      { icon: Rocket, title: 'Đăng viral đồng loạt', desc: 'Một thao tác đăng lên hàng loạt tài khoản và nền tảng.' },
      { icon: Repeat, title: 'Lên lịch & xoay vòng', desc: 'Tự động phân phối nội dung theo lịch, tránh spam.' },
      { icon: Shield, title: 'An toàn tài khoản', desc: 'Quản lý nhiều tài khoản kèm proxy riêng, giảm rủi ro khoá.' },
    ],
    steps: [
      { title: 'Nạp kho video', desc: 'Tải video nguồn vào hệ thống theo chiến dịch.' },
      { title: 'Làm mới hàng loạt', desc: 'AI chỉnh sửa, tạo nhiều biến thể chống trùng.' },
      { title: 'Chọn kênh & lịch', desc: 'Gán tài khoản, nền tảng và khung giờ đăng.' },
      { title: 'Đăng viral & theo dõi', desc: 'Đăng đồng loạt và xem hiệu suất từng video.' },
    ],
    stats: [
      { num: 'x10', label: 'tốc độ sản xuất' },
      { num: '3', label: 'nền tảng' },
      { num: '∞', label: 'số video' },
    ],
    ctaTitle: 'Nhân bản nội dung viral chỉ với một thao tác',
    ctaDesc: 'Dùng thử miễn phí — đăng hàng loạt video lên nhiều kênh trong tích tắc.',
  },

  // ─────────────────────────────────────────────── MKT PAGE
  mktpage: {
    slug: 'mktpage',
    name: 'MKT Page',
    eyebrow: 'FACEBOOK · FANPAGE',
    tagline: 'Quản lý & nuôi fanpage Facebook hàng loạt',
    description:
      'Quản lý nhiều fanpage tập trung, lên lịch đăng bài, seeding và tương tác tự động 24/7 — phủ kênh và nuôi page hiệu quả mà không cần đội nhân sự lớn.',
    img: '/box/mktpage.png',
    channels: ['facebook'],
    features: [
      { icon: Facebook, title: 'Quản lý đa fanpage', desc: 'Điều khiển hàng loạt fanpage từ một bảng điều khiển duy nhất.' },
      { icon: CalendarClock, title: 'Lên lịch đăng bài', desc: 'Soạn và xếp lịch nội dung cho nhiều page cùng lúc.' },
      { icon: MessagesSquare, title: 'Seeding tự động', desc: 'Tự động comment, like, tương tác chéo giữa các page.' },
      { icon: Bot, title: 'Trả lời tin nhắn auto', desc: 'Chatbot trả lời inbox & comment theo kịch bản 24/7.' },
      { icon: ClipboardList, title: 'Thư viện nội dung', desc: 'Kho bài viết, hình ảnh dùng lại nhanh cho mọi page.' },
      { icon: BarChart3, title: 'Báo cáo tăng trưởng', desc: 'Theo dõi follow, reach, tương tác từng fanpage.' },
    ],
    steps: [
      { title: 'Kết nối fanpage', desc: 'Thêm các fanpage cần quản lý vào hệ thống.' },
      { title: 'Soạn & xếp lịch', desc: 'Tạo nội dung, đặt lịch đăng cho nhiều page.' },
      { title: 'Bật seeding tự động', desc: 'Thiết lập tương tác & trả lời tự động 24/7.' },
      { title: 'Theo dõi tăng trưởng', desc: 'Xem báo cáo và tối ưu nội dung theo số liệu.' },
    ],
    stats: [
      { num: '50+', label: 'fanpage/tài khoản' },
      { num: '24/7', label: 'tương tác auto' },
      { num: '0', label: 'nhân sự trực page' },
    ],
    ctaTitle: 'Nuôi hàng loạt fanpage mà không cần đội ngũ',
    ctaDesc: 'Dùng thử miễn phí — tự động hoá đăng bài & tương tác fanpage ngay.',
  },

  // ─────────────────────────────────────────────── MKT AFFILIATE
  mktaffiliate: {
    slug: 'mktaffiliate',
    name: 'MKT Affiliate',
    eyebrow: 'AFFILIATE · HOA HỒNG',
    tagline: 'Xây & tối ưu hệ thống tiếp thị liên kết',
    description:
      'Xây dựng hệ thống affiliate đa kênh, tự động theo dõi đơn hàng và chia hoa hồng minh bạch theo thời gian thực — mở rộng đội ngũ cộng tác viên không giới hạn.',
    img: '/box/mktaffiliate.png',
    channels: ['facebook', 'tiktok', 'shopee'],
    features: [
      { icon: Network, title: 'Hệ thống đa cấp bậc', desc: 'Quản lý cộng tác viên theo nhiều tầng, phân quyền rõ ràng.' },
      { icon: Link2, title: 'Link & mã giới thiệu', desc: 'Tự sinh link/mã riêng cho từng CTV, gắn tracking chính xác.' },
      { icon: LineChart, title: 'Theo dõi đơn realtime', desc: 'Ghi nhận click, đơn hàng và doanh thu theo thời gian thực.' },
      { icon: Wallet, title: 'Chia hoa hồng tự động', desc: 'Tính và đối soát hoa hồng minh bạch, hạn chế sai sót.' },
      { icon: Users, title: 'Quản lý cộng tác viên', desc: 'Theo dõi hiệu suất từng CTV, xếp hạng và thưởng nóng.' },
      { icon: Megaphone, title: 'Bộ tài nguyên marketing', desc: 'Cung cấp content, banner cho CTV chạy đa kênh dễ dàng.' },
    ],
    steps: [
      { title: 'Tạo chương trình', desc: 'Thiết lập sản phẩm, mức hoa hồng và quy tắc.' },
      { title: 'Mời cộng tác viên', desc: 'CTV nhận link/mã riêng và bắt đầu chạy đa kênh.' },
      { title: 'Tự động theo dõi', desc: 'Hệ thống ghi nhận click, đơn và doanh thu realtime.' },
      { title: 'Đối soát & chi trả', desc: 'Tính hoa hồng minh bạch, đối soát và thanh toán nhanh.' },
    ],
    stats: [
      { num: '∞', label: 'cộng tác viên' },
      { num: 'realtime', label: 'theo dõi đơn' },
      { num: '100%', label: 'minh bạch hoa hồng' },
    ],
    ctaTitle: 'Mở rộng doanh số bằng hệ thống affiliate',
    ctaDesc: 'Dùng thử miễn phí — xây đội ngũ cộng tác viên bán hàng cho bạn 24/7.',
  },
}

export const PRODUCT_SLUGS = Object.keys(PRODUCTS)
