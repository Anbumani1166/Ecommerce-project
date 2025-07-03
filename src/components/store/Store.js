import {configureStore} from '@reduxjs/toolkit'
import cartSliceReducer from "./Cartslice"

 export const store =configureStore({
    reducer :{
        cart : cartSliceReducer
    }
})