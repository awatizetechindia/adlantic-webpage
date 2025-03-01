// src/components/about/AboutAdlanticStats.tsx
import Image from "next/image";
import React from "react";

const AboutAdlanticStats = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="border-primary border-4 w-1/2 p-8">
        <p className="text-primary font-medium text-3xl pb-12">
          AdLantic is a leading force in digital marketing, dedicated to helping
          businesses navigate the ever-evolving digital landscape. Our expertise
          in data intelligence and performance marketing has enabled us to serve
          500+ clients with outstanding results, including:
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary text-white font-medium text-lg p-4 text-center">
            <h3 className="font-bold text-5xl">500+</h3>
            <p>Clients Served</p>
          </div>
          <div className="bg-primary text-white font-medium text-lg p-4 text-center">
            <h3 className="font-bold text-5xl">95%</h3>
            <p>Client Retention</p>
          </div>
          <div className="bg-primary text-white font-medium text-lg p-4 text-center">
            <h3 className="font-bold text-5xl">150+</h3>
            <p>Ad Impressions</p>
          </div>
          <div className="bg-primary text-white font-medium text-lg p-4 text-center">
            <h3 className="font-bold text-5xl">10X</h3>
            <p>Average ROI</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <Image
          src="/assets/line-art-of-people-in-office.png"
          alt="AdLantic"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default AboutAdlanticStats;
