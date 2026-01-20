// src\app\layout.tsx
import Nav from "../components/Nav";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import { AuthProvider } from "@/contexts/UserContext";

export const metadata = {
  title: "My coffee",
  description: "My Coffee - 记录咖啡灵感",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/background/bg-all.jpg"
            alt="背景"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
 <AuthProvider>
        <div className="relative z-10">
         
            <Nav />

            {children}

            <Footer />
         
        </div> </AuthProvider>
      </body>
    </html>
  );
}
