import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/**
 * A stylized "snail shell" built from a logarithmic spiral of glowing toruses.
 * Cyan + violet neon circuits, metallic core. No external 3D model required.
 */
function SpiralShell() {
  const group = useRef<THREE.Group>(null);

  const rings = useMemo(() => {
    const arr: { pos: [number, number, number]; scale: number; rot: [number, number, number]; hue: number }[] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 4;
      const radius = 0.18 + t * 1.4;
      const x = Math.cos(angle) * (1 - t) * 0.4;
      const y = (t - 0.5) * 0.4;
      const z = Math.sin(angle) * (1 - t) * 0.4;
      arr.push({
        pos: [x, y, z],
        scale: radius,
        rot: [Math.PI / 2 + t * 0.5, angle, 0],
        hue: t,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.35;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <group ref={group}>
      {/* Metallic core */}
      <Sphere args={[0.55, 64, 64]}>
        <MeshDistortMaterial
          color="#0a1228"
          metalness={1}
          roughness={0.15}
          distort={0.25}
          speed={1.5}
          emissive="#00e5ff"
          emissiveIntensity={0.15}
        />
      </Sphere>

      {/* Spiral neon rings */}
      {rings.map((r, i) => {
        const color = new THREE.Color().lerpColors(
          new THREE.Color("#00e5ff"),
          new THREE.Color("#9d5cff"),
          r.hue
        );
        return (
          <Torus key={i} args={[r.scale, 0.045, 16, 64]} position={r.pos} rotation={r.rot}>
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={2.2}
              metalness={0.9}
              roughness={0.2}
              toneMapped={false}
            />
          </Torus>
        );
      })}

      {/* Floating circuit nodes */}
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <Sphere key={`n-${i}`} args={[0.05, 16, 16]} position={[Math.cos(a) * 1.7, Math.sin(a * 2) * 0.3, Math.sin(a) * 1.7]}>
            <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} toneMapped={false} />
          </Sphere>
        );
      })}
    </group>
  );
}

function FloatingShape({ position, color, scale = 0.4 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * 0.5;
    ref.current.rotation.y = s.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={ref} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.85}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

export const SnailShellScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#00e5ff" />
      <pointLight position={[-5, -3, 2]} intensity={2} color="#9d5cff" />
      <pointLight position={[0, 4, -3]} intensity={1.2} color="#ffffff" />

      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
        <SpiralShell />
      </Float>

      <FloatingShape position={[-2.8, 1.4, -1]} color="#00e5ff" scale={0.35} />
      <FloatingShape position={[2.6, -1.2, -1]} color="#9d5cff" scale={0.45} />
      <FloatingShape position={[2.2, 1.6, -2]} color="#5cb3ff" scale={0.28} />
      <FloatingShape position={[-2.4, -1.5, -1.5]} color="#9d5cff" scale={0.32} />

      <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={8} blur={2.5} far={3} color="#00e5ff" />

      <Environment preset="night" />
    </Canvas>
  );
};
