import HeroSection from "@/components/careers/HeroSection";
import CultureBlock from "@/components/careers/CultureBlock";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const cultureBlocks = [
  {
    svg: "/svgs/group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg",
    heading: "Collaborative Culture",
    content:
      "Work alongside talented professionals in a supportive environment",
    type: "stroke" as const,
  },
  {
    svg: "/svgs/rocket-launch.svg",
    heading: "Innovation First",
    content: "Push boundaries and explore cutting-edge solutions",
    type: "fill" as const,
  },
  {
    svg: "/svgs/heart.svg",
    heading: "Work-Life Balance",
    content: "Flexible work arrangements that prioritize your wellbeing",
    type: "stroke" as const,
  },
];
const cultureBlocks2 = [
  {
    svg: "/svgs/coffee_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg",
    heading: "Work-Life Balance",
    content: "Flexible hours and remote work options for optimal balance",
    type: "stroke" as const,
  },
  {
    svg: "/svgs/rocket-launch.svg",
    heading: "Growth Opportunities",
    content: "Clear career progression and skill development paths",
    type: "fill" as const,
  },
  {
    svg: "/svgs/heart.svg",
    heading: "Health Benefits",
    content: "Comprehensive health insurance for you and your family",
    type: "stroke" as const,
  },
  {
    svg: "/svgs/laptop_mac_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg",
    heading: "Latest Technology",
    content: "Access to cutting-edge tools and technologies",
    type: "fill" as const,
  },
  {
    svg: "/svgs/globe.svg",
    heading: "Global Impact",
    content: "Work with clients and teams across the globe",
    type: "stroke" as const,
  },
  {
    svg: "/svgs/chart-line-up.svg",
    heading: "Performance Rewards",
    content: "Competitive compensation and performance bonuses",
    type: "fill" as const,
  },
];

const page = () => {
  return (
    <div className="px-12 py-8">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 py-8">
        {cultureBlocks.map((block, index) => (
          <CultureBlock
            key={index}
            svg={block.svg}
            heading={block.heading}
            content={block.content}
            type={block.type}
          />
        ))}
      </div>
      <div className="py-8">
        <div className="bg-primary py-16">
          <h1 className="text-6xl font-bold text-white container  text-center ">
            Why choose AdLantic?
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 py-8">
        {cultureBlocks2.map((block, index) => (
          <CultureBlock
            key={index}
            svg={block.svg}
            heading={block.heading}
            content={block.content}
            type={block.type}
          />
        ))}
      </div>
      <div className="mx-auto py-12">
        <div className="flex items-center w-fit justify-center gap-4 px-6 py-3 bg-primary mx-auto text-white font-bold hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer">
          <h1 className="text-3xl">Let&apos;s work together</h1>
          <Image
            src="/business_center_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt="AdLantic"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="py-8">
        <div className="border-4 border-primary text-center p-12">
          <h1 className="text-8xl font-bold text-primary">AdLantic</h1>
        </div>
      </div>
      <div className="py-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
