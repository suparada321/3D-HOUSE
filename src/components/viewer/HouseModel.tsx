import { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';
import * as THREE from 'three';
import { LivingRoom, Kitchen, Bedroom, Bathroom } from './InteriorFurniture';

interface HouseModelProps {
  modelUrl: string;
  isWireframe: boolean;
  unitId?: string;
  isXRayMode: boolean;
}

// Type A: Modern White House with Pool (4.5M)
function TypeAHouse({ isWireframe, isXRayMode }: { isWireframe: boolean; isXRayMode: boolean }) {
  const wallOpacity = isXRayMode ? 0.15 : 1;
  
  return (
    <group position={[0, 0, 0]}>
      {/* Ground - Grass */}
      <mesh position={[0, 0.01, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#4a7c3a" wireframe={isWireframe} roughness={0.9} />
      </mesh>

      {/* Foundation & Pool Deck - Concrete */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[12, 0.1, 8]} />
        <meshStandardMaterial color="#d4d4d4" wireframe={isWireframe} roughness={0.7} />
      </mesh>

      {/* Main House - First Floor */}
      <mesh position={[-2, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[5, 3, 6]} />
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe={isWireframe} 
          roughness={0.2} 
          metalness={0.3}
          transparent={isXRayMode}
          opacity={wallOpacity}
        />
      </mesh>
      
      {/* INTERIOR FURNITURE - First Floor */}
      <LivingRoom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-2, 0.1, -0.5]} />
      <Kitchen isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-2, 0.1, 2]} />

      {/* Window Frames - First Floor */}
      {[-3, -1, 1, 3].map((z, i) => (
        <mesh key={i} position={[-2, 1.5, z]} castShadow>
          <boxGeometry args={[0.05, 2.5, 0.8]} />
          <meshStandardMaterial color="#2a2a2a" wireframe={isWireframe} roughness={0.3} metalness={0.7} />
        </mesh>
      ))}

      {/* Second Floor - Offset Modern */}
      <mesh position={[-1.5, 3.8, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[4, 2.5, 5]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          wireframe={isWireframe} 
          roughness={0.2} 
          metalness={0.3}
          transparent={isXRayMode}
          opacity={wallOpacity}
        />
      </mesh>
      
      {/* INTERIOR FURNITURE - Second Floor */}
      <Bedroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-1.5, 3.1, 0.5]} />
      <Bathroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-1.5, 3.1, -1.5]} />

      {/* Balcony Railing */}
      <mesh position={[-1.5, 4.5, 3.1]} castShadow>
        <boxGeometry args={[3.5, 0.8, 0.05]} />
        <meshStandardMaterial color="#888888" wireframe={isWireframe} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Flat Roof */}
      <mesh position={[-1.5, 5.2, 0.5]} castShadow>
        <boxGeometry args={[4.2, 0.2, 5.2]} />
        <meshStandardMaterial color="#b0b0b0" wireframe={isWireframe} roughness={0.4} />
      </mesh>

      {/* Large Glass Windows */}
      <mesh position={[-2, 1.5, 3.01]} castShadow>
        <boxGeometry args={[4, 2.5, 0.05]} />
        <meshStandardMaterial color="#87ceeb" wireframe={isWireframe} transparent opacity={0.3} roughness={0.05} metalness={0.95} />
      </mesh>

      <mesh position={[-1.5, 3.8, 3.01]} castShadow>
        <boxGeometry args={[3, 2, 0.05]} />
        <meshStandardMaterial color="#87ceeb" wireframe={isWireframe} transparent opacity={0.3} roughness={0.05} metalness={0.95} />
      </mesh>

      {/* Modern Entrance Door */}
      <mesh position={[-3.5, 1.2, 3.01]} castShadow>
        <boxGeometry args={[1.2, 2.4, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" wireframe={isWireframe} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Door Handle */}
      <mesh position={[-3.2, 1.2, 3.07]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.15, 8]} />
        <meshStandardMaterial color="#d4af37" wireframe={isWireframe} roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Swimming Pool - Water */}
      <mesh position={[3, -0.1, 0]} receiveShadow>
        <boxGeometry args={[3, 0.5, 4]} />
        <meshStandardMaterial 
          color="#00bfff" 
          wireframe={isWireframe} 
          transparent 
          opacity={0.8} 
          roughness={0.05} 
          metalness={0.3} 
        />
      </mesh>

      {/* Pool Tiles Border */}
      <mesh position={[3, 0.06, 0]} receiveShadow>
        <boxGeometry args={[5.4, 0.02, 4.4]} />
        <meshStandardMaterial color="#e8e8e8" wireframe={isWireframe} roughness={0.4} />
      </mesh>
      
      {/* Pool Bottom Tiles */}
      <mesh position={[3, -0.59, 0]} receiveShadow>
        <boxGeometry args={[4.9, 0.02, 3.9]} />
        <meshStandardMaterial color="#4a9fb5" wireframe={isWireframe} roughness={0.3} />
      </mesh>

      {/* Pool Steps */}
      {[0, 0.2, 0.4].map((y, i) => (
        <mesh key={i} position={[1, -0.2 + y, 1.5]} receiveShadow>
          <boxGeometry args={[0.8, 0.15, 0.6]} />
          <meshStandardMaterial color="#b0c4de" wireframe={isWireframe} roughness={0.5} />
        </mesh>
      ))}

      {/* Pool Lounge Chairs */}
      {[1.5, -1.5].map((z, i) => (
        <group key={i} position={[5, 0.15, z]}>
          <mesh castShadow>
            <boxGeometry args={[0.6, 0.1, 1.5]} />
            <meshStandardMaterial color="#4a90a4" wireframe={isWireframe} roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.3, -0.5]} castShadow>
            <boxGeometry args={[0.6, 0.5, 0.1]} />
            <meshStandardMaterial color="#4a90a4" wireframe={isWireframe} roughness={0.6} />
          </mesh>
        </group>
      ))}

      {/* Modern Pergola */}
      <mesh position={[-2, 4.8, -3.5]} castShadow>
        <boxGeometry args={[4, 0.15, 1.5]} />
        <meshStandardMaterial color="#6b5d52" wireframe={isWireframe} roughness={0.6} />
      </mesh>

      {/* Pergola Beams */}
      {[-3.5, -2.5, -1.5, -0.5].map((x, i) => (
        <mesh key={i} position={[x, 4.8, -3.5]} castShadow>
          <boxGeometry args={[0.1, 0.15, 1.5]} />
          <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}

      {/* Support Pillars */}
      {[-3.5, -0.5].map((x, i) => (
        <mesh key={i} position={[x, 2.5, -3.5]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 5, 12]} />
          <meshStandardMaterial color="#ffffff" wireframe={isWireframe} roughness={0.3} />
        </mesh>
      ))}

      {/* Outdoor Lighting */}
      {[-4, 0].map((x, i) => (
        <group key={i} position={[x, 3, -3.5]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
            <meshStandardMaterial color="#2a2a2a" wireframe={isWireframe} roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.25, 0]} castShadow>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshStandardMaterial color="#ffffcc" wireframe={isWireframe} emissive="#ffff88" emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}

      {/* Beautiful Trees (ต้นไม้สวยๆ) */}
      {[
        [5.5, 0, 3],
        [-5.5, 0, 3],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Tree Trunk */}
          <mesh position={[0, 1.5, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.25, 3, 12]} />
            <meshStandardMaterial color="#654321" wireframe={isWireframe} roughness={0.9} />
          </mesh>
          {/* Main Foliage */}
          <mesh position={[0, 3.3, 0]} castShadow>
            <sphereGeometry args={[1, 12, 12]} />
            <meshStandardMaterial color="#2d5016" wireframe={isWireframe} roughness={0.8} />
          </mesh>
          {/* Additional Foliage Layers */}
          {[
            [0.5, 3.1, 0.3],
            [-0.5, 3.1, -0.3],
            [0.3, 3.5, -0.4],
            [-0.3, 3.5, 0.4],
          ].map((fpos, j) => (
            <mesh key={j} position={fpos as [number, number, number]} castShadow>
              <sphereGeometry args={[0.6, 10, 10]} />
              <meshStandardMaterial color="#3a6a2a" wireframe={isWireframe} roughness={0.8} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Garden Bushes */}
      {[
        [-5, 0.2, 1],
        [-5, 0.2, -1],
        [6, 0.2, -2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <sphereGeometry args={[0.4, 8, 8]} />
          <meshStandardMaterial color="#3a5a2a" wireframe={isWireframe} roughness={0.9} />
        </mesh>
      ))}

      {/* Fence */}
      {[-8, 8].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0]} castShadow>
          <boxGeometry args={[0.1, 1.6, 16]} />
          <meshStandardMaterial color="#8b7355" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}

      {/* Pathway Stones */}
      {[-1, 0, 1, 2, 3, 4].map((z, i) => (
        <mesh key={i} position={[0, 0.06, 4 + z]} receiveShadow>
          <boxGeometry args={[1.2, 0.05, 0.8]} />
          <meshStandardMaterial color="#9b9b9b" wireframe={isWireframe} roughness={0.8} />
        </mesh>
      ))}

      {/* Outdoor Table & Chairs */}
      <group position={[-2, 0.1, -2.5]}>
        {/* Table */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.6, 0.6, 0.05, 16]} />
          <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.2, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.08, 0.4, 8]} />
          <meshStandardMaterial color="#654321" wireframe={isWireframe} roughness={0.7} />
        </mesh>
        {/* Chairs */}
        {[
          [0.8, 0],
          [-0.8, 0],
          [0, 0.8],
          [0, -0.8],
        ].map((pos, i) => (
          <group key={i} position={[pos[0], 0.25, pos[1]]}>
            <mesh castShadow>
              <boxGeometry args={[0.35, 0.05, 0.35]} />
              <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.6} />
            </mesh>
            <mesh position={[0, 0.2, -0.15]} castShadow>
              <boxGeometry args={[0.35, 0.3, 0.05]} />
              <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.6} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

// Type B: Contemporary Wood House (6.2M)
function TypeBHouse({ isWireframe, isXRayMode }: { isWireframe: boolean; isXRayMode: boolean }) {
  const wallOpacity = isXRayMode ? 0.15 : 1;
  
  return (
    <group position={[0, 0, 0]}>
      {/* Ground - Grass */}
      <mesh position={[0, 0.01, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color="#3a5a2a" wireframe={isWireframe} roughness={0.9} />
      </mesh>

      {/* Foundation */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[10, 0.2, 7]} />
        <meshStandardMaterial color="#2a2a2a" wireframe={isWireframe} roughness={0.8} />
      </mesh>

      {/* Main House Body - Wood */}
      <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[9, 3.5, 6]} />
        <meshStandardMaterial 
          color="#4a3728" 
          wireframe={isWireframe} 
          roughness={0.7}
          transparent={isXRayMode}
          opacity={wallOpacity}
        />
      </mesh>
      
      {/* INTERIOR FURNITURE */}
      <LivingRoom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[0, 0.2, -1]} />
      <Kitchen isWireframe={isWireframe} isXRayMode={isXRayMode} position={[2, 0.2, 1.5]} />
      <Bedroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-2, 0.2, 1.5]} />

      {/* Wood Slat Details */}
      {[-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5].map((x, i) => (
        <mesh key={i} position={[x, 1.8, 3.01]} castShadow>
          <boxGeometry args={[0.15, 3.5, 0.08]} />
          <meshStandardMaterial color="#2a1f1a" wireframe={isWireframe} roughness={0.8} />
        </mesh>
      ))}

      {/* Horizontal Wood Beams */}
      {[0.5, 1.5, 2.5, 3].map((y, i) => (
        <mesh key={i} position={[0, y, 3.05]} castShadow>
          <boxGeometry args={[9.2, 0.1, 0.05]} />
          <meshStandardMaterial color="#3a2818" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}

      {/* Flat Roof */}
      <mesh position={[0, 3.7, 0]} castShadow>
        <boxGeometry args={[9.5, 0.3, 6.5]} />
        <meshStandardMaterial color="#1a1a1a" wireframe={isWireframe} roughness={0.5} metalness={0.3} />
      </mesh>

      {/* Large Glass Panels with Warm Glow */}
      {[
        [-2.5, 1.8, 3.02],
        [2.5, 1.8, 3.02],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[2.5, 2.8, 0.05]} />
          <meshStandardMaterial
            color="#ffa500"
            wireframe={isWireframe}
            transparent
            opacity={0.4}
            roughness={0.1}
            metalness={0.8}
            emissive="#ff8800"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}

      {/* Window Frames */}
      {[
        [-2.5, 1.8, 3.03],
        [2.5, 1.8, 3.03],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh castShadow>
            <boxGeometry args={[2.6, 0.08, 0.03]} />
            <meshStandardMaterial color="#1a1a1a" wireframe={isWireframe} roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, 1.4, 0]} castShadow>
            <boxGeometry args={[2.6, 0.08, 0.03]} />
            <meshStandardMaterial color="#1a1a1a" wireframe={isWireframe} roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, -1.4, 0]} castShadow>
            <boxGeometry args={[2.6, 0.08, 0.03]} />
            <meshStandardMaterial color="#1a1a1a" wireframe={isWireframe} roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      ))}

      {/* Entrance Door */}
      <mesh position={[0, 1.3, 3.02]} castShadow>
        <boxGeometry args={[1.2, 2.5, 0.08]} />
        <meshStandardMaterial color="#0a0a0a" wireframe={isWireframe} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Door Handle */}
      <mesh position={[0.4, 1.3, 3.07]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.12, 8]} />
        <meshStandardMaterial color="#c0c0c0" wireframe={isWireframe} roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Side Extension */}
      <mesh position={[-5.5, 1.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 2.5, 5]} />
        <meshStandardMaterial 
          color="#5a4738" 
          wireframe={isWireframe} 
          roughness={0.7}
          transparent={isXRayMode}
          opacity={wallOpacity}
        />
      </mesh>
      
      {/* INTERIOR - Side Extension */}
      <Bathroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-5.5, 0.2, 0]} />

      {/* Side Extension Window */}
      <mesh position={[-5.5, 1.2, 2.51]} castShadow>
        <boxGeometry args={[1.5, 1.8, 0.05]} />
        <meshStandardMaterial
          color="#ffa500"
          wireframe={isWireframe}
          transparent
          opacity={0.4}
          emissive="#ff8800"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Deck/Patio */}
      <mesh position={[0, 0.25, 4.5]} receiveShadow>
        <boxGeometry args={[8, 0.2, 2]} />
        <meshStandardMaterial color="#6b5d52" wireframe={isWireframe} roughness={0.8} />
      </mesh>

      {/* Deck Planks */}
      {[-3, -2, -1, 0, 1, 2, 3].map((x, i) => (
        <mesh key={i} position={[x, 0.26, 4.5]} receiveShadow>
          <boxGeometry args={[0.15, 0.02, 2]} />
          <meshStandardMaterial color="#5a4d42" wireframe={isWireframe} roughness={0.9} />
        </mesh>
      ))}

      {/* Deck Railing */}
      {[-4, 4].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 5.4]} castShadow>
          <boxGeometry args={[0.05, 0.6, 0.05]} />
          <meshStandardMaterial color="#4a3728" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}
      <mesh position={[0, 0.85, 5.4]} castShadow>
        <boxGeometry args={[8, 0.05, 0.05]} />
        <meshStandardMaterial color="#4a3728" wireframe={isWireframe} roughness={0.7} />
      </mesh>

      {/* Large Tree */}
      <group position={[-7, 0, 4]}>
        <mesh position={[0, 2, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.45, 4, 12]} />
          <meshStandardMaterial color="#3a2010" wireframe={isWireframe} roughness={0.9} />
        </mesh>
        <mesh position={[0, 4.8, 0]} castShadow>
          <sphereGeometry args={[1.5, 12, 12]} />
          <meshStandardMaterial color="#1a3a1a" wireframe={isWireframe} roughness={0.8} />
        </mesh>
        {/* Tree branches */}
        {[
          [0.8, 4.5, 0.5],
          [-0.8, 4.5, -0.5],
          [0.5, 4.8, -0.8],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} castShadow>
            <sphereGeometry args={[0.7, 8, 8]} />
            <meshStandardMaterial color="#2a4a2a" wireframe={isWireframe} roughness={0.8} />
          </mesh>
        ))}
      </group>

      {/* Garden Bushes */}
      {[
        [6, 0.25, 2],
        [6, 0.25, -2],
        [-7, 0.25, -3],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <sphereGeometry args={[0.5, 10, 10]} />
          <meshStandardMaterial color="#2a4a2a" wireframe={isWireframe} roughness={0.9} />
        </mesh>
      ))}

      {/* Outdoor Lighting - Wall Mounted */}
      {[
        [-4, 2.5, 3.05],
        [4, 2.5, 3.05],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh castShadow>
            <boxGeometry args={[0.15, 0.3, 0.1]} />
            <meshStandardMaterial color="#1a1a1a" wireframe={isWireframe} roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.2, 0.1]} castShadow>
            <boxGeometry args={[0.2, 0.15, 0.15]} />
            <meshStandardMaterial
              color="#ffffcc"
              wireframe={isWireframe}
              emissive="#ffaa00"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      ))}

      {/* Ambient Ground Lighting */}
      <mesh position={[0, 0.5, 3.5]} castShadow>
        <boxGeometry args={[6, 0.08, 0.4]} />
        <meshStandardMaterial
          color="#ffaa00"
          wireframe={isWireframe}
          emissive="#ff8800"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Gravel Path */}
      <mesh position={[0, 0.06, 6.5]} receiveShadow>
        <boxGeometry args={[2, 0.05, 3]} />
        <meshStandardMaterial color="#8b8b8b" wireframe={isWireframe} roughness={0.9} />
      </mesh>

      {/* Decorative Rocks */}
      {[
        [3, 0.1, 5],
        [3.5, 0.12, 5.5],
        [-3, 0.1, 5],
        [-3.5, 0.11, 5.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <sphereGeometry args={[0.2, 6, 6]} />
          <meshStandardMaterial color="#6b6b6b" wireframe={isWireframe} roughness={0.9} />
        </mesh>
      ))}

      {/* Mailbox */}
      <group position={[7, 0, 6]}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
          <meshStandardMaterial color="#2a2a2a" wireframe={isWireframe} roughness={0.6} />
        </mesh>
        <mesh position={[0, 1.3, 0]} castShadow>
          <boxGeometry args={[0.3, 0.25, 0.4]} />
          <meshStandardMaterial color="#1a1a1a" wireframe={isWireframe} roughness={0.5} metalness={0.5} />
        </mesh>
      </group>
    </group>
  );
}

