import React from "react";

function Home(props) {
  const { word, font, bground } = props;
  console.log(props);
  if (!word) {
    return (
      <div>
        <h1>Welcome!</h1>
      </div>
    );
  } else if (isNaN(word)) {
    return (
      <div>
        <h1 style={font ? { color: font, backgroundColor: bground } : null}>
          The word is: {word}
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>The word is: {word}</h1>
      </div>
    );
  }
}
export default Home;
