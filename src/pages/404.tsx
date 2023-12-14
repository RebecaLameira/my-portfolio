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

			<div className="grid place-items-center p-4 gap-2">
				<span className="bg-white">
					<p className="font-bold text-6xl">Oops!</p>
				</span>

				<Image
					src="/img/404.svg"
					alt="Picture of the author"
					width={700}
					height={415}
					className="laptop:scale-75 mobile:scale-50"
				/>
			</div>

			<Footer />
		</>
	);
}
