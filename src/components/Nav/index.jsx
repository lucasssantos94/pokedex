import { NavLink } from "react-router-dom";

import logo from "../../assets/logo-pokemon.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";

import styles from "./styles.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img src={logo} alt="logo pokemon" className={styles.logo} />
      </NavLink>

      <ul className={styles.social_media}>
        <li>
          <a href="">
            <img src={linkedin} alt="icone linkedin" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={github} alt="icone github" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={telegram} alt="icone telegram" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
