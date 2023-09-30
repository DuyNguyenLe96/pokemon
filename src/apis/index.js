import ApiClient from '../utils/ApiUtil';

export async function fetchPokemonApi() {
  const fetchPokemonUrl = `/pokemon?offset=0&limit=50`;
  const { count, next, results } = await ApiClient.get(fetchPokemonUrl);
  const response = Object.assign({}, { count, next, results: [] });
  for (let i = 0; i < results?.length; i++) {
    const pokemonDetailUrl = `/pokemon/${results[i].name}`;
    const pokemonDetail = await ApiClient.get(pokemonDetailUrl);
    response.results[i] = {
      ...pokemonDetail,
      imageUrl: pokemonDetail?.sprites?.other?.dream_world?.front_default
    };
  }
  console.log('response', response);
  return response;
}
