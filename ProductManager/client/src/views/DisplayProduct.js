import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

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

  const deletePerson = (personId) => {
    axios
      .delete(`http://localhost:4000/api/product/${personId}`)
      .then((response) => setProduct(response.data));
      navigate("/")
      .catch(err => navigate("/"))
  };
  return (
    <div>
      <p>Product: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/product/${product._id}/edit`}>Edit</Link>
      <button onClick={(e) => deletePerson(id)}>Delete</button>
    </div>
  );
}

export default DisplayProduct;
