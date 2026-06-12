import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#13284A",
        "ink-deep": "#081426",
        gold: "#F4B51E",
        coral: "#E9573F",
        mint: "#2E8B78",
        paper: "#F7F4EE",
        mist: "#EDF2F6"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(8, 20, 38, 0.12)",
        lift: "0 12px 30px rgba(19, 40, 74, 0.14)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
