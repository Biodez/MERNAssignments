import React, { useState } from 'react';

const Form = (props) => {
    const [firsstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formDataDivStyle = {
        textAlign: "left", 
        width: "450px", 
        margin: "auto",
    }

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }

    return (
        <div>
            <form style={{ marginTop: "20px" }}>
                <div style={inputDataDivStyle}>
                    <label htmlFor="firstname">First Name </label>
                    <input type="text" name="firstname" onChange = { (e) => setFirstname(e.target.value)} />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastname">Last Name </label>
                    <input type="text" name="lastname" onChange = { (e) => setLastname(e.target.value)}/>
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="email">Email </label>
                    <input type="text" name="email" onChange = { (e) => setEmail(e.target.value)}/>
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="password">Password </label>
                    <input type="text" name="password" onChange = { (e) => setPassword(e.target.value)} />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="cconfirmpassword">Confirm Password </label>
                    <input type="text" name="confirmpassword" onChange = { (e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div style={ formDataDivStyle }>
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p>First Name: {firsstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form;