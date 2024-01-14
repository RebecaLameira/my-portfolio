import Title from "../Title/Title";
const Trajectory = () => {
	return (
		<div className="bg-white m-16 p-8 mobile:m-8">
			<Title>Trajetoria</Title>
			<br />
			<div>
				<ol className="relative mx-8 border-s-2 border-dashed border-green-700">
					<li className="mb-8 ms-4">
						<div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<h3 className="text-lg font-bold text-secondary dark:text-white">
							Desenvolvedora Freelancer
						</h3>
						<p className="text-base font-normal text-gray-500 dark:text-gray-400">
							Trabalhando com a linguagem TypeScript, e a biblioteca React.
							Utilizando containers do Docker e para a contemporização o
							Material UI. E com design no figma.
						</p>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							2023
						</time>
					</li>
					<li className="mb-8 ms-4">
						<div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<h3 className="text-lg font-semibold text-secondary dark:text-white">
							Desenvolvedora Front-End | Eu quero Grana
						</h3>
						<p className="text-base font-normal text-gray-500 dark:text-gray-400">
							Setor de Desenvolvimento. Trabalhando com as linguagens de
							programação JavaScript, TypeScript. E React.js e Next.js .
							Utilizando a plataforma Discord para reuniões diárias, seguindo o
							framework de gerenciamento Scrum.
						</p>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							2021 - 2022
						</time>
					</li>
					<li className="mb-8 ms-4">
						<div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

						<h3 className="text-lg font-semibold text-secondary dark:text-white">
							Desenvolvedora Full-Stack Estagiário | NUTI
						</h3>
						<p className="text-base font-normal text-gray-500 dark:text-gray-400">
							Setor de Desenvolvimento. Trabalhando com as linguagens de
							programação C#, Javascript, jQuery, HTML e o framework .NET e
							AJAX. Utilizando SQL para o banco de dados.
						</p>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							2021
						</time>
					</li>
					<li className="ms-4">
						<div className="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<h3 className="text-lg font-semibold text-secondary dark:text-white">
							Estagiário | UFMT
						</h3>
						<p className="text-base font-normal text-gray-500 dark:text-gray-400">
							Suporte técnico de computadores e Equipamentos. Help Desk, fornece
							suporte técnico e assistência aos usuários da empresa. Diagnóstico
							de Problemas, atendimento a chamados, gerenciamento de senhas.
						</p>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							2019 - 2021
						</time>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Trajectory;
