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

// Fixed number of visible features regardless of screen size
const VISIBLE_FEATURES = 4;

const TrustFeatures: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const canScrollUp = startIndex > 0;
  const canScrollDown = startIndex + VISIBLE_FEATURES < trustFeatures.length;

  const handleScrollUp = () => {
    if (canScrollUp) {
      setStartIndex((prev) => prev - 4); // Scroll one item at a time for smoother experience
    }
  };

  const handleScrollDown = () => {
    if (canScrollDown) {
      setStartIndex((prev) => prev + 4); // Scroll one item at a time for smoother experience
    }
  };

  const currentVisibleFeatures = trustFeatures.slice(
    startIndex,
    startIndex + VISIBLE_FEATURES
  );

  return (
    <div className="flex flex-col flex-1 bg-primary rounded-md shadow-lg py-6 px-4 sm:px-6 md:px-8 lg:px-12 text-white">
      <div className="flex flex-col h-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          Trust
        </h2>

        {/* Feature list container with fixed height */}
        <div className="relative flex-grow flex flex-col">
          {/* Navigation controls - top */}
          <div className="flex justify-end mb-2">
            <button
              onClick={handleScrollUp}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 transition-all ${
                canScrollUp ? "opacity-100" : "opacity-40 cursor-not-allowed"
              }`}
              disabled={!canScrollUp}
              aria-label="Scroll up"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          </div>

          {/* Features list with fixed height container */}
          <div className="flex-grow overflow-hidden relative mb-2">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.ul
                className="space-y-4 pl-5 text-base sm:text-lg md:text-xl list-disc"
                initial={false}
              >
                {currentVisibleFeatures.map((feature, index) => (
                  <motion.li
                    key={`feature-${startIndex + index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: index * 0.05 },
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    className="py-1"
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/* Navigation controls - bottom */}
          <div className="flex justify-end mt-2">
            <button
              onClick={handleScrollDown}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 transition-all ${
                canScrollDown ? "opacity-100" : "opacity-40 cursor-not-allowed"
              }`}
              disabled={!canScrollDown}
              aria-label="Scroll down"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4 gap-1">
            {Array.from({
              length: Math.ceil(trustFeatures.length / VISIBLE_FEATURES),
            }).map((_, idx) => (
              <div
                key={`indicator-${idx}`}
                className={`w-2 h-2 rounded-full ${
                  Math.floor(startIndex / VISIBLE_FEATURES) === idx
                    ? "bg-white"
                    : "bg-blue-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustFeatures;
