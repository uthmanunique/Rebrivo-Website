// app/components/FeaturesSection.tsx
"use client"; // Client Component for image rendering

import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Private & Confidential Business Transactions",
    description:
      "No public listings! Only verified and pre-qualified buyers gain access to business details listed on Rebrivo, ensuring confidentiality for sellers.",
    icon: "/cloud.png", // Update with appropriate icon if needed
  },
  {
    title: "Secure Escrow & Due Diligence Support",
    description:
      "Buyers’ funds are held securely in our escrow account until the transaction is finalized, protecting both parties from fraud. Sellers can also access third-party valuation and compliance services from CompanyFormationNG.",
    icon: "/withdraw.png", // Update with appropriate icon if needed
  },
  {
    title: "Intelligent Buyer-Seller Matchmaking",
    description:
      "Instead of an open marketplace, Rebrivo matches sellers with serious, high-intent buyers based on their industry, business size, and acquisition preferences.",
    icon: "/value.png", // Update with appropriate icon if needed
  },
  {
    title: "Rebrivo Premium – Hands-Off Selling for Business Owners",
    description:
      "Our concierge service for sellers who want Rebrivo to handle everything - from business valuation, buyer sourcing, negotiation, and deal closure - for a seamless exit.",
    icon: "/premium.png", // Suggest adding a new icon for this feature
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      {/* Heading Section */}
      <div className="mb-8">
        <h3 className="text-orange-500 text-lg font-semibold">Features</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Rebrivo has some amazing features
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Business Buyers and Sellers trust Rebrivo because of its rich features.
        </p>
      </div>

      {/* Features and Image Preview */}
      <div className="flex flex-col lg:flex-row-reverse justify-between items-start gap-8 max-w-6xl mx-auto">
        {/* Right Side: Image Preview */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/ipad2.png"
            alt="Features Overview"
            width={600}
            height={450}
            className="rounded-lg object-cover w-full h-[450px]"
          />
        </div>

        {/* Left Side: Feature Blocks */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:h-[450px] lg:overflow-y-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg">
              <div className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Frame */}
      <div className="bg-gray-100 p-8 mt-10 rounded-lg text-center max-w-full mx-auto">
        <p className="text-gray-900 text-lg mb-4">Rebrivo’s process was so straightforward!</p>
        <p className="text-xl text-gray-900 font-medium mb-2">1. Sign Up ----- 2. Connect ----- 3. Close the deal</p>
        <p className="text-gray-900 font-semibold">Femi Akinfenwa</p>
      </div>
    </section>
  );
}
