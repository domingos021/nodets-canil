/**
 * Pet Model
 *
 * Responsável por centralizar o acesso e manipulação dos dados de pets.
 * Fornece métodos para consulta, filtragem e busca de pets cadastrados.
 */

// Tipo reutilizável
export type PetType = "dog" | "cat" | "fish";

// Enum para tipos de pets (alternativa mais robusta)
export enum PetTypeEnum {
  DOG = "dog",
  CAT = "cat",
  FISH = "fish",
}

// Estrutura do objeto
// Define o formato (contrato) dos dados de um pet.
// Esse tipo é usado para garantir que os dados
// armazenados em animalsData e retornados pelo model
// sigam uma estrutura consistente.
// Não armazena dados, apenas descreve o formato.
export type PetData = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  sex: "Masculino" | "Feminino";
};

// Dados privados - evita manipulação externa direta
const animalsData: PetData[] = [
  // Dogs
  {
    type: "dog",
    image: "pastor-alemao.jpg",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "labrador.jpg",
    name: "Labrador Retriever",
    color: "Branco",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "zwergspitz.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    sex: "Feminino",
  },
  {
    type: "dog",
    image: "husky.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "golden.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "poodle.jpg",
    name: "Poodle",
    color: "Branco",
    sex: "Feminino",
  },
  {
    type: "dog",
    image: "bulldog.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    sex: "Masculino",
  },

  // Cats
  {
    type: "cat",
    image: "persa.jpg",
    name: "Persa",
    color: "Amarelo",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "mainecoon.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "bengal.jpg",
    name: "Bengal",
    color: "Branco, Preto e Amarelo",
    sex: "Feminino",
  },
  {
    type: "cat",
    image: "siames.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "sphynx.jpg",
    name: "Sphynx",
    color: "Branco",
    sex: "Masculino",
  },

  // Fish
  {
    type: "fish",
    image: "neon.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "matogrosso.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "limpavidro.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "tanictis.jpg",
    name: "Tanictis",
    color: "Vermelho",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "acara.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    sex: "Masculino",
  },
];

/**
 * API para acesso e manipulação de dados de pets
 */
export const Pet = {
  /**
   * Retorna todos os pets cadastrados
   * @returns Array contendo todos os pets
   */
  getAll(): PetData[] {
    return animalsData;
  },

  /**
   * Filtra pets por tipo
   * @param type - Tipo do pet (dog, cat ou fish)
   * @returns Array contendo apenas pets do tipo especificado
   */
  getByType(type: PetType): PetData[] {
    return animalsData.filter((pet) => pet.type === type);
  },

  /**
   * Busca pets por nome (case-insensitive)
   * @param name - Nome ou parte do nome do pet
   * @returns Array contendo pets que correspondem à busca
   */
  getByName(name: string): PetData[] {
    const results = animalsData.filter((pet) =>
      pet.name.toLowerCase().includes(name.toLowerCase())
    );

    if (results.length === 0) {
      console.warn(`Nenhum pet encontrado com o nome: ${name}`);
    }

    return results;
  },

  /**
   * Busca pets por nome e sexo
   * @param name - Nome ou parte do nome do pet (case-insensitive)
   * @param sex - Sexo do pet (Masculino ou Feminino)
   * @returns Array contendo pets que correspondem ao nome e sexo especificados
   * @example
   * Pet.getByNameAndSex('golden', 'Masculino')
   * Pet.getByNameAndSex('poodle', 'Feminino')
   */
  getByNameAndSex(name: string, sex: "Masculino" | "Feminino"): PetData[] {
    const results = animalsData.filter(
      (pet) =>
        pet.name.toLowerCase().includes(name.toLowerCase()) && pet.sex === sex
    );

    if (results.length === 0) {
      console.warn(
        `Nenhum pet encontrado com o nome "${name}" e sexo "${sex}"`
      );
    }

    return results;
  },

  /**
   * Busca pets com filtros combinados
   * @param filters - Objeto com filtros opcionais (type, sex, color)
   * @returns Array contendo pets que correspondem aos filtros aplicados
   * @example
   * Pet.getFiltered({ type: 'dog', sex: 'Feminino' })
   * Pet.getFiltered({ color: 'Branco' })
   */
  getFiltered(filters: {
    type?: PetType;
    sex?: "Masculino" | "Feminino";
    color?: string;
  }): PetData[] {
    const results = animalsData.filter((pet) => {
      // Filtra por tipo se especificado
      if (filters.type && pet.type !== filters.type) return false;

      // Filtra por sexo se especificado
      if (filters.sex && pet.sex !== filters.sex) return false;

      // Filtra por cor se especificado (case-insensitive)
      if (
        filters.color &&
        !pet.color.toLowerCase().includes(filters.color.toLowerCase())
      )
        return false;

      return true;
    });

    if (results.length === 0) {
      console.warn(
        "Nenhum pet encontrado com os filtros especificados:",
        filters
      );
    }

    return results;
  },
};
