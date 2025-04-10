// src/components/HowItWorks.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    {
      title: "List or Discover",
      description:
        "Sellers list their businesses with all essential details. Buyers and representatives use advanced filters to find the perfect match.",
      icon: "/list.png",
      image: "/list-image.png",
    },
    {
      title: "Connect and Negotiate",
      description:
        "In-platform messaging enables secure communication to discuss terms and ask questions.",
      icon: "/connect.png",
      image: "/connect-image.png",
    },
    {
      title: "Close the Deal",
      description:
        "Escrow services ensure safe transactions, with payments released only after both parties agree.",
      icon: "/deal.png",
      image: "/deal-image.png",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 text-center">
      {/* Heading Section */}
      <div className="mb-10">
        <h3 className="text-[#F26E52] text-base md:text-lg font-semibold mb-2">
          How it Works
        </h3>
        <h2 className="text-[#011631] text-3xl md:text-4xl font-semibold mb-4 max-w-2xl mx-auto">
          Buying or Selling a Business on Rebrivo is Simple
        </h2>
        <p className="text-[#414141] text-base md:text-lg max-w-xl mx-auto">
          It’s a seamless three step process.
        </p>
      </div>

      {/* Frames and Image Preview */}
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 mb-10">
        {/* Left Side: Clickable Frames */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {frames.map((frame, index) => (
            <div
              key={index}
              className={`w-full h-[150px] p-4 flex flex-col gap-2 cursor-pointer text-left ${
                activeFrame === index
                  ? "bg-[#F4F4F4] border-l-4 border-[#011631]"
                  : "bg-white"
              }`}
              onClick={() => setActiveFrame(index)}
            >
              <div className="flex items-center gap-2">
                <div className="bg-[#F26E52] rounded-full p-2">
                  <Image src={frame.icon} alt={`${frame.title} icon`} width={20} height={20} />
                </div>
                <h4 className="text-[#011631] text-lg md:text-xl font-semibold">
                  {frame.title}
                </h4>
              </div>
              <p className="text-[#414141] text-sm md:text-base">
                {frame.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Image Preview */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[490px]">
          <Image
            src={frames[activeFrame].image}
            alt={frames[activeFrame].title}
            width={600}
            height={490}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Testimonial Frame */}
      <div className="bg-[#F4F4F4] p-6 md:p-8 rounded-lg max-w-full mx-auto">
        <p className="text-[#011631] text-base md:text-lg mb-6">
          Rebrivo’s process was so straightforward!
        </p>
        <p className="text-[#011631] text-lg md:text-xl mb-6">
          1. Sign Up ----- 2. Connect ----- 3. Close the deal
        </p>
        <p className="text-[#011631] text-base md:text-lg font-semibold">
          Femi Akinfenwa
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;