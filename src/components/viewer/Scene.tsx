import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import HouseModel from './HouseModel';

interface SceneProps {
  modelUrl: string;
  isDayMode: boolean;
  isWireframe: boolean;
  unitId?: string;
  isXRayMode: boolean;
}

export default function Scene({ modelUrl, isDayMode, isWireframe, unitId, isXRayMode }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      className="bg-gradient-to-b from-sky-200 to-sky-50"
    >
      <PerspectiveCamera makeDefault position={[10, 5, 10]} fov={45} />
      
      {/* Lighting */}
      <ambientLight intensity={isDayMode ? 0.6 : 0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={isDayMode ? 1.5 : 0.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-10, 10, -10]} intensity={isDayMode ? 0.5 : 0.3} />
      
      {/* Environment */}
      <Environment preset={isDayMode ? 'sunset' : 'night'} />
      
      {/* Model */}
      <Suspense fallback={null}>
        <HouseModel 
          key={`${unitId}-${isXRayMode}`}
          modelUrl={modelUrl} 
          isWireframe={isWireframe} 
          unitId={unitId} 
          isXRayMode={isXRayMode} 
        />
      </Suspense>
      
      {/* Ground Shadow */}
      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4}
      />
      
      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={30}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
