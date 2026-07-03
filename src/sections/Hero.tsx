import { useState } from 'react'
import { Chapter } from '../components/Chapter'

const INSPECTION_POINTS = [
  {
    key: 'leather',
    ja: '革',
    en: '皮革',
    title: '天然皮革',
    text: '蝋を含ませたフルグレインレザー。使い込むほどに艶と陰影が深まり、履く人の時間を刻みます。',
  },
  {
    key: 'stitch',
    ja: '縫',
    en: '縫製',
    title: '手縫い',
    text: '力のかかる線に沿って補強した縫製。静かな輪郭を保ちながら、長い使用に耐える構造です。',
  },
  {
    key: 'sole',
    ja: '底',
    en: '靴底',
    title: '防滑構造',
    text: '深いラグを持つ天然ゴムの靴底。濡れた石や土の上でも、確かな踏み込みを支えます。',
  },
]

export function Hero() {
  const [activePoint, setActivePoint] = useState(INSPECTION_POINTS[0])

  return (
    <Chapter id="hero" index="01 — 到着" kanji="旅" kanjiClass="left-[-2vw] top-[14vh] text-[46vw] md:text-[30vw]" minVh={140}>
      <div className="grid min-h-[82vh] grid-cols-1 items-center gap-10 pt-16 md:grid-cols-[minmax(0,0.78fr)_minmax(24rem,1.22fr)] md:pt-24 lg:gap-16">
        <div className="max-w-[38rem] pt-8 md:pt-0">
          <p className="reveal section-kicker mb-7">絆 · 日本の屋外靴</p>
          <h1
            id="hero-title"
            className="reveal text-6xl leading-[1.02] md:text-8xl"
            style={{ fontFamily: 'var(--font-serif-jp)', transitionDelay: '80ms' }}
          >
            絆を、
            <br />
            歩く。
          </h1>
          <p
            className="reveal mt-8 max-w-[31rem] text-base leading-loose md:text-lg"
            style={{ color: 'var(--color-ink-soft)', transitionDelay: '160ms' }}
          >
            日本の職人技が生んだ、耐久性と美しさの融合。
            <span className="mt-2 block text-sm opacity-70" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic' }}>
              旅のために鍛え、あらゆる道のために仕立てる。
            </span>
          </p>
          <div className="reveal mt-10 flex flex-col items-start gap-4" style={{ transitionDelay: '230ms' }}>
            <a href="#collection" className="quiet-link inline-flex items-center gap-3 text-sm tracking-[0.2em]">
              <span style={{ fontFamily: 'var(--font-serif-jp)' }}>コレクションを見る</span>
              <span aria-hidden style={{ color: 'var(--color-bronze)' }}>→</span>
            </a>
            <span className="text-[0.65rem] tracking-[0.26em] opacity-45">第一標本 / 展示研究</span>
          </div>
        </div>

        <div className="reveal hero-stage" style={{ transitionDelay: '180ms' }}>
          <div className="artifact-panel" aria-label="素材観察">
            <div className="artifact-panel__header">
              <span style={{ fontFamily: 'var(--font-serif-jp)' }}>素材観察</span>
              <span>観察</span>
            </div>
            <div className="artifact-tabs" role="tablist" aria-label="靴の細部">
              {INSPECTION_POINTS.map((point) => {
                const selected = point.key === activePoint.key
                return (
                  <button
                    key={point.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className="artifact-tab"
                    data-active={selected}
                    onClick={() => setActivePoint(point)}
                    onMouseEnter={() => setActivePoint(point)}
                  >
                    <span style={{ fontFamily: 'var(--font-serif-jp)' }}>{point.ja}</span>
                    <span>{point.en}</span>
                  </button>
                )
              })}
            </div>
            <div className="artifact-readout" role="tabpanel" aria-live="polite">
              <p style={{ fontFamily: 'var(--font-serif-jp)' }}>{activePoint.title}</p>
              <span>{activePoint.text}</span>
            </div>

            <div className="artifact-specs" aria-label="構造仕様">
              <span>第一標本 / 絆 野外靴</span>
              <dl>
                <div>
                  <dt>木型</dt>
                  <dd>日本一号</dd>
                </div>
                <div>
                  <dt>甲革</dt>
                  <dd>天然皮革</dd>
                </div>
                <div>
                  <dt>製法</dt>
                  <dd>底交換対応</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="reveal absolute bottom-10 left-6 flex items-center gap-3 md:left-10" style={{ transitionDelay: '260ms' }}>
        <span className="block h-12 w-px animate-pulse" style={{ background: 'currentColor', opacity: 0.4 }} />
        <span className="text-xs tracking-[0.25em] opacity-60" style={{ fontFamily: 'var(--font-serif-jp)' }}>
          スクロールして探索
        </span>
      </div>
    </Chapter>
  )
}
