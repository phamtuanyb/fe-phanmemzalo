import Link from 'next/link'
import { ArrowRight, Play, Check, X } from 'lucide-react'
import TrialModalButton from '../TrialModalButton'
import MockupImage from './_components/MockupImage'
import Testimonials from './_components/Testimonials'

const SOURCE = 'MKT Affiliate'

const C = { brand: '#0A84FF', brandD: '#0057D9', acc: '#FF7A00', accD: '#E66A00', dark: '#0C2138', muted: '#4D5E78', subtle: '#94A3B8', bg: '#F7FAFF', green: '#16A34A', line: '#E4EAF3', line2: '#DDE4EE', red: '#E11D48' }

const PLATFORMS = ['TikTok', 'Facebook', 'Instagram', 'YouTube Shorts', 'Threads']
const STEPS = [
  { n: '01', title: 'Chuẩn bị nội dung', desc: 'Video, caption, hashtag, thumbnail tập trung tại kho nội dung.' },
  { n: '02', title: 'Quản lý tài khoản', desc: 'Hàng nghìn tài khoản, proxy riêng, phân nhóm theo chiến dịch.' },
  { n: '03', title: 'Gắn link affiliate', desc: 'Tự động chèn link theo từng chiến dịch vào mô tả hoặc bình luận.' },
  { n: '04', title: 'Đăng đa nền tảng', desc: 'Phân phối đồng loạt lên 5 nền tảng từ một hàng đợi duy nhất.' },
  { n: '05', title: 'Theo dõi hiệu quả', desc: 'Click, CTR, conversion, doanh thu, ROI theo thời gian thực.', hot: true },
]
const PIPELINE: { label: string; dot: string }[] = [
  { label: 'TikTok', dot: '#FE2C55' }, { label: 'Facebook', dot: '#1877F2' }, { label: 'Instagram', dot: '#E4405F' }, { label: 'YouTube Shorts', dot: '#FF0000' }, { label: 'Threads', dot: '#0C2138' },
]
const QUEUE = [
  { file: 'flash_1212_v18.mp4', net: 'TikTok', dot: '#FE2C55', pct: 88, status: 'Running', color: '#0057D9', grad: true },
  { file: 'review_serum_07.mp4', net: 'Facebook', dot: '#1877F2', pct: 100, status: 'Completed', color: '#15803D', solid: '#16A34A' },
  { file: 'unbox_tet_22.mp4', net: 'YT Shorts', dot: '#FF0000', pct: 34, status: 'Waiting', color: '#B45309', grad: true },
  { file: 'deal_combo_03.mp4', net: 'Instagram', dot: '#E4405F', pct: 12, status: 'Retry', color: '#E11D48', solid: '#fb6f84' },
]
const LINK_TAGS = [
  { t: 'Shopee', c: '#C2410C', bg: '#FFF0E8', bd: '#FFD4BF' },
  { t: 'Lazada', c: '#1E3A8A', bg: '#EEF1FB', bd: '#D6DEF6' },
  { t: 'TikTok Shop', c: '#364559', bg: '#EEF3FA', bd: '#E0E7F1' },
  { t: 'AccessTrade', c: '#0057D9', bg: '#EAF3FF', bd: '#CFE3FF' },
  { t: 'Custom Link', c: '#364559', bg: '#EEF3FA', bd: '#E0E7F1' },
]
const PERSONAS = [
  { n: '01', title: 'Affiliate cá nhân', desc: 'Tự vận hành nhiều tài khoản, đăng đều đặn và tăng thu nhập mà không cần đội ngũ.' },
  { n: '02', title: 'Creator', desc: 'Tái sử dụng nội dung trên nhiều nền tảng, mở rộng tệp khán giả từ một video.' },
  { n: '03', title: 'TikTok Shop', desc: 'Đẩy video bán hàng số lượng lớn, tự gắn link sản phẩm và tối ưu chuyển đổi.' },
  { n: '04', title: 'Agency', desc: 'Quản lý chiến dịch cho nhiều khách hàng, phân quyền và báo cáo theo từng brand.' },
  { n: '05', title: 'Media Team', desc: 'Phối hợp sản xuất và phân phối nội dung theo quy trình, theo dõi tiến độ tập trung.' },
  { n: '06', title: 'Doanh nghiệp', desc: 'Xây dựng hệ thống affiliate quy mô lớn, scale hàng nghìn nội dung với bảo mật cao.', hot: true },
]
const MANUAL = ['Quản lý rời rạc trên nhiều công cụ', 'Đăng thủ công từng nền tảng', 'Gắn link affiliate bằng tay', 'Khó theo dõi hiệu quả chiến dịch', 'Không thể mở rộng quy mô']
const MKT = ['Dashboard tập trung mọi quy trình', 'Đăng đa nền tảng từ một hàng đợi', 'Tự động gắn link theo chiến dịch', 'Theo dõi chiến dịch theo thời gian thực', 'Scale hàng nghìn nội dung dễ dàng']
const STATS = [
  { v: '30.000+', l: 'Khách hàng', from: '#0C2138', to: '#0A84FF' },
  { v: '500+', l: 'Chiến dịch mỗi ngày', from: '#0C2138', to: '#FF7A00' },
  { v: '98%', l: 'Khách hàng hài lòng', from: '#0C2138', to: '#0A84FF' },
  { v: '24/7', l: 'Hỗ trợ', from: '#0C2138', to: '#FF7A00' },
]
const PLANS = [
  { name: 'Gói 1 Năm', price: '3.000.000', perMonth: '≈ 250.000đ / tháng', accent: '#0057D9', featured: false, cta: 'Bắt đầu',
    feats: ['Đầy đủ tính năng phân phối đa nền tảng', 'Quản lý tài khoản & kho nội dung', 'Tự động gắn link affiliate', 'Hỗ trợ 24/7 · Đào tạo 1-1'] },
  { name: 'Gói 5 Năm', price: '7.000.000', perMonth: '≈ 116.000đ / tháng · tiết kiệm 53%', accent: '#FF7A00', featured: true, cta: 'Chọn gói 5 năm',
    feats: ['Mọi tính năng của gói 1 năm', 'Ưu tiên cập nhật tính năng mới', 'Tăng giới hạn tài khoản & chiến dịch', 'Chuyên viên hỗ trợ riêng'] },
  { name: 'Gói 10 Năm', price: '12.000.000', perMonth: '≈ 100.000đ / tháng · tiết kiệm 60%', accent: '#E66A00', featured: false, cta: 'Bắt đầu',
    feats: ['Mọi tính năng của gói 5 năm', 'Chi phí thấp nhất theo tháng', 'Đồng hành dài hạn cùng MKT', 'Tư vấn chiến lược scale hệ thống'] },
]
const FAQS = [
  { q: 'MKT Affiliate là gì?', a: 'MKT Affiliate là nền tảng vận hành hệ thống Affiliate Marketing đa nền tảng — giúp quản lý tài khoản, nội dung, video, link affiliate và tự động phân phối nội dung lên nhiều nền tảng trên một Dashboard duy nhất. Đây không chỉ là công cụ đăng video mà là hệ thống vận hành affiliate hoàn chỉnh.' },
  { q: 'MKT Affiliate hỗ trợ những nền tảng nào?', a: 'Hệ thống phân phối nội dung lên TikTok, Facebook, Instagram, YouTube Shorts và Threads. Chúng tôi liên tục bổ sung thêm nền tảng mới theo nhu cầu thị trường.' },
  { q: 'Tôi có thể quản lý bao nhiêu tài khoản?', a: 'Số lượng phụ thuộc vào gói, nhưng hệ thống được thiết kế để vận hành hàng nghìn tài khoản đồng thời với proxy riêng, phân nhóm theo folder và chiến dịch.' },
  { q: 'Phần mềm có tự động gắn link affiliate không?', a: 'Có. MKT Affiliate tự động chèn link affiliate vào mô tả hoặc bình luận bài đăng theo từng chiến dịch, hỗ trợ Shopee, Lazada, TikTok Shop, AccessTrade và link tuỳ chỉnh.' },
  { q: 'Tôi có cần biết kỹ thuật không?', a: 'Không. MKT đào tạo cầm tay chỉ việc đến khi bạn thành thạo sử dụng công cụ, cùng đội ngũ hỗ trợ 24/7.' },
  { q: 'Dữ liệu của tôi có an toàn không?', a: 'Mọi tài khoản chạy trên proxy riêng, dữ liệu được mã hoá và phân quyền chặt chẽ theo từng người dùng trong hệ thống.' },
  { q: 'Có chính sách dùng thử và hoàn tiền không?', a: 'Bạn được dùng thử miễn phí và cam kết hoàn tiền 100% trong 7 ngày đầu nếu tính năng không đúng như mô tả.' },
]

