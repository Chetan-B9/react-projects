import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Provider } from "react-redux";
import store from "../../Redux/Store.js";

function Layout() {
  return (
    <>
      {/* The provider allows the Redux store to be accessible by all child components. */}
      <Provider store={store}>
        <Header />
        <Outlet /> {/*Renders the child route components.*/}
      </Provider>
      <Footer />
    </>
  );
}

export default Layout;
