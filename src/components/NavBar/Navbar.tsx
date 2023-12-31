import Link from "next/link";
import Button from "../Button/Button";
import NavLinks from "./NavLinks/NavLinks";

export type NavbarProps = {
	children: React.ReactNode;
	path: string;
};

const Navbar = ({ children, path }: NavbarProps) => {
	return (
		<nav className="flex w-screen h-20 bg-white shadow items-center justify-between px-16 mobile:justify-center">
			<div className="flex flex-wrap gap-8 justify-between">
				<span className="font-indie text-2xl laptop:text-base mobile:hidden">
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
