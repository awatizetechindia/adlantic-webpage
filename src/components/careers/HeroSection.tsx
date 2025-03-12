// import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="border-4 sm:border-4 border-primary p-4 sm:p-6 md:p-8">
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-primary pb-4 sm:pb-6 md:pb-12">
          <h1 className="pb-1">Join Our Team of</h1> Digital Innovatiors
        </div>

        <div className="space-y-2 sm:space-y-3 md:space-y-4 text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 font-medium">
            Be part of a dynamic team that&apos;s shaping the future of digital
            marketing. We&apos;re always looking for passionate individuals who
            bring fresh perspective and innovative ideas
          </p>
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
