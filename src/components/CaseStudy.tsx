// src/components/CaseStudy.tsx
import Image from "next/image";
import React from "react";

interface CaseStudyProps {
  image: string;
  title: string;
  subTitle: string;
  content: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  image,
  title,
  subTitle,
  content,
}) => {
  return (
    <div className="border-4 border-primary p-4">
      <Image
        width={100}
        height={100}
        src={image}
        alt={title}
        className="w-20 h-20 object-contain p-2 bg-primary"
      />
      <div className="h-4"></div>
      <h2 className="text-6xl font-bold">{title}</h2>
      <h3 className="text-3xl font-semibold">{subTitle}</h3>
      <p className="font-medium pb-4">{content}</p>
      <a href="#" className="text-primary font-semibold">
        Read Case Study →
      </a>
    </div>
  );
};

export default CaseStudy;
