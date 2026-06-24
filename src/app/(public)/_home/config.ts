/* ===========================================================================
   Cấu hình nội dung trang chủ ZMarketing.
   - ZM_DEFAULTS: nội dung mặc định (đúng như đang hiển thị).
   - Lưu/đọc qua site-settings key "zm-homepage".
   - Icon lưu dưới dạng TÊN (string) -> tra ở ZM_ICONS.
   =========================================================================== */
import {
  Zap, Flame, TrendingUp, ShieldCheck, Inbox, Users, Send, BarChart3, Tags,
  Smartphone, AlarmClockOff, ShieldAlert, UsersRound, LayoutGrid,
  MousePointerClick, Activity, Timer, Magnet, UserPlus, PieChart, LockKeyhole,
  Building2, Shield, HeartHandshake, ShoppingBag, Briefcase, Megaphone,
  Gift, RefreshCw, GraduationCap, BookOpen, Award, Rocket, Gem, Crown, Phone,
  Star, Sparkles, MessageSquare, Target, CheckCircle2,
} from 'lucide-react'

export type IconName = string

/** Bộ icon dùng được khi cấu hình (admin chọn theo tên). */
export const ZM_ICONS: Record<string, typeof Zap> = {
  Zap, Flame, TrendingUp, ShieldCheck, Inbox, Users, Send, BarChart3, Tags,
  Smartphone, AlarmClockOff, ShieldAlert, UsersRound, LayoutGrid,
  MousePointerClick, Activity, Timer, Magnet, UserPlus, PieChart, LockKeyhole,
  Building2, Shield, HeartHandshake, ShoppingBag, Briefcase, Megaphone,
  Gift, RefreshCw, GraduationCap, BookOpen, Award, Rocket, Gem, Crown, Phone,
  Star, Sparkles, MessageSquare, Target, CheckCircle2,
}

/** Tên các icon hợp lệ — dùng cho dropdown trong admin. */
export const ZM_ICON_NAMES = Object.keys(ZM_ICONS)

/** Lấy component icon theo tên (fallback Sparkles nếu sai tên). */
export function zmIcon(name?: string): typeof Zap {
  return (name && ZM_ICONS[name]) || Sparkles
}

/* ── Kiểu dữ liệu ─────────────────────────────────────────────────────────── */
export interface ZmFeat { t: string; no?: boolean; b?: boolean }
export interface ZmPricingPlan {
  name: string; icon: IconName; desc: string; val: string; valSmall?: string
  old?: string; year: string; feats: ZmFeat[]
  cta: string; ctaHref: string; ctaSolid?: boolean; ctaIcon?: IconName; featured?: boolean
}

export interface ZmHomeConfig {
  links: { register: string; hotline: string }
  hero: {
    badgeStrong: string; badgeText: string
    titleTop: string; titleHl: string; titleBottom: string
    sub: string; feats: string[]
    ctaPrimary: string; ctaSecondary: string; proof: string
  }
  stats: { items: { prefix?: string; num: number; suffix?: string; label: string }[] }
  pain: { eyebrow: string; title: string; sub: string; items: { icon: IconName; title: string; desc: string }[] }
  solution: {
    eyebrow: string; titleA: string; titleHl: string; titleB: string; lead: string
    cta: string
    checks: { icon: IconName; strong: string; text: string }[]
    visual: { icon: IconName; title: string; sub: string }[]
  }
  video: { eyebrow: string; title: string; sub: string; url: string; bullets: { icon: IconName; text: string }[] }
  features: { eyebrow: string; title: string; sub: string; items: { icon: IconName; title: string; desc: string; tag: string; tagIcon: IconName }[] }
  audience: { eyebrow: string; title: string; sub: string; items: { icon: IconName; title: string; desc: string }[] }
  testimonials: { eyebrow: string; title: string; sub: string; items: { av: string; grad: string; name: string; role: string; url: string }[] }
  pricing: { eyebrow: string; title: string; sub: string; note: string; plans: ZmPricingPlan[] }
  bonus: { titlePre: string; titleEm: string; titlePost: string; sub: string; items: { icon: IconName; pre?: string; strong: string; post?: string }[] }
  faq: { eyebrow: string; title: string; sub: string; items: { q: string; a: string }[] }
  finalCta: { urgency: string; titleA: string; titleHl: string; sub: string; cta: string; guarantees: string[] }
  show: {
    stats: boolean; pain: boolean; solution: boolean; video: boolean; features: boolean
    audience: boolean; testimonials: boolean; pricing: boolean; bonus: boolean; news: boolean; faq: boolean; finalCta: boolean
  }
}

