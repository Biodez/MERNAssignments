import React, { useState, useEffect } from "react";
import axios from "axios";

function PersonList() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((response) => {
        setPeople(response.data.Persons);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
              <td>
                <button type="button">EDIT</button>
                <button type="button">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonList;
