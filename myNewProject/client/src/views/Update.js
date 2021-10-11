import axios from "axios";
import React, { useState, useEffect } from "react";

function Update(props) {
  const { id } = props;
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [email, SetEmail] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/people/${id}`)
      .then((response) => {
        // console.log(response.data)
        setFirstName(response.data.person.firstName);
        setLastName(response.data.person.lastName);
        setAge(response.data.person.age);
        SetEmail(response.data.person.email);
      })
      .catch();
  }, [id]);

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  };

  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/people/${id}`, {
        firstName,
        lastName,
        age,
        email,
      })
      .then((response) => console.log(response));

    setFirstName("");
    setLastName("");
    setAge("");
    SetEmail("");
  };
  return (
    <div>
      <p>Update a Person</p>
      <form onSubmit={updatePerson}>
        <p style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>
        <p style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>
        <p style={inputDataDivStyle}>
          <label htmlFor="age">Last Name</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </p>
        <p style={inputDataDivStyle}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
