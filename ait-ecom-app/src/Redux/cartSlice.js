import { createSlice } from "@reduxjs/toolkit";

// initial States
const initialState = {
  items: [],
  total: 0,
};

// create slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adds an item to the items array. The item is passed as the payload of the action.
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    //  Increases the quantity of an item in the items array. The item's ID is passed as the payload of the action.
    upQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.Id === action.payload
      );
      state.items[itemIndex].quantity += 1;
    },
    // Decreases the quantity of an item in the items array. The item's ID is passed as the payload of the action.
    downQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.Id === action.payload
      );
      if (state.items[itemIndex].quantity > 1)
        state.items[itemIndex].quantity -= 1;
    },
    // Calculates the total price of all items in the cart by summing the product of each item's price and quantity. The total is stored in the total property of the state.
    countTotal: (state) => {
      state.total = state.items.reduce(
        (acc, item) => acc + item.Price * item.quantity,
        0
      );
    },
    // Removes an item from the items array. The item's ID is passed as the payload of the action.
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.Id !== action.payload);
    },
  },
});

// exporting actions and reducers
export const { addItem, upQuantity, downQuantity, countTotal, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
