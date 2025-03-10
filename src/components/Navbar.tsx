"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => isOpen && setIsOpen(false);
    const handleRouteChange = () => setIsOpen(false);

    if (isOpen) window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white fixed z-50 w-full p-4 flex justify-between items-center border-b-8 border-blue-600">
      {/* Logo */}
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Image src="/adlantic.svg" alt="Adlantic" width={60} height={60} />
      </Link>

      {/* Menu Toggle Button */}
      <button
        className="text-primary text-4xl sm:text-5xl font-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
            {[
              { href: "/careers", title: "Career", imgTop: "line-art-of-trust.png", imgBottom: "people-explaining-on-white-board.png" },
              { href: "/support", title: "Support", imgTop: "flowers.png", imgBottom: "line-art-of-people-in-office.png" },
              { href: "/about", title: "About", imgTop: "line-art-of-support-team.png", imgBottom: "line-art-of-people-in-office.png" },
            ].map(({ href, title, imgTop, imgBottom }, index) => (
              <Link
                key={index}
                href={href}
                onClick={() => setIsOpen(false)}
                className="space-y-4 bg-white border-primary border-8 rounded-lg p-6 hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center">
                  <Image src={`/assets/${imgTop}`} alt={`${title} Top`} width={150} height={150} className="mb-4" />
                  <h2 className="text-3xl font-bold text-blue-600">{title}</h2>
                  <Image src={`/assets/${imgBottom}`} alt={`${title} Bottom`} width={150} height={150} className="mt-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
