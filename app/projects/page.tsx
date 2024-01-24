import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";
import FloatingButton from "../../components/Floating Button/FloatingButton";
import { Metadata } from "next";
import { Julius_Sans_One } from "next/font/google";
import Temporary from "../../components/Temporary/Temporary";

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
			<FloatingButton />

			<div className="grid grid-cols-2 content-center box-content my-4 p-8 h-[150px] bg-gradient-to-r from-[#17BFA8] to-[#0C5F55] items-center laptop:h-[150px] mobile:h-[100px] mobile:p-4">
				<div>
					<h1
						className={`${juliusFont.className} text-white text-5xl tracking-[50px] indent-8 laptop:text-2xl laptop:tracking-[30px] mobile:tracking-[25px] mobile:text-lg`}
					>
						PROJETOS
					</h1>
				</div>
				<div>
					<Image
						src="/img/Logs.svg"
						alt=""
						width={600}
						height={400}
						className=" mobile:hidden"
					/>
				</div>
			</div>
			<Temporary />
		</div>
	);
}
