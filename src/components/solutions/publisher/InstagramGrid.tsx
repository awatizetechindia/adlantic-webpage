import React from "react";

const InstagramGrid = () => {
  return (
    <div className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <button
              key={index}
              className="bg-white text-primary py-3 px-6 font-semibold hover:bg-blue-50 transition-colors"
            >
              Open Instagram
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramGrid;
