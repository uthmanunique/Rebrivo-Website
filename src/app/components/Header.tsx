// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const activePage =
    pathname === "/"
      ? "Home"
      : pathname === "/about"
      ? "About us"
      : pathname === "/features"
      ? "Features"
      : pathname === "/pricing"
      ? "Pricing"
      : pathname === "/faq"
      ? "FAQ"
      : "Home";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full flex flex-col justify-between bg-[#011631] px-4 py-4 text-white shadow-lg md:flex-row md:items-center md:px-8 md:py-6">
      <div className="flex w-full items-center justify-between md:w-auto">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image src="/logo (2).png" alt="Logo" width={100} height={20} priority />
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <nav
        className={`mt-4 flex w-full flex-col gap-4 text-base font-medium md:mt-0 md:w-auto md:flex-row md:gap-6 ${
          isOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {["Home", "About us", "Features", "Pricing", "FAQ"].map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : item === "About us" ? "/about" : `/${item.toLowerCase().replace(" ", "")}`}
            className={`transition-colors hover:text-[#F26E52] ${activePage === item ? "text-[#F26E52]" : "text-white"}`}
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav>
      <div
        className={`mt-4 flex w-full flex-col items-center gap-4 md:mt-0 md:w-auto md:flex-row md:gap-6 ${
          isOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <Link
          href="/auth/role-selection?type=login" // Updated to redirect to role-selection for login
          className="text-base transition-colors hover:text-[#F26E52]"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link
          href="/auth/role-selection?type=signup&role=seller" // Updated to go through role-selection for signup
          className="rounded-lg bg-[#F26E52] px-4 py-2 font-medium text-white transition-colors hover:bg-[#e65a3e] md:px-6 text-center"
          onClick={() => setIsOpen(false)}
        >
          Start Selling
        </Link>
      </div>
    </header>
  );
};

export default Header;
