/**
 * KIZUNA — single source of truth for the scroll-driven journey.
 * Both the HTML chapters and the persistent 3D scene read these keyframes,
 * so the camera, lighting and background stay perfectly in sync.
 */

export interface Keyframe {
  id: string
  /** Body/canvas background colour for this chapter. */
  bg: string
  /** Text colour appropriate for the background. */
  fg: string
  /** Camera position [x, y, z]. */
  camPos: [number, number, number]
  /** Camera look-at target [x, y, z]. */
  camTarget: [number, number, number]
  fov: number
  /** Key light. */
  keyColor: string
  keyIntensity: number
  /** Ambient fill. */
  ambient: number
  /** Procedural environment intensity. */
  env: number
  /** Boot rotation around Y (radians). */
  bootRotY: number
  /** Boot opacity (footer fades it out). */
  bootOpacity: number
}

// Chapters in scroll order. index 0 = Hero … last = Footer.
export const KEYFRAMES: Keyframe[] = [
  {
    id: 'hero',
    bg: '#f5f2ec', fg: '#2a2622',
    camPos: [0, 1.2, 5.8], camTarget: [0, 0.9, 0], fov: 28,
    keyColor: '#fff1dc', keyIntensity: 1.25, ambient: 0.38, env: 0.8,
    bootRotY: -0.35, bootOpacity: 1,
  },
  {
    id: 'philosophy',
    bg: '#efe8df', fg: '#2a2622',
    camPos: [1.35, 1.2, 5.3], camTarget: [0, 0.9, 0], fov: 27,
    keyColor: '#ffe6c0', keyIntensity: 1.35, ambient: 0.4, env: 0.85,
    bootRotY: -0.2, bootOpacity: 1,
  },
  {
    id: 'craft',
    bg: '#73543e', fg: '#f2e8dc',
    camPos: [0.55, 1.05, 3.35], camTarget: [0.1, 0.95, 0], fov: 30,
    keyColor: '#ffca85', keyIntensity: 1.6, ambient: 0.28, env: 0.7,
    bootRotY: 0.15, bootOpacity: 1,
  },
  {
    id: 'materials',
    bg: '#1b1a1a', fg: '#ede7dd',
    camPos: [0.85, 1.3, 4.35], camTarget: [0, 0.85, 0], fov: 26,
    keyColor: '#ffffff', keyIntensity: 2.6, ambient: 0.12, env: 0.4,
    bootRotY: 0.7, bootOpacity: 1,
  },
  {
    id: 'engineering',
    bg: '#454441', fg: '#ede7dd',
    camPos: [0, 0.62, 3.85], camTarget: [0, 0.45, 0], fov: 24,
    keyColor: '#eef1f6', keyIntensity: 1.3, ambient: 0.26, env: 0.5,
    bootRotY: 0.55, bootOpacity: 1,
  },
  {
    id: 'terrain',
    bg: '#d8d4ce', fg: '#2a2622',
    camPos: [-0.55, 1.0, 4.8], camTarget: [0, 0.85, 0], fov: 30,
    keyColor: '#f4f1ea', keyIntensity: 1.15, ambient: 0.45, env: 0.9,
    bootRotY: 0.82, bootOpacity: 1,
  },
  {
    id: 'collection',
    bg: '#ddd7cf', fg: '#2a2622',
    camPos: [0, 1.3, 6.4], camTarget: [0, 0.85, 0], fov: 30,
    keyColor: '#ffffff', keyIntensity: 1.15, ambient: 0.5, env: 0.85,
    bootRotY: 0.4, bootOpacity: 1,
  },
  {
    id: 'legacy',
    bg: '#f4efe8', fg: '#2a2622',
    camPos: [0, 1.2, 5.5], camTarget: [0, 0.9, 0], fov: 30,
    keyColor: '#ffe7c8', keyIntensity: 1.2, ambient: 0.42, env: 0.85,
    bootRotY: 0.1, bootOpacity: 1,
  },
  {
    id: 'footer',
    bg: '#161616', fg: '#b7afa2',
    camPos: [0, 1.2, 5.6], camTarget: [0, 0.9, 0], fov: 30,
    keyColor: '#cfd6df', keyIntensity: 0.5, ambient: 0.16, env: 0.3,
    bootRotY: 0.1, bootOpacity: 0.1,
  },
]

/** Navigation labels. */
export const NAV_LINKS = [
  { href: '/#hero', ja: 'ホーム' },
  { href: '/#philosophy', ja: '哲学' },
  { href: '/#craft', ja: 'クラフト' },
  { href: '/#materials', ja: '素材' },
  { href: '/#engineering', ja: '技術' },
  { href: '/#collection', ja: 'コレクション' },
  { href: '/about', ja: '会社概要' },
  { href: '/contact', ja: 'お問い合わせ' },
]
