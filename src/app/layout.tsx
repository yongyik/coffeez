import Nav from "@/components/Nav";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Component Library",
  description: "Demo for personal components",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
