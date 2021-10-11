import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateProduct(props) {
  const { id } = props;
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/product/${id}`).then((response) => {
      setTitle(response.data.title);
      setPrice(response.data.price);
      setDescription(response.data.description);
    });
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((response) => console.log(response));

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
      <form onSubmit={updateProduct}>
        <p style={inputDataDivStyle}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p style={inputDataDivStyle}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <p style={inputDataDivStyle}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <div className="buttonHolder">
          <button
            type="submit"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "15px",
            }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
