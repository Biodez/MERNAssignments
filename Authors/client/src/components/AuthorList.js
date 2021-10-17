import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Delete from "./Delete";

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((response) => {
        console.log(response.data);
        setAuthors(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (authorId) => {
    let filteredAuthor = authors.filter((author) => author._id !== authorId);
    setAuthors(filteredAuthor);
  };
  return (
    <div>
      <Link to="/new">Add an author</Link>
      <p style={{ color: "purple" }}>We have quotes by:</p>
      <table className="table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {loaded &&
            authors
              .sort(function (a, b) {
                return a.firstName.localeCompare(b.firstName);
              })
              .map((author, index) => (
                <tr key={index}>
                  <td style={{ color: "purple" }}>
                    {author.firstName} {author.lastName}
                  </td>
                  <td>
                    <Link to={`/edit/${author._id}`}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ margin: "10px" }}
                      >
                        Edit
                      </button>
                    </Link>
                    <Delete
                      authorId={author._id}
                      successCallback={() => removeFromDom(author._id)}
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuthorList;
