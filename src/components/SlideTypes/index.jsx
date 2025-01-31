import Slider from "react-slick";
import types from "../../assets/utils/types";
import BadgeType from "../BadgeType";
import { NavLink } from "react-router-dom";

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
    ],
  };
  return (
    <>
      <h2 className={styles.title}>Pesquisar por tipos</h2>
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
