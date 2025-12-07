# nodets-canil

# 📦 Nome do Projeto

Uma breve descrição do projeto, explicando o que ele faz e para que serve.

---

## 🚀 Configuração do projeto back-end

package.json => npm init -y
arquivo de configuração typescript: tsc --init(tsconfig.json)

---

## 🚀 dependencias ou libs Utilizadas

--criar pasta => mkdir name
--criar document0=>type nul > server.ts

_/ express
Framework para criar servidores HTTP e APIs no Node.js.
Facilita criar rotas, middlewares e controlar requisições/respostas.
_/

_/ mustache-express
Motor de template (template engine) para renderizar páginas HTML.
Permite usar arquivos .mustache e injetar variáveis dinamicamente.
Útil quando você quer gerar páginas no backend sem React.
_/

_/ dotenv
Carrega variáveis de ambiente de um arquivo .env.
Serve para proteger dados sensíveis (senha de banco, token, porta, etc.)
e deixar o projeto mais organizado e seguro.
_/

## 🚀 dependencias de desenvonvimento (types) Utilizadas

npm i --save-dev @types/express @types/mustache-express @types/node

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Prisma / Sequelize / Mongoose (se usar)
- TypeScript ou JavaScript
- MySQL / PostgreSQL / MongoDB
- Outras libs importantes...

---

_/ npm run dev
👑 USE ESTE!
Ideal para desenvolvimento rápido.
Usa ts-node-dev (hot reload real) — reinicia automaticamente quando você altera .ts.
_/

/_ npm run start-dev
Alternativa usando nodemon.
Observa mudanças em .ts e .mustache.
Bom se você quiser rodar sem ts-node-dev.
_/

/_ npm run watch:dev
Compila o TypeScript para dist/ continuamente (tsc --watch)
e executa com nodemon observando os arquivos compilados.
Serve para testar o fluxo “compilar + executar” simultâneo.
_/

/_ npm run build
Compila todo o TypeScript para JavaScript dentro da pasta dist/.
Use ANTES de rodar em produção.
_/

/_ npm run start
Executa a versão já compilada (dist/server.js)
Este é o comando para rodar em PRODUÇÃO.
_/

## 📁 pre requisitos globais

-- nom g i nodemon , typescript , ts node

## 📁 Estrutura do Projeto
