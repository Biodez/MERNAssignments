import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import DisplayProduct from "./views/DisplayProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <DisplayProduct path = "/product/:id" />
      </Router>
    </div>
  );
}

export default App;
