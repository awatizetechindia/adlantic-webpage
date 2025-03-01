// import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="border-4 border-primary p-8">
      <div className="text-center space-y-6">
        <div className="text-4xl md:text-7xl font-black text-primary pb-12">
          <h1 className="pb-1">Join Our Team of</h1> Digital Innovatiors
        </div>

        <div className="space-y-4 text-primary text-3xl font-medium">
          <p className="px-32 font-medium">
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
