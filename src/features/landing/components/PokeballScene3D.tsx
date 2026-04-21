import { useRef } from "react";
import type { Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

function PokeballModel() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.9;
    groupRef.current.rotation.x = Math.sin(performance.now() * 0.0006) * 0.18;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 56, 56, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#d72648" metalness={0.45} roughness={0.28} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1, 56, 56, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshStandardMaterial color="#f7f9ff" metalness={0.2} roughness={0.35} />
      </mesh>

      <mesh>
        <torusGeometry args={[1.01, 0.085, 16, 90]} />
        <meshStandardMaterial color="#111322" metalness={0.75} roughness={0.22} />
      </mesh>

      <mesh position={[0, 0, 1.02]}>
        <circleGeometry args={[0.22, 40]} />
        <meshStandardMaterial color="#10162b" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[0, 0, 1.05]}>
        <circleGeometry args={[0.12, 40]} />
        <meshStandardMaterial color="#e9ecff" emissive="#66e052" emissiveIntensity={0.32} />
      </mesh>
    </group>
  );
}

export function PokeballScene3D() {
  return (
    <div className="hero__pokeball-3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 3.4], fov: 38 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.9} />
        <pointLight position={[2.8, 3, 3]} intensity={2} color="#aeb8ff" />
        <pointLight position={[-2.8, -1.8, 2.6]} intensity={1.4} color="#66e052" />
        <Float speed={1.7} rotationIntensity={0.5} floatIntensity={0.85}>
          <PokeballModel />
        </Float>
        <Sparkles count={20} scale={[4.6, 3.8, 2]} size={2.3} speed={0.35} color="#9f9bff" />
      </Canvas>
    </div>
  );
}
