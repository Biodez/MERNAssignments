import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=1")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPeople(response.results);
      });
  }, []);

  return (
    <div>
      {people.map((person) => (
        <h5>{person.name}</h5>
      ))}
    </div>
  );
}

export default App;
