"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import styles from "./page.module.css";
import React, { useRef, useState, useEffect } from "react";
import { Mesh } from "three";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function CubeComponent() {
  // Add responsive state to track viewport size
  const [cubeSize, setCubeSize] = useState(3.6);

  // Update cube size based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setCubeSize(3.6);
      } else if (window.innerWidth < 1024) {
        // Tablet
        setCubeSize(3.6);
      } else {
        // Desktop
        setCubeSize(3.6);
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${styles.main} w-full h-[300px] sm:h-[400px] md:h-[500px]`}
    >
      {/* <h1 className="text-7xl font-bold text-center">Adlantic</h1> */}
      <Canvas>
        <Cube size={cubeSize} />
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

const Cube = ({ size = 3.6 }) => {
  const mesh = useRef<Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoRotationSpeed = 0.005; // Increased for smoother rotation
  const pauseDuration = 0; // 0 seconds pause
  const snapAngle = Math.PI / 2; // 90 degrees

  // Load textures
  const texture_1 = useLoader(TextureLoader, "/textures/texture3.png");
  const texture_2 = useLoader(TextureLoader, "/textures/texture4.png");
  const texture_3 = useLoader(TextureLoader, "/textures/texture5.png");
  const texture_4 = useLoader(TextureLoader, "/textures/texture6.png");

  // Handle drag state
  useEffect(() => {
    const handlePointerDown = () => setIsDragging(true);
    const handlePointerUp = () => setIsDragging(false);

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  // Auto-rotation animation with pausing
  useFrame(() => {
    if (!mesh.current || isDragging || isPaused) return;

    const currentRotation = mesh.current.rotation.y;
    const normalizedRotation = currentRotation % (Math.PI * 2);
    const isAtSnapPoint = Math.abs(normalizedRotation % snapAngle) < 0.01;

    if (isAtSnapPoint) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
      }, pauseDuration);
    }

    mesh.current.rotation.y += autoRotationSpeed;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[size, size, size]} />
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
