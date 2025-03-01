import React from "react";
import Image from "next/image";

const FlowChart: React.FC = () => {
  return (
    <div className="bg-primary p-8">
      <div className="relative grid grid-cols-3 gap-20 ">
        {/* First Row */}
        <div className="relative bg-white p-6">
          <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-3xl">
            Publisher Joins DSP
          </h3>
          <ul className="list-disc pl-12 space-y-2 font-medium text-xl">
            <li>Signs up & gets approved</li>
            <li>Sets up payment details</li>
          </ul>
          {/* Right Arrow */}
          <Image
            src="/arrow.svg"
            width={40}
            height={12}
            alt="Right arrow"
            className="absolute top-1/2 -right-10 -translate-y-1/2 -rotate-90"
          />
        </div>

        <div className="relative bg-white p-6">
          <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-3xl">
            Dashboard Overview
          </h3>
          <ul className="list-disc pl-12 space-y-2 font-medium text-xl">
            <li>Earnings summary</li>
            <li>Active campaigns</li>
            <li>Performance metrics</li>
          </ul>
          {/* Right Arrow */}
          <Image
            src="/arrow.svg"
            width={40}
            height={12}
            alt="Right arrow"
            className="absolute top-1/2 -right-10 -translate-y-1/2 -rotate-90"
          />
        </div>

        <div className="relative bg-white p-6">
          <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-3xl">
            Campaign Selection
          </h3>
          <ul className="list-disc pl-12 space-y-2 font-medium text-xl">
            <li>Advertisers&apos; offers</li>
            <li>
              Commission structure
              <br />
              (CPA, CPC, Rev-Share)
            </li>
            <li>
              Ad formats
              <br />
              (Banners, Native, Pop-ups)
            </li>
          </ul>
          {/* Down Arrow */}
          <Image
            src="/arrow.svg"
            width={40}
            height={12}
            alt="Down arrow"
            className="absolute -bottom-[70px] left-1/2 -translate-x-1/2"
          />
        </div>

        {/* Second Row */}
        <div className="relative bg-white p-6">
          <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-3xl">
            Performance Analysis
          </h3>
          <ul className="list-disc pl-12 space-y-2 font-medium text-xl">
            <li>Real-time reports</li>
            <li>Best-performing campaigns</li>
            <li>User demographics</li>
          </ul>
          {/* Down Arrow */}
          <Image
            src="/arrow.svg"
            width={40}
            height={12}
            alt="Down arrow"
            className="absolute -bottom-[70px] left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="relative bg-white p-6">
          <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-3xl">
            Traffic Management
          </h3>
          <ul className="list-disc pl-12 space-y-2 font-medium text-xl">
            <li>
              Choose traffic sources
              <br />
              (SEO, PPC, Social Media)
            </li>
            <li>Optimize based on ROI</li>
          </ul>
          {/* Left Arrow */}
          <Image
            src="/arrow.svg"
            width={40}
            height={12}
            alt="Left arrow"
            className="absolute top-1/2 -left-10 -translate-y-1/2 rotate-90"
          />
        </div>

        <div className="relative bg-white p-6">
          <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-3xl">
            Tracking & Reporting
          </h3>
          <ul className="list-disc pl-12 space-y-2 font-medium text-xl">
            <li>Unique affiliate links</li>
            <li>Conversion tracking</li>
            <li>
              Click-through rates
              <br />
              (CTR), impressions
            </li>
          </ul>
          {/* Left Arrow */}
          <Image
            src="/arrow.svg"
            width={40}
            height={12}
            alt="Left arrow"
            className="absolute top-1/2 -left-10 -translate-y-1/2 rotate-90"
          />
        </div>

        {/* Third Row */}
        <div className="bg-white p-6">
          <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-3xl">
            Payout & Earnings
          </h3>
          <ul className="list-disc pl-12 space-y-2 font-medium text-xl">
            <li>
              Payment modes
              <br />
              (Bank Transfer, PayPal, Crypto)
            </li>
            <li>Withdrawal schedules</li>
            <li>Earnings reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
