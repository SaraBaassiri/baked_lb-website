import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./reducers/CartSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});