import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />} />
        </Route>
    )
)

export default router;