"use client"; // Client Component for interactivity

import { useState } from "react";
import Image from "next/image";

export default function CalculationSection() {
  // State to track the business sale price
  const [salePrice, setSalePrice] = useState<string>("");

  // Calculate transaction fee (5%) and settled amount
  const transactionFeePercentage = 0.05;
  const salePriceNum = parseFloat(salePrice.replace(/[^0-9.]/g, "")) || 0;
  const transactionFee = salePriceNum * transactionFeePercentage;
  const settledAmount = salePriceNum - transactionFee;

  // Format numbers with commas for display
  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Features list
  const features = [
    "No upfront listing fees",
    "Only pay when a sale is successfully completed",
    "No maintenance or subscription cost",
  ];

  return (
    <section className="py-12 px-4 lg:px-20 bg-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-8 items-center">
        
        {/* Text Content */}
        <div className="flex-1 text-left lg:pr-8">
          <h3 className="text-orange-500 text-lg font-semibold mb-2">Calculation</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Transaction Fees, No Surprises.</h2>
          <p className="text-gray-600 text-base leading-7 max-w-lg">
            5% Transaction Fee – Charged on every completed business sale. This fee covers 
            escrow security, transaction verification, and platform support to ensure a safe 
            and seamless transfer process.
          </p>
        </div>

        {/* Calculation Frame */}
        <div className="flex-1 bg-gray-900 text-white p-8 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">Know Your Success Fees</h4>

          {/* Input Field */}
          <div className="mb-6">
            <label htmlFor="salePrice" className="block text-sm font-medium mb-2">
              Enter Business Sale Price (₦)
            </label>
            <input
              type="text"
              id="salePrice"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              placeholder="e.g., 1,000,000"
              className="w-full px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white text-gray-900 p-4 rounded-md">
              <span className="text-sm block">We will settle you</span>
              <p className="text-2xl font-semibold">₦{formatNumber(settledAmount)}</p>
            </div>
            <div className="bg-white text-gray-900 p-4 rounded-md">
              <span className="text-sm block">Transaction Fee (5%)</span>
              <p className="text-2xl font-semibold">₦{formatNumber(transactionFee)}</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-gray-200 p-2 rounded-full">
                  <Image
                    src="/checkbox.png"
                    alt="Checkbox"
                    width={16}
                    height={16}
                  />
                </div>
                <span className="text-sm text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
