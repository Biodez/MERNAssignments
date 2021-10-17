import React, { useState } from "react";
import { navigate } from "@reach/router";

function AuthorForm(props) {
  const { initialFirstName, initialLastName, onSubmitProp, errors } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };

  const onCancelHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  };
  return (
    <div id = "container">
      <form>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name: </label><br/>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          {errors && errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name: </label><br/>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          {errors && errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div className="buttonHolder">
          <button onClick={onSubmitHandler} className="button">
            Submit
          </button>
          <button onClick={onCancelHandler} className="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthorForm;
