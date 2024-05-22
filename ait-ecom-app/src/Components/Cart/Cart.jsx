import CartProductCard from "./CartProductCard"

function Cart() {
  return (
    <main className="px-5 md:px-14 lg:px-28 py-16 bg-primary text-main-text">
       <div className="container flex gap-6">
          <div className="md:w-[70%] flex flex-col gap-6">
             <CartProductCard />
          </div>
          <div className="md:w-[30%] bg-secondary p-5">
            <div className="pb-2 text-xl font-semibold border-b-2 text-main">
                 <h4>Cart Summary</h4>
            </div>

            <div className="flex flex-col gap-1 pt-4">
                <p>Total Price:</p>
                <p className="text-xl text-main font-semibold">$2468.00</p>
            </div>
          </div>
       </div>
    </main>
  )
}

export default Cart