import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import UpdateUserModal from "./UpdateUserModal";

const UserDataRow = ({ user, updateUserRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = async (selected) => {
    const role = {
      role: selected,
      status: "approved",
    };

    try {
      const { data } = await axios.patch(
        `http://localhost:5000/users/update/${user?.email}`,
        role
      );

      console.log(data);
      setIsOpen(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "user role updated",
        showConfirmButton: false,
        timer: 1500,
      });

      // Update the local state in the parent component
      updateUserRole(user.email, role);
    } catch (err) {
      console.error("Error updating user role:", err);
      console.error("Failed to update user role");
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        {user?.status ? (
          <p
            className={`${
              user.status === "Verified" ? "text-green-500" : "text-yellow-500"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <button
          onClick={() => setIsOpen(true)}
          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
          ></span>
          <span className="relative">Update Role</span>
        </button>
        <UpdateUserModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
