"use client";
import { useState } from "react";
import Image from "next/image";

type FAQ = {
  question: string;
  answer: string;
};

type FAQCategories = {
  [key: string]: FAQ[];
};

const faqs: FAQCategories = {
  General: [
    {
      question: "What is Rebrivo, and how does it work?",
      answer:
        "Rebrivo is Africa’s first private marketplace for business transactions, connecting buyers and sellers securely. It uses a three-step process: list or discover, connect and negotiate, and close the deal with escrow support.",
    },
    {
      question: "Who can use Rebrivo?",
      answer:
        "Rebrivo is open to verified business owners, buyers, and representatives looking to buy or sell businesses in a trusted environment.",
    },
  ],
  Buyers: [
    {
      question: "How do I find a business to buy on Rebrivo?",
      answer:
        "Use advanced filters on the platform to search for businesses based on industry, price, and location, then connect with sellers privately.",
    },
    {
      question: "What documents can I access as a buyer?",
      answer:
        "Buyers can access supporting documents like financial statements and legal agreements after purchasing tokens and initiating contact.",
    },
  ],
  Sellers: [
    {
      question: "How do I list my business on Rebrivo?",
      answer:
        "Sign up, provide essential business details, and submit for verification. Once approved, your listing goes live without upfront costs.",
    },
    {
      question: "What happens after my business is sold?",
      answer:
        "After a successful sale, the 5% transaction fee is deducted, and the settled amount is transferred to you via escrow.",
    },
  ],
  "Escrow & Payments": [
    {
      question: "What is the transaction fee for a business sale on Rebrivo?",
      answer:
        "The transaction fee is 5% of the completed business sale price, covering escrow security and verification.",
    },
    {
      question: "How are settled amounts calculated?",
      answer:
        "The settled amount is the sale price minus the 5% fee. For example, a ₦1,000,000 sale results in a ₦50,000 fee and ₦950,000 settled.",
    },
  ],
  "Technical Support": [
    {
      question: "What should I do if I forget my password?",
      answer:
        "Use the 'Forgot Password' link on the login page to reset it via email or contact support for assistance.",
    },
    {
      question: "How do I report a technical issue on Rebrivo?",
      answer:
        "Submit a support ticket through your dashboard or email our support team at support@rebrivo.com for prompt assistance.",
    },
  ],
};

export default function FAQSectionMain() {
  const [activeTag, setActiveTag] = useState<string>("General");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      {/* Heading Section */}
      <div className="mb-8">
        <h3 className="text-orange-500 font-semibold text-lg">FAQ</h3>
        <h2 className="text-gray-900 font-bold text-3xl sm:text-4xl mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Find answers to your most common questions here.
        </p>
      </div>

      {/* Tag Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {Object.keys(faqs).map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              activeTag === tag
                ? "bg-primary bg-orange-500"
                : "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* FAQ Frames */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs[activeTag].map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 text-gray-700 rounded-md shadow-md"
          >
            <div
              className="flex justify-between items-center px-4 py-3 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <div className="flex items-center justify-center">
                <Image
                  src={openFAQ === index ? "/arrow-up.png" : "/arrow-right.png"}
                  alt={openFAQ === index ? "Collapse" : "Expand"}
                  width={16}
                  height={16}
                />
              </div>
            </div>
            {openFAQ === index && (
              <div className="px-4 py-3 border-t border-gray-100">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
