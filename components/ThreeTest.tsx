"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Button } from "./ui/button";

function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  // Animation pour faire tourner les étoiles
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0005;
      starsRef.current.rotation.y += 0.001;
    }
  });

  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
  });

  // Générer des étoiles aléatoires
  const starVertices = [];
  for (let i = 0; i < 5000; i++) {
    const x = THREE.MathUtils.randFloatSpread(200); // Coordonnées aléatoires
    const y = THREE.MathUtils.randFloatSpread(200);
    const z = THREE.MathUtils.randFloatSpread(200);
    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
  );

  return (
    <points ref={starsRef} geometry={starGeometry} material={starMaterial} />
  );
}

const RotatingStars = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Canvas avec les étoiles */}
      <Canvas className="bg-gradient-to-br from-[#161b2f] to-black w-full h-full">
        <ambientLight />
        <Stars />
      </Canvas>
    </div>
  );
};

export default RotatingStars;
