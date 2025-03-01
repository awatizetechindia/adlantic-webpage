import React from "react";

const SafeSpace = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="border-4 border-primary p-8">
        <h2 className="text-4xl md:text-5xl font-black text-primary">
          How are we a Safe Space for Intermediate Publisher?
        </h2>
      </div>
      <div className="bg-primary text-white p-8">
        <h2 className="text-4xl font-black mb-6">Trust</h2>
        <ul className="space-y-4 text-xl">
          <li>• Fearless</li>
          <li>• DSP</li>
          <li>• ETC</li>
        </ul>
      </div>
    </div>
  );
};

export default SafeSpace;
