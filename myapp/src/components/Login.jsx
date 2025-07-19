import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from './AuthContext'

export default function Login() {
    const navigate = useNavigate();
    const {login} = useAuth();
    
    let [data, setData]= useState({
        username:"",
        password:"",

    });
    
    const handleChange =(e)=>{
        e.preventDefault();
        setData({...data,[e.target.name]: e.target.value });
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        alert("form submit successfully");
        navigate("/");
    };
    return(
    <div>
    <h1>Hello Login Page</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={data.username} onChange={handleChange}></input>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={data.password} onChange={handleChange}></input>
        </div>
        <div>
            <input type="submit" value="submit"></input>
        </div>
    </form>

    </div>
    );
}
