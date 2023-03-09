import React from "react";
import { NavLink  } from "react-router-dom";
import {useState} from 'react' ;
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
const dashboard =() => {
    document.write("welcome back ${name}");
}/*const dispatch = useDispatch()
const users = useSelector(state => state.users) 
    const login = () => {
        const payload = users.find(name => name===name && name.password===password)

        if(payload){
dispatch({
    type : 'LOGIN' ,
    payload
})
        }
        else{
            alert('wrong Crudentials!!')
        }
    }*/
    return(
        
        <main>
        <div className="overlay1">   
<NavLink to="/">HOME</NavLink>
         
            <div className="box"> 
<h1>Welcome To Login Page !!</h1>
<form>
    <input type="text" placeholder="Name" onChange={e =>setName(e.target.value)} required/> <br/>
    <input type="password"  placeholder="Password" onChange={e =>setPassword(e.target.value)} required/> <br/>
    <input type="button" id="btn" value="Login" onclick={dashboard}/>
</form>
     </div>
     </div>
     </main>
         )
}
export default Login ;