import { Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AuthorForm from "../components/AuthorForm";

function Update(props) {
  const { id } = props;
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((response) => {
        console.log(response.data);
        setAuthor(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateAuthor = (author) => {
    axios
      .put(`http://localhost:8000/api/author/${id}`, author)
      .then((response) => console.log(response))
      .catch((err) => {
          console.log(err)
          setErrors(err.response.data.errors);
        });
      
  };
  return (
    <div>
      <h2>Favorite authors</h2>
      <Link to="/">Home</Link>
      <p style={{ color: "purple" }}>Edit this author</p>
      {loaded && (
        <AuthorForm
          onSubmitProp={updateAuthor}
          initialFirstName={author.firstName}
          initialLastName={author.lastName}
          errors = {errors}
        />
      )}
    </div>
  );
}

export default Update;
