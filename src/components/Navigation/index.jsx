import InputSearch from "../inputSearch";
import SlideTypes from "../SlideTypes";

import styles from "./styles.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <SlideTypes />

      <InputSearch />
    </nav>
  );
};

export default Navigation;
