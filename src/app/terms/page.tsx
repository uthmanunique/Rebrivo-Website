// src/app/terms/page.tsx
"use client"; // Mark as Client Component if interactivity is needed

import type { NextPage } from "next";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe"; // Add Subscribe component to the page (optional)
import Footer from "../components/Footer";
import TermsSection from "../components/TermsSection";
const Terms: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-20 md:pt-24">
      <TermsSection />
      </main>
      <Subscribe /> {/* Constant across screens */}
      <Footer /> {/* Constant across screens */}
    </div>
  );
};

export default Terms;