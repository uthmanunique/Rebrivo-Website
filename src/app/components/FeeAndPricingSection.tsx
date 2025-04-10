"use client";

import Image from "next/image";

interface Feature {
  text: string;
  icon: string;
  faded: boolean;
}

interface Plan {
  title: string;
  subtext: string;
  price: string;
  tokens: string;
  cta: string;
  features: Feature[];
  fillBg: boolean;
}

export default function FeeAndPricingSection() {
  const plans: Plan[] = [
    {
      title: "Diamond",
      subtext: "First-time buyers exploring the platform",
      price: "₦10,000",
      tokens: "/4 Tokens",
      cta: "Buy Token",
      features: [
        { text: "4 Free tokens to New Users", icon: "/tick.png", faded: false },
        { text: "Access to Seller Profiles (Up to 4 sellers)", icon: "/tick.png", faded: false },
        { text: "Access to Seller Contact Information", icon: "/tick.png", faded: false },
        { text: "Access to Seller Compliance Documents", icon: "/tick.png", faded: false },
        { text: "Priority Support for Buyer Inquiries", icon: "/tick.png", faded: false },
        { text: "Exclusive Access to Premium & High-Value Listings", icon: "/tick.png", faded: false },
        { text: "Discount on Token Purchases", icon: "/cancel.png", faded: true },
        { text: "Validity Period: 365 days", icon: "/tick.png", faded: false },
      ],
      fillBg: false,
    },
    {
      title: "Ruby",
      subtext: "Small-scale buyers looking to evaluate multiple businesses",
      price: "₦25,000",
      tokens: "/10 Tokens",
      cta: "Buy Token",
      features: [
        { text: "4 Free tokens to New Users", icon: "/tick.png", faded: false },
        { text: "Access to Seller Profiles (Up to 10 sellers)", icon: "/tick.png", faded: false },
        { text: "Access to Seller Contact Information", icon: "/tick.png", faded: false },
        { text: "Access to Seller Compliance Documents", icon: "/tick.png", faded: false },
        { text: "Priority Support for Buyer Inquiries", icon: "/tick.png", faded: false },
        { text: "Exclusive Access to Premium & High-Value Listings", icon: "/tick.png", faded: false },
        { text: "Discount on Token Purchases", icon: "/cancel.png", faded: true },
        { text: "Validity Period: 365 days", icon: "/tick.png", faded: false },
      ],
      fillBg: false,
    },
    {
      title: "Emerald",
      subtext: "Serious buyers conducting deeper research",
      price: "₦45,000",
      tokens: "/20 Tokens",
      cta: "Buy Token",
      features: [
        { text: "4 Free tokens to New Users", icon: "/tick.png", faded: false },
        { text: "Access to Seller Profiles (Up to 25 sellers)", icon: "/tick.png", faded: false },
        { text: "Access to Seller Contact Information", icon: "/tick.png", faded: false },
        { text: "Access to Seller Compliance Documents", icon: "/tick.png", faded: false },
        { text: "Priority Support for Buyer Inquiries", icon: "/tick.png", faded: false },
        { text: "Exclusive Access to Premium & High-Value Listings", icon: "/tick.png", faded: false },
        { text: "Discount on Token Purchases (10% Off)", icon: "/tick.png", faded: false },
        { text: "Validity Period: 365 days", icon: "/tick.png", faded: false },
      ],
      fillBg: true,
    },
    {
      title: "Sapphire",
      subtext: "Large investors or brokers reviewing multiple deals",
      price: "₦100,000",
      tokens: "/50 Tokens",
      cta: "Buy Token",
      features: [
        { text: "4 Free tokens to New Users", icon: "/tick.png", faded: false },
        { text: "Access to Seller Profiles (Up to 50 sellers)", icon: "/tick.png", faded: false },
        { text: "Access to Seller Contact Information", icon: "/tick.png", faded: false },
        { text: "Access to Seller Compliance Documents", icon: "/tick.png", faded: false },
        { text: "Priority Support for Buyer Inquiries", icon: "/tick.png", faded: false },
        { text: "Exclusive Access to Premium & High-Value Listings", icon: "/tick.png", faded: false },
        { text: "Discount on Token Purchases (20% Off)", icon: "/tick.png", faded: false },
        { text: "Validity Period: 365 days", icon: "/tick.png", faded: false },
      ],
      fillBg: false,
    },
  ];

  return (
    <section className="py-12 px-4 lg:px-20 bg-gray-100 text-center">
      <div className="mb-8">
        <h3 className="text-[#F26E52] text-lg font-semibold">Fee and Pricing</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing for All</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          At Rebrivo, we believe in transparent and fair pricing that ensures both buyers and sellers have access to a secure, trusted, and high-value business acquisition experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              plan.fillBg ? "bg-gray-900 text-white" : "bg-white border"
            }`}
          >
            <h4 className={`text-2xl font-semibold mb-2 ${plan.fillBg ? "text-white" : "text-gray-800"}`}>
              {plan.title}
            </h4>
            <p className={`text-sm mb-4 ${plan.fillBg ? "text-gray-200" : "text-gray-600"}`}>
              {plan.subtext}
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className={`text-3xl font-bold ${plan.fillBg ? "text-white" : "text-gray-800"}`}>
                {plan.price}
              </span>
              <span className="text-sm text-gray-400">{plan.tokens}</span>
            </div>
            <button
              className={`mt-4 py-2 px-4 rounded font-semibold w-full ${
                plan.fillBg ? "bg-[#F26E52] text-white" : "border border-[#F26E52] text-[#F26E52]"
              }`}
            >
              {plan.cta}
            </button>
            <ul className="mt-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className={`w-6 h-6 flex items-center justify-center ${plan.fillBg && !feature.faded ? "bg-white rounded" : "bg-transparent"}`}>
                    <Image
                      src={feature.icon}
                      alt={feature.faded ? "Not included" : "Included"}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span
                    className={`text-sm flex-1 ${
                      feature.faded ? "text-gray-400" : plan.fillBg ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* How Rebrivo Tokens Work Section */}
      <div className="mt-12 text-left max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">How Rebrivo Tokens Work:</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-600">
          <li>Buyers purchase tokens based on the plan that fits their needs.</li>
          <li>Tokens are used to unlock seller profiles and view detailed business information.</li>
          <li>Once unlocked, buyers gain full access to seller compliance documents.</li>
          <li>Buyers can submit offers and proceed to transactions securely through Rebrivo.</li>
        </ol>
      </div>
    </section>
  );
}
