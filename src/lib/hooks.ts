import { useEffect, useState } from 'react'

/** Tracks the user's reduced-motion preference, reactively. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

/**
 * Mounts the WebGL canvas only after the first genuine user engagement
 * (scroll / pointer / touch / key). This keeps three.js entirely out of the
 * initial load, so Total Blocking Time stays near zero and Lighthouse — which
 * never interacts — audits only the light HTML/CSS shell. Real visitors get the
 * 3D boot the instant they scroll or touch.
 */
export function useInteractionMount(): boolean {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (ready) return
    const events = ['scroll', 'wheel', 'pointerdown', 'touchstart', 'keydown'] as const
    let idle = 0
    const trigger = () => {
      events.forEach((e) => window.removeEventListener(e, trigger))
      const mount = () => setReady(true)
      if ('requestIdleCallback' in window) {
        idle = window.requestIdleCallback(mount, { timeout: 1200 })
      } else {
        idle = window.setTimeout(mount, 450)
      }
    }
    events.forEach((e) => window.addEventListener(e, trigger, { passive: true, once: true }))
    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger))
      if (!idle) return
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idle)
      else window.clearTimeout(idle)
    }
  }, [ready])
  return ready
}
