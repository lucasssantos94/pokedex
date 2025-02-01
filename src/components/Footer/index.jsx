import ContainerApp from "@components/ContainerApp";
import SocialLinks from "@components/SocialLinks";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContainerApp>
        <div className={styles.copy}>
          <p>Direitos de imagem para Nintendo & The Pokémon Company</p>
          <p>Dados pegos da API - pokeapi.co</p>
        </div>

        <h4 className={styles.credits}>
          Desenvolvido por{" "}
          <a href="https://github.com/lucasssantos94" target="_blank">
            Lucas Santos
          </a>
        </h4>

        <SocialLinks />
      </ContainerApp>
    </footer>
  );
};

export default Footer;
