import React from "react";
import axios from "axios";

function Delete(props) {
  const { authorId, successCallback } = props;
  const deletePerson = (e) => {
    axios
      .delete(`http://localhost:8000/api/author/${authorId}`)
      .then((response) => {
        successCallback();
      });
  };
  return (
    <div>
      <button
        onClick={deletePerson}
        type="button"
        className="btn btn-secondary"
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
