import { Request, Response } from "express";

/**
 * ======================================================
 * CONFIGURAÇÃO CENTRALIZADA DE BANNERS
 * ======================================================
 *
 * Define os dados estáticos utilizados no banner das páginas.
 * Centralizar essas informações evita strings duplicadas,
 * facilita manutenção e permite escalar para novas categorias
 * sem alterar a lógica dos controllers.
 *
 * O uso de `as const` garante:
 * - Imutabilidade dos dados
 * - Inferência de tipos literais
 * - Maior segurança em tempo de compilação
 */
const BANNER_CONFIG = {
  home: { title: "Todos os animais", image: "allanimals.jpg" },
  dogs: { title: "Cachorros", image: "banner_dog.jpg" },
  cats: { title: "Gatos", image: "banner_cat.jpg" },
  fishes: { title: "Peixes", image: "banner_fish.jpg" },
} as const;

/**
 * ======================================================
 * HELPER: Renderização de página com banner e menu ativo
 * ======================================================
 *
 * Responsável por encapsular a lógica de renderização
 * das páginas que utilizam banner dinâmico e controle
 * de menu ativo.
 *
 * Esse helper evita repetição de código nos controllers
 * e garante padronização na forma como o banner e o menu
 * são enviados para a camada de view.
 *
 * @param res - Objeto de resposta do Express
 * @param title - Título exibido no banner
 * @param image - Nome da imagem de fundo do banner
 * @param activePage - Identificador da página ativa no menu
 */
const renderPageWithBanner = (
  res: Response,
  title: string,
  image: string,
  activePage: keyof typeof BANNER_CONFIG
): void => {
  res.render("pages/page", {
    banner: {
      title,
      background: `images/${image}`,
    },
    menu: {
      home: activePage === "home",
      dogs: activePage === "dogs",
      cats: activePage === "cats",
      fishes: activePage === "fishes",
    },
  });
};

/**
 * ======================================================
 * FACTORY: Criação de controllers por categoria
 * ======================================================
 *
 * Função responsável por gerar controllers Express
 * com base em uma categoria válida definida no
 * BANNER_CONFIG.
 *
 * Benefícios:
 * - Elimina duplicação de código
 * - Garante que apenas categorias existentes sejam usadas
 * - Facilita a adição de novas páginas no futuro
 * - Gerencia automaticamente o estado ativo do menu
 *
 * @param category - Categoria válida do BANNER_CONFIG
 * @returns Controller Express pronto para uso
 */
const createCategoryController = (category: keyof typeof BANNER_CONFIG) => {
  return (_req: Request, res: Response): void => {
    const { title, image } = BANNER_CONFIG[category];
    renderPageWithBanner(res, title, image, category);
  };
};

/**
 * ======================================================
 * CONTROLLERS EXPORTADOS
 * ======================================================
 *
 * Controllers responsáveis por atender as rotas
 * públicas da aplicação, cada um representando
 * uma categoria específica de animais.
 *
 * A lógica interna é gerada dinamicamente pela
 * factory `createCategoryController`, incluindo o
 * controle de qual item do menu deve estar ativo.
 */
export const home = createCategoryController("home");
export const dogs = createCategoryController("dogs");
export const cats = createCategoryController("cats");
export const fishes = createCategoryController("fishes");
