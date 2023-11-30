import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Head from "next/head";

export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact- Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/"> {"Voltar"}</Navbar>
			<h1>Contact</h1>
			<Footer></Footer>
		</div>
	);
}
