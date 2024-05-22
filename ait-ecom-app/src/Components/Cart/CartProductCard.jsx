import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

function CartProductCard() {
  return (
    <div className="w-full bg-secondary p-5">
      <div className="relative">
        <button className="absolute top-0 right-0 text-2xl">
        <FaXmark />
        </button>
        
        {/* product image */}
        <div>
          <img src="" alt="" />
        </div>

        {/* product information */}
        <div>
            <div className="font-semibold text-xl">
                <h2>Product Name</h2>
            </div>

            <div className="flex justify-between items-center mt-8">
                <div className="flex gap-6 text-sm font-semibold">
                    <p className="text-[#a5a5a5]">$ 253.00 * 2</p>
                    <p className="text-main ">$1020.00</p>
                </div>

                <div className="flex gap-2">
                    <button className="border text-xl p-2"><FaPlus /></button>
                    <button className="text-xl p-2 bg-primary"><FaMinus /></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
