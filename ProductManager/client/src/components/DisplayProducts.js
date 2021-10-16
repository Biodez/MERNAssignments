import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const DisplayProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/product/`)
      .then((response) => {
        console.log(response.data)
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (productId) => {
    const filteredProduct = product.filter(
      (product) => product._id !== productId
    );
    setProduct(filteredProduct);
  };

  return (
    <div>
      {product.map((product, index) => {
        return (
          <p key={index}>
            <Link to={`/product/${product._id}`}>{product.title}</Link>
            <DeleteButton productId = {product._id} successCallback = {() => removeFromDom(product._id)}/>
          </p>
        );
      })}
    </div>
  );
};

export default DisplayProducts;
