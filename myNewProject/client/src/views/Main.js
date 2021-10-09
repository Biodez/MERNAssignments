import React, {useState, useEffect} from 'react'
import axios from "axios";
import PersonForm from '../components/PersonForm';

const Main = () => {
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then((response) => {
                setMessage(response.data.message)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>Message from Db {message}</p>
            <PersonForm />
        </div>
    )
}

export default Main;
