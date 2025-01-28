import { useState, useEffect } from "react";
import dividerFire from "../../assets/divider-fire.svg";

import bgPokeball from "../../assets/background-pokeball.svg";
import ContainerApp from "../ContainerApp";
import pokemons from "../../assets/utils/pokemonSlide";

import styles from "./styles.module.scss";

const Header = () => {
  const [pokemonSlide, setPokemonSlide] = useState(pokemons[0]);

  const changeSlide = () => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    setPokemonSlide(pokemons[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(changeSlide, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={styles.header}
      style={{ background: pokemonSlide.color }}
    >
      <img
        src={bgPokeball}
        alt="background pokeball"
        className={`${styles.pokeball_left} ${styles.pokeball}`}
      />
      <ContainerApp>
        <section className={styles.container_header}>
          <div className={styles.info_pokemon}>
            <h3 className={styles.id_pokemon}>
              {pokemonSlide.id < 10
                ? `#00${pokemonSlide.id}`
                : `#${pokemonSlide.id}`}
            </h3>
            <h1 className={styles.name_pokemon}>{pokemonSlide.name}</h1>
            <p className={styles.description_pokemon}>
              {pokemonSlide.description}
            </p>
          </div>

          <div className={styles.divider}>
            <img src={dividerFire} alt="divider fire" />
          </div>
        </section>

        <div className={styles.image_pokemon}>
          <img
            src={pokemonSlide.image}
            alt={pokemonSlide.name}
            className={styles.img_pokemon}
          />
        </div>
      </ContainerApp>
    </header>
  );
};

export default Header;
