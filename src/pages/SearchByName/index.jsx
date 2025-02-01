import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CardPokemon from "@components/CardPokemon";
import ModalStats from "@components/ModalStats";
import PokemonNotFound from "@components/PokemonNotFound";

import styles from "./styles.module.scss";

const SearchByName = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const getData = async (name) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/pokemon/${name}`,
      );
      setPokemon(response.data);
      setNotFound(false); // Resetar o estado de "não encontrado"
    } catch (error) {
      if (error.response.status === 404) {
        setNotFound(true); // Definir o estado de "não encontrado" como verdadeiro
      }
    }
  };

  useEffect(() => {
    getData(name);
  }, [name]);

  return (
    <>
      {notFound ? (
        <div className={styles.not_found}>
          <h2>{name}</h2>
          <PokemonNotFound />
        </div>
      ) : (
        pokemon?.name && (
          <div>
            {modal && (
              <ModalStats modal={setModal} selectedPokemon={selectedPokemon} />
            )}

            <div className={styles.container_search}>
              <CardPokemon
                pokemon={pokemon}
                modal={setModal}
                selectedPokemon={setSelectedPokemon}
              />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default SearchByName;
