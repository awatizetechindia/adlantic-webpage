import React from "react";
import HeroSection from "@/components/solutions/HeroSection";
import Achievements from "@/components/solutions/Achievements";
import Services from "@/components/solutions/Services";
import ReadyToGrow from "@/components/solutions/ReadyToGrow";
import AdLanticLogo from "@/components/solutions/AdLanticLogo";

const AgencySolutionsPage = () => {
  const boldClaims = [
    "Enhance Brand Visibility",
    "Increase Market Share",
    "Build Customer Loyalty",
    "Drive Digital Growth",
  ];

  const services = [
    {
      title: "Growth Analysis",
      items: ["Market Research", "Competitor Analysis", "Growth Strategy"],
      image: "/temp.png",
      description:
        "Comprehensive market analysis and growth strategies tailored to your business needs.",
    },
    {
      title: "Leads",
      items: ["Lead Generation", "Lead Nurturing", "Lead Conversion"],
      image: "/temp2.png",
      description:
        "Generate and nurture high-quality leads that convert into loyal customers.",
    },
    {
      title: "Sales",
      items: ["Sales Strategy", "Sales Automation", "Revenue Growth"],
      image: "/temp.png",
      description:
        "Boost your sales performance with data-driven strategies and automation.",
    },
    {
      title: "Marketing",
      items: ["Digital Marketing", "Content Strategy", "Campaign Management"],
      image: "/temp2.png",
      description:
        "Create impactful marketing campaigns that resonate with your target audience.",
    },
    {
      title: "SEO's",
      items: ["Technical SEO", "Content SEO", "Local SEO"],
      image: "/temp.png",
      description:
        "Improve your search engine visibility and drive organic traffic to your website.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <HeroSection
        title="Scale Your Agency Success"
        description="We understand the complexity of managing multiple clients with diverse needs. AdLantic equips you with the tools, insights, and support to design high-performing campaigns that exceed client expectations."
        ctaText="Get Started"
        boldClaims={boldClaims}
      />
      <Achievements />
      <Services services={services} />
      <ReadyToGrow />
      <AdLanticLogo />
    </div>
  );
};

export default AgencySolutionsPage;
