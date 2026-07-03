import type { ReactNode } from 'react'

export function Heading({
  id,
  ja,
  en,
  className = '',
}: {
  id?: string
  ja: string
  en: string
  className?: string
}) {
  return (
    <div className={className}>
      <h2 id={id} className="reveal text-4xl leading-tight md:text-6xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
        {ja}
      </h2>
      <p
        className="reveal mt-3 text-sm uppercase tracking-[0.35em] opacity-60"
        style={{ fontFamily: 'var(--font-ui)', transitionDelay: '80ms' }}
      >
        {en}
      </p>
      <span className="reveal accent-rule" aria-hidden />
    </div>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p
      className="reveal mt-8 max-w-[34rem] text-base leading-loose md:text-lg"
      style={{ color: 'currentColor', opacity: 0.85, transitionDelay: '140ms' }}
    >
      {children}
    </p>
  )
}
