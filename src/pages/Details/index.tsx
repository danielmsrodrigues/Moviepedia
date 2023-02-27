import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PopularResponse } from "../../models/popular";
import { getMovieDetails } from "../../services";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<PopularResponse>();

  useEffect(() => {
    getMovieDetails(id).then((data) => {
      setMovie(data);
    });
  }, [id]);
  return (
    <>
      <h1>Detalhes</h1>
      {movie && <p>{movie.overview}</p>}
    </>
  );
};

export default Details;
