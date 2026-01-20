"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { title: "Início", path: "/" },
  /*{title: "Sobre Mim", path: "/aboutMe" }*/
  { title: "Projetos", path: "/projects" },
  { title: "Habilidades", path: "/skills" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full justify-start gap-4 md:gap-8 sm:gap-6">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className={clsx(
            "decoration-emerald-500 decoration-2 underline-offset-4 hover:text-emerald-500 hover:underline sm:text-base",
            {
              "underline decoration-emerald-700 underline-offset-4":
                pathname === link.path,
            },
          )}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
