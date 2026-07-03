import { Chapter } from '../components/Chapter'
import { Heading } from '../components/Editorial'

const CALLOUTS = [
  ['天然皮革', '皮革', '水を弾き、時とともに深まる本革のアッパー。'],
  ['天然ゴム', '靴底', 'あらゆる地形を掴む、耐摩耗性のアウトソール。'],
  ['金属金具', '金具', '腐食に強い、鍛造のスピードフック。'],
  ['防水構造', '防水', '蒸れを逃し、雨を防ぐ透湿防水メンブレン。'],
]

export function Materials() {
  return (
    <Chapter
      id="materials"
      index="04 — 素材"
      kanji="素"
      kanjiClass="right-[3vw] top-[24vh] text-[40vw] md:text-[24vw]"
      minVh={150}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.36fr)_minmax(22rem,0.38fr)]">
        <div>
          <Heading id="materials-title" ja="素材" en="素材" />
          <p className="reveal mt-8 max-w-sm text-sm leading-loose opacity-65" style={{ transitionDelay: '160ms' }}>
            革、ゴム、金属、防水構造。それぞれの素材が静かに均衡し、一足の道具として結ばれます。
          </p>
        </div>
        <div className="space-y-8 md:pt-10">
          {CALLOUTS.map(([ja, en, desc], i) => (
            <div
              key={en}
              className="reveal material-callout"
              style={{ transitionDelay: `${120 + i * 90}ms` }}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-2xl">
                  {ja}
                </span>
                <span className="text-[0.62rem] uppercase tracking-[0.3em]" style={{ color: 'var(--color-bronze)' }}>
                  {en}
                </span>
              </div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed opacity-70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  )
}
