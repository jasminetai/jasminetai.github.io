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
          "0%": { opacity: "0.6" },
          "100%": { opacity: "1" },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
