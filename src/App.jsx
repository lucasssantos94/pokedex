import { useState, useEffect } from "react";

import CardPokemon from "./Components/CardPokemon";

import "./app.scss";

import axios from "axios";
import ContainerListPokemon from "./Components/ContainerListPokemon";
import ContainerApp from "./Components/ContainerApp";
import ButtonShowMore from "./Components/ButtonShowMore";

const App = () => {
  const [numberOfPokemons, setNumberOfPokemons] = useState(9);
  const [pokemonList, setPokemonList] = useState([]);

  const loadMorePokemons = () => {
    setNumberOfPokemons(numberOfPokemons + 9);
    console.log(numberOfPokemons);
  };

  const getData = async (number) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${number}`,
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
    getData(numberOfPokemons);
  }, [numberOfPokemons]);

  return (
    <main>
      <ContainerApp>
        <ContainerListPokemon>
          {pokemonList.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </ContainerListPokemon>

        <ButtonShowMore func={loadMorePokemons} />
      </ContainerApp>
    </main>
  );
};

export default App;
