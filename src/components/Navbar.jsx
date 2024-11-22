import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { user } = useAuth();
  const navOptions = (
    <>
      <li className=" text-xs font-bold">
        <NavLink to="/">
          <a>HOME</a>
        </NavLink>
      </li>
      <li className="text-[#fff] text-xs font-bold">
        <NavLink to="/products">
          <a>Products</a>
        </NavLink>
      </li>
      <li className="text-[#fff] text-xs font-bold">
        <NavLink to="/about">
          <a>About</a>
        </NavLink>
      </li>
      <li className="text-[#fff] text-xs font-bold">
        <NavLink to="/contact">
          <a>CONTACT US</a>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#15151580] fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <div className="relative p-2 text-[#FFFFFF]">
            <a className="block text-2xl btn btn-ghost text-[#FFFFFF] ">
              Global
            </a>
            <a className="absolute left-[3.5rem] bottom-[0.15rem] text-orange-600 text-[24px] tracking-widest">
              Bazar
            </a>
          </div>
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navOptions}</ul>
        </div>
        {user ? (
         <div className="navbar-end">
           <UserDropdown />
         </div>
        ) : (
          <div className="navbar-end ">
            <div>
              <Link to="/login">
                <button className="btn px-4 btn-sm">Log in</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
