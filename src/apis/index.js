import ApiClient from '../utils/ApiUtil';

export async function fetchPokemonApi() {
  const fetchPokemonUrl = `/pokemon?offset=0&limit=50`;
  const pokemon = await ApiClient.get(fetchPokemonUrl);
  console.log('pokemon results', pokemon);
  return pokemon;
}
