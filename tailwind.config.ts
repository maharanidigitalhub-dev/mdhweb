import type { Config } from "tailwindcss";
import { tokens } from "./lib/tokens";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: {
        "section-y": tokens.spacing.sectionY,
        "section-y-lg": tokens.spacing.sectionYLg,
        gutter: tokens.spacing.gutter
      },
      borderRadius: {
        xl: tokens.radii.xl,
        "2xl": tokens.radii.xxl,
        pill: tokens.radii.pill
      },
      boxShadow: {
        soft: tokens.shadows.soft,
        subtle: tokens.shadows.subtle,
        focus: tokens.shadows.focus
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
