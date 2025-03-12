import React from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import Stuff from "@/components/about/Stuff";
import AboutAdlanticStats from "@/components/about/AboutAdlanticStats";
import CaseStudy from "@/components/CaseStudy";

const caseStudies = [
  {
    image: "/svgs/show_chart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg",
    title: "300%",
    subTitle: "TechStart Inc.",
    content: "Increase in qualified leads within 6 months",
  },
  {
    image: "/svgs/beenhere_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg",
    title: "5X",
    subTitle: "GrowthMax",
    content: "Return on ad spend for e-commerce campaign",
  },
  {
    image: "/svgs/language_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg",
    title: "200k+",
    subTitle: "EcoSolutions",
    content: "Social media followers gained in 3 months",
  },
];

const page = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="py-4 sm:py-6 md:py-8">
        <HeroSection />
      </div>

      {/* Mission and Vision - Stack on mobile, side by side on larger screens */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 lg:gap-20 py-4 sm:py-6 md:py-8">
        <div className="border-primary border-2 sm:border-4 p-4 sm:p-6 md:p-8 text-primary text-lg sm:text-xl md:text-2xl w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2 sm:pb-3 md:pb-4">
            Our Mission
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium">
            To transform digital marketing through innovation and intelligence,
            empowering businesses with data-driven strategies that maximize
            performance and growth.
          </p>
        </div>
        <div className="bg-primary border-primary border-2 sm:border-4 p-4 sm:p-6 md:p-8 text-white text-lg sm:text-xl md:text-2xl w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2 sm:pb-3 md:pb-4">
            Our Vision
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium">
            To be the global leader in performance-driven marketing, setting new
            benchmarks for transparency, efficiency, and client success through
            advanced technology and strategic expertise.
          </p>
        </div>
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <div className="bg-primary py-6 sm:py-10 md:py-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white border-primary">
          What Makes Us Different
        </div>
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <Stuff />
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <div className="bg-primary py-6 sm:py-10 md:py-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white border-primary">
          About Adlantic
        </div>
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <AboutAdlanticStats />
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <div className="bg-primary py-6 sm:py-10 md:py-16 px-4 sm:px-6 md:px-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white border-primary">
          <h1 className="pb-2 sm:pb-3 md:pb-4">Success Stories</h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white">
            See how we&apos;ve helped businesses achieve extraordinary results
            through innovative digital strategies.
          </p>
        </div>
      </div>

      {/* Case studies - 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="py-4 sm:py-6 md:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {caseStudies.map((study, index) => (
          <CaseStudy
            key={index}
            image={study.image}
            title={study.title}
            subTitle={study.subTitle}
            content={study.content}
          />
        ))}
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <div className="p-4 sm:p-6 md:p-8 bg-primary text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-4 sm:pb-6 md:pb-10">
            Ready to start your journey?
          </h1>
          <p className="font-medium text-xl sm:text-2xl md:text-3xl pb-4 sm:pb-6 md:pb-10">
            Let AdLantic be your partner in success. Together, we&apos;ll turn
            ideas into action and strategies into stories worth celebrating.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:justify-between">
            <div className="bg-white text-primary px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 font-bold text-2xl sm:text-3xl md:text-4xl">
              Contact Us &gt;
            </div>
            <div className="bg-primary border-white border-2 sm:border-4 text-white font-bold text-2xl sm:text-3xl md:text-4xl px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3">
              View Services &gt;
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <div className="border-2 sm:border-4 border-primary text-center p-6 sm:p-8 md:p-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary">
            AdLantic
          </h1>
        </div>
      </div>

      <div className="py-4 sm:py-6 md:py-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
