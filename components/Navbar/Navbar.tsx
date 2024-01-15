import Link from "next/link";
import Button from "../Button/Button";
import NavLinks from "./NavLinks/NavLinks";
import { Indie_Flower } from "next/font/google";

const indieFont = Indie_Flower({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-indie",
});

export type NavbarProps = {
	children: React.ReactNode;
	path: string;
};

const Navbar = ({ children, path }: NavbarProps) => {
	return (
		<nav className="flex w-screen h-20 bg-white shadow items-center justify-between px-16 mobile:justify-center mobile:px-8">
			<div className="flex flex-wrap gap-8 justify-between">
				<span
					className={`${indieFont.className} text-2xl laptop:text-base mobile:hidden`}
				>
					Rebeca Lameira
				</span>
				<NavLinks />
			</div>

			<div className=" laptop:hidden mobile:hidden">
				<Button>
					{
						<Link
							href={path}
							className="text-base font-bold item-end px-8 py-3.5 "
						>
							{children}
						</Link>
					}
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
