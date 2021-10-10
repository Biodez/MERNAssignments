import React from "react";
import PersonForm from "../components/PersonForm";
import { Router } from "@reach/router";
import PersonList from "../components/PersonList";

const Main = () => {
  return (
    <div>
      <Router>
        <PersonForm path="/" />
        <PersonList path="/display"/>
      </Router>
    </div>
  );
};

export default Main;
