/**
 * Lightweight scroll store. A single mutable object bridges Lenis (which drives
 * smooth scrolling on the main thread) and the R3F render loop (demand-rendered).
 * Avoids React state churn — nothing here triggers re-renders.
 */
import { KEYFRAMES } from './sections'

export const scrollState = {
  /** Global progress across the whole document, 0 → 1. */
  progress: 0,
  /** Floating chapter index, e.g. 2.4 = 40% between chapter 2 and 3. */
  chapter: 0,
}

type Listener = () => void
const listeners = new Set<Listener>()

/** Subscribe to scroll changes (used to invalidate the demand render loop). */
export function onScroll(fn: Listener): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/** Called by the Lenis driver on every scroll frame. */
export function setProgress(p: number): void {
  const clamped = p < 0 ? 0 : p > 1 ? 1 : p
  scrollState.progress = clamped
  scrollState.chapter = clamped * (KEYFRAMES.length - 1)
  for (const fn of listeners) fn()
}
