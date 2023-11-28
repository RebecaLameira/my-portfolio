import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			indie: ["Indie Flower", "cursive"],
		},
		fontSize: {
			xs: "var(--font-xs)",
			sm: "var(--font-sm)",
			md: "var(--font-md)",
			lg: "var(--font-lg)",
			xl: "var(--font-xl)",
		},
		extend: {
			colors: {
				primary: "var(--primary)",
			},
			backgroundImage: {
				fundo: "url('/img/Bg.svg')",
			},
			backgroundSize: {
				cover: "cover",
			},
		},
	},
	plugins: [],
};
export default config;
