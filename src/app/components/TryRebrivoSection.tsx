// src/components/TryRebrivoSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Add useRouter for programmatic navigation
import Loader from "@/app/components/Loader"; // Import Loader component
// import { toast } from "react-toastify"; // Optional: Import toast for future use

const TryRebrivoSection: React.FC = () => {
  const router = useRouter();
  const [sellerLoading, setSellerLoading] = useState(false); // Loading state for Seller CTA
  const [buyerLoading, setBuyerLoading] = useState(false); // Loading state for Buyer CTA

  const handleSellerClick = () => {
    setSellerLoading(true);
    // Optional: Add an API call here if needed, e.g., to check eligibility
    // try {
    //   await someApiCall();
    //   toast.success("Seller registration initiated!", { position: "top-right", autoClose: 2000 });
    //   router.push("/auth/signup?role=seller");
    // } catch {
    //   toast.error("Failed to initiate seller registration.", { position: "top-right", autoClose: 3000 });
    //   setSellerLoading(false);
    // }
    router.push("/auth/signup?role=seller"); // Direct navigation
    setTimeout(() => setSellerLoading(false), 500); // Reset loading after a short delay (simulating navigation)
  };

  const handleBuyerClick = () => {
    setBuyerLoading(true);
    // Optional: Add an API call here if needed
    // try {
    //   await someApiCall();
    //   toast.success("Buyer registration initiated!", { position: "top-right", autoClose: 2000 });
    //   router.push("/auth/signup?role=buyer");
    // } catch {
    //   toast.error("Failed to initiate buyer registration.", { position: "top-right", autoClose: 3000 });
    //   setBuyerLoading(false);
    // }
    router.push("/auth/signup?role=buyer"); // Direct navigation
    setTimeout(() => setBuyerLoading(false), 500); // Reset loading after a short delay
  };

  return (
    <section
      className="relative h-auto min-h-[150px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/trybg.png')" }}
    >
      {/* Background overlay (commented out as in original) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> */}

      {/* Main content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 pt-2 pb-0">
        {/* Left Side: Image */}
        <div className="flex-1 flex justify-center items-end p-0 mt-2">
          <Image
            src="/try.png"
            alt="Try Rebrivo Visual"
            width={350}
            height={350}
            className="object-scale-down object-bottom"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 text-white p-4">
          <h2 className="font-inter text-3xl md:text-4xl font-semibold mb-4">Try Rebrivo Today</h2>
          <p className="font-inter text-base md:text-lg mb-5 leading-relaxed max-w-md">
            Whether you’re a business owner looking to sell, an investor seeking a new opportunity,
            or an entrepreneur ready for your next venture, Rebrivo is your trusted partner in business
            acquisitions. Ready To Get Started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSellerClick}
              className="bg-[#F26E52] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#e65a3e] transition text-center flex items-center justify-center disabled:opacity-50"
              disabled={sellerLoading}
            >
              {sellerLoading && <Loader />}
              Register as a Seller
            </button>
            <button
              onClick={handleBuyerClick}
              className="bg-transparent text-[#F26E52] border-2 border-[#F26E52] py-3 px-6 rounded-lg font-semibold hover:bg-[#F26E52] hover:text-white transition text-center flex items-center justify-center disabled:opacity-50"
              disabled={buyerLoading}
            >
              {buyerLoading && <Loader />}
              Register as a Buyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryRebrivoSection;
