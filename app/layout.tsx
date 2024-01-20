import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio Releca Lameira",
	description: "",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="icon" href="/img/RL.ico" sizes="any" />
			</head>
			<body className="h-screen flex bg-fundo bg-repeat bg-opacity-20 dark:bg-darkfundo">
				<Providers>
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
