import express from "express";
import dotenv from "dotenv";
import path from "path"; // rotas publicas
import mustache from "mustache-express";
import mainRoutes from "./routes/index";

dotenv.config(); // Carrega as variáveis de ambiente definidas no arquivo .env

// Configurando o express
const server = express();

// Configurar Mustache
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine(
  "mustache",
  mustache(
    path.join(__dirname, "views/partials"), // Pasta dos partials
    ".mustache" // Extensão dos arquivos
  )
);

// Configuração da pasta public
server.use(express.static(path.join(__dirname, "../public")));

// Configuração das rotas
server.use(mainRoutes);

server.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

// LISTEN COM .ENV
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Acesse: http://localhost:${PORT}`);
});
