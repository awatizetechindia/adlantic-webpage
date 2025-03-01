import React from "react";
import Image from "next/image";

interface CultureBlockProps {
  svg: string; // Changed to string to accept the SVG file path
  heading: string;
  content: string;
  type: "fill" | "stroke";
}

const CultureBlock: React.FC<CultureBlockProps> = ({
  svg,
  heading,
  content,
  type,
}) => {
  return (
    <div
      className={`border-4 border-primary p-6 ${
        type === "fill" ? "bg-primary text-white" : "bg-white text-primary"
      }`}
    >
      <div className="text-4xl mb-4">
        <Image src={svg} alt={heading} width={50} height={50} />
      </div>
      <h3 className="text-3xl font-semibold mb-2">{heading}</h3>
      <p className="text-xl font-medium">{content}</p>
    </div>
  );
};

export default CultureBlock;
