import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				indie: "var(--font-indie)",
				julius: "var(--font-julius)",
			},
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
