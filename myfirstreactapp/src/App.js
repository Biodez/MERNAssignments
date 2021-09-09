// import logo from './logo.svg';
import "./App.css";
import PersonCard from "./components/PersonCard";

const App = () => {
  const personCard = [
    {
      firstName: "Doe",
      lastName: "Jane",
      age: 45,
      hairColor: "Black",
    },
    {
      firstName: "Smith",
      lastName: "John",
      age: 88,
      hairColor: "Brown",
    },
    {
      firstName: "Fillmore",
      lastName: "Millard",
      age: 50,
      hairColor: "Brown",
    },
    {
      firstName: "Smith",
      lastName: "Maria",
      age: 62,
      hairColor: "Brown",
    },
  ];
  return (
    <div className="App">
      {personCard.map((element, index) => (
        <PersonCard
          name={element.firstName + ", " + element.lastName}
          age={element.age}
          hairColor={element.hairColor}
        />
      ))}
      {/* <h2>Hello Dojo!</h2>
      <p>Things I need to do:</p>
      <ul>
        <li className="str">Learn React</li>
        <li className="str">Climb Mt. Everest</li>
        <li className="str">Run a marathon</li>
        <li className="str">Feed the dogs</li>
      </ul> */}
    </div>
  );
};

export default App;
