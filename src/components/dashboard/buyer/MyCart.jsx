import MyCartCard from "./MyCartCard";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
    const { user } =useAuth();
    const [myCart, setMyCart] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
          try {
            const response = await fetch(
              `https://global-bazar-server.vercel.app/my-cart/${user.email}`
            );
    
            if (!response.ok) {
              const errorData = await response.json();
              setError(errorData.message || "Failed to fetch wishlist");
              setMyCart([]);
              return;
            }
            const data = await response.json();
            setMyCart(Array.isArray(data) ? data : []); 
          } catch (err) {
            setError("An error occurred while fetching the wishlist");
            console.error(err);
          }
        };
    
        fetchCart();
      }, []);


      // handle remove
  const handleDelete = (id) => {
    fetch(`https://global-bazar-server.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setMyCart((prevMyCart) =>
          prevMyCart.filter((product) => product._id !== id)
        );
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully remove from cart",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

    return (
        <div>
      <h2>My Cart {myCart.length}</h2>
      <div className="flex flex-col p-4">
        {
        //   wishlist.map(wishItem=><WishlistCard key={wishItem._id} wishItem={wishItem} handleDelete={handleDelete}/>)
        myCart.map(cartItem=><MyCartCard key={cartItem._id} cartItem={cartItem}  handleDelete={() => handleDelete(cartItem._id)} />)
        }
      </div>
    </div>
    );
};

export default MyCart;