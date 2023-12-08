import Link from "next/link";
import Button from "../Button/Button";
import NavLinks from "./NavLinks/NavLinks";
import Toggle from "../Toggle/Toggle";

export type NavbarProps = {
	children: React.ReactNode;
	path: string;
};

const Navbar = ({ children, path }: NavbarProps) => {
	return (
		<nav className="flex w-screen h-20 bg-white shadow items-center justify-between px-16">
			<div className="flex flex-wrap gap-10 mobile:block mobile:gap-0 mobile:justify-center justify-between">
				<span className="font-indie text-2xl mobile:text-base">
					Rebeca Lameira
				</span>
				<NavLinks />
			</div>
			<div>
				<Toggle />
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
