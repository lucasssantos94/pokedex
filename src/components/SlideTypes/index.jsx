import { NavLink } from "react-router-dom";

import Slider from "react-slick";
import types from "@assets/utils/types";
import BadgeType from "@components/BadgeType";

import iconHome from "@images/iconsApp/icon-home.svg";

import styles from "./styles.module.scss";
import "./customSlide.scss";

const SlideTypes = () => {
  const typesPokemons = Object.values(types);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <NavLink to={"/"} className={styles.link_home}>
        <img src={iconHome} alt="icone home" />
        <span>Home</span>
      </NavLink>

      <h3 className={styles.title}>Pesquisar por tipos</h3>
      <Slider {...settings} className={styles.slider}>
        {typesPokemons.map((type, index) => {
          return (
            <NavLink
              to={`/type/${type.label}`}
              key={index}
              className={styles.link}
            >
              <BadgeType type={type.label} />
            </NavLink>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideTypes;
