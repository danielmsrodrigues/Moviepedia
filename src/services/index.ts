import axios from "axios";
import { useParams } from "react-router-dom";
import { PopularResponse } from "../models/popular";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "2d904e8aa37f82939ef15720d3cc9a46";

const api = axios.create({
  baseURL,
});

export const getPopularMovies = (): Promise<PopularResponse> =>
  api
    .get(`/movie/popular?api_key=${apiKey}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });

export const getMovieDetails = (): Promise<PopularResponse> =>
  api
    .get(`/movie/{id}?api_key=${apiKey}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
