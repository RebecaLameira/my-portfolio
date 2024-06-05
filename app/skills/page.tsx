import FloatingButton from "../../components/Floating Button/FloatingButton";
import Title from "../../components/Title/Title";
import Skill from "./Skill/Skill";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Portfolio Rebeca Lameira",
};

export default function Skills() {
  return (
    <div>
      <FloatingButton />
      <div className="m-14 bg-white p-8 indent-4 dark:bg-black sm:m-8">
        <section className="grid gap-4">
          <Title>Habilidades e Tecnologias</Title>
          <Skill label="HTML" level="Advanced" percent={"w-5/6"}></Skill>
          <Skill
            label="CSS, Sass and Tailwind css"
            level="Advanced"
            percent={"w-5/6"}
          ></Skill>
          <Skill
            label="JavaScript and TypeScript"
            level="Advanced"
            percent={"w-5/6"}
          ></Skill>
          <Skill
            label="React.js and Next.js"
            level="Advanced"
            percent={"w-5/6"}
          ></Skill>
          <Skill
            label="UI design in Figma"
            level="Regular"
            percent={"w-[50%]"}
          ></Skill>
          <Skill label="Angular" level="Beginner" percent={"w-[30%]"}></Skill>
        </section>
        <br />
        <section>
          <Title>Habilidades Adicionais</Title>
          <br />
          <ul className="m-4 grid list-disc grid-cols-3 gap-4 px-16 text-xl text-secondary sm:grid-cols-1 sm:px-7 sm:text-base">
            <li>Srum</li>
            <li>Git</li>
            <li>Npm and Yarn</li>
            <li>MVC</li>
            <li>B2 english</li>
          </ul>
        </section>
      </div>
      <div className="h-4"></div>
    </div>
  );
}
