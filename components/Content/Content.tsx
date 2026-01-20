import Title from "../Title/Title";

const Content = () => {
  return (
    <article className="m-0 rounded-3xl bg-white p-8 text-lg shadow-sm dark:bg-neutral-900 lg:mx-4 lg:p-6 lg:text-base md:mx-4 md:p-6 sm:text-sm">
      <Title>Sobre Mim</Title>

      <div className="mt-5 grid gap-3 text-neutral-700 dark:text-neutral-300">
        <p>
          Minha atuação envolve o desenvolvimento de aplicações web utilizando
          tecnologias como React, Next.js e TypeScript, com foco em código
          organizado, componentização e integração com APIs. Além do
          desenvolvimento web, atuo com tratamento, análise e visualização de
          dados utilizando Python e bibliotecas como Pandas, NumPy e
          Scikit-learn, com interesse em soluções orientadas a dados.
          Atualmente, concilio atividades acadêmicas e profissionais, buscando
          unir desenvolvimento de software e Ciência de Dados de forma aplicada.
        </p>
      </div>
    </article>
  );
};

export default Content;
