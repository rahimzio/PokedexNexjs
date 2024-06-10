import { PokemonApiResponse } from '@/models/types';

export default async function fetchPokemon(): Promise<PokemonApiResponse> {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1281';
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch Pokémon');
  const data: PokemonApiResponse = await response.json();
  console.log(data)
  return data;
}
