import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import DisplayProducts from "../components/DisplayProducts";
import axios from "axios";

const Main = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/product")
      .then((response) => {
        console.log(response.data);
        setAllProducts(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>Product Manager</p>
      <ProductForm />
      <hr />
      {loaded && <DisplayProducts allProducts={allProducts} />}
    </div>
  );
};

export default Main;
