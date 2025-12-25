// Interior Furniture Components for all house types

interface FurnitureProps {
  isWireframe: boolean;
  isXRayMode: boolean;
}

// Living Room Furniture
export function LivingRoom({ isWireframe, isXRayMode, position }: FurnitureProps & { position: [number, number, number] }) {
  const opacity = isXRayMode ? 1 : 0;
  
  return (
    <group position={position}>
      {/* Sofa */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.8, 0.6, 0.8]} />
        <meshStandardMaterial 
          color="#4a4a4a" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.7} 
        />
      </mesh>
      
      {/* Sofa Back */}
      <mesh position={[0, 0.7, -0.3]} castShadow>
        <boxGeometry args={[1.8, 0.6, 0.2]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.7} 
        />
      </mesh>
      
      {/* Coffee Table */}
      <mesh position={[0, 0.25, 0.8]} castShadow>
        <boxGeometry args={[1, 0.05, 0.6]} />
        <meshStandardMaterial 
          color="#8b6914" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.5} 
        />
      </mesh>
      
      {/* TV Stand */}
      <mesh position={[0, 0.3, -1.5]} castShadow>
        <boxGeometry args={[1.5, 0.6, 0.4]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.4} 
        />
      </mesh>
      
      {/* TV Screen */}
      <mesh position={[0, 0.8, -1.48]} castShadow>
        <boxGeometry args={[1.2, 0.7, 0.05]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.2} 
          metalness={0.8} 
        />
      </mesh>
    </group>
  );
}

// Kitchen Furniture
export function Kitchen({ isWireframe, isXRayMode, position }: FurnitureProps & { position: [number, number, number] }) {
  const opacity = isXRayMode ? 1 : 0;
  
  return (
    <group position={position}>
      {/* Kitchen Counter */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <boxGeometry args={[2, 0.9, 0.6]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.3} 
        />
      </mesh>
      
      {/* Countertop */}
      <mesh position={[0, 0.91, 0]} castShadow>
        <boxGeometry args={[2.1, 0.05, 0.65]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.2} 
          metalness={0.5} 
        />
      </mesh>
      
      {/* Refrigerator */}
      <mesh position={[-1.2, 0.9, 0]} castShadow>
        <boxGeometry args={[0.7, 1.8, 0.7]} />
        <meshStandardMaterial 
          color="#c0c0c0" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.3} 
          metalness={0.7} 
        />
      </mesh>
      
      {/* Dining Table */}
      <mesh position={[0, 0.4, 1.5]} castShadow>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial 
          color="#8b6914" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.5} 
        />
      </mesh>
      
      {/* Dining Chairs */}
      {[[-0.5, 1.9], [0.5, 1.9], [-0.5, 1.1], [0.5, 1.1]].map((pos, i) => (
        <group key={i} position={[pos[0], 0.25, pos[1]]}>
          <mesh castShadow>
            <boxGeometry args={[0.4, 0.05, 0.4]} />
            <meshStandardMaterial 
              color="#654321" 
              wireframe={isWireframe} 
              transparent 
              opacity={opacity}
              roughness={0.6} 
            />
          </mesh>
          <mesh position={[0, 0.25, -0.15]} castShadow>
            <boxGeometry args={[0.4, 0.4, 0.05]} />
            <meshStandardMaterial 
              color="#654321" 
              wireframe={isWireframe} 
              transparent 
              opacity={opacity}
              roughness={0.6} 
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Bedroom Furniture
export function Bedroom({ isWireframe, isXRayMode, position }: FurnitureProps & { position: [number, number, number] }) {
  const opacity = isXRayMode ? 1 : 0;
  
  return (
    <group position={position}>
      {/* Bed Frame */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.6, 0.6, 2]} />
        <meshStandardMaterial 
          color="#8b6914" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.6} 
        />
      </mesh>
      
      {/* Mattress */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <boxGeometry args={[1.5, 0.2, 1.9]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.8} 
        />
      </mesh>
      
      {/* Headboard */}
      <mesh position={[0, 1, -0.95]} castShadow>
        <boxGeometry args={[1.6, 0.8, 0.1]} />
        <meshStandardMaterial 
          color="#6b5d52" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.7} 
        />
      </mesh>
      
      {/* Nightstands */}
      {[-1, 1].map((x, i) => (
        <mesh key={i} position={[x, 0.25, 0]} castShadow>
          <boxGeometry args={[0.4, 0.5, 0.4]} />
          <meshStandardMaterial 
            color="#8b6914" 
            wireframe={isWireframe} 
            transparent 
            opacity={opacity}
            roughness={0.6} 
          />
        </mesh>
      ))}
      
      {/* Wardrobe */}
      <mesh position={[0, 1, 1.5]} castShadow>
        <boxGeometry args={[1.8, 2, 0.6]} />
        <meshStandardMaterial 
          color="#6b5d52" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.5} 
        />
      </mesh>
    </group>
  );
}

// Bathroom Furniture
export function Bathroom({ isWireframe, isXRayMode, position }: FurnitureProps & { position: [number, number, number] }) {
  const opacity = isXRayMode ? 1 : 0;
  
  return (
    <group position={position}>
      {/* Sink */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.5]} />
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.2} 
        />
      </mesh>
      
      {/* Mirror */}
      <mesh position={[0, 1, -0.26]} castShadow>
        <boxGeometry args={[0.7, 0.8, 0.02]} />
        <meshStandardMaterial 
          color="#87ceeb" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity * 0.5}
          roughness={0.1} 
          metalness={0.9} 
        />
      </mesh>
      
      {/* Toilet */}
      <mesh position={[-0.8, 0.2, 0]} castShadow>
        <boxGeometry args={[0.4, 0.4, 0.6]} />
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.2} 
        />
      </mesh>
      
      {/* Bathtub */}
      <mesh position={[0.8, 0.3, 0]} castShadow>
        <boxGeometry args={[0.8, 0.6, 1.6]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.2} 
        />
      </mesh>
    </group>
  );
}

// Interior Walls and Rooms
export function InteriorWalls({ isWireframe, isXRayMode }: FurnitureProps) {
  const opacity = isXRayMode ? 0.3 : 0;
  
  return (
    <group>
      {/* Room Divider Walls */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 2, 4]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.8} 
        />
      </mesh>
      
      {/* Floor Tiles */}
      <mesh position={[0, 0.01, 0]} receiveShadow>
        <boxGeometry args={[4, 0.02, 4]} />
        <meshStandardMaterial 
          color="#e0e0e0" 
          wireframe={isWireframe} 
          transparent 
          opacity={opacity}
          roughness={0.6} 
        />
      </mesh>
    </group>
  );
}