// Type C: Luxury Villa with Large Pool (8.9M)
function TypeCHouse({ isWireframe, isXRayMode }: { isWireframe: boolean; isXRayMode: boolean }) {
  const wallOpacity = isXRayMode ? 0.15 : 1;
  
  return (
    <group position={[0, 0, 0]}>
      {/* Ground - Premium Grass */}
      <mesh position={[0, 0.01, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="#4a7c3a" wireframe={isWireframe} roughness={0.9} />
      </mesh>

      {/* Large Foundation/Deck */}
      <mesh position={[0, 0.08, 0]} receiveShadow>
        <boxGeometry args={[14, 0.15, 10]} />
        <meshStandardMaterial color="#e0e0e0" wireframe={isWireframe} roughness={0.6} />
      </mesh>

      {/* Deck Tiles Pattern */}
      {[-6, -4, -2, 0, 2, 4, 6].map((x) =>
        [-4, -2, 0, 2, 4].map((z, j) => (
          <mesh key={`${x}-${z}`} position={[x, 0.09, z]} receiveShadow>
            <boxGeometry args={[1.8, 0.02, 1.8]} />
            <meshStandardMaterial color="#d4d4d4" wireframe={isWireframe} roughness={0.7} />
          </mesh>
        ))
      )}

      {/* Main House - First Floor */}
      <mesh position={[-3, 1.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 3.5, 7]} />
        <meshStandardMaterial 
          color="#f8f8f8" 
          wireframe={isWireframe} 
          roughness={0.2} 
          metalness={0.3}
          transparent={isXRayMode}
          opacity={wallOpacity}
        />
      </mesh>
      
      {/* INTERIOR FURNITURE - First Floor */}
      <LivingRoom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-3, 0.2, -1.5]} />
      <Kitchen isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-3, 0.2, 2.2]} />
      <Bedroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-5.2, 0.2, 0]} />
      <Bathroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-0.8, 0.2, 0]} />

      {/* Decorative Wall Panels */}
      {[-2, 0, 2].map((z, i) => (
        <mesh key={i} position={[-3, 1.8, z]} castShadow>
          <boxGeometry args={[0.05, 3, 1.5]} />
          <meshStandardMaterial color="#c0c0c0" wireframe={isWireframe} roughness={0.4} metalness={0.5} />
        </mesh>
      ))}

      {/* Second Floor - Cantilever */}
      <mesh position={[-2.5, 4.5, 1]} castShadow receiveShadow>
        <boxGeometry args={[5, 2.8, 5]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          wireframe={isWireframe} 
          roughness={0.2} 
          metalness={0.3}
          transparent={isXRayMode}
          opacity={wallOpacity}
        />
      </mesh>
      
      {/* INTERIOR FURNITURE - Second Floor */}
      <Bedroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-2.5, 3.7, 0.5]} />
      <Bedroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-2.5, 3.7, 2.2]} />
      <Bathroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-4, 3.7, -0.5]} />
      <Bathroom isWireframe={isWireframe} isXRayMode={isXRayMode} position={[-1, 3.7, -0.5]} />

      {/* Balcony */}
      <mesh position={[-2.5, 3.7, 3.8]} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.15, 1]} />
        <meshStandardMaterial color="#d0d0d0" wireframe={isWireframe} roughness={0.5} />
      </mesh>

      {/* Balcony Glass Railing */}
      <mesh position={[-2.5, 4.3, 4.25]} castShadow>
        <boxGeometry args={[4.5, 1, 0.05]} />
        <meshStandardMaterial
          color="#87ceeb"
          wireframe={isWireframe}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Wooden Roof Overhang */}
      <mesh position={[-2.5, 6, 1]} castShadow>
        <boxGeometry args={[5.5, 0.2, 5.5]} />
        <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.6} />
      </mesh>

      {/* Roof Slats */}
      {[-2, -1, 0, 1, 2].map((z, i) => (
        <mesh key={i} position={[-2.5, 6.05, z]} castShadow>
          <boxGeometry args={[5.5, 0.08, 0.15]} />
          <meshStandardMaterial color="#6b5914" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}

      {/* Large Glass Walls */}
      <mesh position={[-3, 1.8, 3.51]} castShadow>
        <boxGeometry args={[5, 3, 0.05]} />
        <meshStandardMaterial
          color="#87ceeb"
          wireframe={isWireframe}
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>

      <mesh position={[-2.5, 4.5, 3.51]} castShadow>
        <boxGeometry args={[4, 2.3, 0.05]} />
        <meshStandardMaterial
          color="#87ceeb"
          wireframe={isWireframe}
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>

      {/* White Support Pillars */}
      {[
        [-5, 2.5, 3.5],
        [-1, 2.5, 3.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 5, 16]} />
          <meshStandardMaterial color="#ffffff" wireframe={isWireframe} roughness={0.2} />
        </mesh>
      ))}

      {/* Large Swimming Pool - Water */}
      <mesh position={[4, -0.1, 0]} receiveShadow>
        <boxGeometry args={[5, 0.6, 4]} />
        <meshStandardMaterial
          color="#00bfff"
          wireframe={isWireframe}
          transparent
          opacity={0.8}
          roughness={0.05}
          metalness={0.3}
        />
      </mesh>

      {/* Pool Mosaic Tiles - Bottom */}
      <mesh position={[4, -0.64, 0]} receiveShadow>
        <boxGeometry args={[6.9, 0.02, 5.9]} />
        <meshStandardMaterial color="#4a9fb5" wireframe={isWireframe} roughness={0.3} />
      </mesh>

      {/* Pool Deck Border */}
      <mesh position={[4, 0.08, 0]} receiveShadow>
        <boxGeometry args={[7.5, 0.05, 6.5]} />
        <meshStandardMaterial color="#f0f0f0" wireframe={isWireframe} roughness={0.4} />
      </mesh>

      {/* Pool Steps */}
      {[0, 0.2, 0.4].map((y, i) => (
        <mesh key={i} position={[1, -0.3 + y, 2.5]} receiveShadow>
          <boxGeometry args={[1, 0.15, 0.8]} />
          <meshStandardMaterial color="#b0c4de" wireframe={isWireframe} roughness={0.4} />
        </mesh>
      ))}

      {/* Pool Lane Markers */}
      {[-1, 0, 1].map((z, i) => (
        <mesh key={i} position={[4, -0.38, z * 1.5]} receiveShadow>
          <boxGeometry args={[6.5, 0.01, 0.1]} />
          <meshStandardMaterial color="#ffffff" wireframe={isWireframe} roughness={0.3} />
        </mesh>
      ))}

      {/* Modern Pergola over Pool */}
      {[0, 2.5].map((z, i) => (
        <mesh key={i} position={[4, 3.5, z]} castShadow>
          <boxGeometry args={[6, 0.2, 0.8]} />
          <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.6} />
        </mesh>
      ))}

      {/* Pergola Cross Beams */}
      {[1.5, 3, 4.5, 6].map((x, i) => (
        <mesh key={i} position={[x, 3.5, 1.25]} castShadow>
          <boxGeometry args={[0.15, 0.2, 3]} />
          <meshStandardMaterial color="#6b5914" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}

      {/* Pergola Supports */}
      {[
        [1, 1.8, 0],
        [7, 1.8, 0],
        [1, 1.8, 2.5],
        [7, 1.8, 2.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 3.5, 12]} />
          <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}

      {/* Luxury Lounge Chairs */}
      {[
        [6, 0.15, -3],
        [2, 0.15, -3],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh castShadow>
            <boxGeometry args={[0.7, 0.1, 1.8]} />
            <meshStandardMaterial color="#ffffff" wireframe={isWireframe} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.35, -0.6]} castShadow>
            <boxGeometry args={[0.7, 0.6, 0.1]} />
            <meshStandardMaterial color="#ffffff" wireframe={isWireframe} roughness={0.5} />
          </mesh>
          {/* Cushions */}
          <mesh position={[0, 0.2, 0.2]} castShadow>
            <boxGeometry args={[0.65, 0.15, 1]} />
            <meshStandardMaterial color="#4a90a4" wireframe={isWireframe} roughness={0.7} />
          </mesh>
        </group>
      ))}

      {/* Outdoor Dining Set */}
      <group position={[4, 0.1, -4]}>
        {/* Table */}
        <mesh position={[0, 0.45, 0]} castShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.05, 20]} />
          <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.22, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.1, 0.45, 12]} />
          <meshStandardMaterial color="#654321" wireframe={isWireframe} roughness={0.6} />
        </mesh>
        {/* Chairs */}
        {[
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
          [0.7, 0.7],
          [-0.7, -0.7],
        ].map((pos, i) => (
          <group key={i} position={[pos[0], 0.3, pos[1]]}>
            <mesh castShadow>
              <boxGeometry args={[0.4, 0.05, 0.4]} />
              <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.5} />
            </mesh>
            <mesh position={[0, 0.25, -0.17]} castShadow>
              <boxGeometry args={[0.4, 0.4, 0.05]} />
              <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.5} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Umbrella */}
      <group position={[4, 0.1, -4]}>
        <mesh position={[0, 1.5, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 3, 12]} />
          <meshStandardMaterial color="#654321" wireframe={isWireframe} roughness={0.6} />
        </mesh>
        <mesh position={[0, 3.2, 0]} castShadow>
          <coneGeometry args={[1.2, 0.8, 16]} />
          <meshStandardMaterial color="#e8e8e8" wireframe={isWireframe} roughness={0.6} />
        </mesh>
      </group>

      {/* Landscaping - Multiple Trees */}
      {[
        [-8, 0, 5],
        [9, 0, 5],
        [9, 0, -5],
        [-8, 0, -5],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh position={[0, 1.8, 0]} castShadow>
            <cylinderGeometry args={[0.25, 0.3, 3.5, 12]} />
            <meshStandardMaterial color="#654321" wireframe={isWireframe} roughness={0.9} />
          </mesh>
          <mesh position={[0, 3.8, 0]} castShadow>
            <sphereGeometry args={[1.1, 12, 12]} />
            <meshStandardMaterial color="#2d5016" wireframe={isWireframe} roughness={0.8} />
          </mesh>
          {/* Additional foliage */}
          {[
            [0.6, 3.5, 0.4],
            [-0.6, 3.5, -0.4],
          ].map((fpos, j) => (
            <mesh key={j} position={fpos as [number, number, number]} castShadow>
              <sphereGeometry args={[0.6, 8, 8]} />
              <meshStandardMaterial color="#3a6a2a" wireframe={isWireframe} roughness={0.8} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Decorative Planters */}
      {[
        [-6, 0.3, 3.8],
        [-4, 0.3, 3.8],
        [-6, 0.3, -3.8],
        [-4, 0.3, -3.8],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.35, 0.3, 0.6, 12]} />
            <meshStandardMaterial color="#8b6914" wireframe={isWireframe} roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.5, 0]} castShadow>
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshStandardMaterial color="#4a7c3a" wireframe={isWireframe} roughness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Garden Bushes */}
      {[
        [8, 0.3, 2],
        [8, 0.3, -2],
        [-7, 0.3, 2],
        [-7, 0.3, -2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <sphereGeometry args={[0.6, 12, 12]} />
          <meshStandardMaterial color="#3a5a2a" wireframe={isWireframe} roughness={0.9} />
        </mesh>
      ))}

      {/* Outdoor Lighting - Modern Posts */}
      {[
        [-6, 0, 5],
        [8, 0, 5],
        [-6, 0, -5],
        [8, 0, -5],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh position={[0, 1, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 2, 12]} />
            <meshStandardMaterial color="#2a2a2a" wireframe={isWireframe} roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, 2.1, 0]} castShadow>
            <boxGeometry args={[0.25, 0.25, 0.25]} />
            <meshStandardMaterial
              color="#ffffcc"
              wireframe={isWireframe}
              emissive="#ffdd88"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      ))}

      {/* Pool Underwater Lights */}
      {[
        [2, -0.35, 2],
        [6, -0.35, 2],
        [2, -0.35, -2],
        [6, -0.35, -2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
          <meshStandardMaterial
            color="#4a9fb5"
            wireframe={isWireframe}
            emissive="#00aaff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Pathway */}
      {[5, 6, 7, 8, 9].map((z, i) => (
        <mesh key={i} position={[0, 0.09, z]} receiveShadow>
          <boxGeometry args={[1.5, 0.05, 0.9]} />
          <meshStandardMaterial color="#a0a0a0" wireframe={isWireframe} roughness={0.7} />
        </mesh>
      ))}

      {/* Decorative Stones along path */}
      {[
        [0.9, 0.08, 5.5],
        [-0.9, 0.08, 6.5],
        [0.9, 0.08, 7.5],
        [-0.9, 0.08, 8.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshStandardMaterial color="#707070" wireframe={isWireframe} roughness={0.9} />
        </mesh>
      ))}

      {/* Fence/Wall */}
      {[-10, 10].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0]} castShadow>
          <boxGeometry args={[0.15, 1.6, 20]} />
          <meshStandardMaterial color="#d4d4d4" wireframe={isWireframe} roughness={0.5} />
        </mesh>
      ))}

      {/* Gate */}
      <group position={[0, 0, 10]}>
        <mesh position={[-1, 0.9, 0]} castShadow>
          <boxGeometry args={[2, 1.8, 0.05]} />
          <meshStandardMaterial color="#2a2a2a" wireframe={isWireframe} roughness={0.4} metalness={0.6} />
        </mesh>
        <mesh position={[1, 0.9, 0]} castShadow>
          <boxGeometry args={[2, 1.8, 0.05]} />
          <meshStandardMaterial color="#2a2a2a" wireframe={isWireframe} roughness={0.4} metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Main component selector
