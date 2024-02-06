import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css'
import { add } from "../Redux/CartSlice";
import {useDispatch,useSelector} from 'react-redux'

// redux store getting data -->useSelector
import { fetchProducts } from "../Redux/ProductSlice";



const Home = () => {
 // const [products, setProducts] = useState([]);
  let dispatch=useDispatch()


// becoz we r assign data:products actully we r mapping with products i.e why
  const {data:products}=useSelector((state)=>state.product)

  useEffect(() => {
    // let fetchData = async () => {
    //   let responce = await axios.get("https://fakestoreapi.com/products");
    //   console.log(responce.data);
    //   setProducts(responce.data);
    // };
    // fetchData();

    dispatch(fetchProducts())

  }, []);


  // this product data will come from clickbutton->passed data ad an orguments and here receiving
  let handleAdd=(product)=>{
     dispatch(add(product))

  }

  return (
    <div>
      Home
      <div className="card">
        {products.map((product)=>(
           <div key={product.id}>
            <img src={product.image} alt="img" />
           
            <h4>{product.price}</h4>
            <h4>{product.category}</h4>

            <h3>{product.title}</h3>
            {/* <h5>{product.description}</h5> */}
            <h5>{product.rating.rate}</h5>
            {/* <h4>{product.rating}</h4>
            <h3>{product.</h3> */}
            {/* <button className="btn">AddItem</button> */}
            <div className="centered-button">
                {/* // this product become callback data taking product that is i pass to button as 
                an argument To manage state to add in store  */}
      <button className="button-medium" onClick={()=>handleAdd(product)}>AddItem</button>
    </div>




  

           </div> 
        ))}
      </div>
    </div>
  );
};

export default Home;
