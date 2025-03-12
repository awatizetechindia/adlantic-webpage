import React from "react";
import CTA from "@/components/publisher/CTA";
import Footer from "@/components/Footer";
import NewHeroSection from "@/components/publisher/HeroSection";
import Trust from "@/components/publisher/Trust";
import FlowChart from "@/components/agency/FlowChart";
// We are going for a horizontal padding of 12 and a vertical padding of 16 at top and bottom in desktop
// For heading we are using text-6xl in desktop
const page = () => {
  return (
    <div className="px-12 py-2 md:py-8">
      <div className="py-2 md:py-8">
        <NewHeroSection />
      </div>
      <div className="py-2 md:py-8">
        <Trust />
      </div>
      <div className="py-2 md:py-8">
        <FlowChart />
      </div>
      <div className="py-2 md:py-8">
        <CTA />
      </div>
      <div className="py-2 md:py-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
