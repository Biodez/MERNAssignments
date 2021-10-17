import React, { useState, useEffect } from "react";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { Link, navigate} from "@reach/router";

function Main() {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const createAuthor = (newAuthor) => {
    axios
      .post("http://localhost:8000/api/author", newAuthor)
      .then((response) => {
        setAuthors([...authors, response.data]);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <h2>Favorite authors</h2>
      <Link to="/">Home</Link>
      <p style={{ color: "purple" }}>Add a new author</p>
      <AuthorForm
        onSubmitProp={createAuthor}
        initialFirstName=""
        initialLastName=""
        errors={errors}
      />
    </div>
  );
}

export default Main;
