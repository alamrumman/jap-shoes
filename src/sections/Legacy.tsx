import { Chapter } from '../components/Chapter'

export function Legacy() {
  return (
    <Chapter id="legacy" index="08 — 伝統" minVh={120}>
      <div className="mx-auto max-w-[650px] border-x border-current/10 px-6 text-center md:px-12">
        <span aria-hidden className="reveal block text-6xl opacity-80 md:text-7xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
          伝統
        </span>
        <h2 id="legacy-title" className="reveal mt-6 text-3xl leading-snug md:text-4xl" style={{ fontFamily: 'var(--font-editorial)', transitionDelay: '90ms' }}>
          季節ではなく、世代のために。
        </h2>
        <p className="reveal mt-8 text-base leading-loose opacity-80" style={{ transitionDelay: '160ms' }}>
          一足のブーツは、数十年にわたる献身の結晶です。KIZUNA
          は流行を追いません。時を超えて受け継がれる道具として、静かに、確かに作り続けます。
        </p>
      </div>
    </Chapter>
  )
}
