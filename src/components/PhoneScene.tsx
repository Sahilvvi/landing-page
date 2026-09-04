"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Html, Lightformer, RoundedBox } from "@react-three/drei";
import type { Group } from "three";
import { PhoneScreen } from "./PhoneScreen";
import { BrandBadge } from "./ui";

const W = 2.7;
const H = 5.6;
const D = 0.28;
const SCREEN_PX_W = 300;
const SCREEN_SCALE = 0.335;
const SCREEN_PX_H = Math.round((SCREEN_PX_W * (H - 0.16)) / (W - 0.16));

function Phone() {
  const group = useRef<Group>(null);
  useFrame(({ pointer }, dt) => {
    if (!group.current) return;
    const targetY = pointer.x * 0.45 - 0.35;
    const targetX = -pointer.y * 0.25 + 0.05;
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, dt * 3);
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(1, dt * 3);
  });

  const scale = SCREEN_SCALE;

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <RoundedBox args={[W, H, D]} radius={0.32} smoothness={6} castShadow>
          <meshPhysicalMaterial
            color="#0f1a15"
            metalness={0.6}
            roughness={0.35}
            clearcoat={1}
            clearcoatRoughness={0.2}
          />
        </RoundedBox>
        <mesh position={[W / 2 + 0.01, 0.9, 0]}>
          <boxGeometry args={[0.03, 0.5, 0.08]} />
          <meshStandardMaterial color="#1a2620" />
        </mesh>
        <mesh position={[-W / 2 - 0.01, 1.1, 0]}>
          <boxGeometry args={[0.03, 0.35, 0.08]} />
          <meshStandardMaterial color="#1a2620" />
        </mesh>
        <Html
          transform
          position={[0, 0, D / 2 + 0.01]}
          scale={scale}
          style={{ width: SCREEN_PX_W, height: SCREEN_PX_H }}
          className="overflow-hidden rounded-[34px] bg-[#f2faf5]"
          zIndexRange={[10, 0]}
        >
          <div className="relative h-full w-full">
            <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
            <PhoneScreen />
          </div>
        </Html>
      </Float>
    </group>
  );
}

function Badge({
  id,
  position,
  speed = 1.5,
}: {
  id: string;
  position: [number, number, number];
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <Html position={position} center zIndexRange={[20, 11]} style={{ pointerEvents: "none" }}>
        <div className="drop-shadow-lg">
          <BrandBadge id={id} size="lg" />
        </div>
      </Html>
    </Float>
  );
}

export function PhoneScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 17], fov: 30 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
      shadows
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 6]} intensity={1.6} castShadow />
      <directionalLight position={[-6, -2, 4]} intensity={0.5} color="#6fd9a6" />
      <Suspense fallback={null}>
        <Phone />
        <Badge id="zomato" position={[-2.3, 1.8, 0.8]} />
        <Badge id="swiggy" position={[2.4, 2.4, 0.4]} speed={1.2} />
        <Badge id="myntra" position={[-2.5, -0.6, 1]} speed={1.8} />
        <Badge id="phonepe" position={[2.5, -1.2, 0.6]} speed={1.1} />
        <Badge id="gpay" position={[-1.9, -2.6, 0.6]} speed={1.6} />
        <ContactShadows position={[0, -3.4, 0]} opacity={0.35} scale={10} blur={2.6} far={4} color="#0e7a52" />
        <Environment resolution={256}>
          <Lightformer intensity={2} position={[0, 5, -5]} scale={[10, 4, 1]} />
          <Lightformer intensity={1.2} position={[-5, 2, 3]} scale={[3, 6, 1]} color="#d8f3e5" />
          <Lightformer intensity={1.5} position={[5, -1, 4]} scale={[3, 6, 1]} color="#ffffff" />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
