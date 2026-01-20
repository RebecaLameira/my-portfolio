import Title from "../Title/Title";

const Trajectory = () => {
  return (
    <section className="rounded-3xl bg-white p-10 shadow-sm dark:bg-neutral-900 sm:p-6">
      <Title>Trajetória</Title>

      <ol className="relative mt-8 border-s-2 border-dashed border-green-700 ps-6">
        {/* Ciência de Dados */}
        <li className="mb-10">
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-green-700 dark:bg-green-900" />

          <h3 className="text-lg font-semibold text-secondary dark:text-white">
            Estagiária de Ciência de Dados | Polícia Militar de Mato Grosso
          </h3>

          <p className="mt-2 text-base text-neutral-700 dark:text-neutral-300">
            Atuação no desenvolvimento de uma aplicação web de apoio à análise e
            visualização de dados estratégicos, com desenvolvimento front-end em
            React, integração com APIs em Python (FastAPI) e atividades de
            tratamento, análise e visualização de dados utilizando Pandas,
            NumPy, Scikit-learn, além de Power BI e Excel.
          </p>

          <time className="mt-2 block text-sm text-green-700 dark:text-green-400">
            2025 – Atual
          </time>
        </li>

        {/* Estágio de Docência */}
        <li className="mb-10">
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-green-700 dark:bg-green-900" />

          <h3 className="text-lg font-semibold text-secondary dark:text-white">
            Estágio de Docência | UFMT
          </h3>

          <p className="mt-2 text-base text-neutral-700 dark:text-neutral-300">
            Apoio ao processo de ensino e aprendizagem na disciplina de
            Programação Orientada a Objetos, com participação no planejamento de
            aulas, preparação de conteúdos didáticos, suporte aos alunos e
            colaboração com o professor responsável.
          </p>

          <time className="mt-2 block text-sm text-green-700 dark:text-green-400">
            2024
          </time>
        </li>

        {/* Freelancer */}
        <li className="mb-10">
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-green-700 dark:bg-green-900" />

          <h3 className="text-lg font-semibold text-secondary dark:text-white">
            Desenvolvedora Front-end | Freelancer
          </h3>

          <p className="mt-2 text-base text-neutral-700 dark:text-neutral-300">
            Desenvolvimento de interfaces web utilizando React e TypeScript, com
            foco em componentização, consumo de layouts responsivos no Figma e
            boas práticas de UI, além de experiência com Docker e Material UI.
          </p>

          <time className="mt-2 block text-sm text-green-700 dark:text-green-400">
            2023
          </time>
        </li>

        {/* Eu Quero Grana */}
        <li className="mb-10">
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-green-700 dark:bg-green-900" />

          <h3 className="text-lg font-semibold text-secondary dark:text-white">
            Desenvolvedora Front-end | Eu Quero Grana
          </h3>

          <p className="mt-2 text-base text-neutral-700 dark:text-neutral-300">
            Desenvolvimento de aplicações web com React.js e Next.js, incluindo
            formulários e integração via API REST, atuando em equipe ágil com
            metodologia Scrum.
          </p>

          <time className="mt-2 block text-sm text-green-700 dark:text-green-400">
            2021 – 2022
          </time>
        </li>

        {/* NUTI */}
        <li className="mb-10">
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-green-700 dark:bg-green-900" />

          <h3 className="text-lg font-semibold text-secondary dark:text-white">
            Desenvolvedora Full-Stack Estagiária | NUTI – UFMT
          </h3>

          <p className="mt-2 text-base text-neutral-700 dark:text-neutral-300">
            Desenvolvimento de sistemas com C#, ASP.NET, JavaScript, jQuery e
            AJAX, integração com banco de dados SQL, operações CRUD e aplicação
            de metodologias ágeis.
          </p>

          <time className="mt-2 block text-sm text-green-700 dark:text-green-400">
            2021
          </time>
        </li>

        {/* Suporte */}
        <li>
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-green-700 dark:bg-green-900" />

          <h3 className="text-lg font-semibold text-secondary dark:text-white">
            Estagiária de Suporte Técnico | UFMT
          </h3>

          <p className="mt-2 text-base text-neutral-700 dark:text-neutral-300">
            Atuação em suporte técnico e help desk, incluindo atendimento a
            chamados, diagnóstico de problemas, manutenção de equipamentos e
            apoio à infraestrutura de TI.
          </p>

          <time className="mt-2 block text-sm text-green-700 dark:text-green-400">
            2019 – 2021
          </time>
        </li>
      </ol>
    </section>
  );
};

export default Trajectory;
