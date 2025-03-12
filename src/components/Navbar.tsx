"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => isOpen && setIsOpen(false);
    const handleRouteChange = () => setIsOpen(false);

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
      // Prevent body scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
      document.body.style.overflow = "auto";
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
        className="text-primary text-4xl sm:text-5xl font-black focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Overlay */}
      <div
        className={`fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] bg-white transition-transform duration-500 overflow-auto ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center h-full p-6">
          {/* Mobile Layout (visible only on small screens) */}
          <div className="block md:hidden w-full max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  href: "/careers",
                  title: "Career",
                  imgTop: "line-art-of-trust.png",
                  imgBottom: "people-explaining-on-white-board.png",
                },
                {
                  href: "/support",
                  title: "Support",
                  imgTop: "flowers.png",
                  imgBottom: "line-art-of-people-in-office.png",
                },
                {
                  href: "/about",
                  title: "About",
                  imgTop: "line-art-of-support-team.png",
                  imgBottom: "line-art-of-people-in-office.png",
                },
              ].map(({ href, title, imgTop, imgBottom }, index) => (
                <Link
                  key={`mobile-${index}`}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="bg-white border-primary border-4 rounded-lg p-3 hover:scale-105 transition-transform"
                >
                  <div className="flex items-center justify-between">
                    <Image
                      src={`/assets/${imgTop}`}
                      alt={`${title} Top`}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] object-contain"
                    />
                    <h2 className="text-2xl font-bold text-blue-600 mx-4">
                      {title}
                    </h2>
                    <Image
                      src={`/assets/${imgBottom}`}
                      alt={`${title} Bottom`}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Layout (original design, visible on medium screens and up) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
            {[
              {
                href: "/careers",
                title: "Career",
                imgTop: "line-art-of-trust.png",
                imgBottom: "people-explaining-on-white-board.png",
              },
              {
                href: "/support",
                title: "Support",
                imgTop: "flowers.png",
                imgBottom: "line-art-of-people-in-office.png",
              },
              {
                href: "/about",
                title: "About",
                imgTop: "line-art-of-support-team.png",
                imgBottom: "line-art-of-people-in-office.png",
              },
            ].map(({ href, title, imgTop, imgBottom }, index) => (
              <Link
                key={`desktop-${index}`}
                href={href}
                onClick={() => setIsOpen(false)}
                className="space-y-4 bg-white border-primary border-8 rounded-lg p-6 hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={`/assets/${imgTop}`}
                    alt={`${title} Top`}
                    width={150}
                    height={150}
                    className="mb-4"
                  />
                  <h2 className="text-3xl font-bold text-blue-600">{title}</h2>
                  <Image
                    src={`/assets/${imgBottom}`}
                    alt={`${title} Bottom`}
                    width={150}
                    height={150}
                    className="mt-4"
                  />
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
