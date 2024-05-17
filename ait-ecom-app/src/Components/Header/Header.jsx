import { NavLink } from "react-router-dom"
import { FaShoppingBag, FaCartPlus, FaUser   } from "react-icons/fa";

function Header() {
  return (
    <header className="px-28 py-4 header sticky top-0 left-0 bg-secondary">
        <div className="container flex">
            <div className="brand w-[30%] font-semibold text-2xl flex items-center gap-1">
                <FaShoppingBag />
                <h2>MART</h2>
            </div>

            <div className="menu w-[70%] text-lg font-sm">
                <ul className=" flex justify-end gap-12 font-semibold">
                    <li>
                        <NavLink to='/' className={({isActive}) => isActive ? 'text-main' : 'text-main-text'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink>Cart</NavLink>
                    </li>
                    <div className="flex items-center gap-8 text-xl">
                    <li><FaUser /></li>
                    <li>
                        <NavLink>
                            <FaCartPlus />
                        </NavLink>
                    </li>
                    </div>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header