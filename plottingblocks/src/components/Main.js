import React from 'react';

const Main = (props) => {

    return (
        <div
        style = {{
            display: "block",
            width: "488px",
            border: "1px solid black",
            height: "250px",
            backgroundColor: "#e06666",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px"
        }}>
            {props.children}
        </div>
    );
}
 
export default Main;