import Link from "next/link";

const NavLinks = () => {
	return (
		<div className="flex gap-8 laptop:shrink mobile:text-lg ">
			<Link
				href="/"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Início
			</Link>
			<Link
				href="/AboutMe"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Sobre Mim
			</Link>
			<Link
				href="/Projects"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Projetos
			</Link>
			<Link
				href="/Skills"
				className="no-underline decoration-emerald-500 decoration-2 hover:underline underline-offset-4"
			>
				Habilidades
			</Link>
		</div>
	);
};
export default NavLinks;
