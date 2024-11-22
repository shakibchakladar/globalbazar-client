import { useState } from "react";

const MyCartCard = ({ cartItem,handleDelete }) => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <div className="flex items-center p-4 mb-4 transition-shadow duration-150 bg-white border rounded-lg shadow-sm hover:shadow-md">
      {/* Property Image */}
      <img
        src={cartItem?.image}
        alt="Property"
        className="object-cover w-24 h-24 mr-4 rounded-md"
      />

      {/* Card Content */}
      <div className="flex flex-col flex-grow">
        {/* Property Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {cartItem?.title}
        </h3>

        <p className="text-sm text-gray-500">{cartItem?.brand}</p>

        {/* Price and Verification */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-800">
            ${cartItem?.price}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center ml-4 space-y-2">
        {/* Remove Button */}
        <div className="flex items-center gap-2">
          {/* <FaHeart size={30} /> */}
          <button onClick={handleDelete} className="btn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
