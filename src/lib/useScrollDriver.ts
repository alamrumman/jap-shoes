import { useEffect } from 'react'
import { setProgress } from './scroll'
import { useReducedMotion } from './hooks'

/**
 * Homepage scroll system, tuned for a near-zero initial JS cost:
 *  - Global progress is fed by the native scroll event (always on) so the 3D
 *    scene and background react immediately.
 *  - Reveal-on-scroll uses IntersectionObserver — no animation library.
 *  - Lenis smooth-scrolling is dynamically imported on the first wheel/touch,
 *    keeping it out of the critical bundle (and out of Lighthouse's load trace).
 */
export function useScrollDriver(enabled: boolean): void {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!enabled) return

    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    if (!window.location.hash) window.scrollTo(0, 0)

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()

    // Reveal editorial blocks as they enter — cheap, no dependencies.
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    // Lenis smooth scroll, loaded lazily on first engagement.
    let lenis: import('lenis').default | null = null
    let raf = 0
    let cancelled = false
    const startLenis = async () => {
      if (reduced || lenis || cancelled) return
      const { default: Lenis } = await import('lenis')
      if (cancelled) return
      lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 })
      lenis.on('scroll', update)
      const loop = (time: number) => {
        lenis?.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }
    const kick = () => {
      window.removeEventListener('wheel', kick)
      window.removeEventListener('touchstart', kick)
      void startLenis()
    }
    window.addEventListener('wheel', kick, { passive: true, once: true })
    window.addEventListener('touchstart', kick, { passive: true, once: true })

    return () => {
      cancelled = true
      window.removeEventListener('scroll', update)
      window.removeEventListener('wheel', kick)
      window.removeEventListener('touchstart', kick)
      io.disconnect()
      if (lenis) {
        lenis.destroy()
        cancelAnimationFrame(raf)
      }
    }
  }, [enabled, reduced])
}
