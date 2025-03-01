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
    <div className="px-12">
      <div className="py-8">
        <HeroSection />
      </div>
      <div className="flex justify-between gap-20 py-8">
        <div className="border-primary border-4 p-8 text-primary text-2xl">
          <h1 className="text-4xl font-bold pb-4">Our Mission</h1>
          <p className="text-2xl font-medium">
            To transform digital marketing through innovation and
            intelligence,empowering businesses with data-driven strategies that
            maximize performance and growth.
          </p>
        </div>
        <div className="bg-primary border-primary border-4 p-8 text-white text-2xl">
          <h1 className="text-4xl font-bold pb-4">Our Vision</h1>
          <p className="text-2xl font-medium">
            To be the global leader in performance-driven marketing, setting new
            benchmarks for transparency, efficiency, and client success through
            advanced technology and strategic expertise.
          </p>
        </div>
      </div>
      <div className="py-8">
        <div className="bg-primary py-16 text-6xl text-center font-bold text-white border-primary">
          What Makes Us Different
        </div>
      </div>

      <div className="py-8">
        <Stuff />
      </div>
      <div className="py-8">
        <div className="bg-primary py-16 text-6xl text-center font-bold text-white border-primary">
          About Adlantic
        </div>
      </div>
      <div className="py-8">
        <AboutAdlanticStats />
      </div>

      <div className="py-8">
        <div className="bg-primary py-16 px-8 text-6xl  font-bold text-white border-primary">
          <h1 className="pb-4">Success Stories</h1>

          <p className="text-3xl font-medium text-white">
            See how we&apos;ve helped businesses achieve extraordinary results
            through innovative digital strategies.
          </p>
        </div>
      </div>
      <div className="py-8 grid grid-cols-3 gap-4">
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
      <div className="py-8">
        <div className="p-8 md:px-[290px] bg-primary text-white">
          <h1 className="text-6xl font-bold pb-10">
            Ready to start your journey?
          </h1>
          <p className="font-medium text-3xl pb-10">
            Let AdLantic be your partner in success. Together, we&apos;ll turn
            ideas into action and strategies into stories worth celebrating.
          </p>
          <div className="w-full flex justify-between">
            <div className="bg-white text-primary px-6 py-3 font-bold text-4xl">
              {" "}
              Contact Us &gt;
            </div>
            <div className="bg-primary border-white border-4 text-white font-bold text-4xl px-6 py-3">
              View Services &gt;
            </div>
          </div>
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
