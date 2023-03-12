import { useEffect, useState } from "react";
import { MoviesResponse } from "../../models/movies";
import { getPopularMovies, image_path } from "../../services";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Container, SectionTitle, TrendingImage } from "./styles";

const Trending = () => {
  const [movie, setMovie] = useState<MoviesResponse>();

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
                  <TrendingImage
                    src={`${image_path}${movie.poster_path}`}
                    alt={movie.title}
                    onError={(e: any) => {
                      e.target.src = require("../../assets/movie-poster-placeholder.png");
                    }}
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
