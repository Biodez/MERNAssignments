import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import PersonForm from "../components/PersonForm";

function Update(props) {
  const { id } = props;
  const [person, setPerson] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/people/${id}`)
      .then((response) => {
        console.log(response.data);
        setPerson(response.data.person);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatePerson = (person) => {
    axios
      .put(`http://localhost:8000/api/people/${id}`, person)
      .then((response) => console.log(response));
  };
  return (
    <div>
      <p>Update a Person</p>
      {loaded && (
        <PersonForm
          onSubmitProp={updatePerson}
          initialFirstName={person.firstName}
          initialLastName={person.lastName}
          initialAge={person.age}
          initialEmail={person.email}
        />
      )}
      <DeleteButton personId = {id} successCallback = {() => navigate("/people")}/>

    </div>
  );
}

export default Update;
