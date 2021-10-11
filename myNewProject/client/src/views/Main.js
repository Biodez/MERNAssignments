import React, { useState, useEffect } from "react";
import PersonForm from "../components/PersonForm";
import axios from "axios";
import PersonList from "../components/PersonList";

const Main = () => {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((response) => {
        setPeople(response.data.Persons);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
const removeFromDom = (personId) => {
  const filteredPerson = people.filter(person => person._id !== personId)
  setPeople(filteredPerson)
} 

  return (
    <div>
      <PersonForm />
      <p>All Peoples</p>
      <hr />
      {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
    </div>
  );
};

export default Main;
