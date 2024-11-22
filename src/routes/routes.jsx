import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Profile from "../pages/dashboard/Profile";
import MyProducts from "../pages/seller/MyProducts";
import SellerRoute from "./private/SellerRoute";
import AddProducts from "../pages/seller/AddProducts";
import ProductDetails from "../pages/ProductDetails";
import Mywishlist from "../components/dashboard/buyer/Mywishlist";
import BuyerRoute from "./private/BuyerRoute";
import AdminRoutes from "./private/AdminRoutes";
import ManageUsers from "../components/dashboard/ManageUsers";
import MyCart from "../components/dashboard/buyer/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/my-wishlist",
        element: (
          <BuyerRoute>
            <Mywishlist />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/my-cart",
        element: (
          <BuyerRoute>
            <MyCart/>
          </BuyerRoute>
        ),
      },
      // seller
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoutes>
            <ManageUsers/>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
