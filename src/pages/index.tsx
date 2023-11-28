import Link from "next/link";
import Button from "../components/Button/Button";
import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>Home - Portfolio Rebeca Lameira</title>
			</Head>

			<Navbar></Navbar>
			<h1>Home Page</h1>
		</div>
	);
}
