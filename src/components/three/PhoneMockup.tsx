import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";

function Phone({ tint = "#00e5ff", rotation = 0 }: { tint?: string; rotation?: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!group.current) return;
    const t = s.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.5) * 0.4 + rotation;
    group.current.rotation.x = Math.cos(t * 0.4) * 0.1;
  });

  return (
    <group ref={group} scale={1.2}>
      {/* Body */}
      <RoundedBox args={[1.15, 2.35, 0.12]} radius={0.14} smoothness={6}>
        <meshStandardMaterial color="#0a0e1a" metalness={1} roughness={0.25} />
      </RoundedBox>
      {/* Screen */}
      <RoundedBox args={[1.02, 2.18, 0.13]} radius={0.11} smoothness={6} position={[0, 0, 0.001]}>
        <meshStandardMaterial
          color={tint}
          emissive={tint}
          emissiveIntensity={0.7}
          metalness={0.4}
          roughness={0.1}
          toneMapped={false}
        />
      </RoundedBox>
      {/* UI bars */}
      {[0.7, 0.45, 0.2, -0.05, -0.3, -0.55].map((y, i) => (
        <RoundedBox key={i} args={[0.7, 0.1, 0.02]} radius={0.04} position={[0, y, 0.08]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.4} transparent opacity={0.85} />
        </RoundedBox>
      ))}
      {/* Notch */}
      <RoundedBox args={[0.4, 0.08, 0.04]} radius={0.04} position={[0, 1.0, 0.08]}>
        <meshStandardMaterial color="#000" />
      </RoundedBox>
    </group>
  );
}

export const PhoneMockupScene = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
    <ambientLight intensity={0.4} />
    <pointLight position={[3, 3, 4]} intensity={2.5} color="#00e5ff" />
    <pointLight position={[-3, -2, 3]} intensity={2} color="#9d5cff" />
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group position={[-0.9, 0, 0]}>
        <Phone tint="#00e5ff" rotation={-0.3} />
      </group>
    </Float>
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[0.9, -0.2, -0.5]}>
        <Phone tint="#9d5cff" rotation={0.3} />
      </group>
    </Float>
    <Environment preset="city" />
  </Canvas>
);
