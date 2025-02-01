import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ContainerListPokemon from "@components/ContainerListPokemon";
import CardPokemon from "@components/CardPokemon";
import ModalStats from "@components/ModalStats";
import Loading from "@components/Loading";

import styles from "./styles.module.scss";

const SearchByType = () => {
  const { pokemonType } = useParams();

  const [pokemonsByType, setPokemonsByType] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!pokemonType) return;

    getDataByType(pokemonType);

    // Cleanup function
    return () => {
      setPokemonsByType([]);
      setLoading(true);
      setError(null);
    };
  }, [pokemonType]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default SearchByType;
