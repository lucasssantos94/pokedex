import { NavLink } from "react-router-dom";

import SocialLinks from "@components/SocialLinks";

import logo from "@images/ui/logo-pokemon.svg";

import styles from "./styles.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img src={logo} alt="logo pokemon" className={styles.logo} />
      </NavLink>

      <SocialLinks />
    </nav>
  );
};

export default Nav;
