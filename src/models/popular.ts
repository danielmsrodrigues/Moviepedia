export interface Popular {
  title: string;
  id: number;
  poster_path: string;
}

export interface PopularResponse extends Popular {
  id: number;
  title: string;
  overview: string;
  page: number;
  total_results: number;
  total_pages: number;
  results: Popular[];
}
