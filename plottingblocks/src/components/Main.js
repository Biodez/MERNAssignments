import React from 'react';

const Main = (props) => {

    return (
        <div
        style = {{
            display: "flex",
            width: "488px",
            border: "1px solid black",
            height: "250px",
            backgroundColor: "#e06666",
            paddingTop: "10px",
            paddingBottom: "10px",
            justifyContent: "space-evenly"
        }}>
            {props.children}
        </div>
    );
}
 
export default Main;