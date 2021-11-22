import '../App.css';
import './Form.css';
import { useState } from "react";
import Axios from 'axios'

const Form = () => {

    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[subagentName, setSubName] = useState("");
    const[contact, setContact] = useState("null");

    const addAgent = () => {
        Axios.post('http://localhost:3001/create', {name:name,
        password: password,
        confirmPassword: confirmPassword,
        subName: subagentName,
        contact: contact}).then(() => {
            console.log("Success")
        })
    } 

    return(
        <div className="App">
            <h3>CREATE NEW SUB-AGENT</h3>
            <div className="Information">
            <form>
                <p>
                    <label>Account Username:</label>
                    <input type="text" onChange= {(e) => {
                        setName(e.target.value);
                    }}/>
                </p>
                <p>
                    <label>Password*:</label>
                    <input type="text" onChange= {(e) => {
                        setPassword(e.target.value);
                    }}/>
                </p>
                <p>
                    <label>Confirm Password*:</label>
                    <input type="text" onChange= {(e) => {
                        setConfirmPassword(e.target.value);
                    }}/>
                </p>
                <br/>
                <p>
                    <label>Sub-Agent Name*:</label>
                    <input type="text" onChange= {(e) => {
                        setSubName(e.target.value);
                    }}/>
                </p>
                <br/>
                <p>
                    <label>Contact Number:</label>
                    <input type="number" onChange= {(e) => {
                        setContact(e.target.value);
                    }}/>
                </p>
            </form>
            </div>
            <button className="size" onClick={addAgent}>Save</button>
        </div>
    )
}

export default Form;