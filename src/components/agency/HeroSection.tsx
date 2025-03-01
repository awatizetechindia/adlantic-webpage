"use client";
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  boldClaims: string[];
}

const HeroSection = ({
  title,
  description,
  ctaText,
  boldClaims,
}: HeroSectionProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  return (
    <div className="flex flex-col justify-between md:flex-row gap-8 mx-auto w-full">
      <div className="border-4 border-primary p-6 md:p-8 lg:p-12 flex-1">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary pb-10">
          {title}
        </h2>
        <p className="text-primary font-medium text-lg md:text-2xl mb-8 leading-relaxed max-w-2xl">
          {description}
        </p>
        <button className="w-full bg-primary text-white py-3 text-2xl md:text-4xl font-bold hover:bg-blue-700 transition-colors">
          {ctaText}
        </button>
      </div>

      <div className="flex flex-col gap-4 justify-between flex-1">
        {boldClaims.map((claim, index) => (
          <div
            key={index}
            onClick={() =>
              setSelectedIndex(index === selectedIndex ? null : index)
            }
            className={`
              bg-primary text-white text-2xl md:text-3xl p-4 md:p-6 
              font-black transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:bg-blue-700 hover:shadow-lg
              cursor-pointer
              ${
                index === selectedIndex
                  ? "scale-105 ring-4 ring-blue-400 shadow-xl"
                  : ""
              }
            `}
          >
            {claim}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
