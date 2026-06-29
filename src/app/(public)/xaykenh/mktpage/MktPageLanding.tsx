import Link from 'next/link'
import {
  ArrowRight, Play, Check, X, Clock, Layers, Search, Image as ImageIcon, Bell, Maximize2,
  Link2, List, PenSquare, Send, BarChart3, Users, Calendar, Video, Shield, Heart,
  Briefcase, Building2, ShoppingCart, Share2, Film, User, Zap, type LucideIcon,
} from 'lucide-react'
import TrialModalButton from '../TrialModalButton'
import DemoScreen from './_components/DemoScreen'
import MockupImage from './_components/MockupImage'

const SOURCE = 'MKT Page'
const DEMO_VIDEO = 'https://www.youtube.com/watch?v=gEONfL55rF8'

const C = { blue: '#0A84FF', blueD: '#0057D9', orange: '#FF7A00', orangeL: '#FF9500', dark: '#0F172A', muted: '#64748B', subtle: '#94A3B8', line: '#EDF1F7', line2: '#DDE4EE', bg: '#F7FAFF', green: '#16A34A', red: '#E11D48' }

const ECOSYSTEM = ['MKT Care', 'MKT UID', 'MKT Page', 'MKT Zmarketing', 'MKT TikPro']

const PAINS: { n: string; Icon: LucideIcon; text: string }[] = [
  { n: '01', Icon: Clock, text: 'Đăng bài từng Page mất quá nhiều thời gian' },
  { n: '02', Icon: Layers, text: 'Khó quản lý hàng trăm Fanpage cùng lúc' },
  { n: '03', Icon: Search, text: 'Không biết Page nào đã đăng, Page nào lỗi' },
  { n: '04', Icon: ImageIcon, text: 'Đổi avatar, banner, mô tả Page phải làm thủ công' },
  { n: '05', Icon: Bell, text: 'Dễ bỏ sót lịch đăng bài quan trọng' },
  { n: '06', Icon: Maximize2, text: 'Khó mở rộng hệ thống nội dung khi tăng quy mô' },
]
const STEPS: { n: string; Icon: LucideIcon; title: string; desc: string }[] = [
  { n: '1', Icon: Link2, title: 'Kết nối tài khoản', desc: 'Thêm và xác thực hàng loạt tài khoản Facebook.' },
  { n: '2', Icon: List, title: 'Quản lý danh sách Page', desc: 'Đồng bộ toàn bộ Fanpage về một danh sách.' },
  { n: '3', Icon: PenSquare, title: 'Cấu hình nội dung', desc: 'Chuẩn bị bài viết, ảnh, video và kịch bản.' },
  { n: '4', Icon: Send, title: 'Lập lịch / đăng hàng loạt', desc: 'Đăng đồng loạt hoặc hẹn giờ tự động.' },
  { n: '5', Icon: BarChart3, title: 'Theo dõi kết quả', desc: 'Giám sát tiến trình và tỷ lệ thành công.' },
]
const FEATURES: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Users, title: 'Quản lý tài khoản Facebook', desc: 'Theo dõi trạng thái Live/Die, nhóm tài khoản và xác thực hàng loạt.' },
  { Icon: Layers, title: 'Quản lý danh sách Fanpage', desc: 'Tập trung hàng trăm Fanpage trong một danh sách có thể lọc, gắn nhãn.' },
  { Icon: Send, title: 'Đăng bài hàng loạt', desc: 'Đăng cùng lúc lên nhiều Page theo kịch bản đã cấu hình sẵn.' },
  { Icon: Calendar, title: 'Lập lịch đăng bài', desc: 'Hẹn giờ nội dung theo khung giờ vàng, có cấu hình lặp lại.' },
  { Icon: Video, title: 'Đăng Reels', desc: 'Đăng video Reels hàng loạt lên hệ thống Fanpage tự động.' },
  { Icon: ImageIcon, title: 'Thay đổi thông tin Page', desc: 'Cập nhật avatar, ảnh bìa, tên và mô tả Page đồng loạt.' },
  { Icon: Shield, title: 'Share quyền quản trị Page', desc: 'Chia sẻ và nhận lời mời quản trị Page nhanh chóng, an toàn.' },
  { Icon: Heart, title: 'Seeding & tương tác Page', desc: 'Tạo Page Profile, like, comment và tương tác nuôi Page tự nhiên.' },
]
const BULK_POINTS = [
  'Chọn kịch bản, tài khoản và nội dung chỉ trong vài bước',
  'Thiết lập khoảng cách hành động an toàn cho từng Page',
  'Cấu hình lặp lại để vận hành liên tục, không cần thao tác lại',
  'Theo dõi tiến trình và kết quả thành công / lỗi realtime',
]
const USE_CASES: { Icon: LucideIcon; tag: string; title: string; desc: string }[] = [
  { Icon: Briefcase, tag: 'Agency', title: 'Agency Marketing', desc: 'Vận hành Fanpage cho hàng chục khách hàng từ một dashboard duy nhất.' },
  { Icon: Building2, tag: 'Đa chi nhánh', title: 'Doanh nghiệp nhiều chi nhánh', desc: 'Đồng bộ nội dung và thông tin Page cho toàn bộ hệ thống chi nhánh.' },
  { Icon: ShoppingCart, tag: 'Bán hàng', title: 'Đội ngũ bán hàng online', desc: 'Đăng sản phẩm hàng loạt, phủ nội dung rộng để tăng đơn hàng.' },
  { Icon: Share2, tag: 'Affiliate', title: 'Hệ thống affiliate', desc: 'Mở rộng mạng lưới Page và phân phối nội dung tiếp thị quy mô lớn.' },
  { Icon: Film, tag: 'Media', title: 'Media team', desc: 'Phân phối Reels và video viral đồng loạt trên nhiều kênh Fanpage.' },
  { Icon: User, tag: 'Freelancer', title: 'Freelancer / dịch vụ Fanpage', desc: 'Nhận quản trị, nuôi và vận hành Page thuê hiệu quả, tiết kiệm thời gian.' },
]
const MANUAL = ['Đăng từng Page một cách thủ công', 'Đổi thông tin từng Page riêng lẻ', 'Khó kiểm soát Page lỗi hay thành công', 'Tốn nhiều nhân sự vận hành', 'Không thể mở rộng quy mô nhanh']
const MKT = ['Đăng hàng loạt chỉ với một cấu hình', 'Cập nhật thông tin đồng loạt tức thì', 'Theo dõi toàn bộ kết quả trên Dashboard', 'Tiết kiệm thời gian và nhân sự', 'Sẵn sàng vận hành hàng trăm Fanpage']
const NUMBERS = [
  { v: '30.000+', l: 'Khách hàng & đối tác' }, { v: '1.000+', l: 'Fanpage có thể quản lý' }, { v: '24/7', l: 'Hỗ trợ kỹ thuật' }, { v: '10 năm+', l: 'Kinh nghiệm phát triển' },
]
const PLANS = [
  { name: 'Gói 1 năm', tagline: 'Cho cá nhân & freelancer mới bắt đầu vận hành Fanpage.', price: '3.000.000₫', note: 'Thời hạn sử dụng 365 ngày', cta: 'Nhận tư vấn', featured: false, badge: false,
    feats: ['Thời hạn sử dụng: 365 ngày', 'Sử dụng trên 1 thiết bị', 'Đầy đủ các tính năng', 'Cập nhật miễn phí', 'Hỗ trợ trọn gói', 'Support & update trọn đời'] },
  { name: 'Gói 5 năm', tagline: 'Cho đội Marketing & doanh nghiệp vận hành quy mô lớn.', price: '7.000.000₫', note: 'Thời hạn sử dụng 1.825 ngày', cta: 'Dùng thử miễn phí', featured: true, badge: true,
    feats: ['Thời hạn sử dụng: 1.825 ngày', 'Sử dụng trên 1 thiết bị', 'Hỗ trợ 1-1 tận tâm', 'Tặng 60 công cụ MKT miễn phí', 'Tư vấn Marketing đa kênh', 'Quà tặng đi kèm đặc biệt', 'Bảo hành bản quyền vĩnh viễn'] },
  { name: 'Gói 10 năm', tagline: 'Cho Agency & hệ thống đa chi nhánh cần tuỳ biến sâu.', price: '12.000.000₫', note: 'Thời hạn sử dụng 3.650 ngày', cta: 'Liên hệ tư vấn', featured: false, badge: false,
    feats: ['Mọi quyền lợi từ gói 5 năm', 'Khóa học Phá băng niềm tin', 'Khóa học Coaching Sale thực chiến', 'Ưu tiên hỗ trợ kỹ thuật số 1', 'Cố vấn chiến lược kinh doanh', 'Quà tặng cao cấp từ CEO'] },
]
const FAQS = [
  { q: 'MKT Page dùng để làm gì?', a: 'MKT Page là trung tâm điều khiển giúp bạn quản lý tài khoản Facebook, hàng trăm Fanpage, đăng bài hàng loạt, lập lịch, đổi thông tin Page và theo dõi tiến trình vận hành — tất cả từ một Dashboard duy nhất.' },
  { q: 'MKT Page có quản lý nhiều Fanpage cùng lúc không?', a: 'Có. Phần mềm được thiết kế để vận hành hàng trăm Fanpage song song trên cùng một giao diện quản trị tập trung, có thể lọc, gắn nhãn và thao tác theo nhóm.' },
  { q: 'Có đăng bài hàng loạt được không?', a: 'Có. Bạn chỉ cần cấu hình một lần (chọn tài khoản, Page, nội dung, kịch bản) để đăng đồng loạt lên toàn bộ hệ thống Fanpage.' },
  { q: 'Có lập lịch đăng bài không?', a: 'Có. Bạn có thể hẹn giờ nội dung theo khung giờ mong muốn, thiết lập khoảng cách hành động và cấu hình lặp lại để vận hành liên tục.' },
  { q: 'Có hỗ trợ đăng Reels không?', a: 'Có. MKT Page hỗ trợ đăng video Reels hàng loạt lên nhiều Fanpage một cách tự động theo kịch bản.' },
  { q: 'Có thay đổi thông tin Page hàng loạt không?', a: 'Có. Bạn có thể cập nhật avatar, ảnh bìa, tên và mô tả của nhiều Page cùng lúc thay vì chỉnh sửa thủ công từng Page.' },
  { q: 'Có cần mở trình duyệt không?', a: 'MKT Page tự động hoá các tác vụ ngay trong phần mềm, giúp bạn vận hành tập trung mà không phải thao tác thủ công trên từng trình duyệt riêng lẻ.' },
  { q: 'Có hỗ trợ Proxy không?', a: 'Có. Phần mềm hỗ trợ cấu hình Proxy để đảm bảo an toàn và ổn định khi vận hành nhiều tài khoản, nhiều Page cùng lúc.' },
  { q: 'Có phù hợp cho Agency không?', a: 'Rất phù hợp. Agency có thể quản lý Fanpage cho nhiều khách hàng, phân phối nội dung và theo dõi kết quả tập trung trên một dashboard.' },
  { q: 'Có hỗ trợ cài đặt và hướng dẫn không?', a: 'Có. MKT Software cam kết đào tạo, cầm tay chỉ việc và hỗ trợ cài đặt 1-1 đến khi bạn thành thạo sử dụng công cụ.' },
]

