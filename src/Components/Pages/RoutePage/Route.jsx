/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../AuthorizationPage/Login";
import Register from "../AuthorizationPage/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;