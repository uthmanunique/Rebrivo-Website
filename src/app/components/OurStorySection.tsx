// src/components/OurStorySection.tsx
"use client"; // Client Component for ReactPlayer

import Image from "next/image";
import ReactPlayer from "react-player";

const OurStorySection = () => {
  return (
    <section className="bg-white px-6 py-12 text-center md:px-12 md:py-16">
      {/* Heading Section */}
      <div className="mb-10">
        <h3 className="mb-2 text-base font-semibold text-[#F26E52] md:text-lg">Our Story</h3>
        <h2 className="mb-4 text-3xl font-semibold text-[#011631] md:text-4xl">
          A Marketplace Built by Entrepreneurs for Entrepreneurs Globally
        </h2>
        <p className="mx-auto max-w-3xl text-sm text-[#414141] md:text-base">
          Rebrivo was founded by Ayokunle Bankole, a leading business formation
          and compliance consultant with over 15 years of experience helping
          entrepreneurs set up their companies in Nigeria through his firm,
          CompanyFormationNG.
        </p>
      </div>

      {/* Video Frame */}
      <div className="mb-8 flex justify-center">
        <div className="h-[200px] w-full overflow-hidden rounded-lg md:h-[450px] md:max-w-4xl">
          <ReactPlayer
            url="/founder.mp4"
            light="/BG.png"
            playIcon={<Image src="/Play1.png" alt="Play Video" width={120} height={120} />}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>

      {/* Text Under Video */}
      <div className="mx-auto max-w-4xl">
        <p className="text-left text-sm text-[#414141] md:text-base">
          Over the years, Ayokunle observed a recurring challenge: many businesses he helped
          register never took off, while others collapsed after failed entrepreneurial attempts.
          Meanwhile, some investors and entrepreneurs were actively looking to acquire existing
          businesses—especially companies with a long registration history—but struggled to find
          a trusted, structured platform for such transactions.
          <br />
          <br />
          Having successfully facilitated quite a number of company sales himself, Ayokunle
          realized that the missing link was a secure, technology-driven solution where
          businesses of all kinds could be bought and sold seamlessly. That’s how Rebrivo was
          born—to provide a structured, private, and secure platform that facilitates business
          transitions effortlessly.
        </p>
      </div>
    </section>
  );
};

export default OurStorySection;