import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

import { i18n } from "@/translate/i18n";

export default function Projects() {
	return (
		<div>
			<Head>
				<title>Projects - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{"Contact me"}</Navbar>
			<h1>{i18n.t("projectsPage.title1")}</h1>
			<Footer />
		</div>
	);
}
