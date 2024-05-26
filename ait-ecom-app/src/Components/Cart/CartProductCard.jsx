import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  upQuantity,
  downQuantity,
  countTotal,
  removeItem,
} from "../../Redux/cartSlice";

function CartProductCard() {
  const Items = useSelector((state) => state.cart.items); //accessing values of items state by cart reducer
  const dispatch = useDispatch(); // The hook which trigger the reducer methods to change the state.

  // The functioin which helps to increase the quantity value of carted items
  const increaseQuantity = (Id) => {
    dispatch(upQuantity(Id)); //increasethe quantity state value with upQuantity reducer
    dispatch(countTotal()); // updates total amount state with countTotal reducer
  };

  // The functioin which helps to decrease the quantity value of carted items
  const decreaseQuantity = (Id) => {
    dispatch(downQuantity(Id)); // decrease  quantity state value with downQuantity reducer
    dispatch(countTotal());
  };

  // The functioin which helps to remove items from the cart
  const removeFromCart = (Id) => {
    dispatch(removeItem(Id)); // Updates items state values with new items after removed using removeItem reducer
    dispatch(countTotal());
  };

  return (
    <>
      {
        // mapping all items added to the cart and rendering them one-by-one
        Items.map((item) => {
          return (
            <div
              key={item.Id}
              className="w-full bg-secondary p-5 text-main-text"
            >
              <div className="relative flex items-center gap-10">
                <button
                  className="absolute top-0 right-0 text-xl md:text-2xl"
                  onClick={() => removeFromCart(item.Id)}
                >
                  <FaXmark />
                </button>

                {/* product image (left part) */}
                <div className="w-[20%] aspect-square">
                  <img
                    src={item.img}
                    alt={`${item.pName} image`}
                    className="w-full h-full object-fill md:object-contain"
                  />
                </div>

                {/* product information (right part) */}
                <div className="w-full">
                  <div className="font-semibold text-lg md:text-xl">
                    <h2>{item.pName}</h2>
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <div className="flex gap-6 text-xs md:text-sm font-semibold">
                      <p className="text-[#a5a5a5]">
                        ${item.Price.toFixed(2)} * {item.quantity ?? 1}
                      </p>
                      <p className="text-main ">
                        ${(item.Price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        className="border text-lg md:text-xl p-2"
                        onClick={() => increaseQuantity(item.Id)}
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="text-lg md:text-xl p-2 bg-primary"
                        onClick={() => decreaseQuantity(item.Id)}
                      >
                        <FaMinus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </>
  );
}

export default CartProductCard;
