import { useEffect, useState } from 'react'

/**
 * Tracks the user's reduced-motion preference.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false

    return window
      .matchMedia('(prefers-reduced-motion: reduce)')
      .matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    const handleChange = (
      event: MediaQueryListEvent
    ) => {
      setReduced(event.matches)
    }

    // Safari compatibility
    if (media.addEventListener) {
      media.addEventListener('change', handleChange)

      return () => {
        media.removeEventListener(
          'change',
          handleChange
        )
      }
    }

    media.addListener(handleChange)

    return () => {
      media.removeListener(handleChange)
    }
  }, [])

  return reduced
}

/**
 * Delays mounting expensive components (Three.js, WebGL, etc.)
 * until the first real user interaction.
 *
 * This keeps the initial bundle light and improves Lighthouse scores.
 */
export function useInteractionMount(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (mounted || typeof window === 'undefined') {
      return
    }

    const events = [
      'scroll',
      'wheel',
      'pointerdown',
      'touchstart',
      'keydown',
    ] as const

    let timeout: ReturnType<typeof setTimeout> | null = null

    const cleanupListeners = () => {
      events.forEach((event) => {
        window.removeEventListener(event, onInteract)
      })
    }

    const onInteract = () => {
      cleanupListeners()

      timeout = setTimeout(() => {
        setMounted(true)
      }, 300)
    }

    events.forEach((event) => {
      window.addEventListener(event, onInteract, {
        passive: true,
        once: true,
      })
    })

    return () => {
      cleanupListeners()

      if (timeout !== null) {
        clearTimeout(timeout)
      }
    }
  }, [mounted])

  return mounted
}
