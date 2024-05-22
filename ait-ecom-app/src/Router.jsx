import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path="product/:id" element = {<Product />} />
            <Route path="shop/:filter?" element = {<Shop />} />
            <Route path="cart" element = {<Cart />} />
        </Route>
    )
)

export default router;