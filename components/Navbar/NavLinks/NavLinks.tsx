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
    <div className="sm:text-base sm:gap-4 md:shrink flex gap-8">
      {links.map((link) => {
        return (
          <Link
            key={link.title}
            href={link.path}
            className={clsx(
              "decoration-emerald-500 decoration-2 underline-offset-4 hover:text-emerald-500 hover:underline",
              {
                "underline decoration-emerald-700 underline-offset-4":
                  pathname === link.path,
              },
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
