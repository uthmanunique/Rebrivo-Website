// src/app/page.tsx
import type { NextPage } from "next";
import Hero from "./components/Hero";
import OurPartner from "./components/OurPatner";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe"; // Add Subscribe component to the page (optional)
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Constant across screens */}
      <main className="flex-grow pt-20 md:pt-16">
        <Hero />
        <OurPartner />
        <HowItWorks />
        <Testimonials />
      </main>
      <Subscribe /> {/* Constant across screens */}
      <Footer /> {/* Constant across screens */}
    </div>
  );
};

export default Home;
