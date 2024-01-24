import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pagina não encontrado!",
};
export default function NotFound() {
	return (
		<div>
			<Navbar path="/">{"Voltar"}</Navbar>

			<div className="grid place-items-center p-4 gap-2">
				<span className="bg-white dark:bg-black">
					<p className="font-bold text-6xl">Oops!</p>
				</span>

				<Image
					src="/img/404.svg"
					alt="Picture of the author"
					width={700}
					height={415}
					className="bg-white laptop:scale-75 mobile:scale-50 dark:bg-black"
				/>
			</div>

			<Footer />
		</div>
	);
}
