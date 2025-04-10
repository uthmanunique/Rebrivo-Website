"use client";

import { useState, JSX } from "react";

export default function TermsSection() {
  // State to track the active tag
  const [activeTag, setActiveTag] = useState<string>("Terms and Conditions");

  // Content data categorized by tag
  const content: Record<string, JSX.Element> = {
    "Non Disclosure Agreement": (
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-semibold text-gray-800">Introduction to Confidentiality</h3>
        <p className="text-base text-gray-600">
          At Rebrivo, we prioritize the protection of sensitive information shared between buyers, sellers, and the platform.
          This Non Disclosure Agreement (NDA) governs the confidentiality obligations of all parties involved in business transactions on our platform.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Confidential Information</h3>
        <p className="text-base text-gray-600">
          Confidential information includes, but is not limited to, business financials, legal documents, proprietary data,
          and personal information shared during negotiations. All users agree not to disclose such information to third parties
          without prior written consent from the disclosing party.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Obligations and Restrictions</h3>
        <p className="text-base text-gray-600">
          Users must use confidential information solely for the purpose of evaluating or completing a transaction on Rebrivo.
          Any unauthorized use, reproduction, or disclosure of this information may result in legal action and termination of your account.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Duration of Agreement</h3>
        <p className="text-base text-gray-600">
          The obligations under this NDA remain in effect for a period of two (2) years from the date of disclosure,
          or until the information becomes publicly available through no fault of the receiving party.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Exceptions</h3>
        <p className="text-base text-gray-600">
          This NDA does not apply to information that is already public, independently developed by the receiving party,
          or legally obtained from a third party without confidentiality restrictions.
        </p>
      </div>
    ),

    "Terms and Conditions": (
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-semibold text-gray-800">Acceptance of Terms</h3>
        <p className="text-base text-gray-600">
          By accessing or using Rebrivo, you agree to be bound by these Terms and Conditions. If you do not agree,
          you must refrain from using our platform. These terms may be updated periodically, and continued use
          constitutes acceptance of the updated terms.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">User Responsibilities</h3>
        <p className="text-base text-gray-600">
          Users are responsible for providing accurate and complete information when listing a business, purchasing tokens,
          or engaging in transactions. You agree not to use Rebrivo for any unlawful activities, including fraud,
          misrepresentation, or violation of intellectual property rights.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Transaction Fees</h3>
        <p className="text-base text-gray-600">
          Rebrivo charges a 5% transaction fee on every completed business sale, as outlined in our Pricing page.
          This fee is non-refundable and covers escrow services, transaction verification, and platform support.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Account Termination</h3>
        <p className="text-base text-gray-600">
          Rebrivo reserves the right to suspend or terminate your account if you violate these terms, engage in fraudulent activity,
          or fail to comply with payment obligations. Upon termination, you will lose access to any unused tokens or listings.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Limitation of Liability</h3>
        <p className="text-base text-gray-600">
          Rebrivo is not liable for any indirect, incidental, or consequential damages arising from your use of the platform,
          including loss of profits or data. Our liability is limited to the amount of fees paid by you in the preceding six (6) months.
        </p>
      </div>
    ),

    "Privacy Policy": (
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-semibold text-gray-800">Privacy Commitment</h3>
        <p className="text-base text-gray-600">
          Rebrivo is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Data Collection</h3>
        <p className="text-base text-gray-600">
          We may collect personal information such as your name, email address, contact details, and transaction history when you use our platform.
          This data is collected to improve user experience and provide better services.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Data Usage</h3>
        <p className="text-base text-gray-600">
          Your data is used to facilitate transactions, personalize user experiences, and send relevant notifications. We do not sell your data to third parties.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Data Protection</h3>
        <p className="text-base text-gray-600">
          We implement security measures to protect your personal data from unauthorized access, disclosure, or alteration.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Third-Party Services</h3>
        <p className="text-base text-gray-600">
          We may use third-party services for analytics or payment processing. These services are required to adhere to strict data protection standards.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Policy Updates</h3>
        <p className="text-base text-gray-600">
          This Privacy Policy may be updated periodically. You will be notified of significant changes through our platform or email.
        </p>
      </div>
    ),
  };

  return (
    <section className="py-12 px-6 bg-white text-center">
      {/* Heading Section */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-orange-600">Terms and Conditions</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Agreement with Rebrivo</h2>
        <p className="text-base text-gray-600 max-w-lg mx-auto">
          Understand our licensing, terms, and privacy policies.
        </p>
      </div>

      {/* Tag Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {Object.keys(content).map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
              activeTag === tag
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto text-left">{content[activeTag]}</div>
    </section>
  );
}
