import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { Julius_Sans_One } from "next/font/google";

const juliusFont = Julius_Sans_One({
	weight: "400",
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "Projects - Portfolio Rebeca Lameira",
};

export default function Projects() {
	return (
		<div>
			<Navbar path="/contact">Contato</Navbar>

			<div className="grid grid-cols-2 box-content my-10 p-8 h-[250px] bg-gradient-to-r from-[#17BFA8] to-[#0C5F55] items-center laptop:h-[150px] mobile:h-[100px] mobile:p-4">
				<div>
					<h1
						className={`${juliusFont.className} text-white text-5xl tracking-[50px] laptop:text-2xl laptop:tracking-[30px] mobile:text-xl mobile:justify-self-center`}
					>
						PROJETOS
					</h1>
				</div>
				<div>
					<Image
						src="/img/Logs.svg"
						alt=""
						width={1000}
						height={1000}
						className="mobile:hidden"
					/>
				</div>
			</div>
			<Footer className="fixed" />
		</div>
	);
}
