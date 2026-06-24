// Server component (HTML tĩnh) + 2 island client nhỏ (CountUp, Faq).
// Toàn bộ nội dung đọc từ `config` (mặc định = ZM_DEFAULTS). Admin sửa qua site-settings.
import './home.css'
import CountUp from './CountUp'
import Faq from './Faq'
import { ZM_DEFAULTS, zmIcon, type ZmHomeConfig } from './config'
import type { Post } from '@/types'
import {
  Zap, Flame, Check, ArrowRight, Play, Star, TrendingUp, ShieldCheck, Lock,
  LayoutDashboard, Inbox, Users, Send, BarChart3, Settings, Search, Tags,
  AlertTriangle, Sparkles, CheckCircle2, PlayCircle, LayoutGrid, Layers,
  Target, MessageCircleHeart, Tag, X, Gift, Newspaper, ChevronsRight, HelpCircle, Clock,
} from 'lucide-react'

const NEWS_SIDE = [
  { t: '5 cách chăm sóc khách trên Zalo giúp tăng tỷ lệ chốt đơn', d: '04/06/2026' },
  { t: 'Zalo cán mốc 76,5 triệu người dùng: cơ hội cho nhà bán hàng Việt', d: '28/05/2026' },
  { t: 'Hướng dẫn nuôi nick Zalo an toàn với proxy riêng từng tài khoản', d: '21/05/2026' },
  { t: 'Top 10 phần mềm Zalo Marketing: SME nên chọn công cụ nào?', d: '16/05/2026' },
]

