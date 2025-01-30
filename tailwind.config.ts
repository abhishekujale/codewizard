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
                'rounds-bg' : "url('/images/speech2.png')" ,
                'event-bg' : "url('/images/eventDetails.png')" ,
            },
      backgroundSize:{
        '100%': '100%',
        '50%' : '50%',
        '25%' : '25%',
      },
      keyframes: {
        spinWithOpacity: {
          '0%, 100%': { opacity: '1' }, // Maximum opacity when the winged image is close
          '50%': { opacity: '0.2' },   // Minimum opacity when the winged image is far
        },
        spinAround: {
          '0%': { transform: 'rotate(0deg) translateX(170px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(170px) rotate(-360deg)' },
        },
      },
      animation: {
        spinAround: 'spinAround 2s linear infinite',
        spinWithOpacity: 'spinWithOpacity 2s linear infinite',
      },
    },
  },
 plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config;
