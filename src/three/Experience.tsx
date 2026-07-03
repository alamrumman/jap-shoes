import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { Boot } from './Boot'
import { KEYFRAMES } from '../lib/sections'
import { scrollState, onScroll } from '../lib/scroll'

const _target = new THREE.Vector3()
const _colA = new THREE.Color()
const _colB = new THREE.Color()

/** Drives camera, lighting, environment and the boot from scroll progress. */
function SceneDriver({ compact }: { compact: boolean }) {
  const { camera, invalidate } = useThree()
  const keyRef = useRef<THREE.DirectionalLight>(null)
  const ambientRef = useRef<THREE.AmbientLight>(null)
  const bootRef = useRef<THREE.Group>(null)

  useEffect(() => onScroll(() => invalidate()), [invalidate])

  useFrame((state, delta) => {
    const chapter = scrollState.chapter
    const i = Math.min(Math.floor(chapter), KEYFRAMES.length - 2)
    const t = THREE.MathUtils.clamp(chapter - i, 0, 1)
    const a = KEYFRAMES[i]
    const b = KEYFRAMES[i + 1]
    const L = THREE.MathUtils.lerp

    // Camera target.
    _target.set(
      L(a.camTarget[0], b.camTarget[0], t),
      L(a.camTarget[1], b.camTarget[1], t),
      L(a.camTarget[2], b.camTarget[2], t),
    )

    // Camera position, then dolly back on narrow viewports so the boot never
    // dominates a phone screen. Distance from the target is scaled by an
    // aspect-driven factor (portrait → further away → smaller boot).
    const px = L(a.camPos[0], b.camPos[0], t)
    const py = L(a.camPos[1], b.camPos[1], t)
    const pz = L(a.camPos[2], b.camPos[2], t)
    const aspect = state.size.width / state.size.height
    const zoom = aspect >= 1.3 ? 1 : L(1, 1.85, THREE.MathUtils.clamp((1.3 - aspect) / 0.85, 0, 1))
    camera.position.set(
      _target.x + (px - _target.x) * zoom,
      _target.y + (py - _target.y) * zoom,
      _target.z + (pz - _target.z) * zoom,
    )
    camera.lookAt(_target)
    const cam = camera as THREE.PerspectiveCamera
    const fov = L(a.fov, b.fov, t)
    if (Math.abs(cam.fov - fov) > 0.001) {
      cam.fov = fov
      cam.updateProjectionMatrix()
    }

    // Lighting.
    if (keyRef.current) {
      keyRef.current.intensity = L(a.keyIntensity, b.keyIntensity, t)
      _colA.set(a.keyColor)
      _colB.set(b.keyColor)
      keyRef.current.color.copy(_colA.lerp(_colB, t))
    }
    if (ambientRef.current) ambientRef.current.intensity = L(a.ambient, b.ambient, t)

    // Boot rotation + footer fade.
    if (bootRef.current) {
      bootRef.current.rotation.y = L(a.bootRotY, b.bootRotY, t)
      const mat = bootRef.current.userData.material as THREE.MeshStandardMaterial | undefined
      if (mat) mat.opacity = L(a.bootOpacity, b.bootOpacity, t)
    }

    void delta
  })

  return (
    <>
      {/* Soft studio lighting — no cubemap/HDR, so mount cost stays low. */}
      <ambientLight ref={ambientRef} intensity={0.4} />
      <hemisphereLight args={['#fff3e0', '#3b352d', 0.6]} />
      <directionalLight
        ref={keyRef}
        position={[-4, 5, 4]}
        intensity={1.25}
        castShadow
        shadow-mapSize={compact ? [512, 512] : [1024, 1024]}
        shadow-bias={-0.0004}
      />
      <directionalLight position={[5, 3, -2]} intensity={0.35} color="#ffffff" />
      <directionalLight position={[0, 2.5, -5]} intensity={0.5} color="#e8ecf2" />
      <Boot groupRef={bootRef} />
      <ContactShadows
        frames={1}
        position={[0, 0.001, 0]}
        opacity={0.35}
        scale={6}
        blur={2.6}
        far={3}
        resolution={compact ? 256 : 512}
        color="#1a140e"
      />
    </>
  )
}

export default function Experience() {
  const compact = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  const dpr: [number, number] = compact ? [0.85, 1.15] : [1, 1.5]

  return (
    <Canvas
      className="!fixed inset-0"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      frameloop="demand"
      dpr={dpr}
      gl={{ antialias: !compact, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 1.2, 5.8], fov: 28, near: 0.1, far: 20 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.1
      }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <SceneDriver compact={compact} />
      </Suspense>
    </Canvas>
  )
}
