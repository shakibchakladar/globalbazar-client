import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyproductDatarow from "../../components/dashboard/seller/MyproductDatarow";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = useAuth(); // Assuming this gives you the user's info
  const [myProducts, setMyProducts] = useState([]);

  // Fetch user's products
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-products/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user?.email]);

  // Handle delete
  const handleDelete = (product) => {
    fetch(`http://localhost:5000/delete-products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete the product");
        }
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          // Update the state to remove the deleted product
          setMyProducts((prevProducts) =>
            prevProducts.filter((p) => p._id !== product._id)
          );
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete the product.", "error");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        Swal.fire("Error!", "There was an issue deleting the product.", "error");
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">
        My Products: <span className="text-red-700">{myProducts.length}</span>
      </h2>
      <div className="container px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Title
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Category
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Brand
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Price
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Delete
                    </th>
                    {/* <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Update
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {myProducts.map((product) => (
                    <MyproductDatarow
                      key={product._id}
                      product={product}
                      handleDelete={() => handleDelete(product)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
