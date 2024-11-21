import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserDropdown = () => {
  const { user, Logout } = useAuth();
  const handleLogout = () => {
    Logout();
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar px-3">
          <div className="ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img
              src={`${
                user?.photoURL
                  ? user.photoURL
                  : "https://i.ibb.co/89Rc9TJ/user.png"
              }`}
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <div className="flex flex-col gap-2">
          <li className="border border-black rounded-md">
            <NavLink to="/dashboard/profile">Dashboard</NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="btn btn-outline">
              Logout
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default UserDropdown;
