import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { searchMenuObject } from "../helpers/searchMenuObject";

/**
 * Busca pets por nome e/ou sexo, ou retorna todos se nenhum filtro for fornecido.
 */
export const search = (req: Request, res: Response): void => {
  const query = (req.query.q as string)?.trim() || "";
  const sex = (req.query.sex as string)?.trim() as
    | "Masculino"
    | "Feminino"
    | "";

  let list;

  // Aplica filtros combinados usando o método getFiltered do modelo
  if (query || sex) {
    list = Pet.getFiltered({
      ...(sex && { sex }),
    }).filter(
      (pet) => !query || pet.name.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    list = Pet.getAll();
  }

  res.render("pages/page", {
    menu: searchMenuObject("home"),
    list,
    searchQuery: query,
    searchSex: sex,
    isMasculino: sex === "Masculino",
    isFeminino: sex === "Feminino",
  });
};
