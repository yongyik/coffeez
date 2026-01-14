import Nav from "@/components/Nav";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "My Component Library",
  description: "Demo for personal components",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/background/bg-all.jpg"
            alt="背景"
            fill
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10">

        <Nav />
        {children}
        <Footer />


        </div>






      </body>
    </html>
  );
}
