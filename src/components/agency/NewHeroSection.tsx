import Link from "next/link";

export default function NewHeroSection() {
  return (
    <main>
      <section className="border-4 border-primary p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-primary pb-12">
            Optimizing Every Click with Data
          </h1>

          <div className="space-y-4 text-primary text-2xl font-medium">
            <p className="">
              At AdLantic, we empower agencies with data-driven performance to
              maximize ROI and scale campaigns effectively. Our DSP leverages
              real-time bidding, viewability metrics, and transparent revenue
              reporting, ensuring that every ad dollar works harder.
            </p>

            <p className="">
              Backed by Almmo, a data intelligence leader, AdLantic is more than
              just an ad network—we&apos;re your strategic partner in driving
              exceptional results.
            </p>
          </div>

          <Link
            href="/contact"
            className="text-4xl inline-block bg-primary text-white px-44 py-4 font-semibold hover:bg-blue-700 transition-colors"
          >
            CTA
          </Link>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="border-4 text-center border-primary px-8 py-12">
          <h2 className="text-3xl font-bold text-primary">
            Trusted by
            <br />
            Premium Clients
          </h2>
        </div>
        <div className="border-4 text-center border-primary px-8 py-12">
          <h2 className="text-3xl font-bold text-primary">
            Global Reach
            <br />& Scale
          </h2>
        </div>
        <div className="border-4 text-center border-primary px-8 py-12">
          <h2 className="text-3xl font-bold text-primary">
            Our DSP Powers
            <br />
            Growth
          </h2>
        </div>
      </div>
    </main>
  );
}
