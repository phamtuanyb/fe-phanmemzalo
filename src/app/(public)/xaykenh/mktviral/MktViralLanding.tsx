import Link from 'next/link'
import TrialModalButton from '../TrialModalButton'
import { ChannelIcon, type Channel } from '../_shared/channels'
import Testimonials, { type Testimonial } from './_components/Testimonials'
import StudioImage from './_components/StudioImage'
import DemoScreen from './_components/DemoScreen'

const DEMO_VIDEO = 'https://www.youtube.com/watch?v=Y6JvnuAXIgM'

const SOURCE = 'MKT Viral'

// ── Dữ liệu ───────────────────────────────────────────────────────────────────
const HERO_CHANNELS: Channel[] = ['tiktok', 'facebook', 'youtube', 'instagram']
const HERO_VIDEOS = [
  { c1: '#0a2342', c2: '#0A84FF', v: '1.2M' }, { c1: '#2a1a3a', c2: '#9b59b6', v: '847K' }, { c1: '#1a2a2a', c2: '#16a085', v: '2.1M' },
  { c1: '#3a2a1a', c2: '#FF7A00', v: '560K' }, { c1: '#1a1a2e', c2: '#5e72e4', v: '1.8M' }, { c1: '#2e1a2a', c2: '#e4405f', v: '934K' },
]
const STEPS = [
  { n: '01', t: 'Khai thác video', d: 'Tìm theo từ khóa, hashtag, username' },
  { n: '02', t: 'Tải hàng loạt', d: 'Hàng nghìn video, giữ chất lượng' },
  { n: '03', t: 'Chỉnh sửa hàng loạt', d: 'Áp dụng một lần cho tất cả' },
  { n: '04', t: 'Xuất video', d: 'Render song song trên GPU' },
  { n: '05', t: 'Sẵn sàng đăng tải', d: 'Nội dung chuẩn đa nền tảng' },
]
const EXTRACT_ITEMS = [
  { k: '#', d: 'Tìm theo Hashtag xu hướng' },
  { k: 'Aa', d: 'Tìm theo Keyword bất kỳ' },
  { k: '@', d: 'Tìm theo Username / kênh' },
  { k: '↑', d: 'Lọc theo lượt xem, thời lượng' },
]
const EXTRACT_GRID = [
  { c1: '#0a2342', c2: '#0A84FF', v: '1.2M' }, { c1: '#2a1a3a', c2: '#9b59b6', v: '847K' }, { c1: '#1a2a2a', c2: '#16a085', v: '2.1M' }, { c1: '#3a2a1a', c2: '#FF7A00', v: '560K' },
  { c1: '#1a1a2e', c2: '#5e72e4', v: '1.8M' }, { c1: '#2e1a2a', c2: '#e4405f', v: '934K' }, { c1: '#0a2a3a', c2: '#0A84FF', v: '3.4M' }, { c1: '#2a1a1a', c2: '#FF7A00', v: '1.1M' },
]
const DOWNLOADS = [
  { ch: 'tiktok' as Channel, name: 'tiktok_batch_01.mp4', pct: '92%' },
  { ch: 'youtube' as Channel, name: 'yt_shorts_pack.mp4', pct: '78%' },
  { ch: 'facebook' as Channel, name: 'fb_reels_set.mp4', pct: '64%' },
  { ch: 'instagram' as Channel, name: 'ig_reels_42.mp4', pct: '45%' },
  { ch: 'tiktok' as Channel, name: 'douyin_viral.mp4', pct: '31%' },
]
const PIPELINE = [
  { step: 'BƯỚC 1', t: 'Chọn cấu hình', d: 'Thiết lập logo, intro, crop, subtitle' },
  { step: 'BƯỚC 2', t: 'Áp dụng', d: 'Gán cấu hình cho toàn bộ video' },
  { step: 'BƯỚC 3', t: 'Render', d: 'Xử lý song song trên GPU' },
  { step: 'BƯỚC 4', t: 'Xuất 1.000 video', d: 'Sẵn sàng đăng tải đa kênh' },
]
const USE_CASES = [
  { tag: 'CREATOR', t: 'Nhà sáng tạo', d: 'Sản xuất nội dung đều đặn, lên xu hướng nhanh mà không kiệt sức.', c1: '#0a2342', c2: '#0A84FF' },
  { tag: 'AFFILIATE', t: 'Tiếp thị liên kết', d: 'Nhân bản video sản phẩm hàng loạt, phủ kênh tối đa.', c1: '#3a2a1a', c2: '#FF7A00' },
  { tag: 'AGENCY', t: 'Agency', d: 'Vận hành nhiều khách hàng, nhiều kênh từ một quy trình.', c1: '#0d3530', c2: '#16a085' },
  { tag: 'TIKTOK SHOP', t: 'TikTok Shop', d: 'Lên video bán hàng số lượng lớn, tăng đơn mỗi ngày.', c1: '#2a1a3a', c2: '#9b59b6' },
  { tag: 'MARKETING', t: 'Marketing', d: 'Chiến dịch nội dung quy mô, đo lường theo kênh.', c1: '#1a1a2e', c2: '#5e72e4' },
  { tag: 'DOANH NGHIỆP', t: 'Doanh nghiệp', d: 'Chuẩn hóa thương hiệu trên mọi video phát hành.', c1: '#0a2a3a', c2: '#0057D9' },
]
const COMPARE = [
  { label: 'Tìm kiếm video', manual: 'Thủ công từng video', mkt: 'Tự động hàng nghìn' },
  { label: 'Tải video', manual: 'Từng file một', mkt: 'Hàng loạt một lần' },
  { label: 'Chỉnh sửa', manual: 'Mở từng video', mkt: 'Áp dụng hàng loạt' },
  { label: 'Xuất video', manual: 'Render lần lượt', mkt: 'Song song nhiều video' },
  { label: 'Thời gian', manual: 'Nhiều ngày', mkt: 'Vài phút' },
  { label: 'Khối lượng', manual: 'Vài chục', mkt: 'Hàng nghìn' },
  { label: 'Hiệu suất', manual: 'Phụ thuộc nhân sự', mkt: 'X10 sản lượng' },
]
const CHART = ['18%', '26%', '34%', '48%', '62%', '78%', '90%', '100%']
const STATS = [
  { n: '30.000+', l: 'Khách hàng' }, { n: '500M+', l: 'Video đã xử lý' }, { n: '98%', l: 'Khách hài lòng' }, { n: '24/7', l: 'Hỗ trợ' },
]
const TESTIMONIALS: Testimonial[] = [
  { quote: 'Trước đây team mình mất cả ngày để dựng 20 video. Giờ MKT Viral xuất 1.000 video sau một lần thiết lập — đúng nghĩa thay đổi cuộc chơi.', name: 'Nguyễn Minh Anh', role: 'Founder · Beauty Affiliate', avatar: 'https://i.pravatar.cc/120?img=47' },
  { quote: 'Khai thác video theo hashtag rồi tải hàng loạt không watermark, chất lượng giữ nguyên. Công cụ tìm kiếm là thứ mình thích nhất.', name: 'Trần Quốc Bảo', role: 'Growth Lead · TikTok Shop', avatar: 'https://i.pravatar.cc/120?img=12' },
  { quote: 'Agency của mình chạy 12 kênh cùng lúc. Batch edit thay logo, intro, outro tự động giúp tiết kiệm 80% thời gian dựng.', name: 'Lê Thu Hà', role: 'CEO · Content Agency', avatar: 'https://i.pravatar.cc/120?img=32' },
  { quote: 'Một thiết lập, hàng nghìn video, đăng đa nền tảng. ROI rõ ràng ngay tháng đầu. Hỗ trợ cài đặt 1-1 rất tận tâm.', name: 'Phạm Đức Long', role: 'Marketing Manager · SME', avatar: 'https://i.pravatar.cc/120?img=68' },
]
const PLANS = [
  { name: 'GÓI 1 NĂM', tagline: 'Khởi đầu sản xuất video', price: '3.000.000', badge: '', featured: false, accent: '#071B2F', features: ['Sử dụng trên 1 thiết bị', 'Đầy đủ các tính năng', 'Cập nhật miễn phí 1 năm', 'Hỗ trợ trọn gói'] },
  { name: 'GÓI 5 NĂM', tagline: 'Lựa chọn đáng giá nhất', price: '7.000.000', badge: 'PHỔ BIẾN NHẤT', featured: true, accent: '#0A84FF', features: ['Sử dụng trên 1 thiết bị', 'Đầy đủ các tính năng', 'Cập nhật miễn phí 5 năm', 'Hỗ trợ trọn gói', 'Ưu tiên hỗ trợ 1-1'] },
  { name: 'GÓI 10 NĂM', tagline: 'Support & update trọn đời', price: '12.000.000', badge: 'TIẾT KIỆM NHẤT', featured: false, accent: '#FF7A00', features: ['Sử dụng trên 1 thiết bị', 'Đầy đủ các tính năng', 'Support & update trọn đời', 'Hỗ trợ trọn gói', 'Ưu tiên cao nhất'] },
]
const FAQS = [
  { q: 'MKT Viral có phải phần mềm chỉnh sửa video thông thường không?', a: 'Không. MKT Viral là nền tảng khai thác và sản xuất video hàng loạt: tìm kiếm, tải xuống, chỉnh sửa và chuẩn bị xuất bản hàng nghìn video trong một quy trình tự động.' },
  { q: 'Tôi có thể khai thác video từ những nền tảng nào?', a: 'TikTok, Facebook, YouTube, Instagram, Douyin, Pinterest, Threads và nhiều nền tảng khác. Bạn tìm theo từ khóa, hashtag hoặc username.' },
  { q: 'Video tải về có dính watermark không?', a: 'Không. MKT Viral tải video giữ nguyên chất lượng gốc, không kèm watermark của nền tảng nguồn.' },
  { q: 'Tôi có thể chỉnh sửa bao nhiêu video cùng lúc?', a: 'Không giới hạn. Bạn thiết lập một lần (thay logo, intro/outro, crop, mirror, subtitle…) và áp dụng cho hàng trăm đến hàng nghìn video.' },
  { q: 'Có mất phí khi dùng thử không?', a: 'Bạn dùng thử miễn phí, không cần thẻ tín dụng. Đội ngũ MKT hỗ trợ cài đặt 1-1 đến khi bạn thành thạo công cụ.' },
  { q: 'Phần mềm chạy trên hệ điều hành nào?', a: 'MKT Viral hoạt động trên Windows. Yêu cầu cấu hình phổ thông; render tận dụng GPU để tăng tốc.' },
  { q: 'Tôi có được hỗ trợ và đào tạo không?', a: 'Có. MKT cam kết đào tạo "cầm tay chỉ việc" đến khi bạn thành thạo, kèm hỗ trợ kỹ thuật trọn đời.' },
  { q: 'Chính sách hoàn tiền như thế nào?', a: 'Cam kết hoàn tiền 100% trong 7 ngày đầu nếu tính năng không đúng như mô tả.' },
  { q: 'Tôi có thể đăng video trực tiếp từ MKT Viral không?', a: 'MKT Viral tập trung vào khai thác, tải và sản xuất hàng loạt. Nội dung được chuẩn bị sẵn sàng để đăng tải qua hệ sinh thái sản phẩm MKT.' },
  { q: 'MKT Viral phù hợp với ai?', a: 'Creator, Affiliate, Agency, nhà bán TikTok Shop, đội marketing và doanh nghiệp — bất kỳ ai cần sản xuất nội dung video ở quy mô lớn.' },
]

