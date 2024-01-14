import FloatingButton from "../../components/Floating Button/FloatingButton";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import Skill from "./Skill/Skill";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Skills - Portfolio Rebeca Lameira",
};

export default function Skills() {
	return (
		<div>
			<Navbar path="/contact">Contato</Navbar>
			<FloatingButton />
			<div className="bg-white m-14 p-8 indent-4 mobile:m-8">
				<section className="grid gap-4">
					<Title>Habilidades e Tecnologias</Title>
					<Skill label="HTML" level="Advanced" percent={"w-5/6"}></Skill>
					<Skill
						label="CSS, Sass and Tailwind css"
						level="Advanced"
						percent={"w-5/6"}
					></Skill>
					<Skill
						label="JavaScript and TypeScript"
						level="Advanced"
						percent={"w-5/6"}
					></Skill>
					<Skill
						label="React.js and Next.js"
						level="Advanced"
						percent={"w-5/6"}
					></Skill>
					<Skill
						label="UI design in Figma"
						level="Regular"
						percent={"w-[50%]"}
					></Skill>
					<Skill label="Angular" level="Beginner" percent={"w-[30%]"}></Skill>
				</section>
				<br />
				<section>
					<Title>Habilidades Adicionais</Title>
					<br />
					<ul
						className=" grid grid-cols-3 list-disc px-16 text-xl 
					text-secondary gap-4 mobile:grid-cols-1 mobile:text-base mobile:px-7"
					>
						<li>Srum</li>
						<li>Git</li>
						<li>Npm and Yarn</li>
						<li>MVC</li>
						<li>B2 english</li>
					</ul>
				</section>
			</div>
			<Footer />
		</div>
	);
}
