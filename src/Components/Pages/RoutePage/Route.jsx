/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../AuthorizationPage/Login";
import Register from "../AuthorizationPage/Register";
import Main from "../../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllToys from "../AllToys/AllToys";
import AddAToy from "../AddAToy/AddAToy";
import MyToys from "../MyToys/MyToys";
import UpdateMyToy from "../MyToys/UpdateMyToy";

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
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/all-toys')
      },
      {
        path: "/blogs"
      },
      {
        path: "add-a-toy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "my-toys",
        element: <MyToys></MyToys>
      },
      {
        path: "update/:id",
        element: <UpdateMyToy></UpdateMyToy>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      }
    ],
  },
]);

export default router;
