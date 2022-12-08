import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // console.log(action.payload);
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },

    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;