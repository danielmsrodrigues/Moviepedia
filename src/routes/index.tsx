import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Details from "../pages/Details";
import Fav from "../pages/Fav";
import Home from "../pages/Home";

export const router = createBrowserRouter([
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
        path: "/favorit",
        element: <Fav />,
      },
    ],
  },
]);
