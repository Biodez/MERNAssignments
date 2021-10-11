import React from "react";
import { Link } from "@reach/router";
import axios from "axios";

function PersonList(props) {
  const { removeFromDom } = props;
  const deletePerson = (personId) => {
    axios
      .delete(`http://localhost:8000/api/people/${personId}`)
      .then((response) => removeFromDom(personId));
  };
  return (
    <div>
      {props.people.map((person, idx) => {
        return (
          <div key={idx}>
            <p>
              Name: {person.lastName}, {person.firstName}
            </p>
            <p>Age: {person.age}</p>
            <p>Email: {person.email}</p>
            <Link to={`/people/${person._id}/edit`}>Edit</Link>
            <button
              onClick={(e) => {
                deletePerson(person._id);
              }}
            >
              Delete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default PersonList;
