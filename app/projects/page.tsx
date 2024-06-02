import Image from "next/image";
import FloatingButton from "../../components/Floating Button/FloatingButton";
import { Metadata } from "next";
import { Julius_Sans_One } from "next/font/google";
import Card from "../../components/Card/Card";
import Temporary from "../../components/Temporary/Temporary";

const juliusFont = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Projects - Portfolio Rebeca Lameira",
};
//<Card
//     title="Projeto Teste"
//   description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
// url="https://rebeca.dev.br/"
//src="img/Dashboard.jpg"
///>

export default function Projects() {
  return (
    <div>
      <FloatingButton />

      <div className="my-6 box-content grid h-[150px] grid-cols-2 content-center items-center bg-gradient-to-r from-[#17BFA8] to-[#0C5F55] p-8 mobile:h-[100px] mobile:p-4 laptop:h-[150px]">
        <div>
          <h1
            className={`${juliusFont.className} indent-8 text-5xl tracking-[50px] text-white mobile:text-lg mobile:tracking-[25px] laptop:text-2xl laptop:tracking-[30px]`}
          >
            PROJETOS
          </h1>
        </div>
        <div>
          <Image
            src="/img/Logs.svg"
            alt=""
            width={600}
            height={400}
            className="mobile:hidden"
          />
        </div>
      </div>
      <div className="my-20 flex w-full flex-wrap justify-center gap-10">
        <Card
          title="Design Portfolio Figma"
          description="Este projeto é o meu portfólio, criado para demonstrar meu trabalho como desenvolvedora de software. "
          url="https://www.figma.com/design/5VNDXg18Ta9ejC6IN3CdQS/Portfolio-(Community)?node-id=0-1&t=wFJKyHCPHty3Pjkc-0"
          src="img/Foto Portfolio.jpg"
        />
      </div>
      <Temporary />
    </div>
  );
}
