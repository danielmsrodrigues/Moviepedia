import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PopularResponse } from "../../models/popular";
import { getMovieDetails, image_path } from "../../services";
import { Container, MovieDetails, MovieInfo } from "./styles";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { BsClockHistory, BsCalendarDate } from "react-icons/bs";
import Similar from "../../components/Similar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<PopularResponse>();

  useEffect(() => {
    getMovieDetails(id ?? "").then((data) => {
      setMovie(data);
    });
  }, [id]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Header />
      <Container>
        {movie && (
          <MovieInfo>
            <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
            <MovieDetails>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>
                <BsClockHistory /> {movie.runtime}m
              </p>
              <span>
                <BsCalendarDate /> {movie.release_date}
              </span>
              <button onClick={handleGoBack}>Go Back</button>
            </MovieDetails>
          </MovieInfo>
        )}
      </Container>
      <Similar />
      <Footer />
    </>
  );
};

export default Details;
