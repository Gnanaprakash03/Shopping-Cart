import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <Fragment>
      <div
        key={singleCartItem?.id}
        className="grid grid-cols-2 items-start gap-5"
      >
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-24 h-28 msx-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              className="w-full h-full object-contain"
              src={singleCartItem?.thumbnail}
              alt={singleCartItem?.title}
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {singleCartItem?.title}
            </h3>
            <h5 className="text-base text-gray-900">
              Quantity : {singleCartItem?.quantity}
            </h5>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className=" mt-3 text-sm px-4 py-3 bg-black text-white font-bold rounded"
            >
              Remove
            </button>
          </div>
          <div className="ml-auto">
            <h3 className="text-lg font-bold text-gray-900">
              ${singleCartItem?.totalPrice.toFixed(2)}
            </h3>
            <div className="mt-3">
              <button
                onClick={() => handleRemoveFromCart(singleCartItem, false)}
                className=" disabled:opacity-40 border border-[#000] px-3 py-1 rounded"
                disabled={singleCartItem?.quantity === 1}
              >
                -
              </button>
              <button
                onClick={() => handleAddToCart(singleCartItem)}
                className="border border-[#000] px-3 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </Fragment>
  );
}

export default CartTile;
