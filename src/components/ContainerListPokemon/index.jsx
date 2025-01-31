import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const ContainerListPokemon = ({ children }) => {
  return <section className={styles.container_list}>{children}</section>;
};

ContainerListPokemon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerListPokemon;
