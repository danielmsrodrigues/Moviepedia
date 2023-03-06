import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { image_path, searchMovies } from "../../services";
import { Container } from "./styles";

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
        {movie && (
          <ul>
            {movie.map((movie) => (
              <li key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    src={`${image_path}${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
};

export default Searched;
