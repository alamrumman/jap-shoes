import { Suspense, lazy, useEffect } from 'react'
import { Hero } from '../sections/Hero'
import { Philosophy } from '../sections/Philosophy'
import { Craft } from '../sections/Craft'
import { Materials } from '../sections/Materials'
import { Engineering } from '../sections/Engineering'
import { Terrain } from '../sections/Terrain'
import { Collection } from '../sections/Collection'
import { Legacy } from '../sections/Legacy'
import { Footer } from '../components/Footer'
import { ChapterIndicator } from '../components/ChapterIndicator'
import { ScrollProgress } from '../components/ScrollProgress'
import { useScrollDriver } from '../lib/useScrollDriver'
import { useInteractionMount } from '../lib/hooks'
import { KEYFRAMES } from '../lib/sections'
import { onScroll, scrollState } from '../lib/scroll'

// The WebGL experience is code-split and mounted only after first paint,
// so the LCP is HTML text and the homepage bundle stays tiny.
const Experience = lazy(() => import('../three/Experience'))

/**
 * Snaps the page background + text colour to the nearest chapter and lets a CSS
 * transition smooth the change. Writing the cascading `--bg`/`--fg` root vars
 * only on chapter *boundaries* (≈8 times) — instead of every scroll frame —
 * avoids full-document style recalcs, which were the dominant main-thread cost.
 */
function useBackgroundDriver() {
  useEffect(() => {
    const root = document.documentElement
    let current = -1
    const apply = () => {
      const i = Math.round(scrollState.chapter)
      if (i === current) return
      current = i
      const kf = KEYFRAMES[Math.min(i, KEYFRAMES.length - 1)]
      root.style.setProperty('--bg', kf.bg)
      root.style.setProperty('--fg', kf.fg)
    }
    apply()
    const off = onScroll(apply)
    return () => {
      off()
      root.style.removeProperty('--bg')
      root.style.removeProperty('--fg')
    }
  }, [])
}

export default function Home() {
  const mountCanvas = useInteractionMount()
  useScrollDriver(true)
  useBackgroundDriver()

  return (
    <>
      {mountCanvas && (
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      )}

      {/* Fixed atmospheric grain + vignette over the whole journey (CSS only). */}
      <div className="tex-noise vignette pointer-events-none fixed inset-0 z-[5]" aria-hidden />

      <ScrollProgress />
      <ChapterIndicator />

      <main id="main" className="relative z-10">
        <Hero />
        <Philosophy />
        <Craft />
        <Materials />
        <Engineering />
        <Terrain />
        <Collection />
        <Legacy />
      </main>
      <Footer />
    </>
  )
}
