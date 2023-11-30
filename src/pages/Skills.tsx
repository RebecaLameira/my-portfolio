import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Head from "next/head";
export default function Skills() {
	return (
		<div>
			<Head>
				<title>Skills - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{"Contact me"}</Navbar>
			<h1>Skills</h1>
			<Footer />
		</div>
	);
}
