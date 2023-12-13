import Link from "next/link";

const NavLinks = () => {
	return (
		<div className="flex gap-8 laptop:shrink mobile:text-lg">
			<Link href="/">Início</Link>
			<Link href="/AboutMe"> Sobre Mim</Link>
			<Link href="/Projects">Projetos </Link>
			<Link href="/Skills"> Habilidades</Link>
		</div>
	);
};
export default NavLinks;
