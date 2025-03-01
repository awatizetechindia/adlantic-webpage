import Link from "next/link";
import Image from "next/image";

function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center px-6 py-12">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/adlantic.svg" // You'll need to add this SVG to your public folder
            alt="404 Error"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-6xl font-black text-primary mb-4">
          404 <span className="text-orange-500 px-10">UNDER CONSTRUCTION</span>{" "}
          🏗️🚧
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Oops! It seems you&apos;ve ventured into uncharted digital territory.
          <br />
          Let&apos;s get you back on track to your marketing success.
        </p>

        <div className="space-y-6">
          <Link
            href="/"
            className="inline-block px-8 py-4 text-xl font-black text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Return to Homepage
          </Link>

          <div className="text-base text-gray-500">
            <span>Need assistance? </span>
            <Link
              href="/contact"
              className="text-primary hover:underline font-semibold"
            >
              Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
