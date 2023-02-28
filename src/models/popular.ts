export interface Popular {
  title: string;
  id: number;
  poster_path: string;
}

export interface PopularResponse extends Popular {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  backdrop_path: string;
  results: Popular[];
}
