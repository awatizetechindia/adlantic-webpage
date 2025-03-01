import Image from "next/image";
import React from "react";

const TrustHeading: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Image
        src="/assets/people-working-on-computer.png"
        alt="Trust"
        width={1000}
        height={1000}
        className="h-[500px] w-[500px]"
      ></Image>
      {/* <h1 className="text-primary text-5xl font-bold leading-tight">
        How are we a Safe
        <br />
        Space for
        <br />
        Intermediate
        <br />
        Publisher?
      </h1> */}
    </div>
  );
};

export default TrustHeading;
