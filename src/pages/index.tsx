import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Home - Portfolio Rebeca Lameira</title>
			</Head>

			<Navbar path="/Contact"> Contato</Navbar>

			<Header />

			<Footer className="fixed" />
		</>
	);
}
