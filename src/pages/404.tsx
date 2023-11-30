import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Head from "next/head";
import Image from "next/image";
export default function Custom404() {
	return (
		<>
			<Head>
				<title>Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/">{"Voltar"}</Navbar>
			<div className="flex items-end">
				<Image
					src="/img/404.svg"
					alt="Picture of the author"
					width={800}
					height={415}
				/>
			</div>
			<Footer />
		</>
	);
}
