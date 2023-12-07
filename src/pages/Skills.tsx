import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Head from "next/head";

import { i18n } from "@/translate/i18n";

export default function Skills() {
	return (
		<div>
			<Head>
				<title>Skills - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{i18n.t("skillsPage.button")}</Navbar>
			<h1>{i18n.t("skillsPage.title1")}</h1>
			<h1>{i18n.t("skillsPage.title2")}</h1>
			<Footer className="fixed" />
		</div>
	);
}
