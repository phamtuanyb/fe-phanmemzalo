// Cấu hình landing /xaykenh/xaykenhai — lưu trong site_settings key "xaykenhai".
// Landing đọc config này, fallback về DEFAULT (code) khi DB chưa có. Admin sửa toàn bộ.

export type XKAiChannelKind = 'tiktok' | 'youtube' | 'facebook' | 'instagram' | 'shopee' | 'threads'

export interface XKAiRow { label: string; value: string }
export interface XKAiStep { title: string; desc: string }
export interface XKAiCollectionItem { cat: string; desc: string; dur: string; views: string; likes: string; videoUrl?: string; img?: string }
export interface XKAiTextItem { title: string; desc: string }
export interface XKAiChannel { name: string; ch: XKAiChannelKind; ready: boolean }

export interface XayKenhAiConfig {
  seoTitle: string
  seoDescription: string
  hero: {
    badge: string
    titlePrefix: string
    titleHighlight: string
    titleSuffix: string
    subtitle: string
    ctaPrimaryText: string
    ctaSecondaryText: string
    note: string
  }
  comparison: {
    show: boolean
    manualLabel: string
    manualBadge: string
    manualRows: XKAiRow[]
    aiLabel: string
    aiBadge: string
    aiRows: XKAiRow[]
    savings: string
  }
  workflow: { eyebrow: string; heading: string; subtitle: string; steps: XKAiStep[] }
  demo: { eyebrow: string; heading: string; subtitle: string; videoUrl?: string; image?: string; badgeText: string; metaText: string }
  collection: { eyebrow: string; heading: string; subtitle: string; items: XKAiCollectionItem[] }
  features: { eyebrow: string; heading: string; subtitle: string; items: XKAiTextItem[] }
  security: {
    eyebrow: string; heading: string; subtitle: string
    points: XKAiTextItem[]
    note: string
    panelTitle: string; panelSubtitle: string; activeLabel: string
    channels: XKAiChannel[]
  }
  cta: { eyebrow: string; heading: string; subtitle: string; ctaPrimaryText: string; ctaSecondaryText: string }
}

const U = (id: string) => `https://images.unsplash.com/photo-${id}?q=80&w=600&auto=format&fit=crop`

