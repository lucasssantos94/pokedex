import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const ContainerApp = ({ children }) => {
  return <div className={styles.container_app}>{children}</div>;
};

ContainerApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerApp;
