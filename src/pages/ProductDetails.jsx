import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Swal from "sweetalert2";
import useUserData from "../hooks/useUserData";

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const userData = useUserData();
  const userEmail = userData?.email;
  //   const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    axios.get(`http://localhost:5000/details/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  if (!product) {
    return <Loading />;
  }

  //   wishlist

  const handleWishlist = async () => {
    await axios
      .patch("http://localhost:5000/wishlist/add", {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product add to wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // handle add to cart

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      console.log("Sending data to backend:", {
        productId: product._id,
        userEmail: userEmail,
      });

      // console.table(propertyData);

      const response = await fetch("http://localhost:5000/add-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          email: userEmail,
          title: product.title,
          brand: product.brand,
          price: product.price,
          image: product.image,
          description: product.description,
          category: product.category,
          stock:product.stock,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add property to wishlist");
      }

      const data = await response.json();
      console.log("Backend response:", data);

      if (data.insertedId) {
        Swal.fire({
          title: "Success",
          text: "product added to cart successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      console.error("Error in wishlist API:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg px-4 py-10 pt-20 mx-auto ">
      <title>Property title: {product?.title}</title>
      {product && (
        <>
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="w-full md:w-1/2 lg:w-3/5">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  src={product?.image}
                  alt="Property"
                />
              </div>
            </div>

            <div className="flex flex-col w-full space-y-4 md:w-1/2 lg:w-2/5 pt-20 ">
              <h1 className="text-4xl font-bold text-gray-800">
                {product?.title}
              </h1>
              <p className="text-lg font-medium text-gray-600">
                <strong>Description:</strong> {product?.description}
              </p>
              <p className="text-2xl font-semibold ">
                Price:{" "}
                <span className="font-extrabold text-orange-600">
                  ${product?.price}
                </span>
              </p>
              <p className="text-2xl font-semibold ">
                Brand:{" "}
                <span className=" font-bold text-orange-700">
                  {product?.brand}
                </span>
              </p>
              <p className="text-2xl font-semibold ">
                Stock:{" "}
                <span className="font-bold text-orange-600">
                  {product?.stock}
                </span>
              </p>

              {/* <div className="flex items-center gap-4 mt-4 text-lg font-medium text-gray-700"></div> */}

              <div className="flex justify-between gap-4 pt-10">
                <button
                  onClick={handleWishlist}
                  className="btn bg-orange-500 text-white  w-1/2"
                >
                  Add to wishlist{" "}
                </button>
                <button onClick={handleAddToCart} className="btn bg-orange-500 text-white w-1/2">
                  Add to Cart{" "}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