const REGISTER = 'https://khachhang.phanmemmkt.vn/vi/register'
const HOTLINE = 'tel:0941113119'

/* ── Mặc định = nội dung hiện tại ─────────────────────────────────────────── */
export const ZM_DEFAULTS: ZmHomeConfig = {
  links: { register: REGISTER, hotline: HOTLINE },
  hero: {
    badgeStrong: '100.000+',
    badgeText: 'cá nhân & doanh nghiệp đang dùng MKT Software',
    titleTop: 'Biến Zalo thành',
    titleHl: 'Phòng kinh doanh tự động',
    titleBottom: 'Bán hàng 24/7',
    sub: 'ZMarketing gom hàng trăm tài khoản Zalo về 1 màn hình: hộp thư hợp nhất, CRM gắn tag khách hàng, gửi tin hàng loạt an toàn và báo cáo hiệu suất từng nhân viên. 1 người làm việc của 5 người.',
    feats: ['Hộp thư hợp nhất', 'CRM gắn tag khách', 'Gửi tin an toàn'],
    ctaPrimary: 'Dùng thử miễn phí 7 ngày',
    ctaSecondary: 'Xem video 2 phút',
    proof: 'Tin dùng bởi chủ shop & agency — tiết kiệm 80% thời gian chăm khách',
  },
  stats: {
    items: [
      { num: 76, suffix: ',5tr', label: 'Người dùng Zalo tại Việt Nam' },
      { num: 80, suffix: '%', label: 'Tiết kiệm so với làm thủ công' },
      { prefix: 'x', num: 10, label: 'Hiệu suất so với chăm tay' },
      { num: 100, suffix: 'k+', label: 'Khách hàng tin dùng MKT' },
    ],
  },
  pain: {
    eyebrow: 'Nỗi đau mỗi ngày',
    title: 'Bạn có đang gặp những vấn đề này?',
    sub: 'Nếu gật đầu với 1 trong 3 điều dưới đây, bạn đang mất tiền mỗi ngày trên Zalo mà không biết.',
    items: [
      { icon: 'Smartphone', title: '10 nick Zalo = 10 điện thoại', desc: 'Chuyển qua lại giữa các máy, kiểm tra tin nhắn thủ công ngốn 70–80% thời gian làm việc. Càng nhiều nick càng rối, càng dễ sót khách.' },
      { icon: 'AlarmClockOff', title: 'Chậm 5 phút là mất khách', desc: 'Zalo không có tự động phản hồi. Khách nhắn mà không được rep ngay sẽ hỏi đối thủ. Mỗi tin nhắn bị bỏ quên là một đơn hàng mất đi.' },
      { icon: 'ShieldAlert', title: 'Gửi hàng loạt — sợ khóa nick', desc: 'Zalo gốc hạn chế gửi tin quảng bá. Nhắn tay từng khách thì mất mấy ngày, dùng tool trôi nổi thì bị checkpoint, mất luôn tài khoản.' },
    ],
  },
  solution: {
    eyebrow: 'Giải pháp toàn diện',
    titleA: 'Đừng lo — ', titleHl: 'ZMarketing', titleB: ' giải quyết tất cả trên 1 nền tảng duy nhất',
    lead: 'Không cần thêm điện thoại, không cần thêm người. Đăng nhập bằng quét mã QR là chạy — ai dùng được Zalo là dùng được ZMarketing.',
    cta: 'Trải nghiệm ngay — miễn phí 7 ngày',
    checks: [
      { icon: 'Inbox', strong: 'Hộp thư hợp nhất:', text: ' tất cả hội thoại từ hàng trăm tài khoản hiển thị trên 1 màn hình — không sót một tin nhắn nào.' },
      { icon: 'Tags', strong: 'CRM ngay trong Zalo:', text: ' gắn tag màu phân loại khách VIP, khách tiềm năng, khách cần chăm lại.' },
      { icon: 'ShieldCheck', strong: 'An toàn tài khoản:', text: ' proxy riêng cho từng nick + cơ chế giãn cách thông minh, mô phỏng thao tác người thật.' },
      { icon: 'UsersRound', strong: 'Kiểm soát đội ngũ:', text: ' phân quyền 3 cấp, báo cáo hiệu suất từng nhân viên — data khách ở lại với doanh nghiệp.' },
    ],
    visual: [
      { icon: 'Inbox', title: 'Hộp thư hợp nhất', sub: '248 hội thoại từ 35 tài khoản — 0 tin chưa đọc' },
      { icon: 'Tags', title: 'CRM gắn tag khách hàng', sub: 'VIP · Đã mua · Tiềm năng · Cần chăm sóc' },
      { icon: 'Send', title: 'Chiến dịch gửi tin hàng loạt', sub: 'Đang gửi 1.200 tin — tỷ lệ thành công 98%' },
      { icon: 'BarChart3', title: 'Báo cáo nhân viên hôm nay', sub: 'Minh: 86 khách · Lan: 73 khách · Hùng: 64 khách' },
      { icon: 'ShieldCheck', title: 'Bảo vệ tài khoản', sub: '35/35 nick hoạt động — proxy riêng từng tài khoản' },
    ],
  },
  video: {
    eyebrow: 'Video demo',
    title: 'Xem ZMarketing hoạt động thực tế',
    sub: 'Chỉ 2 phút để hiểu vì sao hàng nghìn nhà bán hàng chuyển sang ZMarketing.',
    url: 'https://www.youtube.com/embed/nWJnGt7J0J4',
    bullets: [
      { icon: 'LayoutGrid', text: 'Quản lý trăm tài khoản trên 1 màn hình' },
      { icon: 'MousePointerClick', text: 'Gửi chiến dịch tin nhắn trong 3 cú nhấp' },
      { icon: 'Activity', text: 'Xem báo cáo hiệu suất theo thời gian thực' },
    ],
  },
  features: {
    eyebrow: 'Tính năng cốt lõi',
    title: '9 vũ khí giúp bạn bùng nổ doanh số trên Zalo',
    sub: 'Mỗi tính năng giải quyết tận gốc một nỗi đau của người kinh doanh Zalo.',
    items: [
      { icon: 'LayoutGrid', title: 'Quản lý hàng trăm tài khoản Zalo', desc: 'Đăng nhập bằng quét mã QR, theo dõi trạng thái từng nick, đồng bộ dữ liệu tự động. Mở rộng quy mô không cần thêm điện thoại.', tag: 'Tiết kiệm 80% thời gian', tagIcon: 'Timer' },
      { icon: 'Inbox', title: 'Hộp thư hợp nhất — không sót tin', desc: 'Mọi hội thoại từ mọi tài khoản về 1 hộp thư chung. Ghim khách quan trọng, mẫu trả lời nhanh bằng phím tắt, lọc theo trạng thái.', tag: 'Phản hồi nhanh gấp 5 lần', tagIcon: 'Zap' },
      { icon: 'Tags', title: 'CRM quản lý khách hàng', desc: 'Gắn tag màu phân loại khách, xem tỷ lệ phản hồi từng người, thao tác hàng loạt. Biết khách nào nóng, khách nào sắp rời đi.', tag: 'Tăng tỷ lệ chốt đơn', tagIcon: 'TrendingUp' },
      { icon: 'Send', title: 'Gửi tin nhắn hàng loạt an toàn', desc: 'Gửi theo danh sách bạn bè, số điện thoại, thành viên nhóm hoặc gửi thẳng vào nhóm. Cơ chế giãn cách thông minh tránh checkpoint.', tag: 'Tiếp cận nghìn khách/ngày', tagIcon: 'Users' },
      { icon: 'Magnet', title: 'Khai thác khách từ nhóm Zalo', desc: 'Quét thành viên nhóm (kể cả nhóm ẩn), tự động kết bạn và gửi tin theo lịch — khách của đối thủ đang ngồi sẵn trong các nhóm.', tag: 'Mở rộng tệp khách mỗi ngày', tagIcon: 'UserPlus' },
      { icon: 'BarChart3', title: 'Báo cáo & phân tích dữ liệu', desc: 'Thống kê tin gửi/nhận, tỷ lệ phản hồi, hiệu suất theo từng tài khoản và từng nhân viên.', tag: 'Quyết định bằng số liệu', tagIcon: 'PieChart' },
      { icon: 'LockKeyhole', title: 'Phân quyền đội nhóm 3 cấp', desc: 'Quản trị viên → Quản lý → Nhân viên, kèm nhật ký hoạt động từng người. Nhân viên nghỉ việc, data khách vẫn ở lại với bạn.', tag: 'Dành cho chủ doanh nghiệp', tagIcon: 'Building2' },
      { icon: 'ShieldCheck', title: 'Bảo vệ tài khoản tối đa', desc: 'Proxy riêng biệt cho từng tài khoản, tốc độ gửi tùy chỉnh, mô phỏng hành vi người thật — nuôi nick an toàn, bền vững.', tag: 'Yên tâm chạy chiến dịch', tagIcon: 'Shield' },
      { icon: 'UserPlus', title: 'Tự động kết bạn cá nhân hóa', desc: 'Kết bạn theo số điện thoại, theo gợi ý hoặc theo nhóm — kèm lời mời cá nhân hóa theo tên, giới tính để tăng tỷ lệ chấp nhận.', tag: 'Mỗi kết nối là một khách tiềm năng', tagIcon: 'HeartHandshake' },
    ],
  },
  audience: {
    eyebrow: 'Dành cho ai',
    title: 'ZMarketing sinh ra dành cho ai?',
    sub: 'Dù bạn bán hàng một mình hay vận hành cả đội ngũ — đều có lý do để bắt đầu hôm nay.',
    items: [
      { icon: 'ShoppingBag', title: 'Chủ shop bán hàng online', desc: 'Tự động kết bạn, gửi tin, chăm khách — rảnh tay để chốt đơn.' },
      { icon: 'Building2', title: 'Doanh nghiệp & thương mại điện tử', desc: 'Hộp thư hợp nhất + CRM — chăm sóc lại tệp khách cũ, không sót ai.' },
      { icon: 'Briefcase', title: 'Chủ doanh nghiệp & quản lý', desc: 'Báo cáo nhân viên, phân quyền, giữ data khách khi nhân sự thay đổi.' },
      { icon: 'Megaphone', title: 'Agency marketing', desc: 'Chạy hàng trăm tài khoản cho nhiều khách hàng trên 1 nền tảng.' },
    ],
  },
  testimonials: {
    eyebrow: 'Khách hàng tin dùng',
    title: 'Khách hàng nói gì về ZMarketing?',
    sub: 'Kết quả thật từ những người đang dùng mỗi ngày.',
    items: [
      { av: 'H', grad: 'linear-gradient(135deg,#FF8C00,#FFD700)', name: 'Chị Hương', role: 'Chủ shop thời trang online', url: 'https://www.youtube.com/embed/nWJnGt7J0J4' },
      { av: 'T', grad: 'linear-gradient(135deg,#1565C0,#42A5F5)', name: 'Anh Tuấn', role: 'Giám đốc kinh doanh, DN phân phối', url: 'https://www.youtube.com/embed/nWJnGt7J0J4' },
      { av: 'L', grad: 'linear-gradient(135deg,#2ECC71,#27AE60)', name: 'Chị Linh', role: 'Trưởng nhóm vận hành, agency marketing', url: 'https://www.youtube.com/embed/nWJnGt7J0J4' },
    ],
  },
  pricing: {
    eyebrow: 'Bảng giá',
    title: 'Bảng giá ZMarketing',
    sub: 'Rẻ hơn 1 cốc trà đá mỗi ngày — nhưng làm việc của cả một đội ngũ. Dùng thử miễn phí 7 ngày, không cần thẻ.',
    note: 'Ưu đãi tháng này: đăng ký gói năm nhận ngay bộ quà tặng trị giá 20.000.000đ — xem chi tiết bên dưới.',
    plans: [
      { name: 'STARTER', icon: 'Rocket', desc: 'Cho cá nhân / shop nhỏ mới bắt đầu', val: '3.500.000đ', valSmall: '/năm', year: 'Giá trọn gói 1 năm', cta: 'Đăng ký gói', ctaHref: REGISTER, feats: [
        { t: '5 nick Zalo (đồng thời)', b: true }, { t: '3 nhân viên đăng nhập', b: true }, { t: 'Hộp thư hợp nhất + CRM' }, { t: 'Gửi tin & kết bạn hàng loạt' }, { t: 'Hỗ trợ kỹ thuật' },
      ] },
      { name: 'BUSINESS', icon: 'Zap', desc: 'Cho đội sale & chăm sóc khách', val: '5.000.000đ', valSmall: '/năm', year: 'Giá trọn gói 1 năm', featured: true, ctaSolid: true, cta: 'Đăng ký gói', ctaHref: REGISTER, feats: [
        { t: '15 nick Zalo (đồng thời)', b: true }, { t: '10 nhân viên đăng nhập', b: true }, { t: 'Phân quyền đội nhóm 3 cấp' }, { t: 'Báo cáo hiệu suất nhân viên' }, { t: 'Hỗ trợ 1-1 ưu tiên' },
      ] },
      { name: 'PRO', icon: 'Gem', desc: 'Cho doanh nghiệp đang tăng trưởng', val: '12.000.000đ', valSmall: '/năm', year: 'Giá trọn gói 1 năm', cta: 'Đăng ký gói', ctaHref: REGISTER, feats: [
        { t: '25 nick Zalo (đồng thời)', b: true }, { t: '25 nhân viên đăng nhập', b: true }, { t: 'Proxy riêng từng tài khoản' }, { t: 'Khai thác thành viên nhóm' }, { t: 'Quản lý khách hàng chuyên trách' },
      ] },
      { name: 'ENTERPRISE', icon: 'Crown', desc: 'Cho hệ thống & agency quy mô lớn', val: '20.000.000đ', valSmall: '/năm', year: 'Giá trọn gói 1 năm', cta: 'Liên hệ tư vấn', ctaHref: HOTLINE, ctaIcon: 'Phone', feats: [
        { t: '50 nick Zalo (đồng thời)', b: true }, { t: 'Nhân viên: không giới hạn', b: true }, { t: 'Đào tạo đội ngũ trực tiếp' }, { t: 'Tư vấn chiến lược Zalo Marketing' }, { t: 'SLA & hỗ trợ chuyên sâu' },
      ] },
    ],
  },
  bonus: {
    titlePre: 'Bộ quà tặng ', titleEm: '20.000.000đ', titlePost: ' khi đăng ký hôm nay',
    sub: 'Áp dụng cho khách hàng đăng ký gói năm trong tháng này — số lượng có hạn.',
    items: [
      { icon: 'Target', pre: '', strong: 'Hỗ trợ 1-1', post: ' trong suốt quá trình sử dụng phần mềm' },
      { icon: 'RefreshCw', strong: 'Bảo hành & cập nhật miễn phí', post: ' trọn đời sản phẩm' },
      { icon: 'GraduationCap', strong: 'Cầm tay chỉ việc', post: ' đến khi thành thạo công cụ' },
      { icon: 'BookOpen', pre: 'Bộ tài liệu ', strong: '69+ công cụ marketing', post: ' tốt nhất hiện nay' },
      { icon: 'Award', pre: 'Khóa học ', strong: 'Phá băng niềm tin giới hạn', post: ' trị giá 2.999.000đ' },
      { icon: 'Briefcase', pre: 'Khóa ', strong: 'Coaching Sale — Marketing thực chiến', post: ' từ chuyên gia' },
    ],
  },
  faq: {
    eyebrow: 'Giải đáp',
    title: 'Câu hỏi thường gặp',
    sub: 'Mọi điều bạn cần biết trước khi bắt đầu với ZMarketing.',
    items: [
      { q: 'Dùng ZMarketing có bị khóa tài khoản Zalo không?', a: 'Đây là điểm khác biệt lớn nhất của ZMarketing so với các công cụ trôi nổi: mỗi tài khoản được cấu hình proxy riêng biệt, kết hợp cơ chế giãn cách và tốc độ gửi tùy chỉnh để mô phỏng thao tác người thật. Hệ thống được phát triển bởi đội ngũ hơn 15 năm kinh nghiệm nuôi tài khoản. Bạn có thể yên tâm thử trước trên 1–2 tài khoản phụ trong 7 ngày dùng thử.' },
      { q: 'Phần mềm chạy trên nền tảng nào? Có cần cài đặt không?', a: 'ZMarketing chạy trực tiếp trên trình duyệt web — không cần cài đặt phức tạp. Bạn thêm tài khoản Zalo bằng cách quét mã QR giống như đăng nhập Zalo trên máy tính. Ai dùng được Zalo là dùng được ZMarketing.' },
      { q: 'Có được dùng thử miễn phí không?', a: 'Có. Bạn được dùng thử miễn phí 7 ngày với đầy đủ tính năng, kèm 30 phút hướng dẫn 1-1 từ đội ngũ hỗ trợ để thấy kết quả thật ngay trên tài khoản Zalo của mình — không cần nhập thẻ thanh toán.' },
      { q: 'ZMarketing khác gì các công cụ Zalo giá rẻ trên thị trường?', a: 'Công cụ giá rẻ chỉ dừng ở việc gửi tin. ZMarketing là cả một hệ thống kinh doanh: hộp thư hợp nhất, CRM gắn tag khách hàng, phân quyền 3 cấp và báo cáo hiệu suất từng nhân viên. Dữ liệu khách hàng nằm lại với doanh nghiệp của bạn — không nằm trong điện thoại cá nhân của nhân viên.' },
      { q: 'Tôi không rành công nghệ, có dùng được không?', a: 'Hoàn toàn được. Giao diện được thiết kế trực quan bằng tiếng Việt, thao tác đơn giản. Đội ngũ hỗ trợ 1-1, cầm tay chỉ việc đến khi bạn thành thạo — đây là cam kết đi kèm mọi gói dịch vụ.' },
      { q: 'Chính sách hỗ trợ và bảo hành như thế nào?', a: 'Bạn được bảo hành và cập nhật phần mềm miễn phí trọn đời, hỗ trợ kỹ thuật qua hotline, Zalo và nhóm cộng đồng hơn 100.000 thành viên. Mọi vướng mắc trong quá trình sử dụng đều được đội ngũ chăm sóc khách hàng xử lý nhanh chóng.' },
    ],
  },
  finalCta: {
    urgency: 'Ưu đãi bộ quà 20 triệu chỉ áp dụng trong tháng này',
    titleA: 'Mỗi ngày chần chừ là thêm khách hàng ', titleHl: 'rơi vào tay đối thủ',
    sub: '76,5 triệu người Việt đang dùng Zalo mỗi tháng. Khách hàng của bạn ở đó — câu hỏi là bạn có kịp chạm tới họ trước đối thủ không. Bắt đầu miễn phí ngay hôm nay.',
    cta: 'Dùng thử miễn phí 7 ngày',
    guarantees: ['Không cần thẻ thanh toán', 'Hỗ trợ 1-1 khi bắt đầu', 'Hủy bất cứ lúc nào'],
  },
  show: {
    stats: true, pain: true, solution: true, video: true, features: true,
    audience: true, testimonials: true, pricing: true, bonus: true, news: true, faq: true, finalCta: true,
  },
}

