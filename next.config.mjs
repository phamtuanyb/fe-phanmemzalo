// API backend (BE) — ảnh upload phục vụ ở ${API_URL}/uploads. Dùng cho rewrite proxy.
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // Bật standalone build cho Docker — Next sẽ tạo .next/standalone với mọi dependency cần thiết.
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // cache image optimize 1 ngày
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'api.phanmemzalo.com' },
      { protocol: 'https', hostname: 'phanmemzalo.com' },
    ],
  },
  // Ảnh upload lưu ở BE (/uploads). Dữ liệu dùng URL TƯƠNG ĐỐI /uploads/... → proxy sang BE.
  // Nhờ vậy ảnh chạy đúng ở MỌI domain (local & production), không phụ thuộc host tuyệt đối.
  async rewrites() {
    return [
      { source: '/uploads/:path*', destination: `${API_URL}/uploads/:path*` },
    ]
  },
  async redirects() {
    return [
      { source: '/contact', destination: '/lien-he', permanent: true },
      // Đổi URL section Xây Kênh: link cũ /ai-agent và /xaykenh-ai → /xaykenh (giữ SEO).
      { source: '/ai-agent', destination: '/xaykenh', permanent: true },
      { source: '/ai-agent/:slug', destination: '/xaykenh/:slug', permanent: true },
      { source: '/xaykenh-ai', destination: '/xaykenh', permanent: true },
      { source: '/xaykenh-ai/:slug', destination: '/xaykenh/:slug', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        // Static assets cache 1 năm — Next sẽ bust cache qua hash filename
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' }],
      },
    ]
  },
}

export default nextConfig
