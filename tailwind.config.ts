import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5F7B4B",
        secondary: "#F8EFD4",
        accent: "#D97B45",
        neutral: "#333333",
        background: "#FAFAF5",
        lightGray: "#F1F5F9",
      },
    },
  },
  plugins: [],
} satisfies Config;