export const XAYKENHAI_DEFAULT: XayKenhAiConfig = {
  seoTitle: 'Xây Kênh AI — Sản xuất video Reels, TikTok, Shorts đa kênh bằng AI | MKT Software',
  seoDescription:
    'Tự động hoá toàn bộ quy trình từ ý tưởng thô đến video hoàn chỉnh: viết kịch bản phân cảnh, sinh hình ảnh AI, lồng tiếng và xuất bản đa kênh chỉ trong vài phút.',
  hero: {
    badge: 'Sản xuất video ngắn tự động bằng AI',
    titlePrefix: 'Sản xuất video ',
    titleHighlight: 'Reels, TikTok, Shorts',
    titleSuffix: ' đa kênh bằng AI',
    subtitle:
      'Tự động hoá toàn bộ quy trình từ ý tưởng thô đến video hoàn chỉnh: viết kịch bản phân cảnh, sinh hình ảnh AI, lồng tiếng và xuất bản đa kênh chỉ trong vài phút.',
    ctaPrimaryText: 'Bắt đầu miễn phí',
    ctaSecondaryText: 'Xem demo',
    note: 'Không cần thẻ tín dụng · Hỗ trợ cài đặt 1-1',
  },
  comparison: {
    show: true,
    manualLabel: 'Cách làm thủ công',
    manualBadge: '7 GIỜ',
    manualRows: [
      { label: 'Viết kịch bản', value: '1.5 giờ' },
      { label: 'Thu âm & edit thoại', value: '1.5 giờ' },
      { label: 'Tìm ảnh & edit video', value: '4 giờ' },
    ],
    aiLabel: 'Xây Kênh AI',
    aiBadge: '3 PHÚT',
    aiRows: [
      { label: 'Kịch bản AI', value: '30 giây' },
      { label: 'Sync voice & ảnh', value: '1.5 phút' },
      { label: 'Render tự động', value: '1 phút' },
    ],
    savings: 'Tiết kiệm 99% thời gian & công sức',
  },
  workflow: {
    eyebrow: 'Quy trình sản xuất',
    heading: 'Từ bài viết thô tới video MP4 hoàn chỉnh',
    subtitle: 'Bốn bước thông minh, tự động và minh bạch — bạn kiểm soát từng phân cảnh trước khi xuất bản.',
    steps: [
      { title: 'Nhập nội dung thô', desc: 'Dán văn bản ý tưởng, tải tệp tài liệu lên hoặc cung cấp liên kết bài báo (URL) bất kỳ.' },
      { title: 'Phân cảnh AI', desc: 'Hệ thống AI phân tích ngữ nghĩa, tự động soạn thảo kịch bản phân cảnh chi tiết cho phép tùy ý điều chỉnh.' },
      { title: 'Sync thoại & Ảnh AI', desc: 'Tích hợp giọng đọc AI, đồng bộ phụ đề chính xác và sinh hình ảnh minh họa độc quyền cho mọi phân cảnh.' },
      { title: 'Render & Nhận Video', desc: 'Tiến trình máy chủ (Background Worker) render kết xuất sản phẩm thành định dạng video MP4 chất lượng cao.' },
    ],
  },
  demo: {
    eyebrow: 'Video Demo',
    heading: 'Xem hệ thống AI vận hành thực tế',
    subtitle: 'Dán một link bài báo và theo dõi AI dựng kịch bản, lồng tiếng, sinh ảnh rồi render video 9:16.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1400&auto=format&fit=crop',
    badgeText: 'LIVE DRAFT',
    metaText: 'MP4 · 1080p · 60fps',
  },
  collection: {
    eyebrow: 'Bộ sưu tập sáng tạo',
    heading: 'Video triệu view tạo hoàn toàn bằng AI',
    subtitle: 'Hình ảnh sắc nét, phụ đề cuốn hút và giọng đọc truyền cảm — thiết lập tự động trên nhiều lĩnh vực.',
    items: [
      { cat: 'Tin tức', desc: 'Tóm tắt các tin nóng kinh tế & công nghệ toàn cầu trong 60 giây', dur: '0:45', views: '280K', likes: '11K', img: U('1590602847861-f357a9332bbc') },
      { cat: 'Giải trí', desc: 'Cận cảnh hậu trường phim bom tấn đỉnh cao ra mắt tuần này', dur: '0:59', views: '2.3M', likes: '90K', img: U('1516450360452-9312f5e86fc7') },
      { cat: 'Review phim', desc: 'Top các chi tiết ẩn thú vị bạn bỏ lỡ trong tác phẩm điện ảnh kinh điển', dur: '1:15', views: '2.2M', likes: '87K', img: U('1489599849927-2ee91cede3ba') },
      { cat: 'Đời sống', desc: '5 thói quen đơn giản giúp thay đổi tư duy và nâng hiệu suất công việc', dur: '1:00', views: '2.1M', likes: '83K', img: U('1506126613408-eca07ce68773') },
      { cat: 'Affiliate', desc: 'Review nhanh 3 món gia dụng bán chạy nhất sàn trong tháng', dur: '0:38', views: '2M', likes: '80K', img: U('1556742502-ec7c0e9f34b1') },
      { cat: 'TikTok bán hàng', desc: 'Kịch bản chốt đơn livestream giúp tăng tỷ lệ chuyển đổi gấp đôi', dur: '0:52', views: '1.9M', likes: '76K', img: U('1611162617474-5b21e879e113') },
      { cat: 'Shorts YouTube', desc: 'Mẹo dựng Shorts giữ chân người xem trong 3 giây đầu tiên', dur: '0:30', views: '1.8M', likes: '72K', img: U('1601933470928-c6ff3a5f3a04') },
      { cat: 'Tin tức AI', desc: 'Thế hệ AI mới nhanh gấp 10 lần và hỗ trợ xuất bản trực tiếp', dur: '1:08', views: '1.7M', likes: '69K', img: U('1451187580459-43490279c0fa') },
    ],
  },
  features: {
    eyebrow: 'Tính năng tối ưu',
    heading: 'Xây dựng cho sản xuất nội dung thực tế',
    subtitle: 'Bộ công cụ nâng cao để tùy chỉnh và kiểm soát chất lượng video đầu ra.',
    items: [
      { title: 'Tạo kịch bản AI đa ngôn ngữ', desc: 'Tự động cấu trúc lại bài viết thô thành kịch bản phân cảnh cuốn hút, phù hợp nhiều văn phong truyền thông.' },
      { title: 'Chỉnh sửa cảnh linh hoạt', desc: 'Chỉnh sửa trực tiếp text từng cảnh trước khi render. Dễ dàng điều khiển độ dài của từng phân đoạn.' },
      { title: 'AI Voiceover & Phụ đề tự động', desc: 'Kết hợp giọng đọc tiếng Việt truyền cảm, tạo file phụ đề chính xác trùng khớp với giọng nói.' },
      { title: 'Tự động sinh hình ảnh nền', desc: 'Tạo hình ảnh minh hoạ bằng AI cho từng cảnh dựa trên ngữ nghĩa của phân đoạn, trực quan sống động.' },
      { title: 'Render nền & Hàng chờ', desc: 'Xử lý kết xuất video dưới máy chủ chạy ngầm với cơ chế tự động thử lại khi gặp lỗi mạng.' },
      { title: 'Kho lưu trữ & Phân phối CDN', desc: 'Lịch sử dự án rõ ràng, tải video chất lượng cao trực tiếp qua mạng lưới CDN với tốc độ tối đa.' },
    ],
  },
  security: {
    eyebrow: 'Bảo mật & Kết nối',
    heading: 'An toàn tuyệt đối cho tài khoản mạng xã hội',
    subtitle:
      'Kênh truyền thông của bạn là tài sản vô giá. Nền tảng chỉ dùng giao thức xác thực chính thức OAuth 2.0 theo quy chuẩn của TikTok, Google và Meta.',
    points: [
      { title: 'Liên kết chính thức OAuth 2.0', desc: 'Xác thực trực tiếp từ nhà phát hành. Tuyệt đối không yêu cầu hay lưu mật khẩu tài khoản của bạn.' },
      { title: 'Mã hoá Token cấp độ quân đội', desc: 'Toàn bộ Access Token được mã hoá hai lớp bằng thuật toán AES-256-GCM trước khi lưu trữ.' },
    ],
    note: 'Bạn có thể thu hồi quyền truy cập bất cứ lúc nào — chúng tôi không lưu mật khẩu, chỉ giữ token đã mã hoá.',
    panelTitle: 'Trung tâm Kết nối',
    panelSubtitle: 'Đồng bộ qua API chính thức',
    activeLabel: '2 kênh active',
    channels: [
      { name: 'TikTok Creator', ch: 'tiktok', ready: false },
      { name: 'YouTube Shorts', ch: 'youtube', ready: true },
      { name: 'Instagram Reels', ch: 'instagram', ready: false },
      { name: 'Facebook Reels', ch: 'facebook', ready: true },
      { name: 'Threads App', ch: 'threads', ready: false },
    ],
  },
  cta: {
    eyebrow: 'Trải nghiệm dùng thử miễn phí',
    heading: 'Tạo video triệu view ngay hôm nay',
    subtitle: 'Từ bài viết thô tới video MP4 đăng đa kênh chỉ trong 3 phút. Không cần thẻ tín dụng.',
    ctaPrimaryText: 'Bắt đầu miễn phí',
    ctaSecondaryText: 'Xem demo',
  },
}

// Merge config từ DB với DEFAULT (section-level) — đảm bảo không thiếu trường.
export function withXayKenhAiDefaults(raw?: Partial<XayKenhAiConfig> | null): XayKenhAiConfig {
  const d = XAYKENHAI_DEFAULT
  if (!raw || typeof raw !== 'object') return d
  return {
    seoTitle: raw.seoTitle || d.seoTitle,
    seoDescription: raw.seoDescription || d.seoDescription,
    hero: { ...d.hero, ...raw.hero },
    comparison: { ...d.comparison, ...raw.comparison },
    workflow: { ...d.workflow, ...raw.workflow },
    demo: { ...d.demo, ...raw.demo },
    collection: { ...d.collection, ...raw.collection },
    features: { ...d.features, ...raw.features },
    security: { ...d.security, ...raw.security },
    cta: { ...d.cta, ...raw.cta },
  }
}
