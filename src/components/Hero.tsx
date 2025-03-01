"use client";
import { useState, useEffect } from "react";
import SignInBox from "./auth/SignInBox";
import Cube from "./Hero/Cube";
import HeroText from "./Hero/HeroText";

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setStartRotation(rotation);
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;

    const clientX =
      "touches" in e
        ? (e as TouchEvent).touches[0].clientX
        : (e as MouseEvent).clientX;
    const diff = (clientX - startX) * 0.5;
    const newRotation = startRotation + diff;
    setRotation(newRotation);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDragMove);
    document.addEventListener("touchend", handleDragEnd);

    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, startX, startRotation]);

  return (
    <div className="container mx-auto px-4 max-w-6xl pt-24 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 relative">
          <HeroText />
          <Cube
            rotation={rotation}
            onDragStart={handleDragStart}
            isDragging={isDragging}
          />
        </div>
        <div className="pt-20 md:pt-9"></div>
        <SignInBox />
      </div>
    </div>
  );
};

export default Hero;
