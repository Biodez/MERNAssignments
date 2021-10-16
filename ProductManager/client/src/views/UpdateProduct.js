import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";

function UpdateProduct(props) {
  const { id } = props;
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = (product) => {
    axios
      .put(`http://localhost:4000/api/product/${id}`, product)
      .then((response) => console.log(response));
    navigate("/product");
  };

  return (
    <div>
      <p>Update a Product</p>
      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
    </div>
  );
}

export default UpdateProduct;
