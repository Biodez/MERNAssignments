import './App.css';
import BirthdayData from './components/birhtdayData';

function App() {
  const bioData = [
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
  ]
  return (
    <div className="App">
      {bioData.map((element, index) => (
        <BirthdayData
          name = {element.firstName + ", " + element.lastName}
          age = {element.age}
          hairColor = {element.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
