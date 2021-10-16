import React, { useState, useEffect } from "react";
import PersonForm from "../components/PersonForm";
import axios from "axios";
import PersonList from "../components/PersonList";

const Main = () => {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((response) => {
        setPeople(response.data.Persons);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const createPerson = (newPerson) => {
    axios
      .post("http://localhost:8000/api/people", newPerson)
      .then((response) => {
        setPeople([...people, response.data.person]);
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <PersonForm
        onSubmitProp={createPerson}
        initialFirstName=""
        initialLastName=""
        initialAge=""
        initialEmail=""
        errors={errors}
      />
      <p>All Peoples</p>
      <hr />
      {loaded && <PersonList />}
    </div>
  );
};

export default Main;
