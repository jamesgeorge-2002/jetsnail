import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

type IconKind = "mobile" | "web" | "software";

function Icon({ kind }: { kind: IconKind }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.6;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={ref} scale={1.2}>
      {kind === "mobile" && (
        <>
          <mesh>
            <boxGeometry args={[0.7, 1.3, 0.12]} />
            <meshStandardMaterial color="#0a1228" metalness={1} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.07]}>
            <boxGeometry args={[0.6, 1.15, 0.02]} />
            <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1.2} toneMapped={false} />
          </mesh>
        </>
      )}
      {kind === "web" && (
        <>
          <mesh>
            <boxGeometry args={[1.4, 1.0, 0.1]} />
            <meshStandardMaterial color="#0a1228" metalness={1} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.05, 0.06]}>
            <boxGeometry args={[1.25, 0.85, 0.02]} />
            <meshStandardMaterial color="#9d5cff" emissive="#9d5cff" emissiveIntensity={1.2} toneMapped={false} />
          </mesh>
          <mesh position={[0, -0.62, 0]}>
            <boxGeometry args={[0.5, 0.1, 0.1]} />
            <meshStandardMaterial color="#0a1228" metalness={1} roughness={0.2} />
          </mesh>
        </>
      )}
      {kind === "software" && (
        <>
          <mesh>
            <torusKnotGeometry args={[0.45, 0.15, 128, 16]} />
            <meshStandardMaterial color="#5cb3ff" emissive="#00e5ff" emissiveIntensity={0.8} metalness={1} roughness={0.15} toneMapped={false} />
          </mesh>
        </>
      )}
    </group>
  );
}

export const ServiceIconScene = ({ kind }: { kind: IconKind }) => (
  <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[3, 3, 3]} intensity={2} color="#00e5ff" />
    <pointLight position={[-3, -2, 2]} intensity={1.6} color="#9d5cff" />
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
      <Icon kind={kind} />
    </Float>
    <Environment preset="night" />
  </Canvas>
);
