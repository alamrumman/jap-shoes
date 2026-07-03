import { Chapter } from '../components/Chapter'

export function Terrain() {
  return (
    <Chapter id="terrain" index="06 — 旅" minVh={120} className="overflow-hidden">
      {/* CSS fog — radial overlays, no images or particles. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(60% 40% at 30% 60%, rgba(231,226,218,0.55), transparent 70%), radial-gradient(50% 45% at 75% 45%, rgba(216,212,206,0.5), transparent 72%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-[44rem] text-center">
        <h2 id="terrain-title" className="reveal text-7xl md:text-9xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
          旅
        </h2>
        <p className="reveal mt-6 text-lg tracking-[0.2em] opacity-70" style={{ fontFamily: 'var(--font-serif-jp)', transitionDelay: '90ms' }}>
          どこまでも
        </p>
        <p className="reveal mt-2 text-xs uppercase tracking-[0.4em] opacity-50" style={{ transitionDelay: '160ms' }}>
          すべての道は、ここから始まる
        </p>
        <span className="reveal mx-auto mt-10 block h-px w-24 opacity-40" style={{ background: 'var(--color-bronze)', transitionDelay: '220ms' }} />
      </div>
    </Chapter>
  )
}
