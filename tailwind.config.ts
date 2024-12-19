import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { color: "white" },
          "50%": { color: "transparent" },
        },
        fade: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.7" },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
