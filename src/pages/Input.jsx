import React, { useState } from "react";
import "./Input.css";
import * as yup from 'yup';

// const validationSchema = yup.object().shape({
//     image: yup.string().url('Please enter a valid URL for the image').required('Image is required'),
//     price: yup.number().positive('Price must be a positive number').required('Price is required'),
//     description: yup.string().required('Description is required'),
//   });

let validationSchema=yup.object().shape({

   image:yup.string().url('please enter the valid url for the image').required('Image is required'),
   price:yup.number().positive('price must be a positive number').required('price is required'),
   description:yup.string().required('description is required'),
})
const Input = () => {
  // State to store input data for a single product
  const [productData, setProductData] = useState({
    image: "",
    price: "",
    description: "",
  });

  // State to store multiple product entries
  const [productList, setProductList] = useState([]);

  // State to store the index of the product being updated
  const [updatingIndex, setUpdatingIndex] = useState(null);

  let [validationErrors,setValidationErrors]=useState({})

  // Event handler to update state when input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission (add/update)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the product is already in the list
    const existingProductIndex = productList.findIndex(
      (product) => product.image === productData.image
    );

    if (updatingIndex !== null) {
      // If updating, update existing product
      const updatedProductList = [...productList];
      updatedProductList[updatingIndex] = productData;
      setProductList(updatedProductList);
      setUpdatingIndex(null); // Clear updating state
    } else if (existingProductIndex !== -1) {
      // If adding and product already exists, don't add
      alert("Product with this image URL already exists.");
    } else {
      // Add new product
      setProductList((prevList) => [...prevList, productData]);
    }

    // Clear input fields after submission
    setProductData({ image: "", price: "", description: "" });
  };

  // Event handler to delete a product
  const handleDelete = (index) => {
    const updatedProductList = [...productList];
    updatedProductList.splice(index, 1);
    setProductList(updatedProductList);
  };

  // Event handler to set updating state and populate input fields for editing
  const handleUpdate = (index) => {
    setUpdatingIndex(index);
    setProductData(productList[index]);
  };

  return (
    <div className="mid">
      {/* Input fields */}
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input
            className="inp1"
            type="text"
            name="image"
            value={productData.image}
            onChange={handleInputChange}
            placeholder="Enter image URL"
          />
        </label>
        <br />
        <label>
          Price Items :
          <input
            className="inp2"
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            placeholder="Enter product price"
          />
        </label>
        <br />
        <label>
          Description:
          <input
            className="inp1"
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Enter product description"
          />
        </label>
        <br />
        <button type="submit">
          {updatingIndex !== null ? "Update" : "Add"} Product
        </button>
      </form>

      {/* Display product cards */}
      <div style={{ marginTop: "20px" }}>
        {productList.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
              marginTop: "5px",
              marginLeft:"25px",
            //   marginRight: "280px",
            }}
          >
            <h3>Product Card</h3>
            <img
              src={product.image}
              alt="Product"
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
            <p>Price : ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleUpdate(index)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input;
