import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Details from "../pages/Details";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Searched from "../pages/Searched";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/searched/:query",
          element: <Searched />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename: "/Moviepedia",
  }
);
