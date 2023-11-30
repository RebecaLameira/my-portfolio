import Link from "next/link";
import Button from "../Button/Button";
const Navbar = () => {
	return (
		<nav className="flex w-screen h-20 bg-white justify-between items-center px-16">
			<span className="flex-row font-indie text-2xl">Rebeca Lameira</span>
			<Button>
				{
					<Link
						href="/Contact"
						className="text-base font-bold item-end px-8 py-3.5"
					>
						Contact me
					</Link>
				}
			</Button>
		</nav>
	);
};

export default Navbar;
