import React, { useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [option, setOption] = useState();
  const [id, setId] = useState();
  const [result, setResult] = useState()

  function handleChange(event) {
    setOption(event.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (isNaN(id)) {
      console.log("id must be a number")
    }
    else if (option === "people" && id.length > 0) {
      axios.get(`https://swapi.dev/api/${option}/${id}`)
      .then(response => {
        console.log(response.data)
        const details = {
          name: response.data.name,
          height: response.data.height,
          hair_color: response.data.hair_color,
          eye_color: response.data.eye_color,
          skin_color: response.data.skin_color
        }
        setResult(details)
        setId("");
      }).catch(err => console.log(err))
    } else if (option === "planets" && id.length > 0) {
      axios.get(`https://swapi.dev/api/${option}/${id}`)
      .then(response => {
        console.log(response.data)
        const planet_details = {
          name: response.data.name,
          climate: response.data.climate,
          terrain: response.data.terrain,
          surface_water: response.data.surface_water,
          population: response.data.population
        }
        setResult(planet_details);
        setId("")
      }).catch(err => console.log(err))
    }
};

  return (
    <div className="App">
      <form>
        <label htmlFor="selct">Search for: </label>
        <select
          name="option"
          onChange={(e) => handleChange(e)}
          style={{ margin: "10px" }}
        >
          <option value="" disabled selected>
              Select...
          </option>
          <option value="people">people</option>
          <option value="planets">planets</option>
        </select>
        <label htmlFor="id" style={{ margin: "10px" }}>
          ID:{" "}
        </label>
        <input
          type="text"
          name="id"
          id="id"
          onChange={(e) => setId(e.target.value)}
          value = {id}
        />
        <button
          type="submit"
          style={{ margin: "10px", backgroundColor: "blue" }}
          onClick={(e) => handleSearch(e)}
        >
          Search
        </button>
      </form>
      {(option === "people" && result !== undefined) && 
        <div>
          <h2>{result.name}</h2>
          <h4>Height: {result.height}</h4>
          <h4>Hair Color: {result.hair_color}</h4>
          <h4>Eye Color: {result.eye_color}</h4>
          <h4>Skin Color: {result.skin_color}</h4>
        </div>}
      {(option === "planets" && result !== undefined) &&
        <div>
          <h4>{result.name}</h4>
          <h4>Climate: {result.climate}</h4>
          <h4>Terrain: {result.terrain}</h4>
          <h4>Surface Water: {result.surface_water}</h4>
          <h4>Population: {result.population}</h4>
        </div>}
    </div>
  );
}
export default App;
