import React, { useState } from "react";
import axios from "axios";

function ProductForm(props) {
  const { setAllProducts, allProducts } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const productDetails = {
      title,
      price,
      description,
    };

    axios
      .post("http://localhost:4000/api/product", productDetails)
      .then((response) => {
        setAllProducts([...allProducts, response.data]);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });

    setTitle("");
    setPrice("");
    setDescription("");
  };

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
        <div style={inputDataDivStyle}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          {errors && errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          {errors && errors.price && (
            <p style={{ color: "red" }}>{errors.price.message}</p>
          )}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          {errors && errors.description && (
            <p style={{ color: "red" }}>{errors.description.message}</p>
          )}
        </div>
        <div className="buttonHolder">
          <button
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "15px",
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
