import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import { Julius_Sans_One } from "next/font/google";
import Logos from "../Logos/Logos";

const juliusFont = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-julius",
});

const Header = () => {
  return (
    <header className="m-2 mb-20 flex flex-wrap items-center justify-around p-4 mobile:flex-wrap-reverse">
      <div className="mobile:justify-center laptop:justify-center">
        <h1
          className={`${juliusFont.className} w-90 h-30 container my-8 rounded-lg bg-white p-2 text-4xl font-black dark:bg-neutral-900`}
        >
          DESENVOLVEDORA <br />
          FRONT-END
        </h1>

        <Button className="my-8">
          {
            <Link
              href="/contact"
              className="item-end px-8 py-3.5 text-base font-bold"
            >
              Contato
            </Link>
          }
        </Button>
        <Logos />
      </div>

      <div>
        <Image
          src="/img/Photo.svg"
          alt="Foto da Rebeca Lameira"
          width={384}
          height={391}
          className="flex justify-end mobile:scale-75 laptop:scale-75"
        />
      </div>
    </header>
  );
};

export default Header;
