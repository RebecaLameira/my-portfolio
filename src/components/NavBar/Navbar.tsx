import Link from "next/link";
import Button from "../Button/Button";
import NavLinks from "./NavLinks/NavLinks";

export type NavbarProps = {
	children: React.ReactNode;
	path: string;
};

const Navbar = ({ children, path }: NavbarProps) => {
	return (
		<nav className="flex w-screen h-20 bg-white shadow items-center justify-between px-16">
			<span className="font-indie text-2xl">Rebeca Lameira</span>
			<NavLinks />
			<Button>
				{
					<Link
						href={path}
						className="text-base font-bold item-end px-8 py-3.5"
					>
						{children}
					</Link>
				}
			</Button>
		</nav>
	);
};

export default Navbar;