/** Gộp config lưu trong DB lên trên mặc định (nông theo từng section là đủ). */
export function mergeZmConfig(saved?: Partial<ZmHomeConfig> | null): ZmHomeConfig {
  if (!saved || typeof saved !== 'object') return ZM_DEFAULTS
  const d = ZM_DEFAULTS
  const s = saved as ZmHomeConfig
  return {
    links: { ...d.links, ...s.links },
    hero: { ...d.hero, ...s.hero },
    stats: s.stats?.items?.length ? s.stats : d.stats,
    pain: { ...d.pain, ...s.pain, items: s.pain?.items?.length ? s.pain.items : d.pain.items },
    solution: { ...d.solution, ...s.solution, checks: s.solution?.checks?.length ? s.solution.checks : d.solution.checks, visual: s.solution?.visual?.length ? s.solution.visual : d.solution.visual },
    video: { ...d.video, ...s.video, bullets: s.video?.bullets?.length ? s.video.bullets : d.video.bullets },
    features: { ...d.features, ...s.features, items: s.features?.items?.length ? s.features.items : d.features.items },
    audience: { ...d.audience, ...s.audience, items: s.audience?.items?.length ? s.audience.items : d.audience.items },
    testimonials: { ...d.testimonials, ...s.testimonials, items: s.testimonials?.items?.length ? s.testimonials.items : d.testimonials.items },
    pricing: { ...d.pricing, ...s.pricing, plans: s.pricing?.plans?.length ? s.pricing.plans : d.pricing.plans },
    bonus: { ...d.bonus, ...s.bonus, items: s.bonus?.items?.length ? s.bonus.items : d.bonus.items },
    faq: { ...d.faq, ...s.faq, items: s.faq?.items?.length ? s.faq.items : d.faq.items },
    finalCta: { ...d.finalCta, ...s.finalCta, guarantees: s.finalCta?.guarantees?.length ? s.finalCta.guarantees : d.finalCta.guarantees },
    show: { ...d.show, ...s.show },
  }
}
