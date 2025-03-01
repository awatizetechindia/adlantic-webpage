import React from "react";
import ReadyToGrow from "@/components/solutions/ReadyToGrow";
import AdLanticLogo from "@/components/solutions/AdLanticLogo";
import BrandHero from "@/components/solutions/publisher/BrandHero";
import SafeSpace from "@/components/solutions/publisher/SafeSpace";
import Image from "next/image";

const BrandSolutionPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BrandHero />
      <SafeSpace />
      <Image
        className="w-full p-8"
        src="/stuff.svg"
        alt="Safe Space"
        width={1000}
        height={1000}
      />
      <ReadyToGrow />
      <AdLanticLogo />
    </div>
  );
};

export default BrandSolutionPage;
