import Link from "next/link";
import Button from "../components/Button/Button";
import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>Home - Portfolio Rebeca Lameira</title>
			</Head>

			<Navbar></Navbar>
			<Footer></Footer>
		</div>
	);
}
