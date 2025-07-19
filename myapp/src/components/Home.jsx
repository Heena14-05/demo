import React, {useState} from "react";
import {useAuth} from "./AuthContext";

const Home =(props) => {
let data = props.data;
    
    const {isAuthenticated, logout} =useAuth();
  
    return(
        <div>
            {isAuthenticated ?( 
            <>
            <div>
                <h1>this is from home component </h1>
                <h1>Welcome to Home Page</h1>
                <button onClick={() => logout()}>Logout</button>
            </div>
            </>
            ):(
                <h2>Please login to view this page</h2>
            )}
            </div>
       
         
    );
         
};


export default Home;


















 /* let [name, setName] = useState("HEENA");
    let [username, setUsername]= useState('');

    const handleChange= ()=>{
        setName("Anchal");
    }
    const handleAnother =() =>{
        setName("Love");
    }
    const handleChangeValue =(e) =>{
        setUsername(e.target.value);
    }
    const handleSubmit = ()=>{
        alert("Submited");
        setUsername('');
    }
            <h1> {data.username}</h1>
            <h2> {data.age} </h2>
            <h3> {data.class} </h3>
            <h2> {name} </h2>
            <button onClick={handleChange}> Click me</button>
            <button onClick={handleAnother}> Reset me</button>


            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="username" 
                placeholder="enter your name" 
                onChange={handleChangeValue} 
                value={username} />
                <input type="submit" />
            </form>
        </div>

     
    )
}*/
