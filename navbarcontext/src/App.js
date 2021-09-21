import "./App.css";
import React, { useState } from "react";
import { Wrapper } from "./Context/Wrapper";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";

function App() {
  const [yourName, setYourName] = useState("");
  return (
    <div className="App">
      <Wrapper.Provider value={{ yourName, setYourName }}>
        <Navbar />
        <Form />
      </Wrapper.Provider>
    </div>
  );
}

export default App;
