"use client";

import Link from "next/link";
import Button from "../Button/Button";
import NavLinks from "./NavLinks/NavLinks";
import { usePathname } from "next/navigation";
import { Indie_Flower } from "next/font/google";

const indieFont = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-indie",
});

const Navbar = () => {
  const pathname = usePathname();
  const condicao = pathname != "/contact";

  let valueButton = condicao ? "Contato" : "Voltar";
  let href = condicao ? "/contact" : "/";

  return (
    <nav className="flex h-16 w-full items-center justify-between bg-white px-8 shadow-lg dark:bg-black lg:justify-center">
      <div className="flex flex-wrap justify-between gap-8">
        <NavLinks />
      </div>

      <div className="flex items-center gap-4 lg:hidden">
        <div>
          <Button>
            {
              <Link href={href} className="item-end px-8 text-base font-bold">
                {valueButton}
              </Link>
            }
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
