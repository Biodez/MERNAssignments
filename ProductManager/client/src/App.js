import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import DisplayProduct from "./views/DisplayProduct";
import UpdateProduct from "./views/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product" />
        <DisplayProduct path = "/product/:id" />
        <UpdateProduct path = "/product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
