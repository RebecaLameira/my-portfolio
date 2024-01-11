import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Title from "@/components/Title/Title";
import Trajectory from "@/components/Trajectory/Trajectory";
import Head from "next/head";

export default function AboutMe() {
	return (
		<div>
			<Head>
				<title>About Me - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">Contato</Navbar>
			<div>
				<Content />
				<Trajectory />
			</div>
			<Footer />
		</div>
	);
}
