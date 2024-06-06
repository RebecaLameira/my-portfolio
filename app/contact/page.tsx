import Form from "../../components/Form/Form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact- Portfolio Rebeca Lameira",
};
export default function Contact() {
  return (
    <div className="w-screen">
      <section className="grid place-content-center">
        <div className="my-10 box-content grid h-[600px] w-[800px] shrink-0 justify-items-center rounded-[50px] bg-gradient-to-r from-[#26212C] via-[#376549] to-[#0E864C] p-8 md:my-4 md:h-[550px] md:w-[303px]">
          <div className="grid justify-items-center gap-4 text-white">
            <h1 className="text-5xl font-bold md:text-2xl">Contate-me</h1>
            <p className="justify-center text-xl md:text-center md:text-base">
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
