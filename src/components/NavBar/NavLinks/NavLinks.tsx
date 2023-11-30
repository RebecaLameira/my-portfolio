import Link from "next/link";
const NavLinks = () => {
	return (
		<div className="container justify-between">
			<Link href="/"> Home</Link>
			<Link href="/AboutMe"> About Me</Link>
			<Link href="/Projects"> Projects</Link>
			<Link href="/Skills"> Skills</Link>
		</div>
	);
};
export default NavLinks;
