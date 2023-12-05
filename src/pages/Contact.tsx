import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Input from "@/components/Input/Input";
import Head from "next/head";
import Button from "@/components/Button/Button";

export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact- Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/"> {"Go back"}</Navbar>
			<section className="grid place-content-center">
				<div className="grid box-content justify-center my-12 h-[600px] w-[800px] bg-gradient-to-r from-[#26212C] via-[#376549] to-[#0E864C]  rounded-[50px] text-white ">
					<h1 className="mt-12 text-5xl font-bold ">Contact Me</h1>
					<p className="text-xl">
						Did you like the Portfolio? Or would you like to send me a
						statement.
					</p>
					<div>
						<form className="grid gap-2">
							<Input />
							<Input />
							<Input />
							<Button>{"send me"}</Button>
						</form>
					</div>
				</div>
			</section>
			<Footer></Footer>
		</div>
	);
}
