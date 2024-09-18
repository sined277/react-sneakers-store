import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartList: [],
    totalPrice: 0,
    totalTax: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isInCart = state.cartList.find((item) => item.id === action.payload.id);

            if (isInCart) {
                state.cartList = state.cartList.filter((item) => item.id !== isInCart.id)
            } else {
                const newItem = { ...action.payload, count: 1 };
                state.cartList.push(newItem);
            }

            state.totalPrice = state.cartList.reduce((total, item) => total + item.price, 0);
            state.totalTax = (state.cartList.reduce((total, item) => total + item.price, 0)) * 0.05;
        },


        
        removeItem: (state, action) => {
            state.cartList = state.cartList.filter((item) => item.id !== action.payload);
            state.totalPrice = state.cartList.reduce((total, item) => total + item.price, 0);
            state.totalTax = (state.cartList.reduce((total, item) => total + item.price, 0)) * 0.05;
        }

    }
})

export const selectCartList = (state) => state.cart.cartList;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectTotalTax = (state) => state.cart.totalTax;

export const {addToCart, removeItem} = cartSlice.actions
export default cartSlice.reducer
