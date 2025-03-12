import React from "react";
import Cube from "@/components/Cube/Cube2";
type ButtonProps = {
  label: string;
  href: string;
  onClick?: () => void;
};
const AuthButton = ({ label, href, onClick }: ButtonProps) => (
  <a
    href={href}
    onClick={onClick}
    className="w-full bg-primary tracking-widest text-white py-4 text-lg font-black hover:bg-blue-700 hover:scale-105 hover:shadow-xl text-center block transform transition-all duration-300 ease-in-out"
  >
    {label}
  </a>
);
const page = () => {
  return (
    <main className="flex flex-col md:flex-row md:pl-20">
      <div className="flex justify-center">
        <Cube />
      </div>
      <div className="px-8 md:px-0 py-10 md:py-20">
        <div className="flex flex-col gap-4 border-primary border-8 py-10 md:py-20 px-10 md:px-20">
          <h2 className="text-blue-700 text-2xl md:text-4xl font-black pb-5 md:pb-10">
            Already Signed?
          </h2>
          {/* <p className="text-blue-600 text-lg">Choose your account type:</p> */}
          <AuthButton label="AGENCY" href="/agency" />
          <div className="flex items-center gap-2 md:gap-4">
            <div className="h-[1px] flex-1 bg-blue-200"></div>
            <p className="text-primary text-center text-lg md:text-xl">Or</p>
            <div className="h-[1px] flex-1 bg-blue-200"></div>
          </div>
          <AuthButton label="PUBLISHER" href="/publisher" />
        </div>
      </div>
    </main>
  );
};

export default page;
