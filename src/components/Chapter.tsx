import type { ReactNode } from 'react'

interface ChapterProps {
  id: string
  index: string
  children: ReactNode
  /** Large faded background kanji. */
  kanji?: string
  kanjiClass?: string
  className?: string
  /** min-height in viewport units (Hero/Craft/Materials get more room). */
  minVh?: number
}

/**
 * A homepage chapter. The 3D boot lives on a fixed canvas behind these,
 * so chapters are transparent scroll containers with editorial content.
 */
export function Chapter({ id, index, children, kanji, kanjiClass = '', className = '', minVh = 100 }: ChapterProps) {
  return (
    <section
      id={id}
      className={`relative flex w-full flex-col justify-center ${className}`}
      style={{ minHeight: `${minVh}vh` }}
      aria-labelledby={`${id}-title`}
    >
      {kanji && (
        <span aria-hidden className={`kanji-motif ${kanjiClass}`} style={{ opacity: 0.04 }}>
          {kanji}
        </span>
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-8 text-xs tracking-[0.3em] opacity-40 md:right-10"
        style={{ fontFamily: 'var(--font-ui)' }}
      >
        {index}
      </span>
      <div className="chapter-inner relative z-10 mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10 md:py-24">{children}</div>
    </section>
  )
}
