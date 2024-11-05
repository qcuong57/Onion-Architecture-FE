import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "../src/components/Login.jsx";
import HomePage from "../src/components/HomePage.jsx";
import ErrorPage from "./errorPage.jsx";
import Admin from "./components/Admin/Admin.jsx";
import User from "./components/Users/User.jsx";
import Author from "./components/Authors/Author.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "users",
        element: <User />,
      },
      {
        path: "authors",
        element: <Author />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
