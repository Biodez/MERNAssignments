import React, { useContext } from "react";
import { Wrapper } from "../Context/Wrapper";

function Form() {
  const { yourName, setYourName } = useContext(Wrapper);
  return (
    <div style = {{
        border: "1px solid blue",
        padding: "20px",
        height: "150px",
        backgroundColor: "blue",
        color: "white"
    }}>
      <form>
        <label htmlFor="yourName">Your Name: </label>
        <input
          type="text"
          name="yourName"
          id="yourName"
          onChange={(e) => setYourName(e.target.value)}
          value={yourName}
        />
      </form>
    </div>
  );
}

export default Form;
