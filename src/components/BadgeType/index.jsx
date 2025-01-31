import PropTypes from "prop-types";

import types from "../../assets/utils/types";

import styles from "./styles.module.scss";

const BadgeType = ({ type }) => {
  return (
    <div
      className={styles.badgeType}
      style={{ backgroundColor: types[type]?.color }}
    >
      <img src={types[type]?.icon} alt={types[type]?.label} />
      <span>{types[type]?.label}</span>
    </div>
  );
};

BadgeType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BadgeType;