const Eyebrow = ({ children, color = C.blue }: { children: React.ReactNode; color?: string }) => (
  <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color }}>{children}</div>
)
const H2 = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.12] tracking-tight text-[#0F172A] ${className}`}>{children}</h2>
)

export default function MktPageLanding() {
  return (
    <div className="bg-white text-[#0F172A]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#F7FAFF 0%,#FFFFFF 70%)' }}>
        <div className="pointer-events-none absolute -left-[120px] -top-[160px] h-[520px] w-[520px] rounded-full blur-2xl" style={{ background: 'radial-gradient(circle,rgba(10,132,255,.22),transparent 65%)' }} />
        <div className="pointer-events-none absolute -right-[140px] top-[120px] h-[480px] w-[480px] rounded-full blur-2xl" style={{ background: 'radial-gradient(circle,rgba(255,122,0,.16),transparent 65%)' }} />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-2">
          <div>
            <nav className="mb-5 text-[12.5px] text-[#64748B]">
              <Link href="/" className="hover:text-[#0A84FF]">Trang chủ</Link><span className="mx-1.5">/</span>
              <Link href="/xaykenh" className="hover:text-[#0A84FF]">Xây Kênh</Link><span className="mx-1.5">/</span>
              <span className="text-[#0F172A]">MKT Page</span>
            </nav>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-1.5 text-[13px] font-semibold text-[#0057D9] shadow-[0_2px_10px_rgba(7,27,47,.06)]" style={{ borderColor: C.line2 }}>
              <span className="h-[7px] w-[7px] rounded-full bg-[#16A34A] ring-[3px] ring-[rgba(22,163,74,.18)]" />
              Facebook Page Control Center
            </div>
            <h1 className="mb-5 text-[clamp(34px,4.6vw,56px)] font-extrabold leading-[1.06] tracking-tight">
              Vận hành hàng trăm Fanpage từ{' '}
              <span style={{ background: 'linear-gradient(115deg,#0057D9,#0A84FF 55%,#FF7A00)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>một Dashboard duy nhất</span>
            </h1>
            <p className="mb-7 max-w-[540px] text-[18px] leading-[1.65] text-[#64748B]">
              MKT Page giúp doanh nghiệp, Agency và đội ngũ Marketing quản lý tập trung toàn bộ hệ thống Fanpage Facebook, tự động đăng bài, lập lịch nội dung, cập nhật thông tin Page và theo dõi quy trình vận hành chỉ trên một giao diện.
            </p>
            <div className="mb-8 flex flex-wrap gap-3.5">
              <TrialModalButton source={SOURCE} className="inline-flex items-center gap-2 rounded-[13px] bg-[#0057D9] bg-[linear-gradient(135deg,#0A84FF,#0057D9)] px-7 py-3.5 text-[16px] font-bold text-white shadow-[0_12px_30px_rgba(10,132,255,.4)] transition-transform hover:-translate-y-0.5">
                Dùng thử miễn phí <ArrowRight className="h-[18px] w-[18px]" />
              </TrialModalButton>
              <Link href="#demo" className="inline-flex items-center gap-2.5 rounded-[13px] border bg-white px-6 py-3.5 text-[16px] font-semibold text-[#0F172A] transition-all hover:-translate-y-0.5 hover:border-[#0A84FF]" style={{ borderColor: C.line2 }}>
                <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#EAF3FF]"><Play className="h-3 w-3 fill-[#0A84FF] text-[#0A84FF]" /></span>
                Xem video demo
              </Link>
            </div>
          </div>

          {/* dashboard mockup */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-7 blur-2xl" style={{ background: 'radial-gradient(circle at 60% 40%,rgba(10,132,255,.28),transparent 60%)' }} />
            <div className="relative overflow-hidden rounded-[18px] bg-white shadow-[0_40px_80px_-24px_rgba(7,27,47,.5),0_0_0_1px_rgba(7,27,47,.06)]">
              <div className="flex items-center gap-3 border-b bg-[#F2F5FA] px-4 py-2.5" style={{ borderColor: '#E3EAF4' }}>
                <div className="flex items-center gap-1.5"><span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" /><span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" /><span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" /></div>
                <div className="mx-auto flex max-w-[340px] flex-1 items-center gap-2 rounded-lg border bg-white px-3 py-1.5" style={{ borderColor: '#E3EAF4' }}>
                  <Shield className="h-3.5 w-3.5 text-[#94A3B8]" />
                  <span className="font-mono text-[11.5px] text-[#64748B]">phanmemzalo.com/xaykenh/mktpage</span>
                </div>
                <span className="w-[46px]" />
              </div>
              <MockupImage src="/uploads/mkt-page-dashboard.png" alt="Giao diện quản lý tài khoản và Fanpage của phần mềm MKT Page" />
            </div>
            <div className="absolute left-[-46px] top-[30px] hidden animate-float rounded-[14px] border bg-white p-3 shadow-[0_18px_40px_-10px_rgba(7,27,47,.32)] sm:block" style={{ borderColor: '#EDF1F7' }}>
              <div className="flex items-center gap-2.5">
                <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#EAF3FF]"><Send className="h-[17px] w-[17px] text-[#0A84FF]" /></span>
                <div><div className="text-[11px] font-semibold text-[#94A3B8]">Đăng hàng loạt</div><div className="font-mono text-[14px] font-bold text-[#0F172A]">1.060 Page</div></div>
              </div>
            </div>
            <div className="absolute bottom-6 right-[-40px] hidden animate-float-delayed rounded-[14px] border bg-white p-3 shadow-[0_18px_40px_-10px_rgba(255,122,0,.28)] sm:block" style={{ borderColor: '#FFE6C7' }}>
              <div className="flex items-center gap-2.5">
                <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#FFF4E5]"><Clock className="h-[17px] w-[17px] text-[#FF7A00]" /></span>
                <div><div className="text-[11px] font-semibold text-[#94A3B8]">Tiết kiệm</div><div className="font-mono text-[14px] font-bold text-[#0F172A]">~42 giờ/tuần</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ECOSYSTEM STRIP ============ */}
      <section className="border-y bg-white py-6" style={{ borderColor: '#EDF1F7' }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-3.5 px-6">
          <span className="text-[13px] font-semibold text-[#94A3B8]">Vận hành liền mạch trên hệ sinh thái MKT</span>
          <div className="flex flex-wrap items-center gap-7 opacity-90">
            {ECOSYSTEM.map((e) => <span key={e} className="text-[15px] font-bold text-[#475569]">{e}</span>)}
          </div>
        </div>
      </section>

      {/* ============ PAIN ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <Eyebrow color={C.orange}>Vấn đề</Eyebrow>
            <H2>Quản lý Fanpage thủ công đang làm đội ngũ của bạn chậm lại</H2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PAINS.map((p) => (
              <div key={p.n} className="relative overflow-hidden rounded-[20px] border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_46px_-22px_rgba(225,29,72,.32)]" style={{ borderColor: '#EDF1F7' }}>
                <span className="pointer-events-none absolute right-5 top-3.5 font-mono text-[44px] font-bold leading-none text-[#F1F5F9]">{p.n}</span>
                <span className="relative mb-4 grid h-[50px] w-[50px] place-items-center rounded-[14px] text-[#E11D48]" style={{ background: 'linear-gradient(135deg,#FFF1F3,#FFF4E5)', boxShadow: 'inset 0 0 0 1px rgba(225,29,72,.12)' }}><p.Icon className="h-[22px] w-[22px]" /></span>
                <p className="relative mb-4 text-[16px] font-semibold leading-[1.5] text-[#1F2D40]">{p.text}</p>
                <div className="relative flex items-center gap-1.5 text-[12.5px] font-semibold text-[#BE123C]"><span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />Đang làm thủ công</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 rounded-[16px] border px-7 py-4" style={{ background: 'linear-gradient(135deg,#EAF3FF,#FFF4E5)', borderColor: '#D2E6FF' }}>
              <Zap className="h-[22px] w-[22px] text-[#0057D9]" />
              <span className="text-[17px] font-bold text-[#0F172A]">MKT Page biến toàn bộ quy trình này thành một hệ thống tự động.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORKFLOW ============ */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg,#F7FAFF,#fff)' }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <Eyebrow>Quy trình</Eyebrow>
            <H2>Một nền tảng — Toàn bộ quy trình vận hành Fanpage</H2>
          </div>
          <div className="relative">
            <div className="absolute left-[9%] right-[9%] top-[38px] hidden h-0.5 lg:block" style={{ background: 'linear-gradient(90deg,#0A84FF,#FF7A00)', opacity: .35 }} />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {STEPS.map((s) => (
                <div key={s.n} className="text-center">
                  <div className="relative mx-auto mb-[18px] grid h-[76px] w-[76px] place-items-center rounded-[20px] border bg-white shadow-[0_12px_28px_-12px_rgba(7,27,47,.25)]" style={{ borderColor: C.line2 }}>
                    <span className="absolute -right-2 -top-2 grid h-[26px] w-[26px] place-items-center rounded-full font-mono text-[12px] font-bold text-white shadow-[0_4px_10px_rgba(10,132,255,.4)]" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>{s.n}</span>
                    <s.Icon className="h-[26px] w-[26px] text-[#0A84FF]" />
                  </div>
                  <h3 className="mb-1.5 text-[16px] font-bold text-[#0F172A]">{s.title}</h3>
                  <p className="text-[13.5px] leading-[1.5] text-[#64748B]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DASHBOARD ============ */}
      <section className="py-16" style={{ background: 'radial-gradient(120% 120% at 0% 0%,rgba(10,132,255,.12),transparent 48%),radial-gradient(120% 120% at 100% 100%,rgba(255,122,0,.1),transparent 52%),#F7FAFF' }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Eyebrow>Dashboard</Eyebrow>
            <H2 className="mb-4">Trung tâm điều khiển toàn bộ hệ thống Fanpage</H2>
            <p className="text-[17px] leading-[1.6] text-[#64748B]">Mọi tài khoản, Fanpage, nội dung và tiến trình đăng bài — theo dõi và điều phối trong một màn hình duy nhất.</p>
          </div>
          <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_40px_90px_-34px_rgba(7,27,47,.4),0_0_0_1px_rgba(7,27,47,.06)]">
            <div className="flex items-center gap-3 border-b bg-[#F2F5FA] px-[18px] py-2.5" style={{ borderColor: '#E3EAF4' }}>
              <div className="flex items-center gap-1.5"><span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" /><span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" /><span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" /></div>
              <div className="mx-auto flex max-w-[420px] flex-1 items-center gap-2 rounded-lg border bg-white px-3.5 py-1.5" style={{ borderColor: '#E3EAF4' }}>
                <Shield className="h-3.5 w-3.5 text-[#94A3B8]" /><span className="font-mono text-[12px] text-[#64748B]">phanmemzalo.com/xaykenh/mktpage</span>
              </div>
              <span className="w-[56px]" />
            </div>
            <MockupImage src="/uploads/mkt-page-dashboard-2.png" alt="Dashboard quản lý tài khoản và Fanpage của phần mềm MKT Page" />
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Eyebrow>Tính năng</Eyebrow>
            <H2>Tự động hóa những tác vụ tốn thời gian nhất trên Fanpage</H2>
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="group relative flex flex-col overflow-hidden rounded-[18px] border bg-white p-[22px] transition-all hover:-translate-y-1.5 hover:border-[#A9CEFF] hover:shadow-[0_26px_52px_-20px_rgba(10,132,255,.32)]" style={{ borderColor: '#EDF1F7' }}>
                <span className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'linear-gradient(90deg,#0A84FF,#FF7A00)' }} />
                <span className="mb-4 grid h-[46px] w-[46px] place-items-center rounded-[13px] text-[#0057D9] transition-all group-hover:-translate-y-0.5 group-hover:bg-[#0057D9] group-hover:text-white group-hover:shadow-[0_12px_24px_-8px_rgba(10,132,255,.6)]" style={{ background: 'linear-gradient(135deg,#EAF3FF,#D2E6FF)' }}><f.Icon className="h-[22px] w-[22px]" /></span>
                <h3 className="mb-2 text-[16.5px] font-bold tracking-tight text-[#0F172A]">{f.title}</h3>
                <p className="text-[14px] leading-[1.55] text-[#64748B]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BULK POSTING ============ */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg,#F7FAFF,#fff)' }}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Eyebrow color={C.orange}>Đăng hàng loạt</Eyebrow>
            <H2 className="mb-[18px] !text-[clamp(26px,3.2vw,38px)]">Đăng hàng loạt lên hàng trăm Fanpage chỉ với một lần cấu hình</H2>
            <p className="mb-6 text-[17px] leading-[1.65] text-[#64748B]">Chọn tài khoản, chọn Page, chọn nội dung, thiết lập khoảng cách hành động, cấu hình lặp lại và bắt đầu đăng. MKT Page tự động xử lý hàng loạt theo đúng kịch bản đã thiết lập.</p>
            <div className="mb-7 flex flex-col gap-3.5">
              {BULK_POINTS.map((b) => (
                <div key={b} className="flex items-start gap-3"><span className="mt-0.5 grid h-[26px] w-[26px] flex-shrink-0 place-items-center rounded-lg bg-[#E7F8EE]"><Check className="h-3.5 w-3.5 text-[#16A34A]" strokeWidth={3} /></span><span className="text-[15px] font-medium leading-[1.5] text-[#334155]">{b}</span></div>
              ))}
            </div>
            <TrialModalButton source={`${SOURCE} · Đăng hàng loạt`} className="inline-flex items-center gap-2 rounded-[13px] bg-[#FF7A00] bg-[linear-gradient(135deg,#FF9500,#FF7A00)] px-6 py-3.5 text-[15.5px] font-bold text-white shadow-[0_12px_30px_rgba(255,122,0,.36)] transition-transform hover:-translate-y-0.5">
              Bắt đầu đăng hàng loạt <ArrowRight className="h-[17px] w-[17px]" />
            </TrialModalButton>
          </div>
          {/* config mockup */}
          <div className="overflow-hidden rounded-[22px] border bg-white shadow-[0_40px_80px_-32px_rgba(7,27,47,.4)]" style={{ borderColor: '#E3EAF4' }}>
            <div className="flex items-center gap-2 border-b bg-[#F7FAFF] px-4 py-3" style={{ borderColor: '#EDF1F7' }}>
              <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" /><span className="h-[9px] w-[9px] rounded-full bg-[#FEBC2E]" /><span className="h-[9px] w-[9px] rounded-full bg-[#28C840]" />
              <span className="ml-2 text-[12px] font-semibold text-[#64748B]">Cấu hình đăng bài hàng loạt</span>
            </div>
            <div className="flex flex-col gap-3 p-[18px]">
              <div className="grid grid-cols-2 gap-3">
                <div><div className="mb-1.5 text-[11.5px] font-semibold text-[#64748B]">Chọn kịch bản</div><div className="flex items-center justify-between rounded-[10px] border bg-white px-3 py-2.5 text-[13px]" style={{ borderColor: C.line2 }}>Đăng bài tổng hợp <span className="text-[#94A3B8]">▾</span></div></div>
                <div><div className="mb-1.5 text-[11.5px] font-semibold text-[#64748B]">Chọn tài khoản</div><div className="flex items-center justify-between rounded-[10px] border bg-white px-3 py-2.5 text-[13px]" style={{ borderColor: C.line2 }}>837 tài khoản Live <span className="text-[#94A3B8]">▾</span></div></div>
              </div>
              <div className="rounded-[12px] border bg-[#F7FAFF] p-3.5" style={{ borderColor: '#EDF1F7' }}>
                <div className="mb-2.5 text-[11.5px] font-bold text-[#0F172A]">Cấu hình khi đăng bài</div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between"><span className="text-[12.5px] text-[#475569]">Khoảng cách hành động</span><span className="font-mono text-[12.5px] font-semibold text-[#0F172A]">30 – 90 giây</span></div>
                  <div className="flex items-center justify-between"><span className="text-[12.5px] text-[#475569]">Cấu hình lặp lại</span><span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0057D9]"><span className="relative h-[17px] w-[30px] rounded-full bg-[#0A84FF]"><span className="absolute right-0.5 top-0.5 h-[13px] w-[13px] rounded-full bg-white" /></span>Bật</span></div>
                  <div className="flex items-center justify-between"><span className="text-[12.5px] text-[#475569]">Số Page áp dụng</span><span className="font-mono text-[12.5px] font-semibold text-[#0F172A]">1.060 Page</span></div>
                </div>
              </div>
              <div className="rounded-[12px] border p-3.5" style={{ borderColor: '#EDF1F7' }}>
                <div className="mb-2.5 flex items-center justify-between"><span className="text-[12px] font-bold text-[#0F172A]">Tiến trình đăng</span><span className="font-mono text-[12px] font-semibold text-[#FF7A00]">722 / 1.060</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-[#EDF1F7]"><div className="h-full w-[68%] rounded-full" style={{ background: 'linear-gradient(90deg,#0A84FF,#FF7A00)' }} /></div>
                <div className="mt-2.5 flex flex-wrap gap-2.5">
                  <span className="rounded-[7px] bg-[#E7F8EE] px-2.5 py-1 text-[11px] font-semibold text-[#15803D]">724 hoàn thành</span>
                  <span className="rounded-[7px] bg-[#EAF3FF] px-2.5 py-1 text-[11px] font-semibold text-[#0057D9]">96 đang đăng</span>
                  <span className="rounded-[7px] bg-[#FDECEC] px-2.5 py-1 text-[11px] font-semibold text-[#BE123C]">12 lỗi</span>
                </div>
              </div>
              <button className="rounded-[11px] py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(10,132,255,.32)]" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>Bắt đầu đăng</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-12 max-w-[740px] text-center">
            <Eyebrow>Đối tượng</Eyebrow>
            <H2>Phù hợp cho mọi đội ngũ vận hành Fanpage quy mô lớn</H2>
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <div key={u.title} className="group relative overflow-hidden rounded-[20px] border bg-white p-7 transition-all hover:-translate-y-1.5 hover:border-[#A9CEFF] hover:shadow-[0_26px_54px_-22px_rgba(10,132,255,.34)]" style={{ borderColor: '#EDF1F7' }}>
                <span className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'linear-gradient(90deg,#0A84FF,#FF7A00)' }} />
                <div className="relative mb-[18px] flex items-center justify-between">
                  <span className="grid h-[50px] w-[50px] place-items-center rounded-[14px] bg-[#071B2F] text-white transition-all group-hover:-translate-y-0.5 group-hover:bg-[#0057D9] group-hover:shadow-[0_12px_26px_-8px_rgba(10,132,255,.6)]"><u.Icon className="h-[22px] w-[22px]" /></span>
                  <span className="rounded-full bg-[#EAF3FF] px-2.5 py-1.5 font-mono text-[11px] font-semibold text-[#0057D9]">{u.tag}</span>
                </div>
                <h3 className="relative mb-2 text-[18px] font-bold tracking-tight text-[#0F172A]">{u.title}</h3>
                <p className="relative text-[14.5px] leading-[1.6] text-[#64748B]">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg,#F7FAFF,#fff)' }}>
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <Eyebrow color={C.orange}>So sánh</Eyebrow>
            <H2>Khác biệt giữa làm thủ công và dùng MKT Page</H2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-[20px] border bg-white p-7" style={{ borderColor: '#EDF1F7' }}>
              <div className="mb-[22px] flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-[11px] bg-[#FDECEC]"><X className="h-5 w-5 text-[#E11D48]" strokeWidth={2.4} /></span><span className="text-[18px] font-bold text-[#0F172A]">Làm thủ công</span></div>
              <div className="flex flex-col gap-3.5">
                {MANUAL.map((m) => <div key={m} className="flex items-center gap-3 text-[15px] text-[#64748B]"><X className="h-[17px] w-[17px] flex-shrink-0 text-[#E11D48]" strokeWidth={2.6} />{m}</div>)}
              </div>
            </div>
            <div className="relative rounded-[20px] border-[1.5px] p-7 shadow-[0_28px_60px_-28px_rgba(10,132,255,.5)]" style={{ borderColor: '#0A84FF', background: 'linear-gradient(160deg,#fff,#F4F9FF)' }}>
              <span className="absolute -top-3 right-6 rounded-full px-3 py-1.5 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(10,132,255,.4)]" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>Khuyến nghị</span>
              <div className="mb-[22px] flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-[11px]" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}><Layers className="h-[18px] w-[18px] text-white" /></span><span className="text-[18px] font-bold text-[#0F172A]">MKT Page</span></div>
              <div className="flex flex-col gap-3.5">
                {MKT.map((k) => <div key={k} className="flex items-center gap-3 text-[15px] font-medium text-[#0F172A]"><Check className="h-[17px] w-[17px] flex-shrink-0 text-[#16A34A]" strokeWidth={2.8} />{k}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className="border-y py-14" style={{ borderColor: '#EDF1F7', background: 'radial-gradient(120% 140% at 100% 0%,rgba(255,122,0,.12),transparent 48%),radial-gradient(120% 140% at 0% 100%,rgba(10,132,255,.14),transparent 52%),#F7FAFF' }}>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 px-6 lg:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.l} className="text-center">
              <div className="mb-2.5 text-[clamp(36px,5vw,54px)] font-bold leading-none tracking-tight" style={{ background: 'linear-gradient(135deg,#0057D9,#0A84FF 55%,#FF7A00)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{n.v}</div>
              <div className="text-[15px] font-medium leading-[1.4] text-[#64748B]">{n.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ VIDEO DEMO ============ */}
      <section id="demo" className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <Eyebrow>Video demo</Eyebrow>
          <H2 className="mx-auto mb-10 max-w-[760px]">Xem cách MKT Page vận hành hàng trăm Fanpage trong vài phút</H2>
          <DemoScreen videoUrl={DEMO_VIDEO} label="Xem demo · 3 phút" />
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="py-16" style={{ background: 'linear-gradient(180deg,#F7FAFF,#fff)' }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="mx-auto mb-12 max-w-[920px] text-center">
            <Eyebrow>Bảng giá</Eyebrow>
            <H2 className="mb-3.5">Chọn gói phù hợp với quy mô vận hành</H2>
            <p className="text-[17px] text-[#64748B]">Không cần thẻ tín dụng · Hỗ trợ cài đặt 1-1 · Cam kết hoàn tiền 100% trong 7 ngày đầu</p>
          </div>
          <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-[20px] border bg-white p-[30px_26px] transition-all hover:-translate-y-1 ${p.featured ? 'border-[1.5px] border-[#0A84FF] shadow-[0_30px_70px_-28px_rgba(10,132,255,.55)] lg:-translate-y-1.5' : 'shadow-[0_12px_30px_-22px_rgba(7,27,47,.2)]'}`} style={{ borderColor: p.featured ? '#0A84FF' : '#EDF1F7' }}>
                {p.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-[15px] py-1.5 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(255,122,0,.4)]" style={{ background: 'linear-gradient(135deg,#FF9500,#FF7A00)' }}>Phổ biến nhất</span>}
                <h3 className="text-[19px] font-bold text-[#0F172A]">{p.name}</h3>
                <p className="mt-1.5 min-h-[42px] text-[14px] leading-[1.5] text-[#64748B]">{p.tagline}</p>
                <div className="mb-1.5 mt-[18px] flex items-baseline gap-1.5"><span className="text-[34px] font-bold tracking-tight" style={{ color: p.featured ? '#0057D9' : '#0F172A' }}>{p.price}</span></div>
                <div className="mb-[22px] text-[13px] text-[#94A3B8]">{p.note}</div>
                <TrialModalButton source={`${SOURCE} · ${p.name}`} className={`block rounded-[12px] py-3 text-center text-[15px] font-bold transition-all ${p.featured ? 'bg-[#0057D9] bg-[linear-gradient(135deg,#0A84FF,#0057D9)] text-white shadow-[0_10px_26px_rgba(10,132,255,.34)]' : 'bg-[#EAF3FF] text-[#0057D9]'}`}>{p.cta}</TrialModalButton>
                <div className="my-6 h-px bg-[#EDF1F7]" />
                <div className="flex flex-col gap-2.5">
                  {p.feats.map((f) => <div key={f} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={2.8} style={{ color: p.featured ? '#0A84FF' : '#16A34A' }} /><span className="text-[14px] leading-[1.45] text-[#475569]">{f}</span></div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[820px] px-6">
          <div className="mb-12 text-center">
            <Eyebrow>Câu hỏi thường gặp</Eyebrow>
            <H2>Bạn cần biết gì về MKT Page?</H2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((q) => (
              <details key={q.q} className="group rounded-[16px] border bg-white open:border-[#A9CEFF] open:bg-[#F7FAFF]" style={{ borderColor: '#EDF1F7' }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-[22px] py-5 text-[16px] font-semibold text-[#0F172A]">
                  {q.q}
                  <span className="grid h-[30px] w-[30px] flex-shrink-0 place-items-center rounded-[9px] bg-[#EDF1F7] text-[#64748B] transition-all group-open:rotate-180 group-open:bg-[#0A84FF] group-open:text-white"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span>
                </summary>
                <p className="px-[22px] pb-5 text-[15px] leading-[1.65] text-[#64748B]">{q.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bg-white px-6 pb-16 pt-6">
        <div className="mx-auto max-w-[1100px]">
          <div className="relative overflow-hidden rounded-[28px] px-12 py-16 text-center shadow-[0_40px_90px_-34px_rgba(10,132,255,.6)]" style={{ background: 'linear-gradient(115deg,#0057D9 0%,#0A84FF 50%,#FF7A00 120%)' }}>
            <div className="pointer-events-none absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-xl" />
            <div className="relative">
              <h2 className="mx-auto mb-[18px] max-w-[760px] text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.1] tracking-tight text-white">Sẵn sàng vận hành hệ thống Fanpage chuyên nghiệp hơn?</h2>
              <p className="mx-auto mb-9 max-w-[640px] text-[18px] leading-[1.6] text-white/90">Dùng MKT Page để quản lý, đăng bài và tự động hóa quy trình vận hành Fanpage từ một Dashboard duy nhất.</p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <TrialModalButton source={SOURCE} className="rounded-[13px] bg-white px-8 py-4 text-[16px] font-bold text-[#0057D9] shadow-[0_14px_34px_rgba(7,27,47,.3)] transition-transform hover:-translate-y-0.5">Dùng thử miễn phí</TrialModalButton>
                <TrialModalButton source={`${SOURCE} · Tư vấn`} className="rounded-[13px] border border-white/40 bg-white/15 px-8 py-4 text-[16px] font-bold text-white transition-colors hover:bg-white/25">Liên hệ tư vấn</TrialModalButton>
              </div>
              <div className="mt-6 text-[14px] font-medium text-white/85">Không cần thẻ tín dụng · Hỗ trợ cài đặt 1-1</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
