// app/components/FAQSection.tsx
"use client"; // Client Component for interactivity

import { useState } from "react";
import Image from "next/image";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  // State to track which FAQ is open (null if none are open)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // FAQ data
  const faqs: FAQ[] = [
    {
      question: "What is the transaction fee for a business sale on Rebrivo?",
      answer:
        "The transaction fee is 5% of the completed business sale price. This fee covers escrow security, transaction verification, and platform support to ensure a safe transfer process.",
    },
    {
      question: "Are there any upfront costs to list a business on Rebrivo?",
      answer:
        "No, there are no upfront listing fees. You only pay the transaction fee when a sale is successfully completed.",
    },
    {
      question: "What does the transaction fee cover?",
      answer:
        "The 5% transaction fee includes escrow services, transaction verification, platform support, and ensures a seamless and secure transfer process for both buyers and sellers.",
    },
    {
      question: "How do I purchase tokens on Rebrivo?",
      answer:
        "You can purchase tokens by selecting a pricing plan (e.g., Diamond, Ruby, Emerald, or Sapphire) and clicking the 'Buy Token' button. You’ll be guided through a secure payment process.",
    },
    {
      question: "What happens if a sale doesn’t go through?",
      answer:
        "If a sale doesn’t complete, you won’t be charged the transaction fee. Rebrivo only charges fees on successful transactions.",
    },
    {
      question: "Can I get a refund on purchased tokens?",
      answer:
        "Tokens are non-refundable once purchased, but unused tokens remain in your account for future transactions. Please review your plan carefully before purchasing.",
    },
    {
      question: "What are the benefits of the Emerald plan over the Ruby plan?",
      answer:
        "The Emerald plan offers the same token count as Ruby (10 tokens for ₦25,000) but includes additional features like extra bonus credits, making it ideal for users seeking more value.",
    },
    {
      question: "Do I need to pay a subscription fee to use Rebrivo?",
      answer:
        "No, there are no subscription or maintenance fees. You only pay for tokens and the transaction fee upon a successful sale.",
    },
    {
      question: "How are the settled amounts calculated after the transaction fee?",
      answer:
        "The settled amount is calculated by deducting the 5% transaction fee from your business sale price. For example, a ₦1,000,000 sale results in a ₦50,000 fee and a ₦950,000 settled amount.",
    },
    {
      question: "What are value-added services, and are they included in all plans?",
      answer:
        "Value-added services include priority support and discounts on future credit purchases. These are available in higher-tier plans like Sapphire, and partially in Emerald, but not in Diamond or Ruby.",
    },
  ];

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      {/* Heading Section */}
      <div className="mb-10">
        <h3 className="text-orange-500 font-semibold text-lg">FAQ</h3>
        <h2 className="text-gray-900 font-bold text-3xl sm:text-4xl mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto">
          Find answers to your most common questions on pricing here.
        </p>
      </div>

      {/* FAQ Frames */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md bg-white shadow-md"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-gray-900 font-medium text-base">{faq.question}</span>
              <Image
                src={openFAQ === index ? "/arrow-up.png" : "/arrow-right.png"}
                alt={openFAQ === index ? "Collapse" : "Expand"}
                width={16}
                height={16}
              />
            </div>
            {openFAQ === index && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
