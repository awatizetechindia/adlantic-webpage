import Image from "next/image";

export const Stuff = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 lg:gap-8">
      {/* First Row - Image Left, Text Right */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
        <div className="w-full sm:w-3/5">
          <Image
            src="/assets/linkedin.png"
            height={1000}
            width={1000}
            className="w-full h-[200px] sm:h-[250px] lg:h-[350px] object-contain"
            alt="linkedin"
          />
        </div>
        <div className="w-full sm:w-2/5 bg-white p-4 sm:p-6 md:p-8 text-primary border-primary border-4 h-auto sm:h-[250px] lg:h-[350px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2 sm:pb-3">
            Unmatched Expertise
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium">
            Our team of industry veterans brings innovation, precision, and
            adaptability to every project. We turn insights into powerful
            marketing strategies that drive real results.
          </p>
        </div>
      </div>

      {/* Second Row - Text Left, Image Right */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
        <div className="order-2 sm:order-1 w-full sm:w-3/5 bg-white p-4 sm:p-6 md:p-8 text-primary border-primary border-4 h-auto sm:h-[250px] lg:h-[350px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2 sm:pb-3">
            Data-Powered Innovation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium">
            Leveraging advanced analytics, AI-driven solutions, and scalable
            technology, we deliver targeted traffic that fuels business success,
            whether for brand awareness or performance campaigns.
          </p>
        </div>
        <div className="order-1 sm:order-2 w-full sm:w-2/5">
          <Image
            src="/assets/people-explaining-on-white-board-different.png"
            height={1000}
            width={1000}
            className="w-full h-[200px] sm:h-[250px] lg:h-[350px] object-contain"
            alt="people explaining"
          />
        </div>
      </div>

      {/* Third Row - Image Left, Text Right */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
        <div className="w-full sm:w-3/5">
          <Image
            src="/assets/linkedin.png"
            height={1000}
            width={1000}
            className="w-full h-[200px] sm:h-[250px] lg:h-[350px] object-contain"
            alt="linkedin"
          />
        </div>
        <div className="w-full sm:w-2/5 border-primary p-4 sm:p-6 md:p-8 border-4 h-auto sm:h-[250px] lg:h-[350px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2 sm:pb-3">
            Commitment to Growth
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium">
            We prioritize long-term client success by continuously refining
            strategies, optimizing performance, and ensuring every marketing
            investment translates into tangible outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stuff;
