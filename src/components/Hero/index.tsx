import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { HeroImage, Title } from "./styles";

const Hero = () => {
  return (
    <div>
      <Title>MoviePedia</Title>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <HeroImage
            src={require("../../assets/spider-man.jpg")}
            alt="Spider-man"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImage
            src={require("../../assets/forrest-gump.jpg")}
            alt="Forrest Gump"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImage
            src={require("../../assets/black-panther.jpg")}
            alt="Black Panther"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
