import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Head from "next/head";
export default function AboutMe() {
	return (
		<div>
			<Head>
				<title>About Me - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{"Contact me"}</Navbar>
			<h1>About Me</h1>
			<Footer />
		</div>
	);
}
