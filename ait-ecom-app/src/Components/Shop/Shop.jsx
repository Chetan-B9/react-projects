import ProductStyle from "../../CSS/Productpag Style/Product.module.css";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { products } from "../../assets/data/products";
import ProductCard from "../Home/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
// import NotFound from "./NotFound";
// import shopStyle from "../../CSS/Shoppage Style/Shop.module.css";

function Shop() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [isAvailble, setIsAvailable] = useState(true);
  const nav = useNavigate();

  const { filter } = useParams();

  useEffect(() => {
    const categories = new Set();

    products.forEach((product) => {
      if (!category.includes(product.category)) {
        categories.add(product.category);
      }
    });
    setCategory([...category, ...Array.from(categories)]);

    nav("/shop/sofa");
  }, [products]);

  const handleFilter = (e) => nav(`/shop/${e.target.value}`);
  const handleSearch = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue);

    products.map((product) => {
      product.productName.toLowerCase().includes(searchValue.toLowerCase())
        ? setIsAvailable(true)
        : setIsAvailable(false);
    });

    console.log(isAvailble);
  };

  const showProduct = () => {
    return (
      <>
        <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => {
            if (search.length > 0) {
              return product.productName
                .toLowerCase()
                .includes(search.toLowerCase()) ? (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  productName={product.productName}
                  price={product.price}
                  imgUrl={product.imgUrl}
                  avgRating={product.avgRating}
                  discount={product.discount ?? null}
                />
              ) : null;
            } else {
              return (
                product.category === filter && (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    productName={product.productName}
                    price={product.price}
                    imgUrl={product.imgUrl}
                    avgRating={product.avgRating}
                    discount={product.discount ?? null}
                  />
                )
              );
            }
          })}
        </div>
      </>
    );
  };

  return (
    <main className="text-main-text">
      <section className={`${ProductStyle.product_title} h-52 bg-center`}>
        {/* product title  */}
        <div className="bg-[rgba(0,0,0,0.62)] h-full flex justify-center items-center">
          <h1 className="text-secondary text-3xl font-semibold">Products</h1>
        </div>
      </section>

      {/* prodcuts section start  */}
      <section className=" pt-14">
        {/* selection part  */}
        <div className="pb-10 flex flex-col md:flex-row items-center gap-5 md:gap-32 px-5 md:px-14 lg:px-28">
          {/* options  */}
          <div className="relative w-full md:w-[20%] lg:w-[15%] order-2 md:order-1">
            <select
              className="bg-main text-secondary w-full p-2 text-lg appearance-none rounded-md border-0 focus:outline-none "
              onChange={handleFilter}
            >
              {category.map((category, index) => {
                return (
                  <option key={index} value={category} className="text-sm">
                    {category}
                  </option>
                );
              })}
            </select>
            <div className=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary gap-1 text-lg">
              <RxDividerVertical />
              <FaAngleDown />
            </div>
          </div>

          {/* search box */}
          <div className="w-full md:w-[80%] lg:w-[85%] order-1 md:order-2 md:flex-1">
            <div className="flex justify-center">
              <div className="bg-[#f2f2f2] h-full py-2.5 px-5 rounded-3xl flex w-full md:w-[80%] lg:w-[70%]">
                <input
                  type="text"
                  value={search}
                  className="bg-[#f2f2f2] text-[#757575] w-[98%] focus:outline-none"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <div className="text-[#757575] w-[2%] flex items-center cursor-pointer">
                  <FaSearch className="md:text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* products part  */}
        <div className="px-5 md:px-36 lg:px-64 py-10">
          {/* {
                products.map((product) => {
                  product.productName.toLowerCase().includes(search.toLowerCase()) ? () => setIsAvailable(true) : () => setIsAvailable(false)
                })
               } */}

          {isAvailble ? showProduct() : <NotFound />}
          {/* {
                    products.map((product) => {
                        if(search.length > 0){
                            return product.productName.toLowerCase().includes(search.toLowerCase()) ? <ProductCard key={product.id} id={product.id} productName = {product.productName} price = {product.price} imgUrl = {product.imgUrl} avgRating = {product.avgRating} discount = {product.discount ?? null}/> : null
                        }else{
                            return product.category === filter && <ProductCard key={product.id} id={product.id} productName = {product.productName} price = {product.price} imgUrl = {product.imgUrl} avgRating = {product.avgRating} discount = {product.discount ?? null}/>
                        }

                    })
                } */}
        </div>
        {/* </div> */}
      </section>
      {/* prodcuts section end  */}
    </main>
  );
}

export default Shop;
