import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = (props) => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(response => {
                console.log(response.data)
                setPerson(response.data.person)
            })
    }, [props.id])
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p>Age: {person.age}</p>
            <p>Email: {person.email}</p>
        </div>
    )
}
export default Detail;