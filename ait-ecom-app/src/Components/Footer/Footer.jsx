import { FaShoppingBag  } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-28 py-20 bg-main">
        <div className="container text-white grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div>
           {/* brand info */}
          <div className="brand w-[30%] font-bold text-2xl flex items-center gap-1">
                <div className="text-2xl">
                    <FaShoppingBag />
                </div>
                <h2>MART</h2>
            </div>

            <div className="text-lg text-footer-text my-5">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus itaque, recusandae deserunt repudiandae quisquam quaerat culpa exercitationem voluptatum harum officia?</p>
            </div>
          </div>

          {/* About us  */}
          <div>
            <div className="text-2xl font-semibold">
                <h3>About Us</h3>
            </div>

            <ul className="text-lg text-footer-text my-5 flex flex-col gap-2">
                <li>
                    <NavLink>Careers</NavLink>
                </li>
                <li>
                    <NavLink>Our Stores</NavLink>
                </li>
                <li>
                    <NavLink>Our Cares</NavLink>
                </li>
                <li>
                    <NavLink>Terms and Conditions</NavLink>
                </li>
                <li>
                    <NavLink>Privacy Policy</NavLink>
                </li>
            </ul>
          </div>

          {/* Customer Care  */}
          <div>
          <div className="text-2xl font-semibold">
                <h3>Customer Care</h3>
            </div>

            <ul className="text-lg text-footer-text my-5 flex flex-col gap-2">
                <li>
                    <NavLink>Help Center</NavLink>
                </li>
                <li>
                    <NavLink>How to Buy</NavLink>
                </li>
                <li>
                    <NavLink>Track Your Order</NavLink>
                </li>
                <li>
                    <NavLink>Corporate and Bulk Purchasing</NavLink>
                </li>
                <li>
                    <NavLink>Returns and Refunds</NavLink>
                </li>
            </ul>
          </div>

          {/* Contact Us  */}
          <div>
          <div className="text-2xl font-semibold">
                <h3>Contact Us</h3>
            </div>

            <div className="text-lg text-footer-text my-5 flex flex-col gap-2">
                <p>70 Washington Square South, New York, NY 10012, United States</p>
                <p>Eamil: example@gmail.com</p>
                <p>Phone: +1 1167 765 776</p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer