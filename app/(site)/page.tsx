import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Kallista IT",
  description: "Kallista IT Services",
  keywords: "Kallista corp services, Kallista it services, web development company, it management company, e-commerce development company, creatives company",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <Integration />
      <FAQ />
      <Testimonial />
      <Pricing />
    </main>
  );
}
