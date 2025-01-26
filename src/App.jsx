import { useState, useEffect } from "react";

import CardPokemon from "./Components/CardPokemon";

import "./app.scss";

import axios from "axios";
import ContainerListPokemon from "./Components/ContainerListPokemon";
import ContainerApp from "./Components/ContainerApp";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=9",
      );
      const results = response.data.results;

      const details = await Promise.all(
        results.map((pokemon) => axios.get(pokemon.url)),
      );

      const pokemonDetails = details.map((pokemon) => pokemon.data);
      setPokemonList(pokemonDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <ContainerApp>
        <ContainerListPokemon>
          {pokemonList.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </ContainerListPokemon>
      </ContainerApp>
    </main>
  );
};

export default App;
