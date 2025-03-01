"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const trustFeatures = [
  "Real Time Performance Tracking",
  "High Converting Offers",
  "Timely Payouts and flexible payment methods",
  "Accurate and prompt validation with 100% Transparency",
  "24/7 Technical Support",
  "Advanced Analytics Dashboard",
  "Custom Campaign Solutions",
  "Global Reach and Scale",
];

const VISIBLE_FEATURES = 4;

const TrustFeatures: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const canScrollUp = startIndex > 0;
  const canScrollDown = startIndex + VISIBLE_FEATURES < trustFeatures.length;

  const handleScrollUp = () => {
    if (canScrollUp) {
      setStartIndex((prev) => prev - 4);
    }
  };

  const handleScrollDown = () => {
    if (canScrollDown) {
      setStartIndex((prev) => prev + 4);
    }
  };

  const visibleFeatures = trustFeatures.slice(
    startIndex,
    startIndex + VISIBLE_FEATURES
  );

  return (
    <div className="flex flex-col flex-1 bg-primary pt-6 px-12 text-white">
      <div>
        <h2 className="text-5xl font-bold mb-12">Trust</h2>
        <div className="relative min-h-[200px]">
          <button
            onClick={handleScrollUp}
            className={`absolute -top-8 right-0 p-2 transition-opacity ${
              canScrollUp ? "opacity-100" : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollUp}
          >
            <ChevronUp size={40} />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.ul
                className="space-y-8 pl-6 text-xl list-disc"
                initial={false}
              >
                {visibleFeatures.map((feature, index) => (
                  <motion.li
                    key={startIndex + index}
                    initial={{
                      opacity: 0,
                      y: index === 0 ? -20 : 20,
                      rotateX: index === 0 ? -45 : 45,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: index === 0 ? 20 : -20,
                      rotateX: index === 0 ? 45 : -45,
                    }}
                    className="transform-gpu"
                    style={{
                      transformOrigin: index === 0 ? "top" : "bottom",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <button
            onClick={handleScrollDown}
            className={`absolute -bottom-8 right-0 p-2 transition-opacity ${
              canScrollDown ? "opacity-100" : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollDown}
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustFeatures;
