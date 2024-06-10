export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
  height: number;
  weight: number;
  base_experience: number;
  abilities: { ability: { name: string } }[];
  moves: { move: { name: string } }[];
  stats: { base_stat: number, stat: { name: string } }[];
}

export interface PokemonApiResponse {
  results: Pokemon[];
}