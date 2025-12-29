import express from "express";
import dotenv from "dotenv";
import path from "path";
import mustache from "mustache-express";
import mainRoutes from "./routes/index";

/**
 * ======================================================
 * INICIALIZAÇÃO DAS VARIÁVEIS DE AMBIENTE
 * ======================================================
 *
 * Carrega as variáveis definidas no arquivo .env
 * para o processo Node.js, permitindo configuração
 * flexível entre ambientes (dev, staging, produção).
 */
dotenv.config();

/**
 * ======================================================
 * CRIAÇÃO DA APLICAÇÃO EXPRESS
 * ======================================================
 *
 * Instância principal do servidor HTTP responsável
 * por receber requisições e enviar respostas.
 */
const server = express();

/**
 * ======================================================
 * CONFIGURAÇÃO DO TEMPLATE ENGINE (MUSTACHE)
 * ======================================================
 *
 * Define o Mustache como engine de templates e
 * configura os diretórios de views e partials.
 *
 * Essa abordagem mantém a camada de apresentação
 * desacoplada da lógica de negócio.
 */
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));

server.engine(
  "mustache",
  mustache(path.join(__dirname, "views/partials"), ".mustache")
);

/**
 * ======================================================
 * CONFIGURAÇÃO DE ARQUIVOS ESTÁTICOS
 * ======================================================
 *
 * Torna pública a pasta `public`, permitindo acesso
 * a arquivos como imagens, CSS e JavaScript no frontend.
 */
server.use(express.static(path.join(__dirname, "../public")));

/**
 * ======================================================
 * REGISTRO DAS ROTAS DA APLICAÇÃO
 * ======================================================
 *
 * Importa e registra o conjunto principal de rotas,
 * mantendo a organização e separação de responsabilidades.
 */
server.use(mainRoutes);

/**
 * ======================================================
 * FALLBACK: ROTA 404
 * ======================================================
 *
 * Captura qualquer requisição não tratada anteriormente
 * e retorna uma resposta apropriada de página não encontrada.
 */
server.use((_req, res) => {
  res.status(404).send("Página não encontrada");
});

/**
 * ======================================================
 * INICIALIZAÇÃO DO SERVIDOR HTTP
 * ======================================================
 *
 * Porta definida via variável de ambiente ou,
 * como fallback, porta padrão 3000.
 */
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Acesse: http://localhost:${PORT}`);
});
