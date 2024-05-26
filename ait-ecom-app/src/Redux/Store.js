import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

// create a new Redux store using the configureStore function.
const store = configureStore({
  //  Redux store with a single reducer named cart that uses the cartSliceReducer function to handle actions related to the cart slice of the state.
  reducer: {
    cart: cartSliceReducer,
  },
});

// The store is then exported as the default export of the module.
export default store;
