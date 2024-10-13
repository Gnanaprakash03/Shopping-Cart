import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductTile({ singleItem }) {
  const navigate = useNavigate();
  const { handleAddToCart, cartItems } = useContext(ShoppingCartContext);

  function handleNavigateToProductDetailsPage(getCurrentProductId) {
    navigate(`/product-details/${getCurrentProductId}`);
  }

  // console.log(singleItem);
  return (
    <div
      key={singleItem?.id}
      className="relative group border border-cyan-700 p-6 cursor-pointer"
    >
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleItem?.thumbnail}
          alt={singleItem?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap  ">
            {singleItem?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${singleItem?.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleNavigateToProductDetailsPage(singleItem?.id)}
        className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
      >
        View Details
      </button>
      <button
        disabled={
          cartItems.findIndex((cartItems) => cartItems.id === singleItem?.id) >
          -1
        }
        onClick={() => handleAddToCart(singleItem)}
        className=" disabled:opacity-40 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductTile;
