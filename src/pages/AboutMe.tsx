import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Title from "@/components/Title/Title";
import Head from "next/head";

export default function AboutMe() {
	return (
		<div>
			<Head>
				<title>About Me - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">Contato</Navbar>
			<div>
				<article className="bg-white m-16 p-8 grid gap-6 indent-8 text-xl text-justify mobile:text-sm">
					<Title>Sobre Mim</Title>
					<p>
						Sou desenvolvedor Front-end especializado em criar interfaces
						elegantes e altamente funcionais. Com três anos de experiência em
						desenvolvimento e um diploma recente em Engenharia da Computação,
						estou constantemente aprimorando minhas habilidades de programação.
						Estou sempre em busca de novos desafios e oportunidades de
						colaboração para ampliar meus conhecimentos e contribuir com
						projetos inovadores.
					</p>
					<p>
						Minha experiência inclui HTML5, CSS3, JavaScript e TypeScript,
						essenciais para entregar designs sofisticados e experiências de
						usuário intuitivas. Tenho experiência em diversos frameworks CSS,
						como Tailwind CSS, Bootstrap e Material UI, além de dominar
						bibliotecas como React.js e o framework Next.js. No back-end, tenho
						conhecimento de Python, Node.js e ASP.NET, além de SQL, MySQL,
						MongoDB e Firebase Realtime Database. Estou sempre em busca de novos
						desafios e oportunidades de colaboração para ampliar meus
						conhecimentos e contribuir com projetos inovadores.
					</p>
				</article>
				<section className="bg-white m-16 p-8">
					<Title>Trajetoria</Title>
				</section>
			</div>
			<Footer className="sticky" />
		</div>
	);
}
