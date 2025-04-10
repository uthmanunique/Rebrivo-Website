// src/components/AboutUsSection.tsx
"use client"; // Still a Client Component (though no map interactivity now)

import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="bg-[#f9f9f9] px-6 py-12 md:px-12 md:py-16">
      {/* Heading Section */}
      <div className="mb-10 text-center">
        <h3 className="mb-2 text-base font-semibold text-[#F26E52] md:text-lg">
          About Us
        </h3>
        <h2 className="mb-4 text-3xl font-semibold text-[#011631] md:text-4xl">
          Unlocking Business Potential, One Transaction at a Time
        </h2>
        <p className="mx-auto max-w-[600px] text-sm text-[#414141] md:text-base">
          Welcome to Rebrivo, Africa’s first private marketplace that connects
          business sellers and serious buyers in a secure, confidential, and
          efficient environment.
        </p>
      </div>

      {/* Static Map Image */}
      <div className="h-[300px] w-full overflow-hidden rounded-lg shadow-lg md:h-[500px]">
        <Image
          src="/map.png" // Place your static map image in /public
          alt="Rebrivo Locations"
          width={1200}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;