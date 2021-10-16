import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import DisplayProducts from "../components/DisplayProducts";
import axios from "axios";

const Main = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/product")
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const createProduct = (newProduct) => {
    axios
      .post("http://localhost:4000/api/product", newProduct)
      .then((response) => {
        setProduct([...product, response.data]);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <p>Product Manager</p>
      <ProductForm
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice=""
        initialDescription=""
        errors={errors}
      />
      <hr />
      {loaded && <DisplayProducts />}
    </div>
  );
};

export default Main;
