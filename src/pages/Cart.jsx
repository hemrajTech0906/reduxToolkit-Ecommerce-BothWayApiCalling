// import React from 'react'
// import {useSelector} from 'react-redux'

// const Cart = () => {

//     let cartItem=useSelector((state)=>state.cart)
//     console.log(cartItem.length)
//   return (
//     <div>Cart

//         <div>

//             {cartItem.map((item)=>(
//                 <div key={item.id}>
//                 <img src={item.image} alt='img1cart'/>
//                 <h5>{item.title}</h5>
//                 <h5>{item.price}</h5>
//                 </div>
//             ))}
//         </div>
//     </div>

//   )
// }

// export default Cart

// Cart.js


// import React from "react";
// import { useSelector } from "react-redux";
// import "./Cart.css";
// import { remove } from "../Redux/CartSlice";
// import {useDispatch} from 'react-redux'
// const Cart = () => {
//   let cartItems = useSelector((state) => state.cart);
//    let dispatch=useDispatch()

//   // came from value button removeHandler as pass argument and access 
//   // to the handler parameter ofter passing orgumrent in button handler 
//   //and receiving from any name of parameter 
//    let removeHandler=(id)=>{
//     dispatch(remove(id))
//    }

//    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <div className="cart-container">
//       <h2>TotalQuantity:{totalCount}</h2>
//       <div>
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img
//               src={item.image}
//               alt={`img-${item.id}`}
//               className="cart-image"
//             />
//             <div className="cart-details">
//               <h5>{item.title}</h5>
//               <h5>${item.price}</h5>
//               <h1>quantity:{item.quantity}</h1>
//               {/* Add more details if needed */}
//               <button className="medium-red-button" onClick={()=>removeHandler(item.id)}>
//       remove
//     </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;


//  cart3
   

      

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "./Cart.css";
// import { remove } from "../Redux/CartSlice";
// import { useDispatch } from 'react-redux';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const removeHandler = (id) => {
//     dispatch(remove({ id }));
//   };

//   const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <div className="cart-container">
//       <h2>Total Quantity: {totalCount}</h2>
//       <div>
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img
//               src={item.image}
//               alt={`img-${item.id}`}
//               className="cart-image"
//             />
//             <div className="cart-details">
//               <h5>{item.title}</h5>
//               <h5>${item.price}</h5>
//               <h1>Quantity: {item.quantity}</h1>
//               <button className="medium-red-button" onClick={() => removeHandler(item.id)}>
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;

          

      //cart4

      import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Only import useDispatch once
import './Cart.css';
import { remove } from '../Redux/CartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Keep only one import

  const removeHandler = (id) => {
    dispatch(remove( {id }));
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Total Quantity: {totalCount}</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={`img-${item.id}`}
              className="cart-image"
            />
            <div className="cart-details">
              <h5>{item.title}</h5>
              <h5>${item.price}</h5>
              <h1>Quantity: {item.quantity}</h1>
              <button className="medium-red-button" onClick={() => removeHandler(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
