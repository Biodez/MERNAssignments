import axios from "axios";
import React, { useState } from "react";

function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      firstName,
      lastName,
      age,
      email,
    };
    axios
      .post("http://localhost:8000/api/people", newPerson)
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          {errors && errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          {errors && errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          {errors && errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors && errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit">Add person</button>
      </form>
    </div>
  );
}

export default PersonForm;
