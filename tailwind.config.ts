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
                'Home-bg': "url('/images/speech.png')",
                'About-bg': "url('/images/2ndpagebg.png')",
         'Faq-bg': "url('/images/faqbg.png')",
                'sponsor-bg' : "url('/images/SponsorBack.png')" ,
                'border-bg' : "url('/images/border.png')" ,
                'prize-bg' : "url('/images/prizesbg.png')" ,
                'contact-bg' : "url('/images/contactbg.png')" ,
                'rounds-bg' : "url('/images/SponsorBack.png')" ,
            },
      backgroundSize:{
        '100%': '100%',
        '50%' : '50%'
      }
    },
  },
 plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config;
