// src/app/auth/interests/page.tsx
"use client";

import { useRouter } from "next/navigation";

const Interests = () => {
  const router = useRouter();
  const interests = ["Food and Beverages", "Health and Wellness", "Technology", "Retail"];

  const handleSubmit = () => {
    // Save interests to backend (future implementation)
    router.push("/"); // Redirect to homepage after selection
  };

  return (
    <section className="min-h-screen bg-white px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-6 text-3xl font-semibold text-[#011631] md:text-4xl">
          Select Your Interests
        </h2>
        <p className="mb-6 text-sm text-[#414141] md:text-base">
          Choose the categories that interest you to personalize your experience.
        </p>
        <form className="flex flex-col gap-4">
          {interests.map((interest) => (
            <label key={interest} className="flex items-center gap-2 text-sm text-[#414141]">
              <input type="checkbox" className="h-4 w-4 accent-[#F26E52]" />
              {interest}
            </label>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 rounded-lg bg-[#F26E52] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e]"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
};

export default Interests;