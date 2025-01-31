import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ContainerListPokemon from "@components/ContainerListPokemon";
import CardPokemon from "@components/CardPokemon";
import ModalStats from "@components/ModalStats";

import styles from "./styles.module.scss";

const SearchByType = () => {
  const { pokemonType } = useParams();

  const [pokemonsByType, setPokemonsByType] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [modal, setModal] = useState(false);

  const getDataByType = async (type) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/type/${type.toLowerCase()}`,
      );
      const results = response.data.pokemon;
      const details = await Promise.all(
        results.map((pokemon) => axios.get(pokemon.pokemon.url)),
      );
      const pokemonDetails = details.map((pokemon) => pokemon.data);
      setPokemonsByType(pokemonDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataByType(pokemonType);
  }, [pokemonType]);

  return (
    <>
      <h2 className={styles.title}>{pokemonType}</h2>

      <ContainerListPokemon>
        {pokemonsByType.map((pokemon) => (
          <CardPokemon
            key={pokemon.id}
            selectedPokemon={setSelectedPokemon}
            modal={setModal}
            pokemon={pokemon}
          />
        ))}
      </ContainerListPokemon>
      {modal && (
        <ModalStats modal={setModal} selectedPokemon={selectedPokemon} />
      )}
    </>
  );
};

export default SearchByType;
