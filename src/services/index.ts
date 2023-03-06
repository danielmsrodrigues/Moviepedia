import axios from "axios";
import { MoviesResponse } from "../models/movies";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "2d904e8aa37f82939ef15720d3cc9a46";
export const image_path = "https://image.tmdb.org/t/p/w500";

const api = axios.create({
  baseURL,
});

export const getPopularMovies = (): Promise<MoviesResponse> =>
  api
    .get(`/movie/popular?api_key=${apiKey}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });

export const getTopRatedMovies = (): Promise<MoviesResponse> =>
  api
    .get(`/movie/top_rated?api_key=${apiKey}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });

export const getMovieDetails = (id: string): Promise<MoviesResponse> =>
  api
    .get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });

export const getSimilarMovies = (id: string): Promise<MoviesResponse> =>
  api
    .get(`/movie/${id}/similar?api_key=${apiKey}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });

export const searchMovies = (query: string): Promise<MoviesResponse> =>
  api
    .get(`/search/movie?api_key=${apiKey}&language=en-US&query=${query}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
