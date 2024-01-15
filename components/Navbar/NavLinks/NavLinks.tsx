import Link from "next/link";

const NavLinks = () => {
	return (
		<div className="flex gap-8 laptop:shrink mobile:text-base mobile:gap-4 ">
			<Link
				href="/"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Início
			</Link>
			<Link
				href="/aboutMe"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Sobre Mim
			</Link>
			<Link
				href="/projects"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Projetos
			</Link>
			<Link
				href="/skills"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Habilidades
			</Link>
		</div>
	);
};
export default NavLinks;
