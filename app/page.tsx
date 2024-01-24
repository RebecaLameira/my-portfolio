import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import { Metadata } from "next";
import Dropdowns from "../components/Dropdowns/Dropdowns";

export const metadata: Metadata = {
	title: "Home - Portfolio Rebeca Lameira",
};

export default function Home() {
	return (
		<div>
			<Navbar path="/contact"> Contato</Navbar>

			<Header />

			<Footer className="fixed mobile:relative" />
		</div>
	);
}
