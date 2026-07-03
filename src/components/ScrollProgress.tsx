import { useEffect, useRef } from 'react'
import { onScroll, scrollState } from '../lib/scroll'

/** Thin bronze progress line at the very top of the viewport. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let raf = 0
    const paint = () => {
      raf = 0
      if (ref.current) ref.current.style.transform = `scaleX(${scrollState.progress})`
    }
    const off = onScroll(() => {
      if (!raf) raf = requestAnimationFrame(paint)
    })
    paint()
    return () => {
      off()
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden>
      <div
        ref={ref}
        className="h-full origin-left"
        style={{ background: 'var(--color-bronze)', transform: 'scaleX(0)', opacity: 0.8 }}
      />
    </div>
  )
}
