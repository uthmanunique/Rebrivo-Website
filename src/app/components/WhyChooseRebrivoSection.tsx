// src/components/WhyChooseRebrivoSection.tsx
import Image from "next/image";

const gridItems = [
  {
    title: "Privacy First",
    description:
      "No public listings. Your information remains secure until you're matched with a serious party.",
    image: "/privacy.png",
  },
  {
    title: "Monetize Unused Business Entities",
    description:
      "Whether you own a company you never used or an active business that needs a new owner, Rebrivo helps you unlock its financial value.",
    image: "/monetize.png",
  },
  {
    title: "Smart Business Matching",
    description:
      "Instead of browsing endless listings, our system connects buyers and sellers strategically for faster, more meaningful deals.",
    image: "/smartsearch.png",
  },
  {
    title: "Expanding Across Africa",
    description:
      "Our vision is to create a continental business transition marketplace, enabling African entrepreneurs to buy and sell businesses seamlessly.",
    image: "/expanding.png",
  },
  {
    title: "Smart Business Matchmaking",
    description: (
      <div>
        We don’t just connect buyers and sellers; we provide professional support through our exclusive partnership with Company FormationNG, offering:
        <ul className="mt-2 list-none space-y-2">
          <li className="flex items-center">
            <Image src="/checkbox.png" alt="Checkbox" width={16} height={16} className="mr-2" />
            Due Diligence
          </li>
          <li className="flex items-center">
            <Image src="/checkbox.png" alt="Checkbox" width={16} height={16} className="mr-2" />
            Business Valuation
          </li>
          <li className="flex items-center">
            <Image src="/checkbox.png" alt="Checkbox" width={16} height={16} className="mr-2" />
            Legal & Post-Incorporation Services
          </li>
          <li className="flex items-center">
            <Image src="/checkbox.png" alt="Checkbox" width={16} height={16} className="mr-2" />
            HR & IT Support
          </li>
        </ul>
      </div>
    ),
    image: "/matchmake.png",
  },
];

const WhyChooseRebrivoSection = () => {
  return (
    <section className="bg-white px-6 py-12 text-center md:px-12 md:py-16">
      {/* Heading Section */}
      <div className="mb-10">
        <h3 className="mb-2 text-base font-semibold text-[#F26E52] md:text-lg">Why Choose Rebrivo?</h3>
        <h2 className="mb-4 text-3xl font-semibold text-[#011631] md:text-4xl">
          Discover the Unique Benefits of Leveraging on Rebrivo for Your Business Needs
        </h2>
        <p className="mx-auto max-w-4xl text-sm text-[#414141] md:text-base">
          Rebrivo was founded by Ayokunle Bankole, a leading business formation and compliance consultant with over 15 years of experience helping entrepreneurs set up their companies in Nigeria through his firm, CompanyFormationNG.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        {gridItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-5 text-left md:flex-row">
            <div className="h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-dotted border-[#011631]">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-lg font-semibold text-[#011631]">{item.title}</h4>
              <div className="max-w-[80%] text-sm text-[#414141] md:text-base">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseRebrivoSection;