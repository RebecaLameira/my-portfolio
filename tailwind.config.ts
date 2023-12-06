import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: { min: "360px", max: "639px" },
			// => @media (min-width: 360px and max-width: 639px) { ... }
			md: { min: "640px", max: "767px" },
			// => @media (min-width: 640px and max-width: 767px) { ... }
			lg: { min: "768px", max: "1023px" },
			// => @media (min-width: 768px and max-width: 1023px) { ... }
			xl: { min: "1024px", max: "1279px" },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }
			"2xl": { min: "1280px", max: "1535px" },
			// => @media (min-width: 1280px and max-width: 1535px) { ... }
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
			},
		},
	},
	plugins: [],
};
export default config;