const Eyebrow = ({ children, color = C.brandD }: { children: React.ReactNode; color?: string }) => (
  <div className="text-[12.5px] font-semibold uppercase tracking-[0.08em]" style={{ color }}>{children}</div>
)
const H2 = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-[clamp(26px,3.2vw,42px)] font-extrabold leading-[1.14] tracking-tight text-[#0C2138] ${className}`}>{children}</h2>
)
const Frame = ({ title, src, alt }: { title: string; src: string; alt: string }) => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-0 rounded-[22px] blur-2xl" style={{ background: 'radial-gradient(circle at 70% 20%,rgba(10,132,255,.18),transparent 60%)' }} />
    <div className="relative overflow-hidden rounded-[18px] border bg-white shadow-[0_30px_60px_-22px_rgba(12,33,56,.35)]" style={{ borderColor: C.line }}>
      <div className="flex items-center gap-2 border-b bg-[#F7FAFF] px-[15px] py-[11px]" style={{ borderColor: '#EDF1F7' }}>
        <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" /><span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" /><span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
        <span className="ml-2.5 text-[12.5px] font-semibold text-[#6B7C95]">{title}</span>
      </div>
      <MockupImage src={src} alt={alt} />
    </div>
  </div>
)

export default function MktAffiliateLanding() {
  return (
    <div className="bg-[#F7FAFF] text-[#0C2138]">
      {/* ============ HERO ============ */}
      <section id="top" className="relative overflow-hidden px-6 pb-20 pt-16">
        <div className="pointer-events-none absolute -left-[120px] -top-[160px] h-[560px] w-[560px] rounded-full blur-[50px]" style={{ background: 'radial-gradient(circle,rgba(10,132,255,.22),transparent 65%)' }} />
        <div className="pointer-events-none absolute -right-[160px] top-[120px] h-[620px] w-[620px] rounded-full blur-[60px]" style={{ background: 'radial-gradient(circle,rgba(255,122,0,.2),transparent 68%)' }} />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <div>
            <nav className="mb-5 text-[12.5px] text-[#6B7C95]">
              <Link href="/" className="hover:text-[#0A84FF]">Trang chủ</Link><span className="mx-1.5">/</span>
              <Link href="/xaykenh" className="hover:text-[#0A84FF]">Xây Kênh</Link><span className="mx-1.5">/</span>
              <span className="text-[#0C2138]">MKT Affiliate</span>
            </nav>
            <div className="inline-flex items-center gap-2.5 rounded-full border px-[15px] py-[7px] text-[12.5px] font-semibold uppercase tracking-[0.06em] text-[#0057D9]" style={{ borderColor: '#CFE3FF', background: '#EAF3FF' }}>
              <span className="h-[7px] w-[7px] rounded-full bg-[#FF7A00]" /> Affiliate Marketing Operating System
            </div>
            <h1 className="mt-[22px] text-[clamp(30px,4.4vw,52px)] font-extrabold leading-[1.1] tracking-tight">
              Xây dựng hệ thống{' '}
              <span style={{ background: 'linear-gradient(115deg,#0A84FF,#FF7A00)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Affiliate Marketing</span>{' '}
              tự động vận hành và mở rộng.
            </h1>
            <p className="mt-6 max-w-[580px] text-[clamp(16px,1.4vw,19px)] leading-[1.65] text-[#4D5E78]">
              MKT Affiliate giúp quản lý tài khoản, video, nội dung, link affiliate và tự động phân phối lên{' '}
              <strong className="font-bold text-[#0C2138]">TikTok, Facebook, Instagram, YouTube Shorts và Threads</strong> chỉ trên một Dashboard duy nhất.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <TrialModalButton source={SOURCE} className="inline-flex items-center gap-2.5 rounded-[13px] bg-[#0057D9] bg-[linear-gradient(135deg,#0A84FF,#0057D9)] px-7 py-[15px] text-[16px] font-bold text-white shadow-[0_12px_30px_rgba(10,132,255,.32)] transition-transform hover:-translate-y-0.5">
                Dùng thử miễn phí <ArrowRight className="h-[18px] w-[18px]" />
              </TrialModalButton>
              <Link href="#demo" className="inline-flex items-center gap-2.5 rounded-[13px] border bg-white px-[26px] py-[15px] text-[16px] font-semibold text-[#0C2138] shadow-[0_1px_3px_rgba(12,33,56,.06)] transition-all hover:-translate-y-0.5 hover:border-[#0A84FF]" style={{ borderColor: C.line2 }}>
                <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#EAF3FF] text-[#0A84FF]"><Play className="h-3 w-3 fill-current" /></span> Xem Demo
              </Link>
            </div>
          </div>

          {/* hero dashboard */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3.5 rounded-[26px] blur-[40px]" style={{ background: 'linear-gradient(135deg,rgba(10,132,255,.32),rgba(255,122,0,.32))' }} />
            <div className="relative animate-float overflow-hidden rounded-[18px] border bg-white shadow-[0_40px_80px_-24px_rgba(12,33,56,.4)]" style={{ borderColor: C.line }}>
              <div className="flex items-center gap-2 border-b bg-[#F7FAFF] px-[15px] py-[11px]" style={{ borderColor: '#EDF1F7' }}>
                <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" /><span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" /><span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
                <span className="ml-2.5 text-[12.5px] font-semibold text-[#6B7C95]">MKT Affiliate · Quản lý video</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[rgba(22,163,74,.1)] px-2.5 py-1 text-[11px] font-semibold text-[#15803D]"><span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />LIVE</span>
              </div>
              <MockupImage src="/uploads/aff-dashboard.png" alt="Giao diện Dashboard quản lý video của MKT Affiliate" />
            </div>
            <div className="absolute left-[-30px] top-[64px] hidden animate-float-delayed rounded-[13px] border bg-white px-3.5 py-[11px] shadow-[0_16px_36px_rgba(12,33,56,.16)] sm:block" style={{ borderColor: C.line }}>
              <div className="text-[11px] text-[#6B7C95]">CTR trung bình</div><div className="font-mono font-bold text-[#E66A00]">↑ 4.8%</div>
            </div>
            <div className="absolute bottom-12 right-[-26px] hidden animate-float rounded-[13px] border bg-white px-3.5 py-[11px] shadow-[0_16px_36px_rgba(12,33,56,.16)] sm:block" style={{ borderColor: C.line }}>
              <div className="text-[11px] text-[#6B7C95]">Đã đăng hôm nay</div><div className="font-mono font-bold text-[#15803D]">12.408 video</div>
            </div>
          </div>
        </div>

        {/* logos */}
        <div className="mx-auto mt-[72px] max-w-[1100px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">Vận hành affiliate trên mọi nền tảng lớn</div>
          <div className="mt-[18px] flex flex-wrap justify-center gap-x-9 gap-y-3.5 text-[clamp(15px,1.5vw,17px)] font-bold text-[#45566F]">
            {PLATFORMS.map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section id="quy-trinh" className="border-t bg-[#F7FAFF] px-6 py-16" style={{ borderColor: C.line }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <Eyebrow>Một nền tảng — toàn bộ quy trình</Eyebrow>
            <H2 className="mt-3.5">Toàn bộ quy trình Affiliate Marketing trong một luồng vận hành</H2>
            <p className="mx-auto mt-[18px] max-w-[760px] text-[17px] leading-[1.6] text-[#4D5E78]">Từ chuẩn bị nội dung đến đo lường hiệu quả — mọi bước nằm gọn trong một hệ thống, không còn công cụ rời rạc.</p>
          </div>
          <div className="relative mt-14">
            <div className="absolute left-[9%] right-[9%] top-[26px] hidden h-0.5 lg:block" style={{ background: 'linear-gradient(90deg,#0A84FF,#FF7A00)', opacity: .3 }} />
            <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-5">
              {STEPS.map((s) => (
                <div key={s.n} className="flex flex-col items-center gap-4 text-center">
                  <div className="grid h-[52px] w-[52px] place-items-center rounded-full font-mono text-[17px] font-extrabold text-white" style={{ background: s.hot ? 'linear-gradient(135deg,#FF7A00,#E66A00)' : 'linear-gradient(135deg,#0A84FF,#0057D9)', boxShadow: s.hot ? '0 10px 24px rgba(255,122,0,.34)' : '0 10px 24px rgba(10,132,255,.32)' }}>{s.n}</div>
                  <div className="w-full flex-1 rounded-[18px] border p-[22px_18px] shadow-[0_6px_18px_-8px_rgba(12,33,56,.12)] transition-all hover:-translate-y-1" style={s.hot ? { background: 'linear-gradient(150deg,#EAF3FF,#FFF4E5)', borderColor: '#FFD49E' } : { background: '#fff', borderColor: C.line }}>
                    <div className="text-[17px] font-bold">{s.title}</div>
                    <div className="mt-2 text-[13.5px] leading-[1.55] text-[#4D5E78]">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ACCOUNTS ============ */}
      <section id="tinh-nang" className="border-t bg-white px-6 py-16" style={{ borderColor: C.line }}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-[52px] lg:grid-cols-2">
          <div>
            <Eyebrow>Quản lý tài khoản</Eyebrow>
            <H2 className="mt-3.5">Quản lý toàn bộ tài khoản từ một Dashboard</H2>
            <p className="mt-[18px] text-[17px] leading-[1.6] text-[#4D5E78]">Theo dõi trạng thái Live · Checkpoint · Die của từng tài khoản trên mọi nền tảng. Phân nhóm theo chiến dịch, folder, proxy và lọc tức thì.</p>
            <div className="mt-[26px] flex flex-wrap gap-2.5">
              {['Campaign', 'Folder', 'Proxy riêng', 'Search & Filter'].map((t) => (
                <span key={t} className="rounded-[11px] border px-3.5 py-2 text-[13px] font-semibold text-[#364559]" style={{ background: '#EEF3FA', borderColor: '#E0E7F1' }}>{t}</span>
              ))}
            </div>
          </div>
          <Frame title="MKT Affiliate · Danh sách tài khoản" src="/uploads/aff-accounts.png" alt="Giao diện quản lý danh sách tài khoản của MKT Affiliate" />
        </div>
      </section>

      {/* ============ CONTENT LIBRARY ============ */}
      <section className="bg-[#F7FAFF] px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] items-center gap-[52px] lg:grid-cols-2">
          <div className="lg:order-2">
            <Eyebrow color={C.accD}>Kho nội dung tập trung</Eyebrow>
            <H2 className="mt-3.5">Kho nội dung Affiliate tập trung</H2>
            <p className="mt-[18px] text-[17px] leading-[1.6] text-[#4D5E78]">Toàn bộ tài nguyên chiến dịch — video, caption, hashtag, template, thumbnail, audio — được quản lý tại một nơi, gắn tag và phân folder để tái sử dụng cho hàng nghìn nội dung.</p>
            <div className="mt-[26px] grid max-w-[420px] grid-cols-2 gap-3">
              <div className="rounded-[13px] border bg-white p-3.5 shadow-[0_1px_3px_rgba(12,33,56,.06)]" style={{ borderColor: C.line }}><div className="font-mono text-[1.3rem] font-bold text-[#0C2138]">2.640</div><div className="text-[12.5px] text-[#6B7C95]">Video sẵn sàng</div></div>
              <div className="rounded-[13px] border bg-white p-3.5 shadow-[0_1px_3px_rgba(12,33,56,.06)]" style={{ borderColor: C.line }}><div className="font-mono text-[1.3rem] font-bold text-[#0C2138]">184</div><div className="text-[12.5px] text-[#6B7C95]">Template caption</div></div>
            </div>
          </div>
          <div className="lg:order-1"><Frame title="MKT Affiliate · Quản lý video" src="/uploads/aff-content.png" alt="Giao diện kho nội dung và quản lý video Affiliate của MKT Affiliate" /></div>
        </div>
      </section>

      {/* ============ DISTRIBUTION ENGINE ============ */}
      <section className="relative overflow-hidden border-y px-6 py-[88px]" style={{ borderColor: C.line, background: 'linear-gradient(180deg,#EAF3FF,#FFF4E5)' }}>
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[900px] -translate-x-1/2 blur-[70px]" style={{ background: 'radial-gradient(ellipse,rgba(10,132,255,.16),transparent 70%)' }} />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[1000px] text-center">
            <span className="inline-flex items-center rounded-full border bg-white px-[15px] py-[7px] text-[12.5px] font-semibold uppercase tracking-[0.06em] text-[#0057D9]" style={{ borderColor: '#CFE3FF' }}>Core engine</span>
            <H2 className="mt-4">Động cơ phân phối nội dung đa nền tảng</H2>
            <p className="mx-auto mt-[18px] max-w-[820px] text-[17px] leading-[1.6] text-[#45566F]">Một video, một lần thiết lập — hệ thống tự phân phối đồng loạt lên TikTok, Facebook, Instagram, YouTube Shorts và Threads, kèm hàng đợi và tiến trình theo thời gian thực.</p>
          </div>

          {/* pipeline */}
          <div className="mt-[54px] flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-[13px] px-5 py-3 text-[14px] font-bold text-white shadow-[0_10px_26px_rgba(10,132,255,.3)]" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>Video</span>
            {PIPELINE.map((p) => (
              <span key={p.label} className="flex items-center gap-2.5">
                <span className="text-[18px] text-[#0A84FF]">→</span>
                <span className="inline-flex items-center rounded-[12px] border bg-white px-[17px] py-[11px] text-[13.5px] font-semibold" style={{ borderColor: C.line2 }}><span className="mr-[7px] inline-block h-2 w-2 rounded-[2px]" style={{ background: p.dot }} />{p.label}</span>
              </span>
            ))}
            <span className="text-[18px] text-[#0A84FF]">→</span>
            <span className="rounded-[13px] px-5 py-3 text-[14px] font-bold text-white shadow-[0_10px_26px_rgba(22,163,74,.28)]" style={{ background: 'linear-gradient(135deg,#16A34A,#34d97f)' }}>Completed</span>
          </div>

          {/* publishing queue */}
          <div className="mx-auto mt-11 max-w-[980px] overflow-hidden rounded-[20px] border bg-white shadow-[0_36px_70px_-30px_rgba(12,33,56,.25)]" style={{ borderColor: C.line }}>
            <div className="flex flex-wrap items-center gap-3 border-b bg-[#F7FAFF] px-[18px] py-3.5" style={{ borderColor: '#EDF1F7' }}>
              <span className="text-[14px] font-bold">Publishing Queue</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF3FF] px-2.5 py-1 text-[11px] text-[#0057D9]"><span className="h-1.5 w-1.5 rounded-full bg-[#0A84FF]" />Đang xử lý 248 video</span>
              <span className="ml-auto flex flex-wrap gap-3.5 text-[11.5px] text-[#6B7C95]"><span><b className="text-[#0057D9]">Running</b> 18</span><span><b className="text-[#B45309]">Waiting</b> 226</span><span><b className="text-[#15803D]">Done</b> 12.4k</span><span><b className="text-[#E11D48]">Failed</b> 3</span></span>
            </div>
            <div className="p-2.5">
              {QUEUE.map((r, idx) => (
                <div key={r.file} className="grid grid-cols-[1.4fr_1fr_2fr_.8fr] items-center gap-3 rounded-[12px] px-3.5 py-[13px] text-[12.5px]" style={{ background: idx % 2 === 0 ? '#F7FAFF' : 'transparent' }}>
                  <span className="truncate font-semibold">{r.file}</span>
                  <span className="text-[#45566F]"><span className="mr-1.5 inline-block h-[7px] w-[7px] rounded-[2px]" style={{ background: r.dot }} />{r.net}</span>
                  <span className="h-[7px] overflow-hidden rounded-full bg-[#E4EAF3]"><span className="block h-full rounded-full" style={{ width: `${r.pct}%`, background: r.solid || 'linear-gradient(90deg,#0A84FF,#FF7A00)' }} /></span>
                  <span className="text-right font-semibold" style={{ color: r.color }}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA INLINE ============ */}
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-center gap-6 rounded-[22px] px-10 py-[34px] text-white shadow-[0_24px_50px_-20px_rgba(10,132,255,.45)]" style={{ background: 'linear-gradient(120deg,#0A84FF,#0057D9)' }}>
          <div className="min-w-[260px] flex-1">
            <div className="text-[1.5rem] font-extrabold tracking-tight">Phân phối nội dung của bạn ở quy mô lớn</div>
            <div className="mt-1.5 text-[16px] text-white/85">Bắt đầu miễn phí — không cần thẻ tín dụng, hỗ trợ cài đặt 1-1.</div>
          </div>
          <TrialModalButton source={SOURCE} className="inline-flex items-center gap-2 rounded-[13px] bg-white px-7 py-[15px] text-[16px] font-bold text-[#0057D9] shadow-[0_12px_30px_rgba(12,33,56,.2)] transition-transform hover:-translate-y-0.5">Dùng thử miễn phí <ArrowRight className="h-[17px] w-[17px]" /></TrialModalButton>
        </div>
      </section>

      {/* ============ AFFILIATE LINKS ============ */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] items-center gap-[52px] lg:grid-cols-2">
          <div>
            <Eyebrow color={C.accD}>Tự động hoá</Eyebrow>
            <H2 className="mt-3.5">Tự động gắn Link Affiliate</H2>
            <p className="mt-[18px] text-[17px] leading-[1.6] text-[#4D5E78]">Tự động thêm link affiliate vào bình luận hoặc mô tả bài đăng theo từng chiến dịch — đồng bộ với Shopee, Lazada, TikTok Shop, AccessTrade và link tuỳ chỉnh.</p>
            <div className="mt-[26px] flex flex-wrap gap-2.5">
              {LINK_TAGS.map((t) => <span key={t.t} className="rounded-[11px] border px-[15px] py-[9px] text-[13px] font-semibold" style={{ color: t.c, background: t.bg, borderColor: t.bd }}>{t.t}</span>)}
            </div>
          </div>
          {/* mockup */}
          <div className="overflow-hidden rounded-[18px] border bg-white shadow-[0_30px_60px_-26px_rgba(12,33,56,.28)]" style={{ borderColor: C.line }}>
            <div className="border-b bg-[#F7FAFF] px-4 py-[13px] text-[13px] font-bold" style={{ borderColor: '#EDF1F7' }}>Affiliate Links · Chiến dịch Flash 12.12</div>
            <div className="flex flex-col gap-2.5 p-3.5">
              <div className="flex items-center gap-3 rounded-[12px] border bg-[#F7FAFF] px-3.5 py-[13px]" style={{ borderColor: C.line }}>
                <span className="rounded-lg bg-[#EE4D2D] px-[9px] py-[5px] text-[11px] font-bold text-white">Shopee</span>
                <span className="flex-1 truncate font-mono text-[12px] text-[#6B7C95]">shp.ee/aff/tet26-combo</span>
                <span className="text-[11px] font-semibold text-[#15803D]">tự gắn</span>
              </div>
              <div className="flex items-center gap-3 rounded-[12px] border bg-[#F7FAFF] px-3.5 py-[13px]" style={{ borderColor: C.line }}>
                <span className="rounded-lg bg-[#1A1A1A] px-[9px] py-[5px] text-[11px] font-bold text-white">TikTok Shop</span>
                <span className="flex-1 truncate font-mono text-[12px] text-[#6B7C95]">vt.tiktok/aff/serum07</span>
                <span className="text-[11px] font-semibold text-[#15803D]">tự gắn</span>
              </div>
              <div className="mt-1 grid grid-cols-3 gap-2.5">
                <div className="rounded-[12px] border p-3.5" style={{ background: '#EAF3FF', borderColor: '#D2E6FF' }}><div className="text-[11px] text-[#6B7C95]">Click</div><div className="font-mono text-[1.15rem] font-bold">42.180</div></div>
                <div className="rounded-[12px] border p-3.5" style={{ background: '#FFF4E5', borderColor: '#FFD49E' }}><div className="text-[11px] text-[#6B7C95]">CTR</div><div className="font-mono text-[1.15rem] font-bold text-[#E66A00]">5.2%</div></div>
                <div className="rounded-[12px] border p-3.5" style={{ background: '#E7F8EE', borderColor: '#BFE6CF' }}><div className="text-[11px] text-[#6B7C95]">Conversion</div><div className="font-mono text-[1.15rem] font-bold text-[#15803D]">1.864</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ANALYTICS ============ */}
      <section className="border-t bg-white px-6 py-16" style={{ borderColor: C.line }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <Eyebrow>Analytics</Eyebrow>
            <H2 className="mt-3.5">Một Dashboard — hàng nghìn chiến dịch</H2>
            <p className="mx-auto mt-[18px] max-w-[760px] text-[17px] leading-[1.6] text-[#4D5E78]">Theo dõi chiến dịch đang chạy, đã hoàn thành, doanh thu, click, conversion và ROI — tất cả trên biểu đồ thời gian thực.</p>
          </div>
          <div className="mt-12 grid gap-[18px] lg:grid-cols-3">
            {/* counters */}
            <div className="grid grid-rows-2 gap-[18px]">
              <div className="rounded-[18px] border bg-[#F7FAFF] p-[22px]" style={{ borderColor: C.line }}><div className="text-[13px] text-[#6B7C95]">Chiến dịch đang chạy</div><div className="mt-1 font-mono text-[2rem] font-extrabold text-[#0C2138]">1.248</div><div className="mt-0.5 text-[12px] text-[#15803D]">↑ 18% so với tháng trước</div></div>
              <div className="rounded-[18px] border bg-[#F7FAFF] p-[22px]" style={{ borderColor: C.line }}><div className="text-[13px] text-[#6B7C95]">Doanh thu affiliate</div><div className="mt-1 font-mono text-[2rem] font-extrabold text-[#15803D]">₫2.846M</div><div className="mt-0.5 text-[12px] text-[#6B7C95]">ROI trung bình 3.8x</div></div>
            </div>
            {/* line chart */}
            <div className="rounded-[18px] border bg-white p-[22px] shadow-[0_1px_3px_rgba(12,33,56,.06)]" style={{ borderColor: C.line }}>
              <div className="flex items-center justify-between"><span className="text-[13px] font-semibold">Click theo thời gian</span><span className="text-[11px] text-[#15803D]">30 ngày</span></div>
              <svg viewBox="0 0 320 130" className="mt-3.5 h-[130px] w-full" preserveAspectRatio="none">
                <defs><linearGradient id="aff-lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0A84FF" stopOpacity=".28" /><stop offset="1" stopColor="#0A84FF" stopOpacity="0" /></linearGradient></defs>
                <polygon points="0,110 0,86 40,92 80,70 120,78 160,52 200,58 240,36 280,42 320,20 320,110" fill="url(#aff-lg)" />
                <polyline points="0,86 40,92 80,70 120,78 160,52 200,58 240,36 280,42 320,20" fill="none" stroke="#0A84FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="0,104 40,100 80,96 120,90 160,84 200,80 240,72 280,66 320,58" fill="none" stroke="#FF7A00" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
              </svg>
              <div className="mt-1.5 flex gap-4 text-[11.5px] text-[#6B7C95]"><span><span className="mr-1.5 inline-block h-[3px] w-[9px] rounded-[2px] bg-[#0A84FF] align-middle" />Click</span><span><span className="mr-1.5 inline-block h-[3px] w-[9px] rounded-[2px] bg-[#FF7A00] align-middle" />Conversion</span></div>
            </div>
            {/* donut */}
            <div className="rounded-[18px] border bg-white p-[22px] shadow-[0_1px_3px_rgba(12,33,56,.06)]" style={{ borderColor: C.line }}>
              <div className="text-[13px] font-semibold">Tỷ trọng theo nền tảng</div>
              <div className="mt-3.5 flex items-center gap-[18px]">
                <div className="relative h-24 w-24 flex-none rounded-full" style={{ background: 'conic-gradient(#FE2C55 0 38%,#1877F2 38% 64%,#FF0000 64% 82%,#E4405F 82% 94%,#C3CEDD 94% 100%)' }}>
                  <div className="absolute inset-[13px] grid place-items-center rounded-full bg-white"><span className="font-mono text-[13px] font-bold text-[#0C2138]">5 kênh</span></div>
                </div>
                <div className="flex flex-col gap-[7px] text-[12px] text-[#45566F]">
                  <span><span className="mr-[7px] inline-block h-2 w-2 rounded-[2px] bg-[#FE2C55]" />TikTok 38%</span>
                  <span><span className="mr-[7px] inline-block h-2 w-2 rounded-[2px] bg-[#1877F2]" />Facebook 26%</span>
                  <span><span className="mr-[7px] inline-block h-2 w-2 rounded-[2px] bg-[#FF0000]" />YouTube 18%</span>
                  <span><span className="mr-[7px] inline-block h-2 w-2 rounded-[2px] bg-[#E4405F]" />Instagram 12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PERSONAS ============ */}
      <section id="mo-hinh" className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[720px] text-center">
            <Eyebrow color={C.accD}>Phù hợp với bạn</Eyebrow>
            <H2 className="mt-3.5">Dành cho mọi mô hình Affiliate</H2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {PERSONAS.map((p) => (
              <div key={p.n} className="rounded-[18px] border p-[26px] shadow-[0_1px_3px_rgba(12,33,56,.06)] transition-all hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-16px_rgba(10,132,255,.32)]" style={p.hot ? { background: 'linear-gradient(135deg,#EAF3FF,#FFF4E5)', borderColor: '#FFD49E' } : { background: '#fff', borderColor: C.line }}>
                <div className="font-mono text-[13px] font-bold" style={{ color: p.hot ? C.accD : C.brand }}>{p.n}</div>
                <div className="mt-3 text-[1.2rem] font-bold">{p.title}</div>
                <div className="mt-2 text-[14px] leading-[1.55] text-[#4D5E78]">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="border-t bg-white px-6 py-16" style={{ borderColor: C.line }}>
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center"><H2>Khác biệt giữa làm thủ công và MKT Affiliate</H2></div>
          <div className="mt-11 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-[20px] border p-[30px]" style={{ background: '#F7FAFF', borderColor: C.line }}>
              <div className="text-[1.15rem] font-bold text-[#6B7C95]">Làm thủ công</div>
              <div className="mt-5 flex flex-col gap-3.5">
                {MANUAL.map((m) => <div key={m} className="flex items-start gap-3 text-[14.5px] text-[#45566F]"><X className="mt-0.5 h-[17px] w-[17px] flex-none text-[#E11D48]" strokeWidth={2.6} />{m}</div>)}
              </div>
            </div>
            <div className="rounded-[20px] p-[30px] text-white shadow-[0_24px_50px_-22px_rgba(10,132,255,.5)]" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>
              <div className="flex items-center gap-2.5"><span className="grid h-[26px] w-[26px] place-items-center rounded-lg bg-white/[.18] text-[13px] font-extrabold">M</span><div className="text-[1.15rem] font-bold">MKT Affiliate</div></div>
              <div className="mt-5 flex flex-col gap-3.5">
                {MKT.map((k) => <div key={k} className="flex items-start gap-3 text-[14.5px]"><Check className="mt-0.5 h-[17px] w-[17px] flex-none text-[#7CFFB0]" strokeWidth={2.8} />{k}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VIDEO DEMO ============ */}
      <section id="demo" className="px-6 py-16">
        <div className="mx-auto max-w-[980px] text-center">
          <Eyebrow>Xem hệ thống vận hành</Eyebrow>
          <H2 className="mx-auto mt-3.5 max-w-[760px]">Demo MKT Affiliate trong 90 giây</H2>
          <div className="relative mt-9">
            <div className="pointer-events-none absolute inset-5 rounded-[24px] blur-[60px]" style={{ background: 'linear-gradient(135deg,rgba(10,132,255,.28),rgba(255,122,0,.28))' }} />
            <TrialModalButton source={`${SOURCE} · Demo`} className="relative mx-auto block w-full max-w-[860px] cursor-pointer rounded-[18px_18px_0_0] border border-b-0 p-2.5" >
              <span className="block overflow-hidden rounded-[11px]" style={{ background: 'radial-gradient(circle at 50% 40%,#143a5e,#08172a)' }}>
                <span className="relative block aspect-video">
                  <span className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-[78px] w-[78px] place-items-center rounded-full bg-white shadow-[0_16px_40px_rgba(10,132,255,.45)]"><Play className="ml-1 h-7 w-7 fill-[#071B2F] text-[#071B2F]" /></span>
                  </span>
                  <span className="absolute bottom-[18px] left-5 text-[13px] font-semibold text-[#C3CEDD]">MKT Affiliate · Dashboard tour</span>
                </span>
              </span>
            </TrialModalButton>
            <div className="mx-auto h-4 max-w-[860px] rounded-[0_0_18px_18px] border border-t-0" style={{ background: 'linear-gradient(180deg,#0a1c30,#06121f)', borderColor: '#1a3450' }} />
            <div className="mx-auto h-[9px] w-40 rounded-[0_0_9px_9px] border border-t-0" style={{ background: '#0a1726', borderColor: '#1a3450' }} />
          </div>
        </div>
      </section>

      {/* ============ BIG STATS ============ */}
      <section className="border-y px-6 py-[72px]" style={{ borderColor: C.line, background: 'linear-gradient(180deg,#EAF3FF,#FFF4E5)' }}>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className="font-mono text-[clamp(2.4rem,4vw,3.4rem)] font-extrabold leading-none" style={{ background: `linear-gradient(135deg,${s.from},${s.to})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.v}</div>
              <div className="mt-1.5 text-[14px] text-[#4D5E78]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[920px] text-center">
          <Eyebrow>Khách hàng nói gì</Eyebrow>
          <H2 className="mx-auto mt-3.5">Được tin dùng bởi hàng chục nghìn nhà bán hàng</H2>
          <div className="mt-2 text-[12px] text-[#94A3B8]">* Nội dung đánh giá là minh hoạ mẫu, sẽ thay bằng review thật.</div>
          <div className="mt-9"><Testimonials /></div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="bang-gia" className="border-t bg-white px-6 py-16" style={{ borderColor: C.line }}>
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[860px] text-center">
            <Eyebrow color={C.accD}>Bảng giá</Eyebrow>
            <H2 className="mt-3.5">Đầu tư một lần, vận hành dài hạn</H2>
            <p className="mx-auto mt-4 text-[17px] text-[#4D5E78]">Càng dài hạn càng tiết kiệm. Mọi gói đều dùng đầy đủ tính năng và được hỗ trợ cài đặt 1-1.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-[20px] p-[30px] ${p.featured ? 'text-white shadow-[0_28px_60px_-22px_rgba(10,132,255,.55)] lg:-translate-y-2' : 'border'}`} style={p.featured ? { background: 'linear-gradient(160deg,#0A84FF,#0057D9)' } : { background: '#F7FAFF', borderColor: C.line }}>
                {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white shadow-[0_8px_20px_rgba(255,122,0,.4)]" style={{ background: '#FF7A00' }}>Phổ biến nhất</span>}
                <div className="text-[14px] font-bold uppercase tracking-[0.04em]" style={{ color: p.featured ? '#fff' : p.accent }}>{p.name}</div>
                <div className="mt-3.5 flex items-baseline gap-1.5"><span className="font-mono text-[2.3rem] font-extrabold">{p.price}</span><span className="text-[15px]" style={{ color: p.featured ? 'rgba(255,255,255,.8)' : '#6B7C95' }}>đ</span></div>
                <div className="mt-0.5 text-[13px] font-semibold" style={{ color: p.featured ? '#FFD49E' : p.accent }}>{p.perMonth}</div>
                <div className="my-[22px] h-px" style={{ background: p.featured ? 'rgba(255,255,255,.2)' : C.line }} />
                <div className="flex flex-1 flex-col gap-[11px] text-[14px]" style={{ color: p.featured ? '#EAF3FF' : '#45566F' }}>
                  {p.feats.map((f) => <div key={f}><span className="mr-2.5" style={{ color: p.featured ? '#7CFFB0' : '#16A34A' }}>✓</span>{f}</div>)}
                </div>
                <TrialModalButton source={`${SOURCE} · ${p.name}`} className={`mt-6 block rounded-[12px] py-3.5 text-center text-[15px] font-bold transition-transform hover:-translate-y-0.5 ${p.featured ? 'bg-white text-[#0057D9] shadow-[0_12px_28px_rgba(12,33,56,.2)]' : 'border bg-white text-[#0C2138]'}`} >{p.cta}</TrialModalButton>
              </div>
            ))}
          </div>
          <div className="mt-[22px] text-center text-[13px] text-[#6B7C95]">Cam kết hoàn tiền 100% trong 7 ngày đầu nếu tính năng không đúng như mô tả.</div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="px-6 py-16">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <Eyebrow>Câu hỏi thường gặp</Eyebrow>
            <H2 className="mt-3.5">Những điều bạn muốn biết</H2>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {FAQS.map((q) => (
              <details key={q.q} className="group overflow-hidden rounded-[14px] border bg-white shadow-[0_1px_3px_rgba(12,33,56,.05)] open:border-[#A9CEFF]" style={{ borderColor: C.line }}>
                <summary className="flex cursor-pointer list-none items-center gap-3.5 px-[22px] py-[19px] text-[1.05rem] font-semibold">
                  <span className="flex-1">{q.q}</span>
                  <span className="flex-none text-[20px] leading-none text-[#0A84FF] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-[22px] pb-5 text-[15px] leading-[1.65] text-[#4D5E78]">{q.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER CTA ============ */}
      <section id="cta" className="relative overflow-hidden border-t px-6 py-[88px]" style={{ borderColor: C.line, background: '#F2F7FF' }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(120% 140% at 50% 0%,rgba(10,132,255,.12),transparent 60%),radial-gradient(120% 140% at 80% 100%,rgba(255,122,0,.1),transparent 55%)' }} />
        <div className="relative mx-auto max-w-[960px] text-center">
          <h2 className="text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.14] tracking-tight text-[#0C2138]">Sẵn sàng xây dựng hệ thống Affiliate Marketing chuyên nghiệp?</h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[18px] leading-[1.6] text-[#4D5E78]">Bắt đầu vận hành affiliate ở quy mô lớn ngay hôm nay — quản lý tài khoản, nội dung, chiến dịch và phân phối đa nền tảng trên một Dashboard duy nhất.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <TrialModalButton source={SOURCE} className="rounded-[13px] bg-[#0057D9] bg-[linear-gradient(135deg,#0A84FF,#0057D9)] px-8 py-4 text-[16px] font-bold text-white shadow-[0_14px_34px_rgba(10,132,255,.35)] transition-transform hover:-translate-y-0.5">Dùng thử miễn phí</TrialModalButton>
            <TrialModalButton source={`${SOURCE} · Tư vấn`} className="rounded-[13px] border bg-white px-[30px] py-4 text-[16px] font-bold text-[#0C2138] transition-transform hover:-translate-y-0.5" >Liên hệ tư vấn</TrialModalButton>
          </div>
          <div className="mt-[18px] text-[13.5px] text-[#94A3B8]">Không cần thẻ tín dụng · Hỗ trợ cài đặt 1-1 · Hoàn tiền trong 7 ngày</div>
        </div>
      </section>
    </div>
  )
}
