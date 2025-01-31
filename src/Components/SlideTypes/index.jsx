import Slider from "react-slick";
import types from "../../assets/utils/types";
import BadgeType from "../BadgeType";

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
    initialSlide: 0,
  };
  return (
    <>
      <h2 className={styles.title}>Pesquisar por tipos</h2>
      <Slider {...settings} className={styles.slider}>
        {typesPokemons.map((type, index) => {
          return (
            <div key={index}>
              <BadgeType type={type.label} />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideTypes;
