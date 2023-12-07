import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
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
					<h1 className="text-4xl text-secondary font-semibold">
						{i18n.t("aboutmePage.title1")}
					</h1>
					<p>{i18n.t("aboutmePage.textp1")}</p>
					<p>{i18n.t("aboutmePage.textp2")}</p>
				</article>
				<section className="bg-white m-16 p-8">
					<h1 className=" text-4xl text-secondary font-semibold">
						{i18n.t("aboutmePage.title2")}
					</h1>
				</section>
			</div>
			<Footer className="sticky" />
		</div>
	);
}
