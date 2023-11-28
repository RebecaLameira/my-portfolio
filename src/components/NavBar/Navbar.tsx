import Link from "next/link";
const Navbar = () => {
	return (
		<div className="flex w-screen h-20 bg-white  items-center px-16">
			<h1>Rebeca Lameira</h1>
			<div className="container justify-betweens">
				<Link href="/"> Home</Link>
				<Link href="/AboutMe"> About Me</Link>
				<Link href="/Projects"> Projects</Link>
				<Link href="/Skills"> Skills</Link>
			</div>
			<Link href="/Contact" className="item-end">
				{" "}
				Contact
			</Link>
		</div>
	);
};

export default Navbar;
