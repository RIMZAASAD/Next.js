// eslint-disable-next-line @typescript-eslint/no-unused-vars

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/images/tent.jpg')",
        'banner2':"url('/images/paris.jpg')",
        'banner3':"url('/images/park.jpg')",
        'banner4':"url('/images/snow.jpg')",
        'banner7':"url('/images/github.svg')",
        

        
      },
   fontFamily:{
    sans:["Bowlby One", "sans-serif"]
   } },
  },
  plugins: [],
};

export default config;
