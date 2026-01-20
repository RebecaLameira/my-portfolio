import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Trajectory from "../components/Trajectory/Trajectory";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Sobre Mim */}
      <section className="mx-auto max-w-7xl px-4 py-4 lg:px-0">
        <Content />
      </section>

      {/* Trajetória */}
      <section className="mx-auto max-w-7xl px-4 py-4 lg:px-2">
        <Trajectory />
      </section>

      {/* CTA */}
      <section className="flex justify-center pb-20 pt-2">
        <Link
          href="/projects"
          className="rounded-xl bg-green-700 px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-800"
        >
          Ver meus projetos
        </Link>
      </section>

      <Footer />
    </>
  );
}
