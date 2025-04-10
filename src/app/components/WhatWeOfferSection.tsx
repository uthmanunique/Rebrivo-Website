// src/components/WhatWeOfferSection.tsx
"use client";

import Image from "next/image";

const WhatWeOfferSection = () => {
  return (
    <section className="bg-[#f9f9f9] px-6 py-12 text-center md:px-12 md:py-16">
      {/* Heading Section */}
      <div className="mb-10">
        <h3 className="mb-2 text-base font-semibold text-[#F26E52] md:text-lg">What We Offer</h3>
        <h2 className="mb-4 text-3xl font-semibold text-[#011631] md:text-4xl">
          Rebrivo is more than just a marketplace—it’s an ecosystem built for trust, security, and efficiency.
        </h2>
        <p className="mx-auto max-w-xl text-sm text-[#414141] md:text-base">
          Empowering seamless transactions with cutting-edge tools and unparalleled support.
        </p>
      </div>

      {/* Centered Image */}
      <div className="mb-12 flex justify-center">
        <Image
          src="/whatoffer.png"
          alt="What We Offer Visual"
          width={800}
          height={400}
          className="h-auto w-full max-w-[600px] object-contain md:max-w-[800px]"
        />
      </div>
    </section>
  );
};

export default WhatWeOfferSection;