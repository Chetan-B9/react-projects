import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import { Provider } from 'react-redux'
import store from '../../Redux/Store.js'

function Layout() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet/>
      </Provider>
      <Footer />
    </>
  )
}

export default Layout
