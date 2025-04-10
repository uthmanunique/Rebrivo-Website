// src/app/dashboard/page.tsx
"use client";

import Image from "next/image";

const Dashboard = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#011631] mb-6">
        Dashboard Work In Progress
      </h1>
      <Image
        src="/workinprogress.gif" // Replace with the path to your GIF
        alt="Work In Progress"
        width={300}
        height={300}
        className="object-contain"
      />
    </section>
  );
};

export default Dashboard;