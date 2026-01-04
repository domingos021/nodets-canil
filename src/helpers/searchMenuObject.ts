/**
 * ======================================================
 * HELPER: searchMenuObject
 * ======================================================
 * Cria o estado do menu indicando qual página está ativa.
 */

export type MenuState = {
  home: boolean;
  dogs: boolean;
  cats: boolean;
  fishes: boolean;
};

export const searchMenuObject = (activePage: keyof MenuState): MenuState => {
  return {
    home: activePage === "home",
    dogs: activePage === "dogs",
    cats: activePage === "cats",
    fishes: activePage === "fishes",
  };
};
