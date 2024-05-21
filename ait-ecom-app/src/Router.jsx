import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Shop from "./Components/Shop/Shop";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path="product/:id" element = {<Product />} />
            <Route path="shop/:filter?" element = {<Shop />} />
        </Route>
    )
)

export default router;