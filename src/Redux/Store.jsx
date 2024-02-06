import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import productSlice from './ProductSlice'  // api calling product inside redux 
//import CartSlice from './CartSlice';

let store =configureStore({
    reducer:{
        cart:cartReducer,
        product:productSlice,
    }
})

export default store;