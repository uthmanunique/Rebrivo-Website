import { Suspense } from "react";
import Image from "next/image";
import { SignupForm } from "./SignupForm";

// Define the expected type for searchParams
type SignupPageProps = {
  searchParams: Promise<{ role?: string }>; // Use Promise for server-side compatibility
};

export default async function Signup({ searchParams }: SignupPageProps) {
  // Await the searchParams Promise to get the actual object
  const resolvedSearchParams = await searchParams;
  const role = resolvedSearchParams?.role?.toUpperCase() || "BUYER";

  const sellerContent = {
    heading: "Sell Your Business Privately & Securely on Rebrivo",
    subheading:
      "Find serious buyers without exposing your business publicly. Get matched with verified investors and close your sale with full support.",
    features: [
      "Private & Secure Listings",
      "Verified Buyers Only",
      "Escrow Protection for Secure Payments",
      "No Maintenance or Subscription Cost",
    ],
  };

  const buyerContent = {
    heading: "Own a Business Without Starting from Scratch",
    subheading:
      "Find and acquire profitable or underperforming businesses privately on Rebrivo. We match you with vetted business sellers, ensuring secure, structured transactions.",
    features: [
      "Acquire a business based on your budget & industry",
      "Access businesses not publicly listed anywhere",
      "Secure payments via escrow & due diligence support",
      "Get 4 Free Rebrivo tokens to Unlock Seller profiles",
    ],
  };

  const content = role === "SELLER" ? sellerContent : buyerContent;

  return (
    <section className="min-h-screen">
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Left Side: Background with Text, Hidden on Mobile */}
        <div
          className="hidden md:flex w-full items-center bg-cover bg-center p-6 md:w-1/2 md:p-20 md:h-screen md:overflow-y-auto min-h-[300px] sm:min-h-[250px]"
          style={{ backgroundImage: "url('/signup.png')" }}
        >
          <div className="max-w-md text-white">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl">
              {content.heading}
            </h2>
            <p className="mb-6 text-xs sm:text-sm md:text-base">
              {content.subheading}
            </p>
            <ul className="list-none space-y-2 text-xs sm:text-sm md:text-base">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Image src="/checkbox.png" alt="Checkbox" width={16} height={16} className="mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Form, Full Width on Mobile, Scroll to Top on Larger Screens */}
        <div className="w-full bg-white p-6 md:w-1/2 md:p-12 md:h-screen md:overflow-y-auto flex flex-col items-center justify-start">
          <Suspense fallback={<div>Loading signup form...</div>}>
            <SignupForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
