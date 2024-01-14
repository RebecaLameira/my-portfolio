import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			mobile: { min: "360px", max: "767px" },

			laptop: { min: "768px", max: "1279px" },

			desktop: { min: "1280px" },
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
