// import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="border-2 sm:border-4 border-primary p-4 sm:p-6 md:p-8">
      <div className="text-center space-y-4 sm:space-y-6">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary pb-6 sm:pb-8 md:pb-12">
          <h1 className="pb-1">Redefining Digital Marketing</h1> for Maximum
          Impact
        </div>

        <div className="space-y-2 sm:space-y-4 text-primary text-lg sm:text-xl md:text-2xl">
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 font-medium">
            Adlantic delivers cutting-edge marketing solutions designed for
            scale, precision, and performance. With a vast network of trusted
            publishers, we drive millions of impressions daily, ensuring your
            brand reaches the right audience at the perfect moment. Our
            data-driven approach guarantees measurable success, helping brands
            and agencies achieve unparalleled growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl px-4 py-2">
            Innovation First
          </div>
          <div className="bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl px-4 py-2">
            Client Success
          </div>
          <div className="bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl px-4 py-2">
            Data-Driven
          </div>
          <div className="bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl px-4 py-2">
            Transparency
          </div>
          <div className="bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl px-4 py-2">
            Continuous Growth
          </div>
          <div className="bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl px-4 py-2">
            Global Reach
          </div>
        </div>
        {/* <Link
                href="/contact"
                className="text-4xl inline-block bg-primary text-white px-44 py-4 font-semibold hover:bg-blue-700 transition-colors"
              >
                CTA
              </Link> */}
      </div>
    </section>
  );
}
