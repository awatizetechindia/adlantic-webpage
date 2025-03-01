// import Link from "next/link";

export default function NewHeroSection() {
  return (
    <section className="border-4 border-primary p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-primary pb-12">
          Where Top Publishers Meet Top Advertisers!
        </h1>

        <div className="space-y-4 text-primary text-2xl font-medium">
          <p className="">
            A Partnership That Grows with You – Whether you&apos;re an emerging
            publisher or an industry leader, our scalable solutions and
            dedicated support help you succeed at every stage. Join our network
            to connect with top-tier brands and agencies, access high-quality
            campaigns, and maximize your revenue with consistent returns.
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
