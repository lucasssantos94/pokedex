import pikachuSad from "@images/ui/pikachu-sad.png";

import styles from "./styles.module.scss";

const PokemonNotFound = () => {
  return (
    <div className={styles.card_not_found}>
      <img src={pikachuSad} alt="pikachu triste" />
      <span>Ops, pokémon não encontrado !</span>
    </div>
  );
};

export default PokemonNotFound;
