// src/app/auth/role-selection/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

// Inner component to use hooks
function RoleSelectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "signup"; // Default to signup if no type is provided
  const searchQuery = searchParams.get("search") || ""; // Get search query if coming from Hero

  const handleRoleSelection = (role: string) => {
    const nextPage = type === "signup" ? "/auth/signup" : "/auth/login";
    // Pass the role and search query (if any) to the next page
    const query = searchQuery ? `?role=${role}&search=${encodeURIComponent(searchQuery)}` : `?role=${role}`;
    router.push(`${nextPage}${query}`);
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/Interest.png')" }}
    >
      {/* Heading moved outside the white frame */}
      <h3 className="text-2xl md:text-3xl font-regular text-white mb-6 text-center">
        {type === "signup" ? "Sign Up" : "Log In"}
      </h3>

      {/* White frame container - made smaller */}
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4">
          {/* Seller Button (Filled) */}
          <button
            onClick={() => handleRoleSelection("seller")}
            className="flex h-14 w-full items-center justify-between rounded-lg bg-[#F26E52] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#e65a3e] md:text-base"
          >
            <span>I am a Seller</span>
            <Image src="/arrow-right.png" alt="Arrow Right" width={20} height={20} />
          </button>

          {/* Buyer Button (Stroked) */}
          <button
            onClick={() => handleRoleSelection("buyer")}
            className="flex h-14 w-full items-center justify-between rounded-lg border-2 border-[#F26E52] bg-transparent px-4 text-sm font-semibold text-[#F26E52] transition-colors hover:bg-[#F26E52]/10 md:text-base"
          >
            <span>I am a Buyer</span>
            <Image src="/arrow-right.png" alt="Arrow Right" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

// Default export with Suspense wrapper
export default function RoleSelection() {
  return (
    <Suspense fallback={<div>Loading role selection...</div>}>
      <RoleSelectionContent />
    </Suspense>
  );
}
