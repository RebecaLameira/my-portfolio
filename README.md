# Portfolio — Rebeca Lameira

Este projeto consiste em um portfólio profissional desenvolvido com o objetivo de apresentar minha trajetória acadêmica e profissional, bem como demonstrar conhecimentos em desenvolvimento de software, organização de sistemas e boas práticas de engenharia.

O portfólio foi concebido e implementado como um **sistema web full-stack**, contemplando desde a análise de requisitos até a estruturação do código, responsividade e preparação para integração com serviços externos.

---

## 📌 Objetivos do Projeto

- Apresentar informações profissionais de forma clara e organizada
- Demonstrar domínio de desenvolvimento front-end moderno
- Aplicar conceitos de arquitetura de software e separação de responsabilidades
- Explorar integração entre interface, lógica de aplicação e serviços
- Garantir responsividade, usabilidade e acessibilidade

---

## 🧩 Estrutura e Arquitetura

O projeto foi estruturado de forma modular, com componentes reutilizáveis e separação clara entre responsabilidades, utilizando o padrão do **Next.js App Router**.

- Organização por componentes (Header, Content, Trajectory, Footer, Formulário)
- Layout global centralizado
- Suporte a tema claro e escuro (dark/light mode)
- Estrutura preparada para expansão e manutenção contínua

---

## 🔌 Comunicação e Serviços

A página de contato implementa um fluxo completo de comunicação cliente-servidor, utilizando:

- Validação de dados no front-end
- Envio de informações via requisição HTTP POST
- API interna do Next.js
- Envio de emails no servidor por meio do Nodemailer, utilizando o protocolo SMTP

Essa abordagem garante segurança, organização e separação entre a camada de apresentação e a lógica de serviço.

---

## 🛠️ Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Nodemailer
- Git / GitHub

---

## ▶️ Como Executar o Projeto

Instale as dependências e execute o projeto localmente:

```bash
npm install
npm run dev
```
