// src/components/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    { comment: "Rebrivo made selling my business a breeze! The platform connected me with serious buyers quickly.", profileImage: "/user1.png", name: "Aisha Bello", role: "Seller", bgColor: "#DEDEDE" },
    { comment: "I found the perfect business to invest in. The escrow service gave me peace of mind.", profileImage: "/user2.png", name: "Chinedu Okeke", role: "Buyer", bgColor: "#F4F4F4" },
    { comment: "The process was seamless, and the support team was incredible. Highly recommend!", profileImage: "/user5.png", name: "Fatima Yusuf", role: "Seller", bgColor: "#DEDEDE" },
    { comment: "Skeptical at first, but Rebrivo exceeded expectations. Sold in two weeks!", profileImage: "/user4.png", name: "Emeka Nwosu", role: "Seller", bgColor: "#F4F4F4" },
    { comment: "Advanced filters helped me find my ideal business quickly. Amazing platform!", profileImage: "/user3.png", name: "Tolu Adebayo", role: "Buyer", bgColor: "#DEDEDE" },
    { comment: "Secure messaging made negotiations easy. Felt confident throughout!", profileImage: "/user4.png", name: "Kemi Alabi", role: "Buyer", bgColor: "#F4F4F4" },
    { comment: "Listing my business was simple, and I got offers within days!", profileImage: "/user5.png", name: "Sade Ogunleye", role: "Seller", bgColor: "#DEDEDE" },
    { comment: "The escrow system is a game-changer. Safe and reliable transactions!", profileImage: "/user1.png", name: "Uche Eze", role: "Buyer", bgColor: "#F4F4F4" },
    { comment: "Rebrivo’s support team guided me every step of the way. Fantastic!", profileImage: "/user2.png", name: "Bisi Adewale", role: "Seller", bgColor: "#DEDEDE" },
    { comment: "Found a great investment opportunity in record time. Love it!", profileImage: "/user3.png", name: "Dayo Afolabi", role: "Buyer", bgColor: "#F4F4F4" },
  ];

  const getFramesPerSlide = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    if (window.innerWidth <= 1280) return 3;
    return 4;
  };

  const [framesPerSlide, setFramesPerSlide] = useState(getFramesPerSlide());
  const slidesCount = Math.ceil(testimonials.length / framesPerSlide);

  useEffect(() => {
    const handleResize = () => setFramesPerSlide(getFramesPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 text-center">
      <div className="mb-10">
        <h3 className="text-[#F26E52] text-base md:text-lg font-semibold mb-2">Testimonials</h3>
        <h2 className="text-[#011631] text-3xl md:text-4xl font-semibold mb-4 max-w-2xl mx-auto">
          What Our Clients Are Saying About Us
        </h2>
        <p className="text-[#414141] text-base md:text-lg max-w-xl mx-auto">
          What Our Users Say About Rebrivo
        </p>
      </div>
      <div className="w-full max-w-full mx-auto overflow-hidden">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesCount}%)`,
              width: `${slidesCount * 100}%`,
            }}
          >
            {Array.from({ length: slidesCount }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex w-full flex-shrink-0"
                style={{ flexBasis: `${100 / slidesCount}%` }}
              >
                <div className="flex w-full gap-4">
                  {testimonials
                    .slice(slideIndex * framesPerSlide, (slideIndex + 1) * framesPerSlide)
                    .map((testimonial, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg flex flex-col justify-between min-h-[200px] ${
                          testimonial.bgColor === "#DEDEDE" ? "bg-[#DEDEDE]" : "bg-[#F4F4F4]"
                        } flex-1`}
                      >
                        <p className="text-[#011631] text-sm md:text-base text-left mb-4">
                          {testimonial.comment}
                        </p>
                        <div className="flex items-center gap-3">
                          <Image
                            src={testimonial.profileImage}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover w-10 h-10 md:w-[50px] md:h-[50px]"
                          />
                          <div className="text-left">
                            <p className="text-[#011631] text-base md:text-lg font-semibold">
                              {testimonial.name}
                            </p>
                            <p className="text-[#414141] text-sm md:text-base">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 gap-6">
        <button className="bg-[#F26E52] p-2 rounded-full hover:bg-[#e65a3e] transition-colors" onClick={prevSlide}>
          <Image src="/left.png" alt="Previous" width={20} height={20} />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-[#F26E52]" : "bg-[#DEDEDE]"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button className="bg-[#F26E52] p-2 rounded-full hover:bg-[#e65a3e] transition-colors" onClick={nextSlide}>
          <Image src="/right.png" alt="Next" width={20} height={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;