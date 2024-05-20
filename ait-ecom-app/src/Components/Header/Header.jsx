import { NavLink } from "react-router-dom"
import { useState } from "react";
import { FaHome, FaShoppingBag, FaCartPlus, FaUser, FaBars } from "react-icons/fa";

import { Drawer } from 'antd';

function Header() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    
  return (
    <header className="px-5 md:px-14 lg:px-28 py-4 header sticky top-0 left-0 bg-secondary z-10">
        <div className="container flex">
            <div className="brand w-[30%] font-semibold text-2xl flex items-center gap-1">
                <FaShoppingBag />
                <h2>MART</h2>
            </div>

            <div className="drawer_container w-[70%] block md:hidden flex items-center justify-end">
            <button className="" onClick={showDrawer}><FaBars className="text-lg"/></button>

<Drawer
placement={'top'}
closable={true}
onClose={onClose}
open={open}
key={top}
className="drawer"
>
<nav className="menu h-full">
    <ul className="h-full">
        <li>
            <FaHome />
            <NavLink to='/' className={`menu_item ${({isActive}) => isActive ? 'text-lg' : 'text-sm'}`}>Home</NavLink>
        </li>
        <li>
            <FaShoppingBag />
            <NavLink className={`menu_item text-sm`}>Shop</NavLink>
        </li>
        <li>
            <FaCartPlus />
            <NavLink className={`menu_item text-sm`}>Cart</NavLink>
        </li>
        <li>
            <FaUser />
            <NavLink className={`menu_item text-sm`}>Profile</NavLink>
        </li>
    </ul>
</nav>
</Drawer>
            </div>

            

            <nav className="menu w-[70%] text-lg font-sm hidden md:block">
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
            </nav>
        </div>
    </header>
  )
}

export default Header