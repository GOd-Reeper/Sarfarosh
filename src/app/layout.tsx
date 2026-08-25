import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarfarosh — Events • Experiences • Production",
  description:
    "Sarfarosh is an event management, production, entertainment, and experiential company. From government and corporate events to brand activations, cultural programs, and live entertainment — we create experiences people remember.",
  keywords: [
    "event management Indore",
    "event production company",
    "brand activations",
    "government events Madhya Pradesh",
    "corporate event management",
    "entertainment company Indore",
    "Sarfarosh",
  ],
  openGraph: {
    title: "Sarfarosh — Events • Experiences • Production",
    description:
      "We create experiences that move people. Event management, production, entertainment, and activations from concept to execution.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
