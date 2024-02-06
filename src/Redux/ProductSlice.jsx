import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";


let initialState = {
    data:[]
}
let productSlice=createSlice({
    name:"product",
    initialState,
    // reducers--->S
   reducers:{
  
   setProducts(state,action){
    state.data=action.payload;
   }
  
   }
})

export const {setProducts} =productSlice.actions

export default productSlice.reducer



// using middleware to help calling api 

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch,getState){

        try {
            let res=await fetch("https://fakestoreapi.com/products")
            let data= await res.json()
            dispatch(setProducts(data))

            

        } catch (error) {
          console.log(error)
        }
           
        // let responce = await axios.get("https://fakestoreapi.com/products")
        // // console.log(responce.data);
        // // setProducts(responce.data);
        // // .then(data=>data.json())
        // let result=responce.data
        // dispatch(fetchProducts(result));
    }
}
