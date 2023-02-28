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
            src="https://blog.br.playstation.com/tachyon/sites/4/2022/06/c50ed40ccbee94460e55dee40a077efc09474a20.jpg"
            alt="Hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImage
            src="https://images6.alphacoders.com/650/thumb-1920-650608.jpg"
            alt="Hero"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImage
            src="https://wallpaperaccess.com/full/218743.jpg"
            alt="Hero"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
