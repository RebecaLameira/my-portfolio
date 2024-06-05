import Form from "../../components/Form/Form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact- Portfolio Rebeca Lameira",
};
export default function Contact() {
  return (
    <div>
      <section className="grid place-content-center">
        <div className="md:h-[550px] md:w-[303px] md:my-4 my-10 box-content grid h-[600px] w-[800px] shrink-0 justify-items-center rounded-[50px] bg-gradient-to-r from-[#26212C] via-[#376549] to-[#0E864C] p-8">
          <div className="grid justify-items-center gap-4 text-white">
            <h1 className="md:text-2xl text-5xl font-bold">Contate-me</h1>
            <p className="md:text-base md:text-center justify-center text-xl">
              Gostou deste Portfólio? Ou você gostaria de me enviar uma
              declaração.
            </p>
          </div>
          <br />

          <Form />
        </div>
      </section>
    </div>
  );
}
