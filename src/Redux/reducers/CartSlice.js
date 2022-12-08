import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const data = Object.assign({
                quantity: 1,
            }, action.payload);
            state.cartItems = [...state.cartItems, data];
            console.log(state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            console.log(state.cartItems);
        },
        addQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            console.log(state.cartItems);
        },
        subtractQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
            );
            if (state.cartItems.find((item) => item.id === action.payload.id).quantity === 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }
            console.log(state.cartItems);
        },

    },
});

export const { addToCart, removeFromCart, subtractQuantity, addQuantity } = cartSlice.actions;

export default cartSlice.reducer;