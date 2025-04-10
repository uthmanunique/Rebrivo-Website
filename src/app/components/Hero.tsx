// src/components/Hero.tsx
"use client"; // Add this since we need useState and useRouter

import { useState } from "react"; // Add useState for search input
import { useRouter } from "next/navigation"; // Add useRouter for redirection
import Image from "next/image";

const Hero: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to role-selection with the search query as a query parameter
      router.push(`/auth/role-selection?type=signup&search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section
      className="bg-cover bg-center py-12 md:py-20 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-white min-h-[80vh] mt-0 md:mt-0" // Add mt-16 for mobile to create space below the fixed header
      style={{ backgroundImage: "url('/hero_bg.png')" }}
    >
      <div className="w-full md:max-w-[50%] flex flex-col gap-8 md:gap-10 text-left">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          The Marketplace for Buying and Selling Businesses
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          Find verified businesses, shelf companies and investment opportunities with secure transactions and expert support.
        </p>
        <div className="w-full max-w-[500px]">
          <form onSubmit={handleSearch} className="relative w-full">
            <div className="relative">
              <Image
                src="/search.png"
                alt="Search"
                width={16}
                height={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10"
              />
              <input
                type="text"
                placeholder="Try Retail, Fintech, Oil & Gas, etc."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-10 pr-4 md:pr-[180px] border border-white rounded-md bg-transparent text-white placeholder-[#7F60F9] text-sm focus:outline-none focus:border-[#F26E52]"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto mt-2 md:mt-0 md:absolute md:right-1 md:top-1/2 md:-translate-y-1/2 bg-white text-[#011631] py-2 px-4 md:px-6 rounded-md font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors text-sm"
            >
              Find a Business to Buy
            </button>
          </form>
        </div>
        <div className="mt-6">
          <p className="font-bold text-sm mb-1">Trusted by 50k+ users</p>
          <div className="flex items-center gap-2">
            <span className="text-[#F26E52] text-sm">★★★★★</span>
            <span className="text-sm">4.1/5 (14k Reviews)</span>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex justify-center w-full md:w-auto">
        <Image
          src="/Image.png"
          alt="Profile"
          width={351}
          height={500}
          className="object-scale-down"
        />
      </div>
    </section>
  );
};

export default Hero;
