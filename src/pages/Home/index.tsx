import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import { PopularResponse } from "../../models/popular";
import { getPopularMovies } from "../../services";
import { Container, MovieCard, MovieList } from "../Home/styles";
import { Link } from "react-router-dom";

const Home = () => {
  const [movie, setMovie] = useState<PopularResponse>();
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getPopular = () =>
      getPopularMovies().then((response) => setMovie(response));
    getPopular();
  }, []);

  return (
    <div>
      <Hero />
      <Container>
        <h1>Trending Movies</h1>
        {movie && (
          <MovieList>
            {movie.results.map((movie) => (
              <MovieCard key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    src={`${image_path}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <span>{movie.title}</span>
              </MovieCard>
            ))}
          </MovieList>
        )}
      </Container>
    </div>
  );
};

export default Home;
