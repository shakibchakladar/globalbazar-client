import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products",
        element:<Products/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/register",
        element:<Register/>
      },
    ],
  },
]);
