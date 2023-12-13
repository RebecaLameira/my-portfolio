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
			<Navbar path="/"> Voltar</Navbar>
			<section className="grid place-content-center">
				<div
					className="grid box-content my-10 p-8 h-[600px] w-[800px] justify-items-center bg-gradient-to-r from-[#26212C] via-[#376549] to-[#0E864C] rounded-[50px] 
				mobile:h-[550px] mobile:w-[303px] mobile:my-4"
				>
					<div className="grid text-white justify-items-center gap-4">
						<h1 className="text-5xl font-bold mobile:text-2xl">Contate-me</h1>
						<p className="text-xl mobile:text-base">
							Gostou deste Portfólio? Ou você gostaria de me enviar uma
							declaração.
						</p>
					</div>
					<br />
					<div>
						<form className="grid gap-3 text-base">
							<Input
								label="Nome Completo *"
								placeholder="Escreva seu nome..."
							/>

							<Input label="Email *" placeholder="Escreva seu email..." />
							<Input
								label="Mensagem *"
								className="h-32 text-start"
								placeholder="Escreva sua mensagem..."
							/>
						</form>
					</div>
					<br />
					<div>
						<Button className="bg-tertiary text-xl mobile:text-sm ">
							Enviar
						</Button>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
