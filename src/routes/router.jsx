import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/publications"
      },
      {
        path: "/news"
      }
    ],
  },
]);

export default router;
