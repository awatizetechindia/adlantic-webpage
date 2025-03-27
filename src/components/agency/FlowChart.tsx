"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Arrow: React.FC<{
  direction: "left" | "right" | "down" | "up";
  className?: string;
}> = ({ direction, className }) => {
  const rotation = {
    left: "rotate-90",
    right: "-rotate-90",
    down: "",
    up: "rotate-180",
  };

  return (
    <Image
      src="/arrow.svg"
      width={30}
      height={10}
      alt={`${direction} arrow`}
      className={`absolute ${rotation[direction]} ${className}`}
    />
  );
};

const FlowBlock: React.FC<{
  title: string;
  items: string[];
  arrowDirection?: "left" | "right" | "down" | "up";
  arrowClassName?: string;
}> = ({ title, items, arrowDirection, arrowClassName }) => (
  <div className="relative bg-white p-6">
    <h3 className="bg-primary text-white p-2 mb-4 text-center font-black text-xl sm:text-2xl md:text-3xl">
      {title}
    </h3>
    <ul className="list-disc pl-6 sm:pl-12 space-y-2 font-medium text-base sm:text-lg md:text-xl">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {arrowDirection && (
      <Arrow direction={arrowDirection} className={arrowClassName} />
    )}
  </div>
);

const FlowChart: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [blocks, setBlocks] = useState([
    {
      title: "Publisher Joins DSP",
      items: ["Signs up & gets approved", "Sets up payment details"],
      arrowDirection: "right",
    },
    {
      title: "Dashboard Overview",
      items: ["Earnings summary", "Active campaigns", "Performance metrics"],
      arrowDirection: "right",
    },
    {
      title: "Campaign Selection",
      items: [
        "Advertisers' offers",
        "Commission structure (CPA, CPC, Rev-Share)",
        "Ad formats (Banners, Native, Pop-ups)",
      ],
      arrowDirection: "down",
    },
    {
      title: "Payout & Earnings",
      items: [
        "Payment modes (Bank Transfer, PayPal, Crypto)",
        "Withdrawal schedules",
        "Earnings reports",
      ],
      arrowDirection: undefined,
    },
    {
      title: "Tracking & Reporting",
      items: [
        "Unique affiliate links",
        "Conversion tracking",
        "Click-through rates (CTR), impressions",
      ],
      arrowDirection: "left",
    },
    {
      title: "Performance Analysis",
      items: [
        "Real-time reports",
        "Best-performing campaigns",
        "User demographics",
      ],
      arrowDirection: "left", // No arrow for the last block
    },
  ]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      //   setBlocks([
      //     {
      //       title: "Publisher Joins DSP",
      //       items: ["Signs up & gets approved", "Sets up payment details"],
      //       arrowDirection: "right",
      //     },
      //     {
      //       title: "Dashboard Overview",
      //       items: [
      //         "Earnings summary",
      //         "Active campaigns",
      //         "Performance metrics",
      //       ],
      //       arrowDirection: "right",
      //     },
      //     {
      //       title: "Campaign Selection",
      //       items: [
      //         "Advertisers' offers",
      //         "Commission structure (CPA, CPC, Rev-Share)",
      //         "Ad formats (Banners, Native, Pop-ups)",
      //       ],
      //       arrowDirection: "down",
      //     },
      //     {
      //       title: "Tracking & Reporting",
      //       items: [
      //         "Unique affiliate links",
      //         "Conversion tracking",
      //         "Click-through rates (CTR), impressions",
      //       ],
      //       arrowDirection: "left",
      //     },
      //     {
      //       title: "Performance Analysis",
      //       items: [
      //         "Real-time reports",
      //         "Best-performing campaigns",
      //         "User demographics",
      //       ],
      //       arrowDirection: "left", // No arrow for the last block
      //     },
      //     {
      //       title: "Payout & Earnings",
      //       items: [
      //         "Payment modes (Bank Transfer, PayPal, Crypto)",
      //         "Withdrawal schedules",
      //         "Earnings reports",
      //       ],
      //       arrowDirection: undefined,
      //     },
      //   ]);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust order for mobile
  const mobileOrder = isMobile ? [0, 1, 2, 4, 5, 3] : [0, 1, 2, 3, 4, 5];

  return (
    <div className="bg-primary p-6 sm:p-8 md:p-12">
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20">
        {mobileOrder.map((index) => (
          <FlowBlock
            key={index}
            title={blocks[index].title}
            items={blocks[index].items}
            arrowDirection={
              blocks[index].arrowDirection as
                | "left"
                | "right"
                | "down"
                | "up"
                | undefined
            }
            arrowClassName={
              blocks[index].arrowDirection === "right"
                ? "hidden md:block absolute top-1/2 -right-10 -translate-y-1/2"
                : blocks[index].arrowDirection === "left"
                ? "hidden md:block absolute top-1/2 -left-10 -translate-y-1/2 rotate-90"
                : "hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FlowChart;
