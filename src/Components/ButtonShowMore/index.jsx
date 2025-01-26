import iconAdd from "../../assets/icon-add.svg";

import styles from "./styles.module.scss";

const ButtonShowMore = () => {
  return (
    <button className={styles.btn_show_more}>
      <img src={iconAdd} alt="icone mais" />
      <span>Mostrar mais pokémons</span>
    </button>
  );
};

export default ButtonShowMore;
