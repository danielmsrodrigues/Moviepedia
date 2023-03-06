export interface Movies {
  title: string;
  id: number;
  poster_path: string;
}

export interface MoviesResponse extends Movies {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  backdrop_path: string;
  results: Movies[];
}
