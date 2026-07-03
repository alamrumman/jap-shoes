import { Chapter } from '../components/Chapter'
import { Heading, Lead } from '../components/Editorial'

export function Craft() {
  return (
    <Chapter
      id="craft"
      index="03 — クラフト"
      kanji="匠"
      kanjiClass="left-[1vw] bottom-[8vh] text-[44vw] md:text-[28vw]"
      minVh={150}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.46fr)_minmax(24rem,0.42fr)]">
        <div className="hidden border-l border-current/15 pl-6 md:block md:self-end">
          <p className="reveal text-xs tracking-[0.34em] opacity-55">工房の細部</p>
          <p className="reveal mt-5 max-w-xs text-sm leading-loose opacity-65" style={{ transitionDelay: '120ms' }}>
            革の銀面、縫い目の張力、金具の角度、そして天然皮革の重みまでを静かに見つめます。
          </p>
        </div>
        <div>
          <Heading id="craft-title" ja="匠の手仕事" en="クラフト" />
          <Lead>
            一針、一針。フルグレインレザーに刻まれるステッチは、機械には再現できない呼吸を持っています。
            傷は欠点ではなく、時とともに深まる表情になります。
          </Lead>
          <ul className="reveal mt-8 space-y-3 text-sm tracking-wide opacity-80" style={{ transitionDelay: '220ms' }}>
            {[
              ['天然皮革', '深い艶を持つ革'],
              ['手縫いステッチ', '張力を整えた縫製'],
              ['金属金具', '鍛造された金具'],
              ['蝋引きの紐', '耐久性のある紐'],
            ].map(([ja, en]) => (
              <li key={en} className="flex items-baseline gap-4 border-t border-current/15 pt-3">
                <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-base">
                  {ja}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] opacity-60">{en}</span>
              </li>
            ))}
          </ul>
          <p className="reveal mt-8 text-sm opacity-60" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', transitionDelay: '300ms' }}>
            「精度の中に、美しさが宿る。」
          </p>
        </div>
      </div>
    </Chapter>
  )
}
