import React from "react";
import { Link } from "@reach/router";
import axios from "axios";

const DisplayProducts = (props) => {
  const { removeFromDom } = props;
  const deletePerson = (personId) => {
    axios
      .delete(`http://localhost:4000/api/product/${personId}`)
      .then((response) => removeFromDom(personId));
  };
  return (
    <div>
      {props.allProducts.map((product, index) => {
        return (
          <p key={index}>
            <Link to={`/product/${product._id}`}>{product.title}</Link>
            <button
              onClick={(e) => deletePerson(product._id)}
              style={{
                "padding-left": "20px",
                "padding-right": "20px",
                fontSize: "15px",
                "margin-left": "10px",
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default DisplayProducts;
