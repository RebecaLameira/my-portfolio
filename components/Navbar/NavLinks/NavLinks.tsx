import Link from "next/link";

const links = [
	{ title: "Início", path: "/" },
	{ title: "Sobre Mim", path: "/aboutMe" },
	{ title: "Projetos", path: "/projects" },
	{ title: "Habilidades", path: "/skills" },
];

const NavLinks = () => {
	return (
		<div className="flex gap-8 laptop:shrink mobile:text-base mobile:gap-4 ">
			{links.map((link) => {
				return (
					<Link
						key={link.title}
						href={link.path}
						className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
					>
						{link.title}
					</Link>
				);
			})}
		</div>
	);
};
export default NavLinks;
