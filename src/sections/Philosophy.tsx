import { Chapter } from '../components/Chapter'
import { Heading, Lead } from '../components/Editorial'

export function Philosophy() {
  return (
    <Chapter id="philosophy" index="02 — 哲学" kanji="和" kanjiClass="right-[2vw] top-[20vh] text-[42vw] md:text-[26vw]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.48fr)_minmax(18rem,0.32fr)]">
        <div>
          <Heading id="philosophy-title" ja="静けさの中の強さ" en="哲学" />
          <Lead>
            余白は、贅沢である。私たちは、必要のないものをすべて取り除き、素材と職人の手仕事だけを残しました。
            静かな確信こそが、真の強さです。
          </Lead>
          <p className="reveal mt-6 max-w-md text-sm leading-relaxed opacity-60" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', transitionDelay: '200ms' }}>
            削ぎ落とすことは、贅沢のかたちです。余計な装飾を離れたとき、
            素材と手仕事だけが静かに残ります。
          </p>
        </div>
        <aside className="reveal self-end border-l border-current/15 pl-6 text-sm leading-loose opacity-70 md:mb-8" style={{ transitionDelay: '260ms' }}>
          <p style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-2xl">和</p>
          <p className="mt-4">
            空間が静かであるほど、素材の声は深く届く。面の取り方も、間の置き方も、すべては調和のためにあります。
          </p>
        </aside>
      </div>
    </Chapter>
  )
}
