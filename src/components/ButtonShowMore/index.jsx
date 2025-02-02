import PropTypes from "prop-types";
import iconAdd from "@images/iconsApp/icon-add.svg";

import styles from "./styles.module.scss";

const ButtonShowMore = ({ func }) => {
  return (
    <button className={styles.btn_show_more} onClick={func}>
      <img src={iconAdd} alt="icone mais" />
      <span>Mostrar mais pokémons</span>
    </button>
  );
};

ButtonShowMore.propTypes = {
  func: PropTypes.func.isRequired,
};

export default ButtonShowMore;
