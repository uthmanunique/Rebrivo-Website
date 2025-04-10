/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };// tailwind.config.js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        // Optional: Extend theme if needed
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
    plugins: [],
  };