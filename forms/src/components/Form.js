import React, { useState } from 'react';

const Form = (props) => {
    const [firsstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="firstname">First Name </label>
                    <input type="text" onChange = { (e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name </label>
                    <input type="text" onChange = { (e) => setLastname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" onChange = { (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input type="text" onChange = { (e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cconfirmpassword">Confirm Pawword </label>
                    <input type="text" onChange = { (e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div>
                <h5>First Name {firsstname}</h5>
                <h5>Last Name {lastname}</h5>
                <h5>Email {email}</h5>
                <h5>Password {password}</h5>
                <h5>Confirm Password {confirmPassword}</h5>
            </div>
        </div>
    )
}

export default Form;