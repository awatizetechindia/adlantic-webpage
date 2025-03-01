// import HeroSection from "@/components/agency/HeroSection";
// import Achievements from "@/components/agency/Achievements";
import React from "react";
import Attention from "@/components/agency/Attention";
import CTA from "@/components/agency/CTA";
import Footer from "@/components/Footer";
import AchievementsLong from "@/components/agency/AchievementsLong";
import NewHeroSection from "@/components/agency/NewHeroSection";
// We are going for a horizontal padding of 12 and a vertical padding of 16 at top and bottom in desktop
// For heading we are using text-6xl in desktop
const page = () => {
  // const boldClaims = [
  //   "Enhance Brand Visibility",
  //   "Increase Market Share",
  //   "Build Customer Loyalty",
  //   "Drive Digital Growth",
  // ];
  const services = [
    {
      title: "Brand Awareness",
      items: ["Brand Strategy", "Brand Identity", "Brand Positioning"],
      image: "/services/data-company-office.svg",
      description:
        "Build a strong, memorable brand that connects with your target audience and drives recognition.",
    },
    {
      title: "Performance Marketing",
      items: ["PPC Campaigns", "Conversion Optimization", "ROI Tracking"],
      image: "/services/marketing-and-data-info-graphics.svg",
      description:
        "Drive measurable results through data-driven performance marketing strategies.",
    },
    {
      title: "Social Media Marketing",
      items: [
        "Platform Strategy",
        "Community Management",
        "Social Advertising",
      ],
      image: "/services/marketing-agency-office.svg",
      description:
        "Engage your audience and build brand presence across social media platforms.",
    },
    {
      title: "Email Marketing",
      items: ["Campaign Strategy", "Automation", "List Management"],
      image: "/services/email-marketing.svg",
      description:
        "Create targeted email campaigns that nurture relationships and drive conversions.",
    },
    {
      title: "Content Marketing",
      items: ["Content Strategy", "Content Creation", "Content Distribution"],
      description:
        "Develop compelling content that educates, engages, and converts your target audience.",
      image: "/services/content-marketing.svg",
    },
  ];
  const achievements = [
    {
      title: "Recognition in Forbes",
      description:
        "One of our founders has been featured in Forbes, showcasing their leadership and innovation in the digital advertising space. This recognition underscores our commitment to excellence and thought leadership in the industry.",
      image: "/achievements/newspaper.png",
    },
    {
      title: "Leverage Awatize's advanced DSP",
      description:
        "to deliver optimized campaigns that generate exceptional returns on ad spend, ensuring every dollar counts. With features like real-time bidding, viewability metrics, transparent revenue reporting, and a dedicated account manager, Awatize empowers agencies to achieve unmatched precision, performance, and transparency in their campaigns.",
      image: "/achievements/dashboard.png",
    },
    {
      title: "Powered by Almmo - A Data Intelligence Leader",
      description:
        "AdLantic being a vital part of the Almmo Consultancy Group, operates at the intersection of data-driven insights and marketing expertise, providing unparalleled value to our clients. Together, we're redefining the marketing ecosystem, ensuring smarter, performance-driven decisions for brands and agencies alike.",
      image: "/assets/linkedin.png",
    },
    {
      title: "Global Reach & Scale",
      description:
        "Delivering 1 Million+ daily impressions, AdLantic operates with a network of multiple inhouse websites and global publishers, providing brands and agencies with extensive worldwide reach.",
      image: "/assets/people-explaining-on-white-board-different.png",
    },
  ];
  return (
    <div className="px-12 py-8">
      {/* <div className="py-8">
        <Achievements />
      </div> */}
      <div className="py-8">
        <NewHeroSection />
      </div>
      <div className="py-8">
        <AchievementsLong achievements={achievements} />
      </div>
      <div className="py-8">
        <Attention services={services} />
      </div>
      {/* <div className="py-8">
        <HeroSection
          title="Scale Your Agency Success"
          description="We understand the complexity of managing multiple clients with diverse needs. AdLantic equips you with the tools, insights, and support to design high-performing campaigns that exceed client expectations."
          ctaText="Get Started"
          boldClaims={boldClaims}
        />
      </div> */}
      <div className="py-8">
        <CTA />
      </div>
      <div className="py-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
