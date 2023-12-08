import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Input from "@/components/Input/Input";
import Head from "next/head";
import Button from "@/components/Button/Button";

import { i18n } from "@/translate/i18n";
export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact- Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/"> {i18n.t("contactPage.button1")}</Navbar>
			<section className="grid place-content-center">
				<div className="grid box-content my-10 p-8 h-[600px] w-[800px] justify-items-center bg-gradient-to-r from-[#26212C] via-[#376549] to-[#0E864C] rounded-[50px]">
					<div className="grid text-white justify-items-center gap-4">
						<h1 className="text-5xl font-bold ">
							{i18n.t("contactPage.title1")}
						</h1>
						<p className="text-xl">{i18n.t("contactPage.description")}</p>
					</div>
					<br />
					<div>
						<form className="grid gap-3 text-gray-200 text-base">
							<Input
								label={i18n.t("contactPage.label1")}
								placeholder={i18n.t("contactPage.placeholder1")}
							/>

							<Input
								label={i18n.t("contactPage.label2")}
								placeholder={i18n.t("contactPage.placeholder2")}
							/>
							<Input
								label={i18n.t("contactPage.label3")}
								className="h-32 text-start"
								placeholder={i18n.t("contactPage.placeholder3")}
							/>
						</form>
					</div>
					<br />
					<div>
						<Button className="bg-tertiary text-xl ">
							{i18n.t("contactPage.button2")}
						</Button>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
	/*<label>{i18n.t("contactPage.label1")}</label> */
}
