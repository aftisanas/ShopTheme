import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 1,
    products: [],
    cart: [],
    wishlist: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            return {...state, products: [...action.payload]};
        },

        addToCart: (state, action) => {
            return {...state, cart: [...state.cart, action.payload]};
        },

        removeFromCart: (state, action) => {
            const removeElt = state.cart.filter(item => item.product.id !== action.payload);
            return {...state, cart: [...removeElt]};
        },

        addToWishlist: (state, action) => {
            return {...state, wishlist: [...state.wishlist, action.payload]};
        },
        
        removeFromWishlist: (state, action) => {
            const removeElt = state.wishlist.filter(item => item.product.id !== action.payload);
            return {...state, wishlist: [...removeElt]};
        },

        increase: (state) => {
            return {...state, counter: Number(state.counter + 1)};
        },
        decrease: (state) => {
            if (state.counter > 1) {
                return {...state, counter: Number(state.counter - 1)};
            } else {
                return {...state, counter: 1};
            }
        } 
    }
});

export const {
    setProducts,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    increase,
    decrease
} = dataSlice.actions;

export default dataSlice.reducer;