import React from "react";
import TrustHeading from "./TrustHeading";
import TrustFeatures from "./TrustFeatures";

const Trust: React.FC = () => {
  return (
    <div className="flex gap-8 w-full">
      <TrustHeading />
      <TrustFeatures />
    </div>
  );
};

export default Trust;
