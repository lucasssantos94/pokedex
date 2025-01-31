import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CardPokemon from "@components/CardPokemon";
import ModalStats from "@components/ModalStats";

import styles from "./styles.module.scss";

const SearchByName = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();

  const getData = async (name) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/pokemon/${name}`,
      );
      setPokemon(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(name);
  }, [name]);

  return (
    <>
      {pokemon?.name && (
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
      )}
    </>
  );
};

export default SearchByName;
