import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rosella Imports - Your Trusted Shipping Partner",
  description:
    "Welcome to Rosella Imports, your one-stop destination for all your shipping needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-[var(--font-poppins)] min-h-screen flex flex-col bg-[#06111f] text-white`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}