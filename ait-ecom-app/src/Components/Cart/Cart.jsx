import { useSelector } from "react-redux"
import CartProductCard from "./CartProductCard"
import EmptyCart from "./EmptyCart"

function Cart() {
  const items = useSelector((state) => state.cart.items)
  const totalAmount = useSelector((state) => state.cart.total)
  
  return (
    <main className="px-5 md:px-14 lg:px-28 py-16 bg-primary text-main-text">
       <div className="container flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[70%] flex flex-col gap-4">
             { items.length > 0 ? <CartProductCard /> : <EmptyCart /> } 
          </div>
          <div className="w-full md:w-[30%] bg-secondary p-5">
            <div className="pb-2 text-xl font-semibold border-b-2 text-main">
                 <h4>Cart Summary</h4>
            </div>

            <div className="flex flex-col gap-1 pt-4">
                <p>Total Price:</p>
                <p className="text-xl text-main font-semibold">${totalAmount.toFixed(2)}</p>
            </div>
          </div>
       </div>
    </main>
  )
}

export default Cart