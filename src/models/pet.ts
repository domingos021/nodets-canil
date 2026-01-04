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
  petName: string;
  sex: "Masculino" | "Feminino";
};

// Dados privados - evita manipulação externa direta
const animalsData: PetData[] = [
  // Dogs

  // Pastor Alemão
  {
    type: "dog",
    image: "pastor-alemao_macho.jpg",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
    sex: "Masculino",
    petName: "Thor",
  },
  {
    type: "dog",
    image: "pastor-alemao_femea.jpg",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
    sex: "Feminino",
    petName: "Luna",
  },

  // Labrador Retriever
  {
    type: "dog",
    image: "labrador_macho.jpg",
    name: "Labrador Retriever",
    color: "Branco",
    sex: "Masculino",
    petName: "Max",
  },
  {
    type: "dog",
    image: "labrador_femea.jpg",
    name: "Labrador Retriever",
    color: "Branco",
    sex: "Feminino",
    petName: "Bella",
  },

  // Zwergspitz
  {
    type: "dog",
    image: "zwergspitz_macho.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    sex: "Masculino",
    petName: "Simba",
  },
  {
    type: "dog",
    image: "zwergspitz_femea.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    sex: "Feminino",
    petName: "Mel",
  },

  // Husky Siberiano
  {
    type: "dog",
    image: "husky_macho.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    sex: "Masculino",
    petName: "Zeus",
  },
  {
    type: "dog",
    image: "husky_femea.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    sex: "Feminino",
    petName: "Maya",
  },

  // Golden Retriever
  {
    type: "dog",
    image: "golden_macho.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    sex: "Masculino",
    petName: "Duke",
  },
  {
    type: "dog",
    image: "golden_femea.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    sex: "Feminino",
    petName: "Honey",
  },

  // Poodle
  {
    type: "dog",
    image: "poodle_macho2.jpg",
    name: "Poodle",
    color: "Branco",
    sex: "Masculino",
    petName: "Toby",
  },
  {
    type: "dog",
    image: "poodle_femea1.jpg",
    name: "Poodle",
    color: "Branco",
    sex: "Feminino",
    petName: "Nina",
  },

  // Bulldog
  {
    type: "dog",
    image: "bulldog_macho.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    sex: "Masculino",
    petName: "Rocky",
  },
  {
    type: "dog",
    image: "bulldog_femea.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    sex: "Feminino",
    petName: "Lola",
  },

  // Cats

  // Persa
  {
    type: "cat",
    image: "persa_macho.jpg",
    name: "Persa",
    color: "Amarelo",
    sex: "Masculino",
    petName: "Garfield",
  },
  {
    type: "cat",
    image: "persa_femea.jpg",
    name: "Persa",
    color: "Amarelo",
    sex: "Feminino",
    petName: "Mia",
  },

  // Maine Coon
  {
    type: "cat",
    image: "mainecoon_macho.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    sex: "Masculino",
    petName: "Felix",
  },
  {
    type: "cat",
    image: "mainecoon_femea.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    sex: "Feminino",
    petName: "Frida",
  },

  // Bengal
  {
    type: "cat",
    image: "bengal_macho.jpg",
    name: "Bengal",
    color: "Branco, Preto e Amarelo",
    sex: "Masculino",
    petName: "Tiger",
  },
  {
    type: "cat",
    image: "bengal_femea.jpg",
    name: "Bengal",
    color: "Branco, Preto e Amarelo",
    sex: "Feminino",
    petName: "Nala",
  },

  // Siamês
  {
    type: "cat",
    image: "siames_macho.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    sex: "Masculino",
    petName: "Tom",
  },
  {
    type: "cat",
    image: "siames_femea.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    sex: "Feminino",
    petName: "Jade",
  },

  // Sphynx
  {
    type: "cat",
    image: "sphynx_macho.jpg",
    name: "Sphynx",
    color: "Branco",
    sex: "Masculino",
    petName: "Amon",
  },
  {
    type: "cat",
    image: "sphynx_femea.jpg",
    name: "Sphynx",
    color: "Branco",
    sex: "Feminino",
    petName: "Cleópatra",
  },

  // Fish

  // Tetra Neon
  {
    type: "fish",
    image: "neon_macho.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    sex: "Masculino",
    petName: "Flash",
  },
  {
    type: "fish",
    image: "neon_femea.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    sex: "Feminino",
    petName: "Nemo",
  },

  // Mato Grosso
  {
    type: "fish",
    image: "matogrosso_macho.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    sex: "Masculino",
    petName: "Sunny",
  },
  {
    type: "fish",
    image: "matogrosso_femea.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    sex: "Feminino",
    petName: "Aurora",
  },

  // Limpa Vidro
  {
    type: "fish",
    image: "limpavidro_macho.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    sex: "Masculino",
    petName: "Verde",
  },
  {
    type: "fish",
    image: "limpavidro_femea.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    sex: "Feminino",
    petName: "Jade",
  },

  // Tanictis
  {
    type: "fish",
    image: "tanictis_macho.jpg",
    name: "Tanictis",
    color: "Vermelho",
    sex: "Masculino",
    petName: "Rubi",
  },
  {
    type: "fish",
    image: "tanictis_femea.jpg",
    name: "Tanictis",
    color: "Vermelho",
    sex: "Feminino",
    petName: "Scarlet",
  },

  // Acará Bandeira
  {
    type: "fish",
    image: "acara_macho.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    sex: "Masculino",
    petName: "Shadow",
  },
  {
    type: "fish",
    image: "acara_femea.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    sex: "Feminino",
    petName: "Onix",
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
