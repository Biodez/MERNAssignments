import React, { useContext } from "react";
import { Wrapper } from "../Context/Wrapper";

function Navbar() {
  const { yourName } = useContext(Wrapper);
  return (
    <div style = {{
        border: "1px solid purple",
        backgroundColor: "purple",
        color: "white"
    }}>
      <p style = {{
          textAlign: "right"
      }}>Hi {yourName}!</p>
    </div>
  );
}

export default Navbar;
