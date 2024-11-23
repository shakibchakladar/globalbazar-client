import axios from "axios";
import useUserData from "../hooks/useUserData";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllProductCard = ({ product }) => {
  const userData = useUserData();

  return (
    <div className="w-full m-2 transition-transform delay-75 transform shadow-xl featured-card card card-compact bg-base-100 hover:scale-105 max-h-96">
      <figure>
        <img className="bg-cover" src={product.image} alt="product name " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <h2 className="font-bold">
          Price:
          <span className="text-[#f57224] font-bold text-xs">
            ${product.price}
          </span>{" "}
        </h2>
        <div className="flex justify-between pr-4">
          <h2 className="font-semibold">
            Brand: <span className="text-[#f57224]">{product.brand}</span>{" "}
          </h2>
          <h2>
            Stock: <span className="text-[#f57224]">{product.stock}</span>{" "}
          </h2>
        </div>
        <p>
          {product.description.length > 50
            ? `${product.description.slice(0, 50)}...`
            : `${product.description}`}
        </p>
        <div className="justify-center card-actions">
          {/* <button onClick={handleWishlist} className="btn btn-primary">
            Add to wishlist
          </button> */}
        </div>
        {/* details */}
        <div className="flex justify-center">
          <button className="relative px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 group">
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative flex items-center space-x-2">
              <Link to={`/details/${product._id}`}>
                <span>View Details</span>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12h6m0 0l-3-3m3 3l-3 3M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
