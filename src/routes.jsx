import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import User from "../src/components/User/User.jsx";
import Login from "../src/components/Login.jsx";
import HomePage from "../src/components/HomePage.jsx";
import ErrorPage from "./errorPage.jsx";

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
        path: "users",
        element: <User />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
