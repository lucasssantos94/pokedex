import pokeballLoading from "@images/ui/pokeball-loading.png";

import styles from "./styles.module.scss";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={pokeballLoading} alt="pokeball" />
    </div>
  );
};

export default Loading;
