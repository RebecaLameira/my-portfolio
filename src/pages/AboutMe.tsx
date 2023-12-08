import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Title from "@/components/Title/Title";
import Head from "next/head";

import { i18n } from "@/translate/i18n";

export default function AboutMe() {
	return (
		<div>
			<Head>
				<title>About Me - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{i18n.t("aboutmePage.button")}</Navbar>
			<div>
				<article className="bg-white m-16 p-8 grid gap-6 indent-8 text-xl text-justify">
					<Title>{i18n.t("aboutmePage.title1")}</Title>
					<p>{i18n.t("aboutmePage.textp1")}</p>
					<p>{i18n.t("aboutmePage.textp2")}</p>
				</article>
				<section className="bg-white m-16 p-8">
					<Title>{i18n.t("aboutmePage.title2")}</Title>
				</section>
			</div>
			<Footer className="sticky" />
		</div>
	);
}
