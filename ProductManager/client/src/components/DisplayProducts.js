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
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: "15px",
                marginLeft: "10px",
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
