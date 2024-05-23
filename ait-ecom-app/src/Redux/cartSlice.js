import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        upQuantity: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.Id === action.payload);
            state.items[itemIndex].quantity += 1
        },
        downQuantity: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.Id === action.payload);
            if (state.items[itemIndex].quantity > 1)  state.items[itemIndex].quantity -= 1
        },
        countTotal: (state) => {
            state.total = state.items.reduce((acc, item) => acc + item.Price * item.quantity, 0)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.Id !== action.payload)
        }
    }
})

export const { addItem, upQuantity, downQuantity, countTotal, removeItem } = cartSlice.actions;
export default cartSlice.reducer;