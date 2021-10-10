import React from "react";
import { Link } from "@reach/router";

const DisplayProducts = (props) => {
  return (
    <div>
      {props.allProducts.map((product, index) => {
        return (
          <p key={index}>
            <Link to={`/product/${product._id}`}>{product.title}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default DisplayProducts;
