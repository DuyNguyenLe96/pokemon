import React, { useEffect } from 'react';
import { fetchPokemonApi } from './apis';
const App = (props) => {
  const fetchPokemon = async () => await fetchPokemonApi();
  useEffect(() => {
    fetchPokemon();
  }, []);
  return <div>Pokemon</div>;
};

export default App;
