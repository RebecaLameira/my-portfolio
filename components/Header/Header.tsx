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
    <div className="my-16 flex h-full w-auto items-center justify-between lg:flex-wrap-reverse lg:justify-around lg:gap-8">
      <div className="m-0 flex h-3/5 w-1/2 flex-wrap gap-4 rounded-r-[100px] bg-white p-10 ps-20 dark:bg-neutral-900 lg:m-12 lg:mb-20 lg:w-full lg:rounded-none lg:p-8 md:justify-center md:gap-4">
        <section className="gap-1 md:inline-flex">
          <p className="text-5xl lg:text-3xl md:text-xl">
            Bem-vindo, <a className="inline-flex text-xl lg:text-lg">ao meu</a>
          </p>

          <p className="text-3xl lg:text-xl md:font-black">Portfólio!</p>
        </section>
        <div className="grid justify-items-stretch gap-4">
          <p className="w-2/3 justify-self-end text-justify text-lg lg:w-full lg:justify-center lg:text-base md:p-8 md:py-0 md:text-sm">
            {" "}
            Olá! Sou Rebeca Lameira, uma Engenheira da Computação, apaixonada
            por criar interfaces de usuário elegantes, intuitivas e funcionais.
            Este portfólio foi criado com o objetivo de compartilhar alguns dos
            projetos em que trabalhei e demonstrar minhas habilidades e
            conhecimentos na área de desenvolvimento.{" "}
          </p>
          <h1
            className={`${juliusFont.className} text-balance justify-self-end text-2xl lg:text-lg md:justify-self-center`}
          >
            DESENVOLVEDORA FULL-STACK
          </h1>
        </div>

        <Button className="my-4 hidden lg:block md:justify-self-center">
          {
            <Link href="/contact" className="px-8 py-3.5 text-base font-bold">
              Contato
            </Link>
          }
        </Button>
      </div>

      <div>
        <Image
          src="/img/Photo.svg"
          alt="Foto da Rebeca Lameira"
          width={384}
          height={391}
          className="shink mr-20 flex lg:m-0 lg:scale-75"
        />
      </div>
    </div>
  );
};

export default Header;
