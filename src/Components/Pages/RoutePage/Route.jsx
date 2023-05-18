/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../AuthorizationPage/Login";
import Register from "../AuthorizationPage/Register";
import Main from "../../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllToys from "../AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>
      },
      {
        path: "/blogs"
      }
    ],
  },
]);

export default router;
