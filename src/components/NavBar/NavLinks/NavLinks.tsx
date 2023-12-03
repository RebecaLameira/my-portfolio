import Link from "next/link";
const NavLinks = () => {
	return (
		<div className="flex gap-8 md:justify-center">
			<Link href="/">Home</Link>
			<Link href="/AboutMe"> About Me</Link>
			<Link href="/Projects"> Projects</Link>
			<Link href="/Skills"> Skills</Link>
		</div>
	);
};
export default NavLinks;
