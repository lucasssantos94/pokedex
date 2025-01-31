import { useEffect, useState } from "react";
import axios from "axios";

import CardPokemon from "@components/CardPokemon";
import ContainerListPokemon from "@components/ContainerListPokemon";
import ButtonShowMore from "@components/ButtonShowMore";
import ModalStats from "@components/ModalStats";

const HomePage = () => {
  const [numberOfPokemons, setNumberOfPokemons] = useState(9);
  const [pokemonList, setPokemonList] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();

  const loadMorePokemons = () => {
    setNumberOfPokemons(numberOfPokemons + 9);
  };

  const getData = async (number) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/pokemon?limit=${number}`,
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
    <>
      <ContainerListPokemon>
        {pokemonList.map((pokemon) => (
          <CardPokemon
            key={pokemon.id}
            pokemon={pokemon}
            modal={setModal}
            selectedPokemon={setSelectedPokemon}
          />
        ))}
      </ContainerListPokemon>

      <ButtonShowMore func={loadMorePokemons} />
      {modal && (
        <ModalStats modal={setModal} selectedPokemon={selectedPokemon} />
      )}
    </>
  );
};

export default HomePage;
