import Image from "next/image";

export const Stuff = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-8">
      {/* <div className="bg-primary col-span-3 w-full h-[350px]"></div> */}
      <Image
        src="/assets/linkedin.png"
        height={1000}
        width={1000}
        className="col-span-3 w-full h-[350px] object-contain"
        alt="linkedin"
      />
      <div className="bg-white col-span-2 p-8 text-primary border-primary border-4 w-full h-[350px]">
        <h1 className="text-4xl font-bold pb-4">Unmatched Expertise</h1>
        <p className="text-3xl font-medium">
          Our team of industry veterans brings innovation, precision, and
          adaptability to every project. We turn insights into powerful
          marketing strategies that drive real results.
        </p>
      </div>
      <div className="bg-white p-8 col-span-3 text-primary border-primary border-4 w-full h-[350px]">
        {" "}
        <h1 className="text-4xl font-bold pb-4">Data-Powered Innovation</h1>
        <p className="text-3xl font-medium">
          Leveraging advanced analytics, AI-driven solutions, and scalable
          technology, we deliver targeted traffic that fuels business success,
          whether for brand awareness or performance campaigns.
        </p>
      </div>
      <Image
        src="/assets/people-explaining-on-white-board-different.png"
        height={1000}
        width={1000}
        className="col-span-2 w-full h-[350px] object-contain"
        alt="linkedin"
      />
      <Image
        src="/assets/linkedin.png"
        height={1000}
        width={1000}
        className="col-span-3 w-full h-[350px] object-contain"
        alt="linkedin"
      />
      <div className="border-primary p-8 col-span-2 border-4 w-full h-[350px]">
        {" "}
        <h1 className="text-4xl font-bold pb-4">Commitment to Growth</h1>
        <p className="text-3xl font-medium">
          We prioritize long-term client success by continuously refining
          strategies, optimizing performance, and ensuring every marketing
          investment translates into tangible outcomes.
        </p>
      </div>
    </div>
  );
};
export default Stuff;
