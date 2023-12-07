import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

import { i18n } from "@/translate/i18n";
import Image from "next/image";

export default function Projects() {
	return (
		<div>
			<Head>
				<title>Projects - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{i18n.t("projectsPage.button")}</Navbar>

			<div className="grid grid-cols-2 box-content my-10 p-8 h-[250px] bg-gradient-to-r from-[#17BFA8] to-[#0C5F55] items-center">
				<div>
					<h1 className="font-julius text-white text-5xl tracking-[50px]">
						{i18n.t("projectsPage.title1")}
					</h1>
				</div>
				<div>
					<Image src="/img/Logs.svg" alt="" width={2000} height={2000} />
				</div>
			</div>

			<Footer />
		</div>
	);
}
