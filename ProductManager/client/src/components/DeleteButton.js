import axios from "axios";
import React from "react";

export default function DeleteButton(props) {
  const { productId, successCallback } = props;
  const deleteProduct = (e) => {
    axios
    .delete(`http://localhost:4000/api/product/${productId}`)
    .then((_response) => {
      successCallback();
    });
  }
  
  return (
    <div>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
}
