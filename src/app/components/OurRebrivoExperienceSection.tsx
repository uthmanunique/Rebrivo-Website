"use client"; // Mark as Client Component

import Image from "next/image";
import React from "react";

const OurRebrivoExperienceSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Image Frame */}
        <div className="flex-shrink-0 w-full lg:w-2/5 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/experience.png"
            alt="Rebrivo Experience"
            width={300}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center w-full lg:w-3/5 space-y-4">
          <h2 className="text-orange-500 text-sm font-semibold">Our Rebrivo Experience</h2>
          <h3 className="text-gray-900 text-4xl font-semibold leading-snug">
            How we sold our inactive company for ₦9M within a month of listing it on Rebrivo.
          </h3>
          <blockquote className="border-l-4 border-orange-500 pl-4 text-gray-600 text-base">
            <p className="mb-2">
            “Listing our inactive company felt daunting at first, but Rebrivo made it incredibly straightforward. The intelligent matchmaking connected us with buyers who were genuinely interested in our niche, and the fact that our business stayed off public listings gave us the privacy we needed. Within a week, we had solid offers on the table.”
            </p>
            <p>
            “What stood out most was how Rebrivo handled everything—secure escrow kept the transaction safe, and their support team guided us through every step. We finalized the ₦9M sale in less than 30 days, turning a dormant asset into real value with minimal effort on our part.”
            </p>
          </blockquote>
          <p className="text-gray-900 text-sm font-semibold">Paul Oseghale, Co-Founder</p>
        </div>
      </div>
    </section>
  );
};

export default OurRebrivoExperienceSection;
