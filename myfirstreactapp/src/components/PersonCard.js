import React from 'react';

const PersonCard = (props) => {
    const {name, age, hairColor} = props;
    return (
        <div>
            <h2>{name}</h2>
            <h5>Age: {age}</h5>
            <h5>Hair Color: {hairColor}</h5>
        </div>
    )
}
export default PersonCard;