import linkedin from "@assets/linkedin.svg";
import github from "@assets/github.svg";
import telegram from "@assets/telegram.svg";

import styles from "./styles.module.scss";

const SocialLinks = () => {
  return (
    <ul className={styles.social_links}>
      <li>
        <a
          href="https://www.linkedin.com/in/lucas-silva-santos-439815a2/"
          target="_blank"
        >
          <img src={linkedin} alt="icone linkedin" />
        </a>
      </li>
      <li>
        <a href="https://github.com/lucasssantos94" target="_blank">
          <img src={github} alt="icone github" />
        </a>
      </li>
      <li>
        <a href="https://t.me/lucas_ssantos94" target="_blank">
          <img src={telegram} alt="icone telegram" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
