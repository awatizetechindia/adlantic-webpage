// src/components/about/AboutAdlanticStats.tsx
import Image from "next/image";
import React from "react";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
  <div className="bg-primary text-white font-medium text-lg p-4 text-center">
    <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl">{number}</h3>
    <p className="text-base sm:text-lg">{label}</p>
  </div>
);

interface StatsGridProps {
  stats: StatCardProps[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-2 gap-3 sm:gap-4">
    {stats.map((stat, index) => (
      <StatCard key={index} {...stat} />
    ))}
  </div>
);

const statsData = [
  { number: "500+", label: "Clients Served" },
  { number: "95%", label: "Client Retention" },
  { number: "150+", label: "Ad Impressions" },
  { number: "10X", label: "Average ROI" },
];

const AboutAdlanticStats = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
      <div className="border-primary border-2 sm:border-4 w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
        <p className="text-primary font-medium text-xl sm:text-2xl lg:text-3xl pb-6 sm:pb-8 lg:pb-12">
          AdLantic is a leading force in digital marketing, dedicated to helping
          businesses navigate the ever-evolving digital landscape. Our expertise
          in data intelligence and performance marketing has enabled us to serve
          500+ clients with outstanding results, including:
        </p>
        <StatsGrid stats={statsData} />
      </div>

      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <Image
          src="/assets/line-art-of-people-in-office.png"
          alt="AdLantic"
          width={600}
          height={600}
          className="w-full max-w-[400px] lg:max-w-[600px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AboutAdlanticStats;
