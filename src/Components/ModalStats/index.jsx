import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import iconClose from "../../assets/icon-close.svg";
import pokeballDiveser from "../../assets/pokeball-diviser.svg";

import iconWeight from "../../assets/icon-weight.svg";
import iconHeight from "../../assets/icon-ruler.svg";

import styles from "./styles.module.scss";
import BadgeType from "../BadgeType";

const ModalStats = ({ modal, selectedPokemon }) => {
  const [progressValues, setProgressValues] = useState([]);

  useEffect(() => {
    if (selectedPokemon) {
      const statsArray = selectedPokemon.stats.map(() => 0); // Inicializa os valores como 0
      setProgressValues(statsArray);

      // Animação gradual dos valores de progresso
      const interval = setInterval(() => {
        setProgressValues((prev) =>
          prev.map((value, index) => {
            const target = selectedPokemon.stats[index].base_stat;
            return value < target ? value + 1 : value;
          }),
        );
      }, 1); // Velocidade de animação

      // Limpar o intervalo quando o componente for desmontado
      return () => clearInterval(interval);
    }
  }, [selectedPokemon]);

  return (
    <div className={styles.modal} onClick={() => modal(false)}>
      <div className={styles.container_modal}>
        <img
          src={iconClose}
          alt="icone fechar modal"
          className={styles.close_modal}
          onClick={() => modal(false)}
        />

        <div className={styles.pokemon_info}>
          {selectedPokemon && (
            <div className={styles.info_pokemon}>
              <img
                src={selectedPokemon.sprites.other.home.front_default}
                alt={selectedPokemon.name}
                className={styles.image_pokemon}
              />
              <div className={styles.container_info}>
                <p>
                  #
                  {selectedPokemon.id < 10
                    ? `00${selectedPokemon.id}`
                    : selectedPokemon.id < 100
                      ? `0${selectedPokemon.id}`
                      : selectedPokemon.id}
                </p>
                <h2>{selectedPokemon.name}</h2>

                <div className={styles.types_pokemon}>
                  {selectedPokemon.types.map((types, index) => (
                    <BadgeType
                      key={`${selectedPokemon.name}-${index}`}
                      type={types.type.name}
                    />
                  ))}
                </div>

                <div className={styles.details_pokemon}>
                  <span>
                    <img src={iconWeight} alt="Weight" />
                    {`${selectedPokemon.weight / 10} kg`}
                  </span>
                  <span>
                    <img src={iconHeight} alt="Height" />
                    {`${selectedPokemon.height / 10} m`}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.divider}>
          <img src={pokeballDiveser} alt="pokeball" />
        </div>

        <div className={styles.pokemon_stats}>
          <h2>Stats</h2>

          <table className={styles.table_stats}>
            <tbody>
              {selectedPokemon &&
                selectedPokemon.stats.map((stats, index) => (
                  <tr key={`${selectedPokemon.name}-${index}`}>
                    <td>{stats.stat.name}</td>
                    <td>{stats.base_stat}</td>
                    <td>
                      <progress value={progressValues[index]} max="100" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ModalStats.propTypes = {
  modal: PropTypes.func.isRequired,
  selectedPokemon: PropTypes.object.isRequired,
};

export default ModalStats;
