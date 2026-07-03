import { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

/**
 * The LOWA-derived heritage boot — the permanent protagonist of the exhibition.
 * Geometry is Draco-compressed (~105KB); PBR maps are 1K WebP.
 * The mesh is normalised to a consistent height and stood on the floor (y=0).
 */
export function Boot({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const { scene } = useGLTF('/boot/boot.glb', true)
  const [albedo, normal, rough, ao] = useTexture([
    '/boot/albedo.webp',
    '/boot/normal.webp',
    '/boot/rough.webp',
    '/boot/ao.webp',
  ])

  const boot = useMemo(() => {
    const root = scene.clone(true)
    albedo.colorSpace = THREE.SRGBColorSpace
    albedo.anisotropy = 4
    ;[albedo, normal, rough, ao].forEach((t) => {
      t.flipY = false
      t.wrapS = t.wrapT = THREE.RepeatWrapping
    })

    const material = new THREE.MeshStandardMaterial({
      map: albedo,
      normalMap: normal,
      roughnessMap: rough,
      aoMap: ao,
      roughness: 1,
      metalness: 0,
      aoMapIntensity: 0.9,
      transparent: true,
      opacity: 1,
    })

    root.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const geo = mesh.geometry
        // aoMap requires a second UV set; reuse the primary UVs.
        if (geo.attributes.uv && !geo.attributes.uv2) {
          geo.setAttribute('uv2', geo.attributes.uv)
        }
        mesh.material = material
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })

    // Normalise: centre on origin, scale to ~1.6 units tall, stand on floor.
    const box = new THREE.Box3().setFromObject(root)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    const scale = 1.6 / size.y
    root.scale.setScalar(scale)
    root.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale)

    return { root, material }
  }, [scene, albedo, normal, rough, ao])

  const matRef = useRef(boot.material)
  matRef.current = boot.material
  // Expose material so the controller can fade opacity in the footer.
  useEffect(() => {
    const g = groupRef.current
    if (g) g.userData.material = boot.material
  }, [boot, groupRef])

  return (
    <group ref={groupRef}>
      <primitive object={boot.root} />
    </group>
  )
}

useGLTF.preload('/boot/boot.glb', true)
