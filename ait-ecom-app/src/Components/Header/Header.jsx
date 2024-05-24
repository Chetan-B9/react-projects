import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  FaHome,
  FaShoppingBag,
  FaCartPlus,
  FaUser,
  FaBars,
} from "react-icons/fa";

import { Drawer, Space, Badge } from "antd";

function Header() {
  const Items = useSelector((state) => state.cart.items)
  const [open, setOpen] = useState(false);

  // function to show drawer
  const showDrawer = () => {
    setOpen(true);
  };

  // function to close the drawer
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

        <div className="drawer_container w-[70%] md:hidden flex items-center justify-end">
          <div className="text-lg h-full flex items-center gap-4">
          <FaUser />
          <Link><FaCartPlus /></Link>
          <button onClick={showDrawer}>
            <FaBars />
          </button>
          </div>

          <Drawer
            placement={"top"}
            closable={true}
            onClose={onClose}
            open={open}
            key={top}
            className="drawer"
            extra = {
              <Space>
                <div className="brand w-[30%] font-semibold text-2xl flex items-center gap-1">
                  <FaHome />
                  <h2>MART</h2>
                </div>
              </Space>
            }
          >
            <nav className="menu h-full">
              <ul className="h-full">
                <li>
                  <FaHome />
                  <NavLink
                    to="/"
                    className={`menu_item ${({ isActive }) =>
                      isActive ? "text-lg" : "text-sm"}`}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <FaShoppingBag />
                  <NavLink to={'/shop'} className={`menu_item text-sm`}>Shop</NavLink>
                </li>
                <li>
                  <FaCartPlus />
                  <NavLink to='/cart' className={`menu_item text-sm flex gap-3`}>Cart<span className={`bg-main rounded-full px-1.5 text-secondary text-xs flex justify-center items-center ${Items.length > 0 ? 'block' : 'hidden'}`}>{Items.length}</span></NavLink>
                </li>
                {/* <li>
                  <FaUser />
                  <NavLink className={`menu_item text-sm`}>Profile</NavLink>
                </li> */}
              </ul>
            </nav>
          </Drawer>
        </div>

        <nav className="menu w-[70%] text-lg font-sm hidden md:block">
          <ul className=" flex justify-end gap-12 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-main" : "text-main-text"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-main" : "text-main-text"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink 
                 to='/cart'
                 className={({ isActive }) =>
                  isActive ? "text-main" : "text-main-text"
                }
                >Cart</NavLink>
            </li>
            <div className="flex items-center gap-8 text-xl">
              <li>
                <FaUser />
              </li>
              <li>
                <NavLink to='/cart'>
                <Badge count={Items.length} size="small" color="#0F3460" showZero = {Items.length > 0 ? true : false} className="flex justify-center items-center ">
                    <FaCartPlus className="text-xl"/>
                </Badge>
                  
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
