import { configureStore } from '@reduxjs/toolkit'
import sneakersSlice from './slices/sneakersSlice'
import cartSlice from './slices/cartSlice'


export const store = configureStore({
    reducer: {
        sneakers: sneakersSlice,
        cart: cartSlice,
    }
})


