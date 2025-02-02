import PropTypes from "prop-types";

import BadgeType from "@components/BadgeType";
import types from "@assets/utils/types";

import iconWeight from "@images/iconsApp/icon-weight.svg";
import iconHeight from "@images/iconsApp/icon-ruler.svg";
import iconBolt from "@images/iconsApp/icon-bolt.svg";

import styles from "./styles.module.scss";

const CardPokemon = ({ pokemon, modal, selectedPokemon }) => {
  const handleClick = () => {
    selectedPokemon(pokemon);
    modal(true);
  };
  return (
    <article key={pokemon.id} className={styles.card_pokemon}>
      <img
        src={pokemon.sprites.other.home.front_default}
        alt={pokemon.name}
        className={styles.img_pokemon}
      />

      <div
        className={styles.shadow_pokemon}
        style={{
          backgroundColor: types[pokemon.types[0].type.name]?.color,
        }}
      ></div>

      <div className={styles.info_pokemon}>
        <p>
          #
          {pokemon.id < 10
            ? `00${pokemon.id}`
            : pokemon.id < 100
              ? `0${pokemon.id}`
              : pokemon.id}
        </p>
        <h2>{pokemon.name}</h2>

        <div className={styles.types_pokemon}>
          {pokemon.types.map((types, index) => (
            <BadgeType
              key={`${pokemon.name}-${index}`}
              type={types.type.name}
            />
          ))}
        </div>

        <div className={styles.details_pokemon}>
          <span>
            <img src={iconWeight} alt="Weight" />
            {`${pokemon.weight / 10} kg`}
          </span>
          <span>
            <img src={iconHeight} alt="Height" />
            {`${pokemon.height / 10} m`}
          </span>
        </div>
      </div>

      <button
        style={{
          backgroundColor: types[pokemon.types[0].type.name]?.color,
        }}
        className={styles.btn_details}
        onClick={() => handleClick()}
      >
        <img src={iconBolt} alt="icon bolt" />
        Mais Detalhes
      </button>
    </article>
  );
};

CardPokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  modal: PropTypes.func.isRequired,
  selectedPokemon: PropTypes.func.isRequired,
};

export default CardPokemon;
