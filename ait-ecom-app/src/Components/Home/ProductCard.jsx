import homeStyle from "../../CSS/HomepageStyle/Home.module.css";
import { IoAddOutline } from "react-icons/io5";
import { Rate, message } from "antd";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addItem, upQuantity, countTotal } from "../../Redux/cartSlice";

function ProductCard({ id, productName, price, imgUrl, avgRating, discount }) {
  const items = useSelector((state) => state.cart.items); //accessing values of items state by cart reducer
  const [messageApi, contextHolder] = message.useMessage(); // handle process messages like: success, warning, failed, etc.
  const dispatch = useDispatch(); // The hook which trigger the reducer methods to change the state.

  //  The function which add the products into the cart
  const AddToCart = (id, productName, price, imgUrl) => {
    // If the products which are adding to the cart are already present the execute else statments otherwise execute if statements
    if (items.find((item) => item.Id === id) === undefined) {
      // adding products to the cart with the addItem reducer (Changing state)
      if (
        dispatch(
          addItem({
            Id: id,
            pName: productName,
            Price: price,
            img: imgUrl,
            quantity: 1,
          })
        )
      ) {
        // if product is successfully added to the cart then,
        dispatch(countTotal()); //updates total amount state with countTotal reducer
        success(); // invoking success() method to show success message when product is successfully added to the cart
      }
    } else {
      dispatch(upQuantity(id)); //updates quantity state with upQuantity reducer
      dispatch(countTotal());
      success();
    }
  };

  // The function which show success message when product is successfully added to the cart
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Product Added to Cart!",
    });
  };

  return (
    <>
      {
        contextHolder //  The contexetHolder which display the success message
      }

      <div
        className={`${homeStyle.card} py-10 rounded-lg relative bg-secondary`}
      >
        {
          // if, in data set the product discount is given then the following code snippet is will render
          discount != null && (
            <div className="badge absolute top-3 left-3 bg-main text-white px-3 py-1 text-xs rounded-xl">
              {discount}% Off
            </div>
          )
        }

        {/* heart icon  */}
        <div
          className={`${homeStyle.like_button} absolute top-3 right-3 px-3 py-1 text-2xl w-fit h-fit text-[#757575]`}
        >
          <CiHeart />
        </div>

        {/* product image */}
        <div className="img_container w-full aspect-video">
          <Link to={`/product/${id}`}>
            <img
              src={imgUrl}
              alt={productName}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* product name and ratings  */}
        <div className="mt-4 px-5">
          <h3 className="text-lg md:text-xl font-semibold">{productName}</h3>
          <Rate
            disabled
            allowHalf
            defaultValue={avgRating}
            className="text-lg mt-2"
          />
        </div>

        {/* product price  */}
        <div className="mt-6 px-5 font-semibold text-2xl md:text-3xl">
          <h3>${price}</h3>
        </div>

        {/* add to cart button */}
        <button
          className="absolute bottom-10 right-5 border p-2 rounded-full text-3xl text-main hover:bg-main hover:text-white duration-200"
          onClick={() => AddToCart(id, productName, price, imgUrl)}
        >
          <IoAddOutline />
        </button>
      </div>
    </>
  );
}

export default ProductCard;
