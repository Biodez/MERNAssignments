import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteButton from "./DeleteButton";

function PersonList() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/people/')
      .then(response => setPeople(response.data.Persons))
  })

  const removeFromDom = (personId) => {
    const filteredPerson = people.filter((person) => person._id !== personId);
    setPeople(filteredPerson);
  };

  return (
    <div>
      {people.map((person, idx) => {
        return (
          <div key={idx}>
            <p>
              Name: {person.lastName}, {person.firstName}
            </p>
            <p>Age: {person.age}</p>
            <p>Email: {person.email}</p>
            <Link to={`/people/${person._id}/edit`}>Edit</Link>
            <DeleteButton personId = {person._id} successCallback = {() => removeFromDom(person._id)}/>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default PersonList;
