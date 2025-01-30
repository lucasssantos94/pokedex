import { Swiper, SwiperSlide } from "swiper/react";
import BadgeType from "../BadgeType";

import "./styles.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import types from "../../assets/utils/types";
import styles from "./styles.module.scss";
import { Pagination } from "swiper/modules";

const Navigation = () => {
  const typesPokemons = Object.values(types);
  return (
    <nav className={styles.navigation}>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {typesPokemons.map((type, index) => {
          return (
            <SwiperSlide key={index}>
              <BadgeType type={type.label} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <input type="text" placeholder="Pesquisar por ID ou Nome" />
    </nav>
  );
};

export default Navigation;
