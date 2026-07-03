import { useEffect, type ReactNode } from 'react'

/**
 * Wrapper for non-home routes. Sets the page theme (drives body + nav colours)
 * and provides consistent top spacing below the fixed nav.
 */
export function PageShell({
  bg = '#f5f2ec',
  fg = '#2a2622',
  dark = false,
  children,
}: {
  bg?: string
  fg?: string
  dark?: boolean
  children: ReactNode
}) {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg', bg)
    root.style.setProperty('--fg', fg)
    root.style.setProperty('color-scheme', dark ? 'dark' : 'light')
    return () => {
      root.style.removeProperty('--bg')
      root.style.removeProperty('--fg')
      root.style.removeProperty('color-scheme')
    }
  }, [bg, fg, dark])

  // Reveal-on-scroll for `.reveal` elements without loading GSAP on these routes.
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('#main .reveal')
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main
      id="main"
      className="tex-paper relative min-h-screen"
      style={{ backgroundColor: bg, color: fg }}
    >
      {children}
    </main>
  )
}
