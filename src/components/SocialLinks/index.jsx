import linkedin from "@assets/linkedin.svg";
import github from "@assets/github.svg";
import telegram from "@assets/telegram.svg";

import styles from "./styles.module.scss";

const SocialLinks = () => {
  return (
    <ul className={styles.social_links}>
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
  );
};

export default SocialLinks;
