import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import iconClose from "../../assets/icon-close.svg";
import pokeballDiveser from "../../assets/pokeball-diviser.svg";
import iconWeight from "../../assets/icon-weight.svg";
import iconHeight from "../../assets/icon-ruler.svg";

import styles from "./styles.module.scss";
import BadgeType from "../BadgeType";

const ModalStats = ({ modal, selectedPokemon }) => {
  const [progressValues, setProgressValues] = useState([]);
  const [isExiting, setIsExiting] = useState(false);

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

  const handleClose = () => {
    setIsExiting(true); // Ativa a animação de saída
    setTimeout(() => {
      modal(false); // Fecha o modal após a animação
      setIsExiting(false); // Reseta o estado de saída
    }, 300); // O tempo deve coincidir com o `duration` da animação
  };

  const getProgressColor = (value) => {
    if (value < 50) return "low"; // Vermelho
    if (value <= 70) return "medium"; // Laranja
    return "high"; // Verde
  };

  return (
    <AnimatePresence>
      {selectedPokemon && !isExiting && (
        <motion.div
          className={styles.modal}
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.container_modal}
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={iconClose}
              alt="icone fechar modal"
              className={styles.close_modal}
              onClick={handleClose}
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
                    <h3>
                      #
                      {selectedPokemon.id < 10
                        ? `00${selectedPokemon.id}`
                        : selectedPokemon.id < 100
                          ? `0${selectedPokemon.id}`
                          : selectedPokemon.id}
                    </h3>
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
                          <progress
                            value={progressValues[index]}
                            max="100"
                            className={`${styles.progress} ${styles[getProgressColor(progressValues[index])]}`}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ModalStats.propTypes = {
  modal: PropTypes.func.isRequired,
  selectedPokemon: PropTypes.object.isRequired,
};

export default ModalStats;
