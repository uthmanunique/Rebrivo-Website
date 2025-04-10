// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  // Define link mappings
  const linkMappings: { [key: string]: string } = {
    About: "/about",
    Features: "/features",
    Pricing: "/pricing",
    "Join Us": "/auth/role-selection", // Updated to point to role selection
    FAQ: "/faq",
    Knowledgebase: "/knowledgebase",
    "Terms & Conditions": "/terms",
    "Privacy Policy": "/privacy",
    "Contact us": "/contact",
    LinkedIn: "https://www.linkedin.com",
    Instagram: "https://www.instagram.com",
    Facebook: "https://www.facebook.com",
  };

  return (
    <footer className="bg-white text-[#011631] w-full">
      <div className="px-6 py-10 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
        <div className="flex-shrink-0 max-w-xs">
          <Link href="/">
            <Image src="/logo2.png" alt="Logo" width={100} height={20} priority />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-left">
            Rebrivo gives access to find verified businesses, shelf companies and investment opportunities with secure transactions and expert support.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 flex-1 justify-between">
          {[
            { title: "COMPANY", links: ["About", "Features", "Pricing", "Join Us"] },
            { title: "HELP/LEGAL", links: ["FAQ", "Knowledgebase", "Terms & Conditions", "Privacy Policy"] },
            { title: "CONTACT", links: ["Contact us", "LinkedIn", "Instagram", "Facebook"] },
          ].map((section) => (
            <div key={section.title} className="flex-shrink-0">
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={linkMappings[link] || "#"}
                      className="text-sm text-[#52525B] hover:text-[#F26E52] transition-colors block"
                      target={linkMappings[link]?.startsWith("https") ? "_blank" : "_self"}
                      rel={linkMappings[link]?.startsWith("https") ? "noopener noreferrer" : ""}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-[#E2E8F0] py-6 text-center text-sm">
        © Copyright 2025, All Rights Reserved by Rebrivo Platform Ltd.
      </div>
    </footer>
  );
};

export default Footer;