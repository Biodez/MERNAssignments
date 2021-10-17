import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import AuthorList from "./components/AuthorList";
import Update from "./views/Update";

function App() {
  return <div className="App">
    <Router >
      <Main path = "/new" />
      <AuthorList path = "/" />
      <Update path = "/edit/:id"/>
    </Router>
  </div>;
}

export default App;