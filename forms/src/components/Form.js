import React, { useState } from 'react';

const Form = (props) => {
    const [firsstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
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

    const handleFirstnameChange = (e) => {
        setFirstnameError(e.target.value);
        setFirstname(e.target.value)
        if (e.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2 characters")
        } else {
            setFirstnameError("")
        }
    }

    const handleLastnameChange = (e) => {
        setLastnameError(e.target.value);
        setLastname(e.target.value)
        if (e.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters")
        } else {
            setLastnameError("")
        }
    }

    const handleEmailChange = (e) => {
        setEmailError(e.target.value);
        setEmail(e.target.value)
        if (e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters")
        } else {
            setEmailError("")
        }
    }

    const handlePasswordChange = (e) => {
        setPasswordError(e.target.value);
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 character")
        } else {
            setPasswordError("")
        }
    }

    return (
        <div>
            <form style={{ marginTop: "20px" }}>
                <div style={inputDataDivStyle}>
                    <label htmlFor="firstname">First Name </label>
                    <input type="text" name="firstname" onChange = { (e) => handleFirstnameChange(e)} />
                </div>
                {firstnameError}
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastname">Last Name </label>
                    <input type="text" name="lastname" onChange = { (e) => handleLastnameChange(e)}/>
                </div>
                {lastnameError}
                <div style={inputDataDivStyle}>
                    <label htmlFor="email">Email </label>
                    <input type="text" name="email" onChange = { (e) => handleEmailChange(e)}/>
                </div>
                {emailError}
                <div style={inputDataDivStyle}>
                    <label htmlFor="password">Password </label>
                    <input type="text" name="password" onChange = { (e) => handlePasswordChange(e)} />
                </div>
                {passwordError}
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