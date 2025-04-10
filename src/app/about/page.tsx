// src/app/about/page.tsx
"use client"; // Mark as Client Component if interactivity is needed

import type { NextPage } from "next";
import AboutUsSection from "../components/AboutUsSection"; // Adjusted path
import Header from "../components/Header";
import Subscribe from "../components/Subscribe"; // Add Subscribe component to the page (optional)
import Footer from "../components/Footer";
import OurStorySection from "../components/OurStorySection"; // Adjusted path
import TryRebrivoSection from "../components/TryRebrivoSection"; // Adjusted path
import WhatWeOfferSection from "../components/WhatWeOfferSection"; // Adjusted path
import WhyChooseRebrivoSection from "../components/WhyChooseRebrivoSection"; // Adjusted path

const About: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-20 md:pt-24">
        <AboutUsSection />
        <OurStorySection />
        <TryRebrivoSection />
        <WhatWeOfferSection />
        <WhyChooseRebrivoSection />
      </main>
      <Subscribe /> {/* Constant across screens */}
      <Footer /> {/* Constant across screens */}
    </div>
  );
};

export default About;