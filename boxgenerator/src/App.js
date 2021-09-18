import './App.css';
import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState("")
  const [colorArr, setColorArr] = useState([])

  const handleColorSubmit = (e) => {
    e.preventDefault();
    setColorArr([color, ...colorArr]);
    setColor("")
  }
  return (
    <div className="App">
      <form onSubmit = {handleColorSubmit}>
        Color
        <input type="text" 
        name="colortext" 
        id="colortext"
        onChange = {(e) => setColor(e.target.value)} 
        value = {color}/>
        <button type="submit">Add Color</button>
      </form>
      <h2>Display Boxes</h2>
      {colorArr.map(
        (element, index) => (
          <div 
            style = {{
              display: "inline-block", 
              marginLeft: "20px", 
              border: "2px solid {0}",element, 
              backgroundColor: element,
              height: "150px",
              width: "150px"
              }} 
            key = {index}>
          </div>
        )
      )}
    </div>
  );
}

export default App;
