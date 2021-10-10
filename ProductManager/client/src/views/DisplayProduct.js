import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayProduct(props) {
  const [product, setProduct] = useState({});
  const { id } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/product/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <p>Product: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default DisplayProduct;
