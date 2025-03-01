"use client";
import Image from "next/image";
// import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    const handleRouteChange = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white fixed z-20 w-full p-3 flex justify-between items-center border-b-8 border-blue-600">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Image src="/adlantic.svg" alt="Adlantic" width={72} height={72} />
      </Link>

      <button className="" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          // <X className="text-blue-900 h-24 w-24" />
          <p className="text-primary text-6xl font-black">Close</p>
        ) : (
          <p className="text-primary text-6xl font-black">Menu</p>
        )}
      </button>

      <div
        className={`fixed z-10 top-[104px] right-0 w-full h-[calc(100vh-96px)] bg-white transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Navigation Grid */}
        <div className="p-12 pt-20 max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {/* Career Section */}
          <Link
            href="/careers"
            onClick={() => setIsOpen(false)}
            className="space-y-6 rounded-lg bg-white border-primary border-8  hover:scale-105  transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center p-6">
              <Image
                src="/assets/line-art-of-trust.png"
                alt="Career Top"
                width={200}
                height={200}
                className="mb-4"
              />
              <h2 className="text-4xl font-bold text-blue-600">Career</h2>
              <Image
                src="/assets/people-explaining-on-white-board.png"
                alt="Career Bottom"
                width={200}
                height={200}
                className="mt-4"
              />
            </div>
          </Link>

          {/* Support Section */}
          <Link
            href="/support"
            onClick={() => setIsOpen(false)}
            className="space-y-6 rounded-lg bg-white border-primary border-8  hover:scale-105  transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center p-6">
              <Image
                src="/assets/flowers.png"
                alt="Support Top"
                width={200}
                height={200}
                className="mb-4"
              />
              <h2 className="text-4xl font-bold text-blue-600">Support</h2>
              <Image
                src="/assets/line-art-of-people-in-office.png"
                alt="Support Bottom"
                width={200}
                height={200}
                className="mt-4"
              />
            </div>
          </Link>

          {/* About Section */}
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="space-y-6 rounded-lg bg-white border-primary border-8  hover:scale-105  transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center p-6">
              <Image
                src="/assets/line-art-of-support-team.png"
                alt="About Top"
                width={200}
                height={200}
                className="mb-4"
              />
              <h2 className="text-4xl font-bold text-blue-600">About</h2>
              <Image
                src="/assets/line-art-of-people-in-office.png"
                alt="About Bottom"
                width={200}
                height={200}
                className="mt-4"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
