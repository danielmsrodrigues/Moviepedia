import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { image_path, searchMovies } from "../../services";
import { Container, ErrorContainer, ErrorMsg } from "./styles";

const Searched = () => {
  const { query } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    searchMovies(query).then((data) => {
      setMovie(data.results);
    });
  }, [query]);

  return (
    <>
      <Header />
      <Container>
        {movie.length > 0 ? (
          <ul>
            {movie.map((movie) => (
              <li key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    src={`${image_path}${movie.poster_path}`}
                    alt={movie.title}
                    onError={(e) => {
                      (e.target.onerror = null)(
                        (e.target.src = require("../../assets/movie-poster-placeholder.png"))
                      );
                    }}
                  />
                  <p>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ErrorContainer>
            <ErrorMsg>No movie with that name was found.</ErrorMsg>
          </ErrorContainer>
        )}
      </Container>
    </>
  );
};

export default Searched;
