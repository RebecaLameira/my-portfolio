import Title from "../Title/Title";
const Trajectory = () => {
  return (
    <div className="sm:m-8 m-16 bg-white p-8 dark:bg-black">
      <Title>Trajetoria</Title>
      <br />
      <div>
        <ol className="relative mx-8 border-s-2 border-dashed border-green-700">
          <li className="mb-8 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-green-700 dark:border-green-900 dark:bg-green-900"></div>
            <h3 className="text-lg font-bold text-secondary dark:text-white">
              Desenvolvedora Freelancer
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Trabalhando com a linguagem TypeScript, e a biblioteca React.
              Utilizando containers do Docker e para a contemporização o
              Material UI. E com design no figma.
            </p>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-green-500">
              2023
            </time>
          </li>
          <li className="mb-8 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-green-700 dark:border-green-900 dark:bg-green-900"></div>
            <h3 className="text-lg font-semibold text-secondary dark:text-white">
              Desenvolvedora Front-End | Eu quero Grana
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Setor de Desenvolvimento. Trabalhando com as linguagens de
              programação JavaScript, TypeScript. E React.js e Next.js .
              Utilizando a plataforma Discord para reuniões diárias, seguindo o
              framework de gerenciamento Scrum.
            </p>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-green-500">
              2021 - 2022
            </time>
          </li>
          <li className="mb-8 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-green-700 dark:border-green-900 dark:bg-green-900"></div>

            <h3 className="text-lg font-semibold text-secondary dark:text-white">
              Desenvolvedora Full-Stack Estagiário | NUTI
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Setor de Desenvolvimento. Trabalhando com as linguagens de
              programação C#, Javascript, jQuery, HTML e o framework .NET e
              AJAX. Utilizando SQL para o banco de dados.
            </p>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-green-500">
              2021
            </time>
          </li>
          <li className="ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-green-700 dark:border-green-900 dark:bg-green-900"></div>
            <h3 className="text-lg font-semibold text-secondary dark:text-white">
              Estagiário | UFMT
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Suporte técnico de computadores e Equipamentos. Help Desk, fornece
              suporte técnico e assistência aos usuários da empresa. Diagnóstico
              de Problemas, atendimento a chamados, gerenciamento de senhas.
            </p>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-green-500">
              2019 - 2021
            </time>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Trajectory;
