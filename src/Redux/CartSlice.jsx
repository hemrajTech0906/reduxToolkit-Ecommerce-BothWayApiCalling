import {createSlice} from '@reduxjs/toolkit'

let cartSlice=createSlice({
    name:"cart123",
    initialState: [],
    // reducers--->S
   reducers:{
   // add:(state,action)=>{
   //    state.push(action.payload);
   // },

   // add:(state,action)=>{
   //    let existingItemIndex=state.findIndex((item=>item.id === action.payload))
   //    if(existingItemIndex !==-1) {
   //       // state[existingItemIndex].quantity +=1;
   //       state[existingItemIndex] = {
   //          ...state[existingItemIndex],
   //          quantity: state[existingItemIndex].quantity + 1
   //        };
   //    }else{
   //      state.push({...action.payload,quantity:1})
   //    }
   // },

   

   // addItem->add
   add: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.find(item => item.id === id);

      if (existingItem) {
        // Item already exists in the cart, increment quantity
        existingItem.quantity += 1;
      } else {
        // Item doesn't exist, add it to the cart with quantity set to 1
        state.push({ id, title, price, quantity: 1 });
      }
    },
  //  remove:(state,action)=>{
  //   return state.filter((item)=> item.id  !== action.payload)
  //  }

    //------> running not proper 

  // remove: (state, action) => {
  //   const { id } = action.payload;
  //   const existingItem = state.find(item => item.id === id);

  //   if (existingItem) {
  //     // Decrement quantity by 1, and remove the item if quantity becomes 0
  //     existingItem.quantity -= 1;
  //     if (existingItem.quantity === 0) {
  //       return state.filter((item) => item.id !==state.id);
  //     }
  //   }
  // },



  remove: (state, action) => {
    const { id } = action.payload;
    const existingItem = state.find((item) => item.id === id);

    if (existingItem) {
      // Decrement quantity by 1
      existingItem.quantity -= 1;

      // Remove the item if quantity becomes 0
      if (existingItem.quantity === 0) {
        // Use filter to exclude the item with quantity 0
        return state.filter((item) => item.id !== existingItem.id);
      }
    }

    // Return the updated state
    return state;
  },

    
   
  
   }
})

export const {add,remove} =cartSlice.actions
// reducer without S
export default cartSlice.reducer
// both arrow and simple function mutating array
// add(state,action){
//     state.push(action,payload);
//  }