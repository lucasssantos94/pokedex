import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dividerFire from "../../assets/divider-fire.svg";
import bgPokeball from "../../assets/background-pokeball.svg";
import ContainerApp from "../ContainerApp";
import pokemons from "../../assets/utils/pokemonSlide";

import styles from "./styles.module.scss";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pokemons.length);
  };

  useEffect(() => {
    const interval = setInterval(changeSlide, 10000); // Troca a cada 10 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const pokemonSlide = pokemons[currentIndex];

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
          <AnimatePresence mode="wait">
            <motion.div
              key={pokemonSlide.id}
              className={styles.info_pokemon}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={styles.id_pokemon}>
                {pokemonSlide.id < 10
                  ? `#00${pokemonSlide.id}`
                  : `#${pokemonSlide.id}`}
              </h3>
              <h1 className={styles.name_pokemon}>{pokemonSlide.name}</h1>
              <p className={styles.description_pokemon}>
                {pokemonSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.divider}>
            <img src={dividerFire} alt="divider fire" />
          </div>
        </section>

        <div className={styles.image_pokemon}>
          <AnimatePresence mode="wait">
            <motion.img
              key={pokemonSlide.id}
              src={pokemonSlide.image}
              alt={pokemonSlide.name}
              className={styles.img_pokemon}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </ContainerApp>
    </header>
  );
};

export default Header;
