import { SidePanel } from './SharedPanels'
import Button from '@/components/ui/Button'
import { formatDate } from '@/lib/utils'
import type { Post, PostStatus } from '@/types'
import { SeoAnalysisMiniBar } from './SeoAnalysis'

interface PanelPublishProps {
  post?: Post
  saving: PostStatus | null
  onDraft: () => void
  onUpdate: () => void
  onPublish: () => void
  handlePreview: () => void
}

export default function PanelPublish({
  post,
  saving,
  onDraft,
  onUpdate,
  onPublish,
  handlePreview,
}: PanelPublishProps) {
  const isEdit = !!post
  const isPublished = post?.status === 'published'

  return (
    <>
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/60 shrink-0">
        <span className="text-sm font-semibold text-slate-800">Cài đặt xuất bản</span>
      </div>
      <div className="overflow-y-auto min-h-0 flex-1">
        <SidePanel title="Xuất bản">
          {isEdit ? (
            /* ── Chế độ SỬA: nút "Cập nhật" to, ở trên cùng (luôn thấy) ── */
            <div className="flex flex-col gap-2 mt-1 mb-4">
              <Button
                type="button"
                size="sm"
                className="w-full"
                onClick={onUpdate}
                loading={saving === post?.status}
                disabled={!!saving}
              >
                Cập nhật
              </Button>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={handlePreview}
                  disabled={!!saving}
                >
                  Xem trước
                </Button>
                {isPublished ? (
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    onClick={onDraft}
                    loading={saving === 'draft'}
                    disabled={!!saving}
                  >
                    Chuyển về nháp
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    onClick={onPublish}
                    loading={saving === 'published'}
                    disabled={!!saving}
                  >
                    Xuất bản
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* ── Chế độ TẠO MỚI: Lưu nháp + Xem trước ── */
            <div className="flex gap-2 mt-1 mb-4">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={onDraft}
                loading={saving === 'draft'}
                disabled={!!saving}
              >
                Lưu nháp
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={handlePreview}
                disabled={!!saving}
              >
                Xem trước
              </Button>
            </div>
          )}

          <div className="space-y-2.5 text-sm text-slate-700 mb-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500">Trạng thái</span>
              <span className={`font-medium ${post?.status === 'published' ? 'text-emerald-600' : 'text-amber-600'}`}>
                {post?.status === 'published' ? 'Đã đăng' : post?.status === 'archived' ? 'Lưu trữ' : 'Nháp'}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500">Hiển thị</span>
              <span className="font-medium text-slate-700">Công khai</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500">Xuất bản</span>
              <span className="font-medium text-slate-700 truncate text-right">
                {post?.publishedAt ? formatDate(post.publishedAt) : 'Ngay lập tức'}
              </span>
            </div>
          </div>

          {/* SEO mini bar */}
          <SeoAnalysisMiniBar postId={post?.id} />

          {/* Nút lớn "Xuất bản" chỉ ở chế độ TẠO MỚI; sửa đã có nút "Cập nhật" ở trên */}
          {!isEdit && (
            <Button
              type="button"
              size="sm"
              className="w-full"
              onClick={onPublish}
              loading={saving === 'published'}
              disabled={!!saving}
            >
              Xuất bản
            </Button>
          )}
        </SidePanel>
      </div>
    </>
  )
}
