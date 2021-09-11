import React, { useState } from 'react';

const BirthdayData = (props) => {
    const [age, setAge] = useState(props.age);
    const {name, hairColor} = props;

    const handleClick = (event) => {
        setAge(age + 1)
    }
    return (
        <div className="bio-nav">
            <h4>{name}</h4>
            <h6>Age: {age}</h6>
            <h6>hair Color: {hairColor}</h6>
            <button onClick = { handleClick }>Birthday Button for {name}</button>
        </div>
    )
}

export default BirthdayData;