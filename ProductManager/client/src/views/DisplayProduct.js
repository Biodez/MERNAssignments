import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";


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
  }, [id, product]);

  return (
    <div>
      <p>Product: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/product/${product._id}/edit`}>Edit</Link>
      <DeleteButton productId = {product._id} successCallback = {() => navigate("/product")}/>
    </div>
  );
}

export default DisplayProduct;
