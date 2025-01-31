import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home";
import SearchByType from "./pages/SearchByType";
import SearchByName from "./pages/SearchByName";
import NotFound from "./pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/type/:pokemonType",
        element: <SearchByType />,
      },
      {
        path: "/pokemon/:name",
        element: <SearchByName />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_startTransition: true,
    },
  },
]);
