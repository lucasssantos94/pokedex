import { useNavigate } from "react-router-dom";

import iconSearch from "@images/iconsApp/icon-search.svg";

import styles from "./styles.module.scss";

const InputSearch = () => {
  const navigate = useNavigate();

  const searchPokemon = (e) => {
    e.preventDefault();
    navigate(`/pokemon/${e.target[0].value}`);
    e.target[0].value = "";
  };

  return (
    <form className={styles.input_search} onSubmit={searchPokemon}>
      <input type="text" placeholder="Pesquisar Pokémon" required />
      <button type="submit">
        <img src={iconSearch} alt="icone de lupa" />
      </button>
    </form>
  );
};

export default InputSearch;
