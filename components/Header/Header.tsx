import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import { Julius_Sans_One } from "next/font/google";

const juliusFont = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-julius",
});

const Header = () => {
  return (
    <div className="my-12 flex h-full w-auto items-center justify-between lg:flex-wrap-reverse lg:justify-around lg:gap-6 md:gap-4">
      <div className="m-0 flex h-3/5 w-1/2 flex-wrap gap-3 rounded-r-[100px] bg-white p-8 ps-16 dark:bg-neutral-900 lg:m-10 lg:mb-16 lg:w-full lg:rounded-none lg:p-6 md:justify-center md:gap-3">
        <section className="gap-1 md:inline-flex sm:block">
          <p className="text-4xl lg:text-2xl md:text-lg sm:inline">
            Bem-vindo,{" "}
            <a className="inline-flex text-lg lg:text-base">ao meu</a>
          </p>

          <p className="text-2xl lg:text-lg md:text-base md:font-black">
            Portfólio!
          </p>
        </section>

        <div className="grid justify-items-stretch gap-3">
          <p className="w-2/3 justify-self-end text-justify text-base lg:w-full lg:justify-center lg:text-sm md:px-6 md:py-0 md:text-sm">
            Olá! Sou Rebeca Lameira, Engenheira da Computação e mestranda em
            Computação Aplicada, com atuação em desenvolvimento de software e
            Ciência de Dados. Tenho interesse em criar soluções funcionais, bem
            estruturadas e orientadas a dados, unindo desenvolvimento web,
            análise e visualização de informações.
          </p>

          <h1
            className={`${juliusFont.className} justify-self-end text-xl lg:text-base md:mx-10 md:justify-self-center`}
          >
            DESENVOLVEDORA FULL-STACK
          </h1>

          <p className="justify-self-end text-xs text-neutral-600 dark:text-neutral-400 md:justify-self-center">
            Ciência de Dados · Computação Aplicada
          </p>
        </div>

        <Button className="my-4 hidden lg:block md:justify-self-center">
          {
            <Link href="/contact" className="px-8 py-3.5 text-base font-bold">
              Contato
            </Link>
          }
        </Button>
      </div>

      <div className="mr-14 flex justify-center lg:mr-0">
        <Image
          src="/img/Photo.svg"
          alt="Foto da Rebeca Lameira"
          width={320}
          height={331}
          className="shrink-0 scale-100 lg:scale-75"
        />
      </div>
    </div>
  );
};

export default Header;
