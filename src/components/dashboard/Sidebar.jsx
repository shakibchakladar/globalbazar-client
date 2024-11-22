import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsFillHouseAddFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdHomeWork } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    icon: <MdHomeWork className="w-5 h-5" />,
    title: "My Products",
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    icon: <BsFillHouseAddFill className="w-5 h-5" />,
    title: "Add Products",
  },
];

// buyer
const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-wishlist",
    icon: <MdHomeWork className="w-5 h-5" />,
    title: "My wishlist",
  },
  {
    id: 2,
    route: "/dashboard/my-cart",
    icon: <MdHomeWork className="w-5 h-5" />,
    title: "My Cart",
  },
];
const adminRoutes = [
  {
    id: 1,
    route: "/dashboard/manage-users",
    icon: <MdHomeWork className="w-5 h-5" />,
    title: "Manage Users",
  },

];

const Sidebar = () => {
  const userData = useUserData();
  const { Logout } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <h2 className="text-3xl text-[#fff] font-semibold">
                Global <span className="text-xs font-medium">bazar</span>
              </h2>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-orange-400 mx-auto">
              <Link to="/">
                <h2 className="text-3xl text-[#fff] font-semibold">
                  Global <span className="text-xs font-medium">bazar</span>
                </h2>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* profile */}
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcSettings className="w-5 h-5" />

                <span className="mx-4 font-medium">Profile</span>
              </NavLink>
              {userData.role === "seller" &&
                sellerRoutes.map((route) => {
                  return (
                    <NavLink
                      key={route.id}
                      to={route.route}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
                          isActive
                            ? "bg-gray-300 text-gray-700"
                            : "text-gray-600"
                        }`
                      }
                    >
                      {route.icon}
                      <span className="mx-4 font-medium">{route.title}</span>
                    </NavLink>
                  );
                })}
              {userData.role === "buyer" &&
                buyerRoutes.map((route) => {
                  return (
                    <NavLink
                      key={route.id}
                      to={route.route}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
                          isActive
                            ? "bg-gray-300 text-gray-700"
                            : "text-gray-600"
                        }`
                      }
                    >
                      {route.icon}
                      <span className="mx-4 font-medium">{route.title}</span>
                    </NavLink>
                  );
                })}
              {userData.role === "admin" &&
                adminRoutes.map((route) => {
                  return (
                    <NavLink
                      key={route.id}
                      to={route.route}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
                          isActive
                            ? "bg-gray-300 text-gray-700"
                            : "text-gray-600"
                        }`
                      }
                    >
                      {route.icon}
                      <span className="mx-4 font-medium">{route.title}</span>
                    </NavLink>
                  );
                })}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={Logout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
