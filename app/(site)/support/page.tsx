import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us - Kallista Tech Solutions",
  description: "Send us a message. Kallista Tech Solutions",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
