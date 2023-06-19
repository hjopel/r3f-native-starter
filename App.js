import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { Environment } from '@react-three/drei/native'
import { Doggo } from './Doggo07-processed'
import hrdPath from './assets/rooitou_park_1k.hdr'

export default function App() {
  return (
    <Canvas gl={{ physicallyCorrectLights: true }} camera={{ position: [-6, 0, 16], fov: 36 }}>
      <color attach="background" args={[0xe2f4df]} />
      <ambientLight />
      <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
      <directionalLight intensity={0.8} position={[-6, 2, 2]} />
      <Suspense>
        <Environment files={hrdPath} />
        <Doggo />
      </Suspense>
    </Canvas>
  )
}
