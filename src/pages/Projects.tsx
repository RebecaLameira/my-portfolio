import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
export default function Projects() {
	return (
		<div>
			<Head>
				<title>Projects - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{"Contact me"}</Navbar>
			<h1>Projects</h1>
			<Footer />
		</div>
	);
}
