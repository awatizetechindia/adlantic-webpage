import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";
import Navbar from "@/components/Navbar";

const kanit = Kanit({
  subsets: ["latin"], // Specify the character set
  weight: ["400", "500", "700"], // Choose specific weights
  display: "swap", // Optional: improves performance
});

export const metadata: Metadata = {
  title: "Adlantic",
  description: "Your Next M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${kanit.className} antialiased`}>
        <Navbar />
        <div className="h-32"></div>
        {children}
      </body>
    </html>
  );
}
