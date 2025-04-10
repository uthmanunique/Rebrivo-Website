// src/components/OurPartners.tsx
"use client";

import Image from "next/image";

const OurPartners: React.FC = () => {
  const logos = [
    "/company.png", "/firs.png", "/cbn.png", "/cac.png",
    "/icpc.png", "/squad.png", "/gmonie.png", "/efcc.png",
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 text-center">
      <div className="mb-10">
        <h3 className="text-[#F26E52] text-base md:text-lg font-semibold mb-2">Our Partners</h3>
        <h2 className="text-[#011631] text-3xl md:text-4xl font-semibold mb-4 max-w-2xl mx-auto">
          Our Esteemed Collaborators and Partners in Innovation
        </h2>
        <p className="text-[#414141] text-base md:text-lg max-w-xl mx-auto">
          We’re partnered with reputable organizations to deliver trustworthy experience to our users.
        </p>
      </div>
      <div className="overflow-hidden w-full">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Partner ${index % logos.length + 1}`}
              width={100}
              height={50}
              className="h-10 md:h-12 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 15s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurPartners;