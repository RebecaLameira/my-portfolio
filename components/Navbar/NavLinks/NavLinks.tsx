"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ title: "Início", path: "/" },
	{ title: "Sobre Mim", path: "/aboutMe" },
	{ title: "Projetos", path: "/projects" },
	{ title: "Habilidades", path: "/skills" },
];

const NavLinks = () => {
	const pathname = usePathname();
	return (
		<div className="flex gap-8 laptop:shrink mobile:text-base mobile:gap-4 ">
			{links.map((link) => {
				return (
					<Link
						key={link.title}
						href={link.path}
						className={clsx(
							" decoration-emerald-500 decoration-2 hover:underline hover:text-emerald-500 underline-offset-4",
							{
								"underline underline-offset-4 decoration-emerald-700 ":
									pathname === link.path,
							}
						)}
					>
						{link.title}
					</Link>
				);
			})}
		</div>
	);
};
export default NavLinks;
