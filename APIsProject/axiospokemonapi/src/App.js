import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=1")
      .then((response) => {
        setPeople(response.data.results);
      });
  }, []);
  return (
     <div className="App">
       {people.map((person, index) => (
          <h5 key= {index}>{person.name}</h5>
        ))}
   
    </div>
  );
}

export default App;