export default function HomeLanding({ config = ZM_DEFAULTS, newsPosts = [] }: { config?: ZmHomeConfig; newsPosts?: Post[] }) {
  const c = config
  const show = c.show

  // ── Tin tức trang chủ: ưu tiên bài thật từ danh mục Tin tức, fallback dữ liệu mẫu khi chưa có. ──
  const fmtNewsDate = (p: Post) => new Date(p.publishedAt ?? p.createdAt).toLocaleDateString('vi-VN')
  const hasRealNews = newsPosts.length > 0
  const featured = hasRealNews
    ? {
        href: `/tin-tuc/${newsPosts[0].slug}`,
        title: newsPosts[0].title,
        date: fmtNewsDate(newsPosts[0]),
        style: newsPosts[0].thumbnail
          ? { backgroundImage: `url(${newsPosts[0].thumbnail})` }
          : { background: 'linear-gradient(135deg,#1565C0,#1E88E5)' },
      }
    : {
        href: '/tin-tuc',
        title: 'ZMarketing ra mắt gửi tin theo kịch bản tự động: chăm khách đúng người, đúng thời điểm',
        date: '10/06/2026',
        style: { background: 'linear-gradient(135deg,#1565C0,#1E88E5)' },
      }
  const newsSide = hasRealNews
    ? newsPosts.slice(1, 5).map((p, i) => ({
        key: String(p.id),
        href: `/tin-tuc/${p.slug}`,
        t: p.title,
        d: fmtNewsDate(p),
        style: p.thumbnail
          ? { borderRadius: 10, backgroundImage: `url(${p.thumbnail})` }
          : { borderRadius: 10, background: i % 2 ? 'linear-gradient(135deg,#2ECC71,#27AE60)' : 'linear-gradient(135deg,#42A5F5,#1565C0)' },
      }))
    : NEWS_SIDE.map((n, i) => ({
        key: n.t,
        href: '#tin-tuc',
        t: n.t,
        d: n.d,
        style: { borderRadius: 10, background: i % 2 ? 'linear-gradient(135deg,#2ECC71,#27AE60)' : 'linear-gradient(135deg,#42A5F5,#1565C0)' },
      }))

  return (
    <div className="zm">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="dotgrid" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badge reveal">
              <span className="pin"><Flame className="ic" />{c.hero.badgeStrong}</span>
              <span className="hb-text">{c.hero.badgeText}</span>
            </div>
            <h1 className="reveal reveal-d1">{c.hero.titleTop}<br /><span className="hl">{c.hero.titleHl}</span><br />{c.hero.titleBottom}</h1>
            <p className="sub reveal reveal-d1">{c.hero.sub}</p>
            <div className="hero-feats reveal reveal-d2">
              {c.hero.feats.map((f) => (
                <span className="hfeat" key={f}><span className="hfeat-tick"><Check className="ic" /></span>{f}</span>
              ))}
            </div>
            <div className="hero-ctas reveal reveal-d2">
              <a href={c.links.register} className="btn btn-primary">{c.hero.ctaPrimary} <ArrowRight className="ic" /></a>
              <a href="#video-demo" className="btn btn-ghost"><Play className="ic" /> {c.hero.ctaSecondary}</a>
            </div>
            <div className="hero-proof reveal reveal-d3">
              <div className="avatars">
                <span style={{ background: 'linear-gradient(135deg,#FF8C00,#FFD700)' }}>H</span>
                <span style={{ background: 'linear-gradient(135deg,#1565C0,#42A5F5)' }}>T</span>
                <span style={{ background: 'linear-gradient(135deg,#2ECC71,#27AE60)' }}>L</span>
                <span style={{ background: 'linear-gradient(135deg,#FF4081,#FF8FB1)' }}>M</span>
              </div>
              <div>
                <span className="stars">
                  <Star className="ic" /><Star className="ic" /><Star className="ic" /><Star className="ic" /><Star className="ic" />
                </span><br />
                {c.hero.proof}
              </div>
            </div>
          </div>

          {/* App mockup (trang trí, tĩnh) */}
          <div className="app-stage reveal reveal-d2">
            <div className="chip-float chip-a">
              <span className="ico" style={{ background: 'var(--grad-cta)' }}><TrendingUp className="ic" /></span>
              <div>+76% Doanh số<small>so với chăm tay</small></div>
            </div>
            <div className="chip-float chip-b">
              <span className="ico" style={{ background: 'var(--grad-blue)' }}><ShieldCheck className="ic" /></span>
              <div>35/35 nick an toàn<small>proxy riêng từng nick</small></div>
            </div>
            <div className="app-window">
              <div className="app-titlebar">
                <div className="tl"><span style={{ background: '#FF5F57' }} /><span style={{ background: '#FEBC2E' }} /><span style={{ background: '#28C840' }} /></div>
                <div className="urlpill"><Lock className="ic" />app.zmarketing.me</div>
              </div>
              <div className="app-body">
                <aside className="app-side">
                  <div className="brandmini"><b>ZMarketing</b></div>
                  <div className="snav"><LayoutDashboard className="ic" />Tổng quan</div>
                  <div className="snav active"><Inbox className="ic" />Hộp thư<span className="nbadge">12</span></div>
                  <div className="snav"><Users className="ic" />CRM</div>
                  <div className="snav"><Send className="ic" />Chiến dịch</div>
                  <div className="snav"><BarChart3 className="ic" />Báo cáo</div>
                  <div className="snav"><Settings className="ic" />Tài khoản</div>
                  <div className="acct-status">
                    <div className="as-top"><span className="as-dot" />35 nick Zalo</div>
                    <div className="as-sub">Đang hoạt động ổn định</div>
                  </div>
                </aside>
                <main className="app-main">
                  <div className="am-head">
                    <h4>Hộp thư hợp nhất</h4>
                    <div className="am-search"><Search className="ic" />Tìm khách hàng…</div>
                  </div>
                  <div className="am-grid">
                    <div className="inbox">
                      <div className="conv sel">
                        <div className="av" style={{ background: 'linear-gradient(135deg,#FF8C00,#FFD700)' }}>NA</div>
                        <div className="cmeta">
                          <div className="cn">Ngọc Anh <span className="tag" style={{ background: 'var(--pink)' }}>VIP</span></div>
                          <div className="cmsg">Shop còn mẫu này size M không ạ?</div>
                        </div>
                        <div className="cright"><span className="ct">2 phút</span><span className="unread">3</span></div>
                      </div>
                      <div className="conv">
                        <div className="av" style={{ background: 'linear-gradient(135deg,#1565C0,#42A5F5)' }}>QH</div>
                        <div className="cmeta">
                          <div className="cn">Quang Huy <span className="tag" style={{ background: 'var(--blue-500)' }}>Tiềm năng</span></div>
                          <div className="cmsg">Cho mình xin bảng giá sỉ với</div>
                        </div>
                        <div className="cright"><span className="ct">8 phút</span><span className="unread">1</span></div>
                      </div>
                      <div className="conv">
                        <div className="av" style={{ background: 'linear-gradient(135deg,#2ECC71,#27AE60)' }}>TM</div>
                        <div className="cmeta">
                          <div className="cn">Thuỳ My <span className="tag" style={{ background: 'var(--green-600)' }}>Đã mua</span></div>
                          <div className="cmsg">Đã nhận hàng nhé, cảm ơn shop!</div>
                        </div>
                        <div className="cright"><span className="ct">15 phút</span></div>
                      </div>
                      <div className="conv">
                        <div className="av" style={{ background: 'linear-gradient(135deg,#7E57C2,#B39DDB)' }}>PD</div>
                        <div className="cmeta">
                          <div className="cn">Phương Dung <span className="tag" style={{ background: 'var(--orange)' }}>Chăm lại</span></div>
                          <div className="cmsg">Để mình suy nghĩ thêm rồi báo lại</div>
                        </div>
                        <div className="cright"><span className="ct">1 giờ</span></div>
                      </div>
                    </div>
                    <div className="side-cards">
                      <div className="mc">
                        <div className="mc-h"><Tags className="ic" />CRM gắn tag</div>
                        <div className="tagrow">
                          <span className="crm-tag"><span className="d" style={{ background: 'var(--pink)' }} />VIP · 48</span>
                          <span className="crm-tag"><span className="d" style={{ background: 'var(--blue-500)' }} />Tiềm năng · 132</span>
                          <span className="crm-tag"><span className="d" style={{ background: 'var(--green-600)' }} />Đã mua · 96</span>
                          <span className="crm-tag"><span className="d" style={{ background: 'var(--orange)' }} />Chăm lại · 27</span>
                        </div>
                      </div>
                      <div className="mc">
                        <div className="mc-h"><Send className="ic" />Chiến dịch gửi tin<span className="pct">98%</span></div>
                        <div className="prog"><i /></div>
                        <div className="prog-meta"><span>Đã gửi 1.176</span><span>/ 1.200 tin</span></div>
                      </div>
                      <div className="mc">
                        <div className="mc-h"><BarChart3 className="ic" />Khách chăm hôm nay</div>
                        <div className="bars">
                          <i style={{ height: '46%' }} /><i style={{ height: '64%' }} /><i style={{ height: '52%' }} /><i style={{ height: '80%' }} /><i style={{ height: '60%' }} /><i className="hot" style={{ height: '96%' }} /><i style={{ height: '72%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      {show.stats && (
        <div className="stats">
          <div className="container">
            <div className="stats-inner reveal">
              {c.stats.items.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-num">{s.prefix && <em>{s.prefix}</em>}<CountUp target={s.num} />{s.suffix && <em>{s.suffix}</em>}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== PAIN ===== */}
      {show.pain && (
        <section className="pain">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><AlertTriangle className="ic" />{c.pain.eyebrow}</span>
              <h2 className="section-title">{c.pain.title}</h2>
              <p className="section-sub">{c.pain.sub}</p>
            </div>
            <div className="pain-grid">
              {c.pain.items.map((it, i) => {
                const Ic = zmIcon(it.icon)
                return (
                  <div className={`pain-card reveal${i % 3 === 1 ? ' reveal-d1' : i % 3 === 2 ? ' reveal-d2' : ''}`} key={it.title}>
                    <div className="pain-ic"><Ic className="ic" /></div>
                    <h3>{it.title}</h3>
                    <p>{it.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== SOLUTION ===== */}
      {show.solution && (
        <section className="solution dark">
          <div className="dotgrid" />
          <div className="glow" />
          <div className="container solution-grid">
            <div className="reveal">
              <span className="eyebrow"><Sparkles className="ic" />{c.solution.eyebrow}</span>
              <h2 style={{ marginTop: 16 }}>{c.solution.titleA}<span className="hl">{c.solution.titleHl}</span>{c.solution.titleB}</h2>
              <p className="lead">{c.solution.lead}</p>
              <ul className="check-list">
                {c.solution.checks.map((ck) => {
                  const Ic = zmIcon(ck.icon)
                  return (
                    <li key={ck.strong}><span className="tick"><Ic className="ic" /></span><span className="ctxt"><b>{ck.strong}</b>{ck.text}</span></li>
                  )
                })}
              </ul>
              <div className="sol-cta"><a href={c.links.register} className="btn btn-primary">{c.solution.cta} <ArrowRight className="ic" /></a></div>
            </div>
            <div className="solution-visual reveal reveal-d1">
              {c.solution.visual.map((v) => {
                const Ic = zmIcon(v.icon)
                return (
                  <div className="sv-row" key={v.title}><div className="sv-ic"><Ic className="ic" /></div><div><b>{v.title}</b><span>{v.sub}</span></div><span className="ok"><CheckCircle2 className="ic" /></span></div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== VIDEO ===== */}
      {show.video && (
        <section className="video-demo" id="video-demo">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><PlayCircle className="ic" />{c.video.eyebrow}</span>
              <h2 className="section-title">{c.video.title}</h2>
              <p className="section-sub">{c.video.sub}</p>
            </div>
            <div className="video-wrapper reveal">
              <iframe src={c.video.url} title="Video demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="video-bullets reveal reveal-d1">
              {c.video.bullets.map((b) => {
                const Ic = zmIcon(b.icon)
                return <div key={b.text}><Ic className="ic" />{b.text}</div>
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURES ===== */}
      {show.features && (
        <section className="features" id="tinh-nang">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><Layers className="ic" />{c.features.eyebrow}</span>
              <h2 className="section-title">{c.features.title}</h2>
              <p className="section-sub">{c.features.sub}</p>
            </div>
            <div className="feat-grid">
              {c.features.items.map((f, i) => {
                const Ic = zmIcon(f.icon); const TIc = zmIcon(f.tagIcon)
                return (
                  <div className={`feat-card reveal${i % 3 === 1 ? ' reveal-d1' : i % 3 === 2 ? ' reveal-d2' : ''}`} key={f.title}>
                    <div className="feat-icon"><Ic className="ic" /></div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                    <span className="tag"><TIc className="ic" />{f.tag}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== AUDIENCE ===== */}
      {show.audience && (
        <section className="audience">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><Target className="ic" />{c.audience.eyebrow}</span>
              <h2 className="section-title">{c.audience.title}</h2>
              <p className="section-sub">{c.audience.sub}</p>
            </div>
            <div className="aud-grid">
              {c.audience.items.map((a, i) => {
                const Ic = zmIcon(a.icon)
                return (
                  <div className={`aud-card reveal${i ? ` reveal-d${i}` : ''}`} key={a.title}>
                    <div className="aud-ic"><Ic className="ic" /></div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== TESTIMONIALS ===== */}
      {show.testimonials && (
        <section className="testi" id="khach-hang">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><MessageCircleHeart className="ic" />{c.testimonials.eyebrow}</span>
              <h2 className="section-title">{c.testimonials.title}</h2>
              <p className="section-sub">{c.testimonials.sub}</p>
            </div>
            <div className="testi-grid">
              {c.testimonials.items.map((t, i) => (
                <div className={`testi-card reveal${i ? ` reveal-d${i}` : ''}`} key={t.name}>
                  <div className="testi-video">
                    <iframe src={t.url} title={`Feedback ${t.name}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="testi-pad">
                    <div className="stars"><Star className="ic" /><Star className="ic" /><Star className="ic" /><Star className="ic" /><Star className="ic" /></div>
                    <div className="testi-person"><div className="avatar" style={{ background: t.grad }}>{t.av}</div><div><b>{t.name}</b><span>{t.role}</span></div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== PRICING ===== */}
      {show.pricing && (
        <section className="pricing" id="bang-gia">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><Tag className="ic" />{c.pricing.eyebrow}</span>
              <h2 className="section-title">{c.pricing.title}</h2>
              <p className="section-sub">{c.pricing.sub}</p>
            </div>
            <div className="price-grid">
              {c.pricing.plans.map((p, i) => {
                const Ic = zmIcon(p.icon); const CtaIc = p.ctaIcon ? zmIcon(p.ctaIcon) : null
                return (
                  <div className={`price-card reveal${p.featured ? ' featured' : ''}${i ? ` reveal-d${i}` : ''}`} key={p.name}>
                    {p.featured && <div className="badge-pop"><Flame className="ic" />Phổ biến nhất</div>}
                    <div className="price-ic"><Ic className="ic" /></div>
                    <div className="price-name">{p.name}</div>
                    <div className="price-desc">{p.desc}</div>
                    <div className="price-val">{p.val}{p.valSmall && <small>{p.valSmall}</small>}</div>
                    {p.old && <div className="price-old">{p.old}</div>}
                    <div className="price-year">{p.year}</div>
                    <div className="price-divider" />
                    <ul className="price-feats">
                      {p.feats.map((ft) => (
                        <li className={ft.no ? 'no' : undefined} key={ft.t}>
                          <span className={ft.no ? 'nope' : 'ok'}>{ft.no ? <X className="ic" /> : <Check className="ic" />}</span>
                          {ft.b ? <b>{ft.t}</b> : ft.t}
                        </li>
                      ))}
                    </ul>
                    <a href={p.ctaHref} className={`btn-price ${p.ctaSolid ? 'solid' : 'outline'}`}>{CtaIc && <CtaIc className="ic" />}{p.cta}</a>
                  </div>
                )
              })}
            </div>
            <p className="price-note reveal"><Gift className="ic" /><span>{c.pricing.note}</span></p>
          </div>
        </section>
      )}

      {/* ===== BONUS ===== */}
      {show.bonus && (
        <section className="bonus">
          <div className="container">
            <div className="bonus-box reveal">
              <div className="bonus-head">
                <div className="gift-ic"><Gift className="ic" /></div>
                <h3>{c.bonus.titlePre}<em>{c.bonus.titleEm}</em>{c.bonus.titlePost}</h3>
              </div>
              <p className="bsub">{c.bonus.sub}</p>
              <div className="bonus-grid">
                {c.bonus.items.map((g) => {
                  const Ic = zmIcon(g.icon)
                  return (
                    <div className="gitem" key={g.strong}><span className="gico"><Ic className="ic" /></span><span>{g.pre}<b>{g.strong}</b>{g.post}</span></div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== NEWS (động: lấy bài mới nhất từ danh mục Tin tức) ===== */}
      {show.news && (
        <section className="news" id="tin-tuc">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><Newspaper className="ic" />Tin tức &amp; Cập nhật</span>
              <h2 className="section-title">Tin tức &amp; <span className="blue">Kiến thức công nghệ</span></h2>
            </div>
            <div className="news-wrap">
              <a href={featured.href} className="news-feat reveal">
                <span className="img-slot" style={featured.style} />
                <div className="news-feat-body">
                  <h3>{featured.title}</h3>
                  <span className="news-date">Ngày đăng: <b>{featured.date}</b></span>
                  <span className="news-more">Đọc thêm <ChevronsRight className="ic" /></span>
                </div>
              </a>
              <div className="news-side">
                {newsSide.map((n, i) => (
                  <a href={n.href} className={`news-mini reveal reveal-d${i < 2 ? 1 : 2}`} key={n.key}>
                    <span className="img-slot" style={n.style} />
                    <div className="nm-meta">
                      <h4>{n.t}</h4>
                      <span className="news-date">Ngày đăng: <b>{n.d}</b></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="news-foot reveal">
              <a href="/tin-tuc" className="btn btn-ghost">Xem tất cả tin tức <ArrowRight className="ic" /></a>
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      {show.faq && (
        <section className="faq" id="faq">
          <div className="container">
            <div className="sec-head reveal">
              <span className="eyebrow center"><HelpCircle className="ic" />{c.faq.eyebrow}</span>
              <h2 className="section-title">{c.faq.title}</h2>
              <p className="section-sub">{c.faq.sub}</p>
            </div>
            <Faq items={c.faq.items} />
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      {show.finalCta && (
        <section className="final dark">
          <div className="dotgrid" />
          <div className="glow g1" />
          <div className="glow g2" />
          <div className="container final-inner">
            <div className="urgency reveal"><Clock className="ic" />{c.finalCta.urgency}</div>
            <h2 className="reveal reveal-d1">{c.finalCta.titleA}<span className="hl">{c.finalCta.titleHl}</span></h2>
            <p className="reveal reveal-d1">{c.finalCta.sub}</p>
            <div className="reveal reveal-d2"><a href={c.links.register} className="btn btn-primary" style={{ fontSize: 18, padding: '18px 44px' }}>{c.finalCta.cta} <ArrowRight className="ic" /></a></div>
            <div className="guarantee reveal reveal-d2">
              {c.finalCta.guarantees.map((g) => (
                <span key={g}><CheckCircle2 className="ic" />{g}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FLOAT MOBILE CTA ===== */}
      <div className="float-cta">
        <a href={c.links.register}><Zap className="ic" />{c.hero.ctaPrimary}</a>
      </div>
    </div>
  )
}
