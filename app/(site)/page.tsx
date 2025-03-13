import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import HeroSection from "@/components/hero-section";

export const metadata: Metadata = {
  title: "Kallista Tech Solutions",
  description: "Kallista IT Services",
  keywords: "Kallista corp services, Kallista it services, web development company, it management company, e-commerce development company, creatives company",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Feature />
      <About />
      <FeaturesTab />
      <Integration />
      <FAQ />
      <Pricing />
    </main>
  );
}
