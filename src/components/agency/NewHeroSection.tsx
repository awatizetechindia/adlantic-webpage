import Link from "next/link";

export default function NewHeroSection() {
  return (
    <main className="px-4 sm:px-8 lg:px-16">
      <section className="border-4 border-primary p-6 sm:p-10 lg:p-16 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary pb-6 md:pb-12 max-w-4xl mx-auto">
            Optimizing Every Click with Data
          </h1>

          <div className="space-y-4 text-primary text-lg sm:text-xl md:text-2xl font-medium max-w-4xl mx-auto">
            <p>
              At AdLantic, we empower agencies with data-driven performance to
              maximize ROI and scale campaigns effectively. Our DSP leverages
              real-time bidding, viewability metrics, and transparent revenue
              reporting, ensuring that every ad dollar works harder.
            </p>

            <p>
              Backed by Almmo, a data intelligence leader, AdLantic is more than
              just an ad network—we&apos;re your strategic partner in driving
              exceptional results.
            </p>
          </div>

          <Link
            href="/contact"
            className="text-lg sm:text-2xl md:text-3xl inline-block bg-primary text-white px-12 sm:px-20 lg:px-32 py-3 sm:py-4 font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            CTA
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-16 max-w-5xl mx-auto">
        {[
          "Trusted by Premium Clients",
          "Global Reach & Scale",
          "Our DSP Powers Growth",
        ].map((text, index) => (
          <div
            key={index}
            className="border-4 text-center border-primary px-6 sm:px-8 py-8 sm:py-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              {text.split(" ").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
