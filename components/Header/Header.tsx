import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import { Julius_Sans_One } from "next/font/google";

const juliusFont = Julius_Sans_One({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-julius",
});

const Header = () => {
	return (
		<header className="flex flex-wrap m-2 p-4 items-center justify-around mobile:flex-wrap-reverse">
			<div className="laptop:justify-center mobile:justify-center">
				<h1
					className={`${juliusFont.className} bg-white container w-90 h-30 p-2 font-black text-4xl my-8 dark:bg-black`}
				>
					DESENVOLVEDORA <br />
					FRONT-END
				</h1>
				<p className="bg-white text-base p-2 dark:bg-black">
					Front-end focado no React.js, Typescript, Next.js
				</p>
				<Button className="my-8">
					{
						<Link
							href="/contact"
							className="text-base font-bold item-end px-8 py-3.5"
						>
							Contato
						</Link>
					}
				</Button>
			</div>
			<div>
				<Image
					src="/img/Photo.svg"
					alt="Foto da Rebeca Lameira"
					width={384}
					height={391}
					className="flex justify-end laptop:scale-75 mobile:scale-75"
				/>
			</div>
		</header>
	);
};

export default Header;
