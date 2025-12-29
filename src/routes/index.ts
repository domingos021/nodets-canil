import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

/**
 * ======================================================
 * CONFIGURAÇÃO DE ROTAS DA APLICAÇÃO
 * ======================================================
 *
 * Este arquivo centraliza todas as rotas públicas do site,
 * associando cada endpoint HTTP ao seu respectivo controller.
 *
 * A separação por controllers mantém a aplicação organizada,
 * escalável e facilita a manutenção das regras de negócio.
 */

// Instância do Router do Express
const router = Router();

/**
 * ======================================================
 * ROTAS DE PÁGINAS (RENDERIZAÇÃO)
 * ======================================================
 *
 * Responsáveis por exibir páginas estáticas/dinâmicas
 * relacionadas às categorias de animais.
 */
router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

/**
 * ======================================================
 * ROTAS DE BUSCA
 * ======================================================
 *
 * Responsável por tratar requisições de pesquisa
 * realizadas pelos usuários.
 */
router.get("/search", SearchController.search);

export default router;
