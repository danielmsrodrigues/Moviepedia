import { useEffect, useState } from "react";
import { PopularResponse } from "../../models/popular";
import { getPopularMovies, image_path } from "../../services";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Container, SectionTitle } from "./styles";

const Trending = () => {
  const [movie, setMovie] = useState<PopularResponse>();

  useEffect(() => {
    const getPopular = () =>
      getPopularMovies().then((response) => setMovie(response));
    getPopular();
  }, []);
  return (
    <>
      <Container>
        <SectionTitle>Trending Movies</SectionTitle>
        {movie && (
          <Swiper
            grabCursor={true}
            spaceBetween={5}
            slidesPerView={"auto"}
            navigation={true}
            modules={[Navigation]}
          >
            {movie.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    src={`${image_path}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </>
  );
};

export default Trending;
