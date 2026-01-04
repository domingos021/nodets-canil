import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { searchMenuObject } from "../helpers/searchMenuObject";

export const search = (req: Request, res: Response): void => {
  const query = (req.query.q as string)?.trim() || "";

  const list = query ? Pet.getByName(query) : Pet.getAll();

  const banner =
    list.length > 0
      ? {
          title: query
            ? `Resultado da busca por "${query}"`
            : "Todos os animais",
          background: "images/allanimals.jpg",
        }
      : null;

  res.render("pages/page", {
    banner,
    menu: searchMenuObject("home"),
    list,
  });
};
