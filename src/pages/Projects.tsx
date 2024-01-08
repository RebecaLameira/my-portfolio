import Card from "@/components/Card/Card";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

import Image from "next/image";

export default function Projects() {
	return (
		<div>
			<Head>
				<title>Projects - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">Contato</Navbar>

			<div className="grid grid-cols-2 box-content my-10 p-8 h-[250px] bg-gradient-to-r from-[#17BFA8] to-[#0C5F55] items-center laptop:h-[150px] mobile:h-[100px] mobile:p-4">
				<div>
					<h1 className="font-julius text-white text-5xl tracking-[50px] laptop:text-2xl laptop:tracking-[30px] mobile:text-xl mobile:justify-self-center">
						PROJETOS
					</h1>
				</div>
				<div>
					<Image
						src="/img/Logs.svg"
						alt=""
						width={1000}
						height={1000}
						className="mobile:hidden"
					/>
				</div>
			</div>
			<Footer className="fixed" />
		</div>
	);
}
