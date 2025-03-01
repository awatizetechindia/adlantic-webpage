"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import styles from "./page.module.css";
import React, { useRef, useState, useEffect } from "react";
import { Mesh } from "three";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function index() {
  return (
    <div className={`${styles.main}`}>
      {/* <h1 className="text-7xl font-bold text-center">Adlantic</h1> */}
      <Canvas>
        <Cube />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={2} />
        <directionalLight position={[0, 0, 2]} intensity={1} />
      </Canvas>
    </div>
  );
}

const Cube = () => {
  const mesh = useRef<Mesh>(null);
  const [targetRotation, setTargetRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const rotationSpeed = 0.1; // Adjust this to control animation speed

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetRotation((prev) => prev + Math.PI / 2); // 90 degree rotation
      setIsAnimating(true);
    }, 5000); // Trigger every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (!mesh.current) return;

    if (isAnimating) {
      const currentRotation = mesh.current.rotation.y;
      const difference = targetRotation - currentRotation;

      if (Math.abs(difference) < 0.01) {
        mesh.current.rotation.y = targetRotation;
        setIsAnimating(false);
      } else {
        mesh.current.rotation.y += difference * rotationSpeed;
      }
    }
  });

  // const texture_1 = useLoader(TextureLoader, "/textures/texture1.png");
  const texture_1 = useLoader(TextureLoader, "/textures/texture3.png");
  const texture_2 = useLoader(TextureLoader, "/textures/texture4.png");
  const texture_3 = useLoader(TextureLoader, "/textures/texture5.png");
  const texture_4 = useLoader(TextureLoader, "/textures/texture6.png");

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[3.6, 3.6, 3.6]} />
      <meshStandardMaterial map={texture_2} attach="material-0" />
      <meshStandardMaterial map={texture_3} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial color="#002BFF" attach="material-3" />
      <meshStandardMaterial map={texture_1} attach="material-5" />
      <meshStandardMaterial map={texture_4} attach="material-4" />
      {/* <meshStandardMaterial color="#002BFF" /> */}
    </mesh>
  );
};
