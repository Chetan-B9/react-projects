import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux"
import { upQuantity, downQuantity, countTotal, removeItem } from '../../Redux/cartSlice';

function CartProductCard() {
  const Items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const increaseQuantity = (Id) => {
    dispatch(upQuantity(Id))
    dispatch(countTotal())
  }

  const decreaseQuantity = (Id) => {
    dispatch(downQuantity(Id))
    dispatch(countTotal())
  }

  const removeFromCart = (Id) => {
    dispatch(removeItem(Id))
    dispatch(countTotal())
  }

  return (
     <>
      {
      Items.map((item) => {
        return (
          <div key={item.Id} className="w-full bg-secondary p-5 text-main-text">
             <div className="relative flex items-center gap-10">
        <button className="absolute top-0 right-0 text-2xl" onClick={() => removeFromCart(item.Id)}>
        <FaXmark />
        </button>
        
        {/* product image */}
        <div className="w-[20%] aspect-square">
          <img src={item.img} alt={`${item.pName} image`} className="w-full" />
        </div>

        {/* product information */}
        <div className="w-full">
            <div className="font-semibold text-xl">
                <h2>{item.pName}</h2>
            </div>

            <div className="flex justify-between items-center mt-8">
                <div className="flex gap-6 text-sm font-semibold">
                    <p className="text-[#a5a5a5]">${item.Price.toFixed(2)} * {item.quantity ?? 1}</p>
                    <p className="text-main ">${(item.Price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="flex gap-2">
                    <button className="border text-xl p-2" onClick={() => increaseQuantity(item.Id)}><FaPlus /></button>
                    <button className="text-xl p-2 bg-primary" onClick={() => decreaseQuantity(item.Id)}><FaMinus /></button>
                </div>
            </div>
        </div>
      </div>
    </div>
        )
      })
     }
     </>
  );
}

export default CartProductCard;
