import axios from "axios";
import React, { useState } from "react";

function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
        firstName,
        lastName,
        age,
        email,
    };
    axios.post("http://localhost:8000/api/people", newPerson)
        .then((response) => console.log(response))
        .catch(err => console.log(err))
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type = "submit">Add person</button>
      </form>
    </div>
  );
}

export default PersonForm;
