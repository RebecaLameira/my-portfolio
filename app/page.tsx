import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Logos from "../components/Logos/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home - Portfolio Rebeca Lameira",
};

export default function Home() {
	return (
		<div>
			<Header />
			<Footer />
		</div>
	);
}
