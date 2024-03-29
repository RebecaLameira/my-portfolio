"use client";

import Link from "next/link";
import Button from "../Button/Button";
import NavLinks from "./NavLinks/NavLinks";
import { usePathname } from "next/navigation";
import { Indie_Flower } from "next/font/google";

const indieFont = Indie_Flower({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-indie",
});

const Navbar = () => {
	const pathname = usePathname();
	const condicao = pathname != "/contact";

	let valueButton = condicao ? "Contato" : "Voltar";
	let href = condicao ? "/contact" : "/";

	return (
		<nav className="flex w-screen h-20 bg-white shadow-lg items-center justify-between px-16 mobile:justify-center mobile:px-8 dark:bg-black">
			<div className="flex flex-wrap gap-8 justify-between">
				<span
					className={`${indieFont.className} text-2xl laptop:text-base mobile:hidden`}
				>
					Rebeca Lameira
				</span>
				<NavLinks />
			</div>

			<div className="flex laptop:hidden mobile:hidden  gap-4 items-center">
				<div>
					<Button>
						{
							<Link
								href={href}
								className="text-base font-bold item-end px-8 py-3.5 "
							>
								{valueButton}
							</Link>
						}
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
