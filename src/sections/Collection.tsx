import { Chapter } from '../components/Chapter'
import { Heading } from '../components/Editorial'

const EDITIONS = [
  ['黒', '黒の標本', '漆黒のフルグレイン。都市と山の境界を歩く。'],
  ['砂', '砂の標本', '砂丘の色。乾いた大地に溶け込む一足。'],
  ['革', '革の標本', '素の革。使い込むほどに手に馴染む定番。'],
]

export function Collection() {
  return (
    <Chapter id="collection" index="07 — コレクション" minVh={120}>
      <div className="mx-auto max-w-[44rem] text-center">
        <Heading id="collection-title" ja="コレクション" en="標本群" />
        <p className="reveal mt-8 text-sm leading-loose opacity-65" style={{ transitionDelay: '160ms' }}>
          三つの素材研究を、静かな展示物として並べます。価格ではなく、形と表面だけを見つめるための部屋です。
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {EDITIONS.map(([ja, en, desc], i) => (
          <article
            key={en}
            className="reveal flex flex-col items-center text-center"
            style={{ transitionDelay: `${i * 110}ms` }}
          >
            <div className="edition-plinth mb-7" aria-hidden />
            <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-5xl">
              {ja}
            </span>
            <span className="mt-3 text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: 'var(--color-bronze)' }}>
              {en}
            </span>
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed opacity-70">{desc}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 text-center">
        <a
          href="/about"
          className="reveal quiet-link group inline-flex items-center gap-3 text-sm tracking-[0.2em]"
        >
          <span style={{ fontFamily: 'var(--font-serif-jp)' }}>伝統を見る</span>
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1" style={{ color: 'var(--color-bronze)' }}>
            →
          </span>
        </a>
      </div>
    </Chapter>
  )
}
