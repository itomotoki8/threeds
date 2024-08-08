"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Model = ({
  url,
  scale,
  position,
}: {
  url: string;
  scale: number;
  position: number[];
}) => {
  const { scene } = useGLTF(url);
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Y軸周りに回転
    }
  });
  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={scale} position={position} />
    </group>
  );
};

export const Rukario = () => {
  return (
    <div className="cursor-pointer w-1/3 h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={5} />
        <Model
          url="/models/rukario/scene.gltf"
          scale={2}
          position={[0, -1.6, 0.2]}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const Koikingu = () => {
  return (
    <div className="cursor-pointer w-1/3 h-[500px]">
      <Canvas camera={{ position: [1, 0, 8], fov: 70 }}>
        <ambientLight intensity={5} />
        <Model
          url="/models/koikingu/scene.gltf"
          scale={0.7}
          position={[2, 0.4, 0.2]}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const Nijika = () => {
  return (
    <div className="cursor-pointer w-1/3 h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 90 }}>
        <ambientLight intensity={5} />
        <Model
          url="/models/nijika/scene.gltf"
          scale={0.7}
          position={[0, -1, 0.2]}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
