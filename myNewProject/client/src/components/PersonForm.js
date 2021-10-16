import React, { useState } from "react";
import "../App.css";

function PersonForm(props) {
  const {
    initialFirstName,
    initialLastName,
    initialAge,
    initialEmail,
    onSubmitProp,
    errors
  } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [age, setAge] = useState(initialAge);
  const [email, setEmail] = useState(initialEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({ firstName, lastName, age, email });
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
  };

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          {errors && errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          {errors && errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          {errors && errors.age && <p>{errors.age.message}</p>}
        </div>
        <div style={inputDataDivStyle}>
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
