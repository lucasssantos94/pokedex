import iconSearch from "../../assets/icon-search.svg";
import styles from "./styles.module.scss";

const InputSearch = () => {
  return (
    <form className={styles.input_search}>
      <input type="text" placeholder="Pesquisar Pokémon" required />
      <button type="submit">
        <img src={iconSearch} alt="icone de lupa" />
      </button>
    </form>
  );
};

export default InputSearch;