function FallbackHouse({ isWireframe, unitId, isXRayMode }: { isWireframe: boolean; unitId?: string; isXRayMode: boolean }) {
  switch (unitId) {
    case 'type-a':
      return <TypeAHouse isWireframe={isWireframe} isXRayMode={isXRayMode} />;
    case 'type-b':
      return <TypeBHouse isWireframe={isWireframe} isXRayMode={isXRayMode} />;
    case 'type-c':
      return <TypeCHouse isWireframe={isWireframe} isXRayMode={isXRayMode} />;
    default:
      return <TypeAHouse isWireframe={isWireframe} isXRayMode={isXRayMode} />;
  }
}

export default function HouseModel({ modelUrl, isWireframe, unitId, isXRayMode }: HouseModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  let scene;
  try {
    const gltf = useGLTF(modelUrl);
    scene = gltf.scene;
  } catch (error) {
    console.warn('Model not found, using fallback:', error);
    return <FallbackHouse isWireframe={isWireframe} unitId={unitId} isXRayMode={isXRayMode} />;
  }

  useMemo(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => {
                if (mat instanceof MeshStandardMaterial) {
                  mat.wireframe = isWireframe;
                }
              });
            } else if (mesh.material instanceof MeshStandardMaterial) {
              mesh.material.wireframe = isWireframe;
            }
          }
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });
    }
  }, [scene, isWireframe]);

  if (!scene) {
    return <FallbackHouse isWireframe={isWireframe} unitId={unitId} isXRayMode={isXRayMode} />;
  }

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1} position={[0, 0, 0]} />
    </group>
  );
}
