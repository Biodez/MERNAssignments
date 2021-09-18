import './App.css';
import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState("")
  const [BoxArray, SetBoxArray] = useState([])
  const [widthVal, setWidth] = useState("")
  const [heightVal, setHeight] = useState("")

  const handleColorSubmit = (e) => {
    e.preventDefault();
    const box = {
      color: color,
      width: widthVal + "px",
      height: heightVal + "px"
    }
    SetBoxArray([box, ...BoxArray]);
    setColor("")
    setWidth("")
    setHeight("")
  }
  return (
    <div className="App">
      <form onSubmit = {handleColorSubmit}>
        Color
        <input type="text"
        style = {{margin: "10px"}}
        name="colortext" 
        id="colortext"
        onChange = {(e) => setColor(e.target.value)} 
        value = {color}/>
        <input type="number" 
        step="1"
        style = {{margin: "10px"}}
        placeholder = "width"
        onChange = {(e) => setWidth(e.target.value)}
        value = {widthVal} />
        <input type="number" 
        step="1"
        style = {{margin: "10px"}}
        placeholder = "height"
        onChange = {(e) => setHeight(e.target.value)}
        value = {heightVal} />
        <button 
        style = {{margin: "10px"}}
        type="submit">Add Color</button>
      </form>
      <h2>Display Boxes</h2>
      {BoxArray.map(
        (box, index) => (
          <div 
            style = {{
              display: "inline-block", 
              marginLeft: "20px", 
              backgroundColor: box.color,
              height: box.height,
              width: box.width
              }} 
            key = {index}>
          </div>
        )
      )}
    </div>
  );
}

export default App;
