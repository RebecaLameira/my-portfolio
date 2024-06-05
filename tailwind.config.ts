import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        inter: "var(--font-primary)",
        indie: "var(--font-indie)",
        julius: "var(--font-julius)",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      backgroundImage: {
        fundo: "url('/img/Bg.svg')",
        darkfundo: "url('/img/Bg-dark.svg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