const C = { blue: '#0A84FF', blueD: '#0057D9', orange: '#FF7A00', orangeL: '#FF9500', dark: '#071B2F', muted: '#5A6B7B', subtle: '#8190A0', bg: '#F4F8FD', green: '#1E9E4A', line: 'rgba(7,27,47,.08)' }

const Eyebrow = ({ children, color = C.blue }: { children: React.ReactNode; color?: string }) => (
  <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-[2px]" style={{ color }}>{children}</p>
)
const H2 = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-[clamp(28px,3.6vw,46px)] font-bold leading-[1.1] tracking-tight text-[#071B2F] ${className}`}>{children}</h2>
)

export default function MktViralLanding() {
  return (
    <main className="relative overflow-hidden bg-[#F4F8FD] text-[#071B2F]">
      {/* ambient aurora */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[12%] h-[60vw] w-[60vw] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle,rgba(10,132,255,.16),transparent 62%)' }} />
        <div className="absolute -right-[15%] top-[6%] h-[55vw] w-[55vw] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle,rgba(255,122,0,.12),transparent 62%)' }} />
      </div>

      {/* ============ HERO ============ */}
      <section className="relative z-[1] mx-auto grid max-w-[1320px] items-center gap-12 px-7 pb-14 pt-8 lg:grid-cols-[1.05fr_1.15fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[13px]" style={{ borderColor: 'rgba(10,132,255,.28)', background: 'rgba(10,132,255,.07)', color: C.blueD }}>
            <span className="h-[7px] w-[7px] animate-pulse rounded-full" style={{ background: C.orange, boxShadow: '0 0 10px rgba(255,122,0,.7)' }} />
            Nền tảng video automation thế hệ mới · 2026
          </div>
          <h1 className="mb-6 text-[clamp(32px,3.9vw,52px)] font-bold leading-[1.07] tracking-tight">
            <span className="whitespace-nowrap">Khai thác &amp; sản xuất</span><br />
            <span style={{ background: 'linear-gradient(110deg,#0A84FF 8%,#0057D9 42%,#FF7A00 96%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Hàng loạt video</span><br />
            Đa nền tảng
          </h1>
          <p className="mb-4 max-w-[520px] text-[18.5px] leading-[1.6] text-[#5A6B7B]">
            MKT Viral giúp bạn tìm kiếm video từ nhiều nền tảng, tải xuống hàng loạt, chỉnh sửa tự động và xuất bản chỉ trong vài phút.
          </p>
          <p className="mb-8 font-mono text-[14px] tracking-wide text-[#0A84FF]">Tìm kiếm → Tải xuống → Chỉnh sửa → Xuất bản</p>
          <div className="mb-9 flex flex-wrap gap-3.5">
            <TrialModalButton source={SOURCE} className="inline-flex items-center gap-2 rounded-[13px] bg-[#0057D9] bg-[linear-gradient(135deg,#0A84FF,#0057D9)] px-6 py-3.5 text-[16px] font-semibold text-white shadow-[0_14px_34px_rgba(10,132,255,.34)] transition-transform hover:-translate-y-0.5">
              Dùng thử miễn phí <span className="text-[18px]">→</span>
            </TrialModalButton>
            <Link href="#demo" className="inline-flex items-center gap-2.5 rounded-[13px] border bg-white px-6 py-3.5 text-[16px] font-semibold text-[#071B2F] shadow-sm transition-colors hover:bg-[#F4F8FD]" style={{ borderColor: 'rgba(7,27,47,.12)' }}>
              <span className="grid h-[26px] w-[26px] place-items-center rounded-full text-[11px]" style={{ background: 'rgba(255,122,0,.14)', color: C.orange }}>▶</span>
              Xem video Demo
            </Link>
          </div>
        </div>

        {/* floating dashboard */}
        <div className="relative hidden h-[600px] lg:block">
          <div className="mv-glass absolute left-8 right-0 top-10 animate-float rounded-[22px] p-[18px]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[11px] text-[#8190A0]">MKT Viral · Workspace</span>
            </div>
            <div className="mb-3.5 flex items-center gap-2.5 rounded-[12px] border bg-[#F4F8FD] px-3.5 py-2.5" style={{ borderColor: 'rgba(10,132,255,.35)' }}>
              <span className="text-[#0A84FF]">⌕</span>
              <span className="font-mono text-[13px] text-[#42566a]">#reviewsanpham</span>
              <span className="ml-auto rounded-[7px] px-2.5 py-1 text-[11px] font-semibold text-white" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>Quét</span>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {HERO_CHANNELS.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-[8px] border bg-[#F4F8FD] px-2.5 py-1.5 text-[11.5px] text-[#42566a]" style={{ borderColor: 'rgba(7,27,47,.07)' }}>
                  <ChannelIcon ch={c} size={14} /> {c}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {HERO_VIDEOS.map((v, i) => (
                <div key={i} className="relative aspect-[9/10] overflow-hidden rounded-[11px]" style={{ background: `linear-gradient(150deg,${v.c1},${v.c2})` }}>
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(transparent 50%,rgba(0,0,0,.55))' }} />
                  <span className="absolute bottom-1.5 left-2 font-mono text-[9.5px] text-white">{v.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-3.5 flex items-center justify-between text-[11.5px] text-[#8190A0]">
              <span className="font-mono">2.847 video tìm thấy</span>
              <span className="text-[#1E9E4A]">● Đang quét…</span>
            </div>
          </div>

          <div className="mv-glass animate-float-delayed absolute -right-1.5 top-0 w-[215px] rounded-[16px] p-3.5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[12.5px] font-semibold text-[#071B2F]">Download Queue</span>
              <span className="font-mono text-[11px] text-[#1E9E4A]">312/420</span>
            </div>
            <div className="mb-2.5 h-[7px] overflow-hidden rounded-[5px] bg-[rgba(7,27,47,.08)]">
              <div className="h-full w-[74%] rounded-[5px]" style={{ background: 'linear-gradient(90deg,#0A84FF,#5eb1ff)' }} />
            </div>
            <div className="flex justify-between font-mono text-[10.5px] text-[#8190A0]"><span>18.4 MB/s</span><span>No watermark</span></div>
          </div>

          <div className="mv-glass absolute -left-[18px] bottom-12 w-[200px] animate-float rounded-[16px] p-3.5">
            <div className="mb-3 text-[12.5px] font-semibold text-[#071B2F]">Batch Edit · Áp dụng</div>
            <div className="flex flex-col gap-1.5">
              {['Thay logo · intro', 'Crop 9:16 · Mirror'].map((x) => (
                <div key={x} className="flex items-center gap-2 text-[11px] text-[#42566a]"><span className="grid h-3.5 w-3.5 place-items-center rounded-[4px] bg-[#1E9E4A] text-[9px] text-white">✓</span>{x}</div>
              ))}
              <div className="flex items-center gap-2 text-[11px] text-[#8190A0]"><span className="h-3.5 w-3.5 rounded-[4px] border" style={{ borderColor: 'rgba(7,27,47,.2)' }} />Subtitle auto</div>
            </div>
          </div>

          <div className="mv-glass animate-float-delayed absolute -bottom-2.5 right-8 w-[178px] rounded-[16px] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] text-[15px] text-white" style={{ background: 'linear-gradient(135deg,#FF7A00,#FF9500)', boxShadow: '0 8px 16px rgba(255,122,0,.35)' }}>↑</span>
              <div>
                <div className="font-mono text-[18px] font-bold text-[#071B2F]">1.000</div>
                <div className="text-[10.5px] text-[#8190A0]">video đã xuất</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="relative z-[1] pb-7 pt-10">
        <p className="mb-7 text-center text-[12.5px] uppercase tracking-[2px] text-[#8190A0]">Khai thác nội dung từ mọi nền tảng lớn</p>
        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
            WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
          }}
        >
          <div className="mv-marquee-track">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              (Array.from({ length: 4 }).flatMap(() => ['tiktok', 'facebook', 'youtube', 'instagram']) as Channel[]).map((c, i) => (
                <span key={`${dup}-${i}`} className="shrink-0 pr-[60px] opacity-80"><ChannelIcon ch={c} size={38} /></span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="relative z-[1] mx-auto max-w-[1240px] px-7 py-10">
        <div className="mb-8 text-center">
          <Eyebrow>Quy trình</Eyebrow>
          <H2>Một nền tảng — toàn bộ quy trình<br />Video Marketing</H2>
        </div>
        <div className="relative grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          <div className="absolute left-[8%] right-[8%] top-[38px] hidden h-0.5 lg:block" style={{ background: 'linear-gradient(90deg,#0A84FF,#5eb1ff,#FF7A00)', opacity: .45 }} />
          {STEPS.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative mx-auto mb-[18px] grid h-[76px] w-[76px] place-items-center rounded-[20px] border bg-white" style={{ borderColor: 'rgba(10,132,255,.25)', boxShadow: '0 10px 28px rgba(10,132,255,.14)' }}>
                <span className="font-mono text-[24px] font-bold text-[#0A84FF]">{s.n}</span>
              </div>
              <h3 className="mb-1.5 mt-4 text-[17px] font-semibold text-[#071B2F]">{s.t}</h3>
              <p className="text-[13.5px] leading-[1.5] text-[#8190A0]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ EXTRACT (01) ============ */}
      <section className="relative z-[1] mx-auto grid max-w-[1240px] items-stretch gap-14 px-7 py-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col justify-center">
          <Eyebrow>01 · Khai thác</Eyebrow>
          <H2 className="mb-5">Khai thác video từ<br />nhiều nền tảng</H2>
          <p className="mb-6 max-w-[440px] text-[16.5px] leading-[1.65] text-[#5A6B7B]">Chỉ cần nhập từ khóa, hashtag hoặc tài khoản. Hệ thống tự động tìm kiếm hàng nghìn video phù hợp trên mọi nền tảng.</p>
          <div className="flex flex-col gap-3">
            {EXTRACT_ITEMS.map((e) => (
              <div key={e.d} className="flex items-center gap-4 rounded-[16px] border bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ borderColor: C.line }}>
                <span className="grid h-[46px] w-[46px] flex-shrink-0 place-items-center rounded-[13px] text-[18px] font-bold text-white" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)', boxShadow: '0 8px 18px rgba(10,132,255,.28)' }}>{e.k}</span>
                <span className="flex-1 text-[19px] font-semibold text-[#071B2F]">{e.d}</span>
                <span className="text-[20px] text-[#0A84FF] opacity-60">→</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mv-card flex flex-col rounded-[22px] border bg-white p-5 shadow-[0_24px_60px_rgba(7,27,47,.10)]" style={{ borderColor: C.line }}>
          <div className="mb-4 flex items-center gap-2.5 rounded-[12px] border bg-[#F4F8FD] px-3.5 py-3" style={{ borderColor: 'rgba(10,132,255,.35)' }}>
            <span className="text-[16px] text-[#0A84FF]">⌕</span>
            <span className="font-mono text-[14px] text-[#42566a]">@beautyreview_official</span>
            <span className="ml-auto rounded-[9px] px-3.5 py-1.5 text-[12px] font-semibold text-white" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9)' }}>Tìm kiếm</span>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-[8px] px-2.5 py-1.5 text-[12px]" style={{ color: C.blueD, background: 'rgba(10,132,255,.1)' }}>#review</span>
            <span className="rounded-[8px] px-2.5 py-1.5 text-[12px]" style={{ color: C.blueD, background: 'rgba(10,132,255,.1)' }}>#mỹphẩm</span>
            <span className="rounded-[8px] px-2.5 py-1.5 text-[12px]" style={{ color: C.orange, background: 'rgba(255,122,0,.1)' }}>Keyword</span>
            <span className="rounded-[8px] px-2.5 py-1.5 text-[12px]" style={{ color: C.orange, background: 'rgba(255,122,0,.1)' }}>Username</span>
          </div>
          <div className="grid min-h-[340px] flex-1 grid-cols-4 gap-2.5">
            {EXTRACT_GRID.map((g, i) => (
              <div key={i} className="relative overflow-hidden rounded-[12px] shadow-md" style={{ background: `linear-gradient(150deg,${g.c1},${g.c2})` }}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(transparent 50%,rgba(0,0,0,.62))' }} />
                <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-md"><span className="ml-0.5 text-[14px] text-[#0A84FF]">▶</span></span>
                <span className="absolute bottom-1.5 left-2 font-mono text-[10px] text-white">{g.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD (02) ============ */}
      <section className="relative z-[1] mx-auto grid max-w-[1240px] items-center gap-14 px-7 py-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="mv-card rounded-[22px] border bg-white p-[22px] shadow-[0_24px_60px_rgba(7,27,47,.10)]" style={{ borderColor: C.line }}>
          <div className="mb-[18px] flex items-center justify-between p-1">
            <span className="text-[14px] font-semibold text-[#071B2F]">Download Manager</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#1E9E4A]"><span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#1E9E4A]" />18.4 MB/s</span>
          </div>
          <div className="flex flex-col gap-3 p-1">
            {DOWNLOADS.map((d) => (
              <div key={d.name} className="flex items-center gap-3">
                <ChannelIcon ch={d.ch} size={20} />
                <div className="flex-1">
                  <div className="mb-1.5 flex justify-between font-mono text-[12px] text-[#42566a]"><span>{d.name}</span><span className="text-[#8190A0]">{d.pct}</span></div>
                  <div className="h-1.5 overflow-hidden rounded-[4px] bg-[rgba(7,27,47,.07)]">
                    <div className="h-full rounded-[4px]" style={{ width: d.pct, background: 'linear-gradient(90deg,#0057D9,#0A84FF,#5eb1ff)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[18px] flex justify-between border-t p-1 pt-4" style={{ borderColor: C.line }}>
            <div><div className="font-mono text-[20px] font-bold text-[#0A84FF]">420</div><div className="text-[11px] text-[#8190A0]">trong queue</div></div>
            <div><div className="font-mono text-[20px] font-bold text-[#071B2F]">312</div><div className="text-[11px] text-[#8190A0]">hoàn tất</div></div>
            <div><div className="font-mono text-[20px] font-bold text-[#1E9E4A]">HD</div><div className="text-[11px] text-[#8190A0]">chất lượng</div></div>
          </div>
        </div>
        <div>
          <Eyebrow>02 · Tải xuống</Eyebrow>
          <H2 className="mb-5">Tải xuống hàng loạt</H2>
          <p className="mb-6 max-w-[440px] text-[16.5px] leading-[1.65] text-[#5A6B7B]">Chỉ một lần nhấn để tải hàng trăm – hàng nghìn video về máy. Giữ nguyên chất lượng gốc, không watermark.</p>
          <div className="flex flex-wrap gap-3.5">
            <div className="mv-card min-w-[130px] flex-1 rounded-[14px] p-4 transition-all hover:-translate-y-1 hover:shadow-md"><div className="font-mono text-[24px] font-bold text-[#071B2F]">∞</div><div className="mt-1 text-[13px] text-[#8190A0]">Số lượng tải</div></div>
            <div className="mv-card min-w-[130px] flex-1 rounded-[14px] p-4 transition-all hover:-translate-y-1 hover:shadow-md"><div className="font-mono text-[24px] font-bold text-[#1E9E4A]">0</div><div className="mt-1 text-[13px] text-[#8190A0]">Watermark</div></div>
          </div>
        </div>
      </section>

      {/* ============ STUDIO (03) ============ */}
      <section className="relative z-[1] py-10" style={{ background: 'linear-gradient(180deg,transparent,#EAF2FC,transparent)' }}>
        <div className="mx-auto max-w-[1240px] px-7">
          <div className="mb-6 text-center">
            <Eyebrow>03 · Chỉnh sửa</Eyebrow>
            <H2>Studio chỉnh sửa video<br />hàng loạt</H2>
            <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-[#5A6B7B]">Một thao tác áp dụng cho hàng nghìn video. Before / After tức thì, xử lý song song trên GPU.</p>
          </div>
          <div className="mv-card rounded-[20px] border bg-white p-2.5 shadow-[0_40px_90px_rgba(7,27,47,.18)]" style={{ borderColor: C.line }}>
            <StudioImage src="/uploads/viral.png" alt="Giao diện phần mềm MKT Viral" />
          </div>
        </div>
      </section>

      {/* ============ SCALE ============ */}
      <section className="relative z-[1] mx-auto max-w-[1240px] px-7 py-10">
        <div className="mb-6 text-center">
          <Eyebrow color={C.orange}>Quy mô</Eyebrow>
          <H2>Một thiết lập — hàng nghìn video</H2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PIPELINE.map((p) => (
            <div key={p.step} className="mv-card rounded-[18px] p-6 text-center">
              <div className="mb-2.5 font-mono text-[12px] text-[#0A84FF]">{p.step}</div>
              <div className="mb-2 text-[19px] font-semibold text-[#071B2F]">{p.t}</div>
              <p className="text-[13px] leading-[1.5] text-[#8190A0]">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="font-mono text-[clamp(56px,9vw,110px)] font-bold leading-none" style={{ background: 'linear-gradient(135deg,#0A84FF,#FF7A00)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>1.000</div>
          <p className="mt-2.5 text-[17px] text-[#5A6B7B]">video xuất bản từ <span className="font-semibold text-[#071B2F]">một lần thiết lập</span></p>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="relative z-[1] mx-auto max-w-[1240px] px-7 py-10">
        <div className="mb-6 text-center">
          <Eyebrow>Đối tượng</Eyebrow>
          <H2>Dành cho mọi mô hình sản xuất nội dung</H2>
        </div>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u) => (
            <div key={u.t} className="relative flex min-h-[200px] flex-col overflow-hidden rounded-[20px] p-7 shadow-[0_18px_44px_rgba(7,27,47,.14)] transition-transform hover:-translate-y-1.5" style={{ background: `linear-gradient(160deg,${u.c1},${u.c2})` }}>
              <div className="absolute -right-8 -top-8 h-[140px] w-[140px] rounded-full bg-white/10" />
              <div className="mb-auto font-mono text-[12px] text-white/70">{u.tag}</div>
              <h3 className="mb-2.5 mt-3.5 text-[23px] font-bold text-white">{u.t}</h3>
              <p className="text-[14px] leading-[1.55] text-white/85">{u.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="relative z-[1] mx-auto max-w-[1080px] px-7 py-10">
        <div className="mb-6 text-center">
          <Eyebrow color={C.orange}>Khác biệt</Eyebrow>
          <H2>Vì sao MKT Viral khác biệt?</H2>
        </div>
        <div className="mv-card overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(7,27,47,.10)]">
          <div className="grid grid-cols-[1.4fr_1fr_1fr]">
            <div className="px-6 py-[22px]" />
            <div className="border-l px-6 py-[22px] text-center text-[15px] font-semibold text-[#8190A0]" style={{ borderColor: C.line }}>Làm thủ công</div>
            <div className="border-l px-6 py-[22px] text-center text-[15px] font-bold text-[#0057D9]" style={{ borderColor: 'rgba(10,132,255,.2)', background: 'linear-gradient(135deg,rgba(10,132,255,.1),rgba(255,122,0,.07))' }}>MKT Viral</div>
          </div>
          {COMPARE.map((r) => (
            <div key={r.label} className="grid grid-cols-[1.4fr_1fr_1fr] border-t" style={{ borderColor: 'rgba(7,27,47,.06)' }}>
              <div className="px-6 py-[18px] text-[15px] font-medium text-[#071B2F]">{r.label}</div>
              <div className="border-l px-6 py-[18px] text-center text-[14px] text-[#8190A0]" style={{ borderColor: 'rgba(7,27,47,.06)' }}>{r.manual}</div>
              <div className="border-l px-6 py-[18px] text-center text-[14px] font-semibold text-[#0057D9]" style={{ borderColor: 'rgba(10,132,255,.15)', background: 'rgba(10,132,255,.04)' }}>{r.mkt}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DEMO ============ */}
      <section id="demo" className="relative z-[1] mx-auto max-w-[1100px] px-7 py-10 text-center">
        <Eyebrow>Video demo</Eyebrow>
        <H2 className="mb-5">Xem MKT Viral vận hành thực tế</H2>
        <div className="mx-auto max-w-[880px]">
          <div className="rounded-t-[18px] border-2 border-b-0 px-3.5 pt-3.5" style={{ borderColor: '#C2CCD8', background: 'linear-gradient(160deg,#E7ECF3,#D4DCE7)', boxShadow: '0 24px 60px rgba(7,27,47,.16)' }}>
            <DemoScreen videoUrl={DEMO_VIDEO} caption="MKT Viral · Demo 2026" />
          </div>
          <div className="h-3.5 rounded-b-[4px]" style={{ background: 'linear-gradient(#C2CCD8,#D4DCE7)' }} />
          <div className="mx-auto h-2.5 w-[118%] -translate-x-[7.5%] rounded-b-[14px]" style={{ background: 'linear-gradient(#AEB9C7,#D4DCE7)' }} />
        </div>
      </section>

      {/* ============ CASE STUDY ============ */}
      <section className="relative z-[1] mx-auto max-w-[1240px] px-7 py-10">
        <div className="mv-card grid items-center gap-12 rounded-[26px] p-8 shadow-[0_24px_60px_rgba(7,27,47,.10)] sm:p-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Eyebrow color={C.orange}>Case study</Eyebrow>
            <H2 className="mb-[18px] !text-[clamp(26px,3vw,38px)]">Agency tăng tốc sản xuất nội dung X2 trong 30 ngày</H2>
            <p className="mb-7 text-[16px] leading-[1.65] text-[#5A6B7B]">Một agency TikTok Shop chuyển từ quy trình edit thủ công sang MKT Viral, đẩy sản lượng video lên gấp đôi mà không tăng nhân sự.</p>
            <div className="grid grid-cols-3 gap-4">
              <div><div className="font-mono text-[30px] font-bold text-[#0A84FF]">1.200</div><div className="mt-0.5 text-[12.5px] text-[#8190A0]">video / tháng</div></div>
              <div><div className="font-mono text-[30px] font-bold text-[#071B2F]">15M</div><div className="mt-0.5 text-[12.5px] text-[#8190A0]">lượt xem</div></div>
              <div><div className="font-mono text-[30px] font-bold text-[#FF7A00]">200%</div><div className="mt-0.5 text-[12.5px] text-[#8190A0]">tăng tốc</div></div>
            </div>
          </div>
          <div className="rounded-[18px] border bg-[#F4F8FD] p-6" style={{ borderColor: 'rgba(7,27,47,.07)' }}>
            <div className="mb-5 flex items-center justify-between"><span className="text-[13px] text-[#8190A0]">Sản lượng video / tuần</span><span className="font-mono text-[12px] text-[#1E9E4A]">▲ +200%</span></div>
            <div className="flex h-[170px] items-end gap-2.5">
              {CHART.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-[6px]" style={{ height: h, background: `linear-gradient(180deg,${i >= 5 ? '#FF7A00' : '#0A84FF'},rgba(10,132,255,.15))` }} />
              ))}
            </div>
            <div className="mt-2.5 flex justify-between font-mono text-[10px] text-[#a8b3c0]">{['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8'].map((x) => <span key={x}>{x}</span>)}</div>
          </div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="relative z-[1] border-y py-7" style={{ borderColor: 'rgba(7,27,47,.07)', background: 'linear-gradient(120deg,rgba(10,132,255,.08),rgba(255,122,0,.05))' }}>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 px-7 text-center sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className="font-mono text-[clamp(34px,4vw,52px)] font-bold leading-none text-[#071B2F]">{s.n}</div>
              <div className="mt-2 text-[14px] text-[#5A6B7B]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative z-[1] mx-auto max-w-[1000px] px-7 py-10">
        <div className="mb-6 text-center">
          <Eyebrow>Khách hàng</Eyebrow>
          <H2>Hơn 30.000 đội nhóm đã tin dùng</H2>
        </div>
        <Testimonials items={TESTIMONIALS} />
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="relative z-[1] mx-auto max-w-[1240px] px-7 py-10">
        <div className="mb-6 text-center">
          <Eyebrow color={C.orange}>Bảng giá</Eyebrow>
          <H2 className="mb-3.5">Chọn gói phù hợp với quy mô của bạn</H2>
          <p className="text-[16px] text-[#8190A0]">Không cần thẻ tín dụng · Hỗ trợ cài đặt 1-1 · Hoàn tiền 100% trong 7 ngày</p>
        </div>
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-[20px] border bg-white p-7 transition-all hover:-translate-y-1 ${p.featured ? 'shadow-[0_24px_50px_rgba(10,132,255,.18)]' : 'shadow-sm'}`} style={{ borderColor: p.featured ? 'rgba(10,132,255,.5)' : C.line, background: p.featured ? 'linear-gradient(180deg,#EAF3FF,#fff)' : p.badge ? 'linear-gradient(180deg,#FFF3E8,#fff)' : '#fff' }}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[10.5px] font-bold tracking-wider text-white" style={{ background: p.featured ? 'linear-gradient(135deg,#FF7A00,#FF9500)' : 'linear-gradient(135deg,#1E9E4A,#16863c)' }}>{p.badge}</div>
              )}
              <div className="text-center text-[18px] font-bold tracking-wide text-[#0057D9]">{p.name}</div>
              <p className="mb-4 mt-1.5 min-h-[36px] text-center text-[13px] text-[#8190A0]">{p.tagline}</p>
              <div className="mb-[22px] flex items-baseline justify-center gap-1.5">
                <span className="font-mono text-[27px] font-bold text-[#071B2F]">{p.price}</span><span className="text-[13px] text-[#8190A0]">VND</span>
              </div>
              <TrialModalButton
                source={`${SOURCE} · ${p.name}`}
                className={`mb-6 block w-full rounded-[11px] py-3 text-center text-[14.5px] font-semibold ${p.featured ? 'bg-[#0057D9] bg-[linear-gradient(135deg,#0A84FF,#0057D9)] text-white shadow-[0_10px_24px_rgba(10,132,255,.32)]' : p.badge ? 'bg-[#FF7A00] bg-[linear-gradient(135deg,#FF7A00,#FF9500)] text-white shadow-[0_10px_24px_rgba(255,122,0,.32)]' : 'border border-[rgba(7,27,47,.12)] bg-[#F4F8FD] text-[#071B2F]'}`}
              >
                {`Mua ${p.name.replace('GÓI ', 'gói ').toLowerCase()}`}
              </TrialModalButton>
              <div className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[13.5px] text-[#42566a]"><span className="flex-shrink-0 text-[#1E9E4A]">✓</span>{f}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative z-[1] mx-auto max-w-[840px] px-7 py-10">
        <div className="mb-6 text-center">
          <Eyebrow>FAQ</Eyebrow>
          <H2>Câu hỏi thường gặp</H2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((q) => (
            <details key={q.q} className="group rounded-[14px] border bg-white shadow-sm" style={{ borderColor: C.line }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[16px] font-medium text-[#071B2F]">
                {q.q}
                <span className="flex-shrink-0 text-[22px] text-[#0A84FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-6 pb-5 text-[15px] leading-[1.65] text-[#5A6B7B]">{q.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ============ FOOTER CTA ============ */}
      <section className="relative z-[1] px-7 pb-10 pt-6">
        <div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-[30px] px-10 py-8 text-center" style={{ background: 'linear-gradient(135deg,#0A84FF,#0057D9 60%,#003a91)', boxShadow: '0 40px 90px rgba(10,132,255,.3)' }}>
          <div className="absolute -right-[10%] -top-[40%] h-[160%] w-1/2 blur-3xl" style={{ background: 'radial-gradient(circle,rgba(255,122,0,.4),transparent 60%)' }} />
          <div className="relative">
            <h2 className="mb-5 text-[clamp(30px,4vw,52px)] font-bold leading-[1.08] tracking-tight text-white">Sẵn sàng tăng tốc quy trình<br />sản xuất video?</h2>
            <p className="mb-9 text-[17.5px] text-white/90">Bắt đầu miễn phí hôm nay — không cần thẻ tín dụng.</p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <TrialModalButton source={SOURCE} className="rounded-[13px] bg-white px-8 py-4 text-[16px] font-semibold text-[#0057D9] shadow-[0_14px_34px_rgba(0,0,0,.18)] transition-transform hover:-translate-y-0.5">Dùng thử miễn phí</TrialModalButton>
              <TrialModalButton source={`${SOURCE} · Tư vấn`} className="rounded-[13px] border border-white/40 bg-white/15 px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-white/25">Liên hệ tư vấn</TrialModalButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
