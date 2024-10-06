import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        // Add other reducers here if needed
    },
});

//export const { setProducts } = cartSlice.actions; 
export default cartSlice.reducer;
