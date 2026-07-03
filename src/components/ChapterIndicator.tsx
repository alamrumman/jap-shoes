import { useEffect, useState } from 'react'
import { onScroll, scrollState } from '../lib/scroll'

const MARKS = [
  { n: '01', kanji: '旅' },
  { n: '02', kanji: '和' },
  { n: '03', kanji: '匠' },
  { n: '04', kanji: '素' },
  { n: '05', kanji: '技' },
  { n: '06', kanji: '旅' },
  { n: '07', kanji: '集' },
  { n: '08', kanji: '伝' },
]

/** Fixed right-rail progress indicator — dots per chapter, current one highlighted. */
export function ChapterIndicator() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      raf = 0
      const idx = Math.round(scrollState.chapter)
      setActive((prev) => (prev === idx ? prev : Math.min(idx, MARKS.length - 1)))
    }
    const off = onScroll(() => {
      if (!raf) raf = requestAnimationFrame(tick)
    })
    return () => {
      off()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <aside
      aria-hidden
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
    >
      {MARKS.map((m, i) => {
        const on = i === active
        return (
          <div key={m.n} className="flex items-center gap-3">
            <span
              className="text-[0.6rem] tabular-nums transition-all duration-500"
              style={{ opacity: on ? 0.8 : 0, transform: on ? 'translateX(0)' : 'translateX(6px)', fontFamily: 'var(--font-ui)' }}
            >
              {m.n}
            </span>
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: on ? 7 : 5,
                height: on ? 7 : 5,
                background: 'currentColor',
                opacity: on ? 0.9 : 0.28,
              }}
            />
          </div>
        )
      })}
      <span className="mt-2 text-sm opacity-50" style={{ fontFamily: 'var(--font-serif-jp)' }}>
        {MARKS[active].kanji}
      </span>
    </aside>
  )
}
