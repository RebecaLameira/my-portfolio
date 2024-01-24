import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Dropdowns from "../components/Dropdowns/Dropdowns";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
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
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<head>
				<link rel="icon" href="/img/RL.ico" sizes="any" />
			</head>
			<body className="h-screen flex bg-fundo bg-repeat bg-opacity-20 dark:bg-darkfundo">
				<Providers>
					<main>
						<Navbar />
						<Dropdowns />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	);
}
