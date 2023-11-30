import Link from "next/link";
import Button from "../Button/Button";

export type NavbarProps = {
	children: React.ReactNode;
	path: string;
};

const Navbar = ({ children, path }: NavbarProps) => {
	return (
		<nav className="flex w-screen h-20 bg-white shadow justify-between items-center px-16">
			<span className="flex-row font-indie text-2xl">Rebeca Lameira</span>
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
