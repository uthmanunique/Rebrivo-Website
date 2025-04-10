// src/app/auth/PickRole.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
// import Image from "next/image";

const PickRole = () => {
  const router = useRouter();

  const handleSellerClick = () => {
    router.push("/auth/signup?seller=true");
  };

  const handleBuyerClick = () => {
    router.push("/auth/signup?seller=false");
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 w-11/12 max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">Pick Your Role</h2>

        <button
          onClick={handleSellerClick}
          className="mb-4 flex w-full items-center justify-between rounded-lg bg-[#F26E52] px-4 py-3 text-left text-white transition-colors hover:bg-[#e65a3e]"
        >
          <span>I am a Seller</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={handleBuyerClick}
          className="flex w-full items-center justify-between rounded-lg border border-[#F26E52] px-4 py-3 text-left text-[#F26E52] transition-colors hover:bg-gray-100"
        >
          <span>I am a Buyer</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PickRole;
