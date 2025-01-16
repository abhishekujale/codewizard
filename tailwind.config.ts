import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
                custom1: ['Harry', 'sans-serif'], 
                custom2: ['HitamInk', 'sans-serif'], 
                custom3: ['Machumaine', 'sans-serif'], 
      },
       backgroundImage: {
                'Home-bg': "url('/images/speech.svg')",
            },
    },
  },
  plugins: [],
} satisfies Config;
