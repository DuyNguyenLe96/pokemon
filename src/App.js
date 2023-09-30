import React, { useEffect, useState } from 'react';
import './assets/Styles/index.scss';
import Pagination from './components/Pagination';
import { fetchPokemonApi } from './apis';
import PokemonCard from './components/PokemonCard/index';
const App = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const fetchPokemon = async () => setPokemonList(await fetchPokemonApi());
  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <div className='pokemon-app'>
      <header>
        <h1>Pokemon</h1>
        <Pagination />
      </header>
      <main>
        {(pokemonList?.results || []).map((pokemon) => (
          <PokemonCard key={pokemon?.id} {...pokemon} />
        ))}
      </main>
    </div>
  );
};

export default App;
