import { Chapter } from '../components/Chapter'

export function Engineering() {
  return (
    <Chapter
      id="engineering"
      index="05 — 技術"
      kanji="耐久"
      kanjiClass="left-[2vw] top-[30vh] text-[34vw] leading-[0.8] md:text-[20vw]"
      minVh={140}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.42fr)_minmax(24rem,0.48fr)] md:items-end">
        <div>
        <h2
          id="engineering-title"
          className="reveal text-5xl leading-[0.98] md:text-8xl"
          style={{ fontFamily: 'var(--font-serif-jp)' }}
        >
          耐久性
        </h2>
        <p className="reveal mt-4 text-sm uppercase tracking-[0.4em] opacity-60" style={{ transitionDelay: '80ms' }}>
          耐えるための設計
        </p>
        <p className="reveal mt-8 max-w-sm text-sm leading-loose opacity-70" style={{ transitionDelay: '140ms' }}>
          低い視点で靴底を見つめ、石のように静かな背景の中で、機能と精度だけを語ります。
        </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
          {[
            ['防滑', 'グリップ', 'マルチディレクショナルなラグが、濡れた岩でも確かな一歩を。'],
            ['安定', '安定性', 'シャンク構造が足裏を支え、長い縦走でも疲れにくい。'],
            ['保護', '保護性', 'ラバーランドと補強トゥが、岩場から足を守ります。'],
          ].map(([ja, en, desc], i) => (
            <div key={en} className="reveal border-t border-current/15 pt-5" style={{ transitionDelay: `${180 + i * 90}ms` }}>
              <div className="flex items-baseline gap-2">
                <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-3xl">
                  {ja}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] opacity-50">{en}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed opacity-70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  )
}
