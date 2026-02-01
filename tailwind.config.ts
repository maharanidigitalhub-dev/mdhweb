import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f3ea",
        charcoal: "#1f1f1f",
        gold: "#c3a450",
        smoke: "#f4efe6",
        line: "#e7dfd1"
      },
      boxShadow: {
        soft: "0 20px 40px -30px rgba(0,0,0,0.35)",
        subtle: "0 2px 12px rgba(0,0,0,0.08)"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
