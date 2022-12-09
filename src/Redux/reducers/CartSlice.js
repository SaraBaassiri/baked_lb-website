import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        Items: [],
    },
    reducers: {
        addToCart: (state, action) => {

            if (state.Items.find((item) => item.id === action.payload.id)) {
                state.Items = state.Items.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                return;
            }
            const data = Object.assign({
                quantity: 1,
            }, action.payload);
            state.Items.push(data);
            console.log(state.Items);
        },
        removeFromCart: (state, action) => {
            state.Items = state.Items.filter((item) => item.id !== action.payload.id);
            console.log(state.Items);
        },
        addQuantity: (state, action) => {
            state.Items = state.Items.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            console.log(state.Items);
        },
        subtractQuantity: (state, action) => {
            state.Items = state.Items.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
            );
            if (state.Items.find((item) => item.id === action.payload.id).quantity === 0) {
                state.Items = state.Items.filter((item) => item.id !== action.payload.id);
            }
            console.log(state.Items);
        },
    },
});

export const { addToCart, removeFromCart, subtractQuantity, addQuantity, } = cartSlice.actions;

export default cartSlice.reducer;