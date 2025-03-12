import Image from "next/image";
import React from "react";

const TrustHeading: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center items-center py-4 md:py-0">
      <Image
        src="/assets/people-working-on-computer.png"
        alt="Trust"
        width={1000}
        height={1000}
        className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] object-contain"
      />
    </div>
  );
};

export default TrustHeading;
