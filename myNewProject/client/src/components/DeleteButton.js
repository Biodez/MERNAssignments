import React from "react";
import axios from "axios";

function DeleteButton(props) {
  const { personId, successCallback } = props;
  const deletePerson = (e) => {
    axios
      .delete(`http://localhost:8000/api/people/${personId}`)
      .then((response) => {
        successCallback();
      });
  };
  return (
    <div>
      <button onClick={deletePerson}>Delete</button>
    </div>
  );
}

export default DeleteButton;
