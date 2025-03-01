"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff");

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Adjusted camera for perpendicular view
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3, 12); // Adjusted position
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const materials = [];

    // Create text textures for each face
    const faceContent = [
      {
        title: "PERFORMANCE MARKETING",
        subtitle: "Data-Driven Growth",
        features: [
          "ROI Returns",
          "Precision Analytics",
          "Convert Optimize",
          "Metrics Real-Time",
        ],
      },
      {
        title: "BRAND AWARENESS",
        subtitle: "Strategic Impact",
        features: [
          "Social Media",
          "Content Strategy",
          "Brand Voice",
          "Engagement",
        ],
      },
      {
        title: "AGENCY SOLUTIONS",
        subtitle: "Comprehensive Service",
        features: ["Full Service", "Innovation", "Strategy", "Results"],
      },
      {
        title: "BRAND SOLUTIONS",
        subtitle: "Growth Strategy",
        features: ["Plan", "Create", "Growth", "Scale"],
      },
      // Empty top and bottom faces
      { title: "", subtitle: "", features: [] },
      { title: "", subtitle: "", features: [] },
    ];

    // Create canvas textures for each face
    for (let i = 0; i < 6; i++) {
      const canvas = document.createElement("canvas");
      canvas.width = 2048;
      canvas.height = 2048;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) {
        ctx.fillStyle = "#002bff";
        ctx.fillRect(0, 0, 2048, 2048);

        if (i < 4) {
          // Only add text to side faces
          const content = faceContent[i];
          ctx.fillStyle = "#ffffff";

          // Title
          ctx.font = "bold 140px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillText(content.title, 1024, 300);

          // Subtitle
          ctx.font = "100px Arial";
          ctx.fillText(content.subtitle, 1024, 500);

          // Features
          ctx.font = "80px Arial";
          content.features.forEach((feature, index) => {
            ctx.fillText(feature, 1024, 800 + index * 160);
          });
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        materials.push(
          new THREE.MeshPhongMaterial({
            map: texture,
            transparent: false,
            shininess: 100,
            specular: new THREE.Color(0x1144ff),
            bumpScale: 0.02,
          })
        );
      }
    }

    const cube = new THREE.Mesh(geometry, materials);
    cube.rotation.y = Math.PI; // Initial rotation to show front face
    scene.add(cube);

    // White edges
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
    );
    cube.add(line);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Increased intensity
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Increased intensity
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add point lights for better highlights
    const pointLight1 = new THREE.PointLight(0x002bff, 1);
    pointLight1.position.set(0, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x002bff, 1);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Animation variables
    const autoRotationSpeed = 0.003;
    let currentRotationY = Math.PI;
    let targetRotationY = Math.PI;
    let isDragging = false;
    let previousMousePosition = { x: 0 };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      const deltaMove = event.clientX - previousMousePosition.x;
      targetRotationY += deltaMove * 0.005;
      previousMousePosition = {
        x: event.clientX,
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);

      if (!isDragging) {
        targetRotationY += autoRotationSpeed;
      }

      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      cube.rotation.y = currentRotationY;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="h-screen sticky top-0">
      {/* ADLANTIC text positioned above cube */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 text-center z-10">
        <h1 className="text-8xl font-black tracking-wider text-primary">
          ADLANTIC
        </h1>
        {/* <p className="text-2xl font-medium text-black mt-4 tracking-wide">
          Leading Digital Ads
        </p>
        <p className="text-2xl font-medium text-black tracking-wide">
          With Innovation
        </p> */}
      </div>

      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ cursor: "grab" }}
      />
    </div>
  );
};

export default ThreeScene;
