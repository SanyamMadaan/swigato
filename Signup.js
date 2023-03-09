import React from 'react' ;
import { NavLink  } from "react-router-dom";
import {useState} from 'react' ;
import { useDispatch } from 'react-redux';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
  
 /*  const dispatch =useDispatch()

    const register = () => {
dispatch(
    {
      type : 'Register' ,
      payload : {
        id:( new Date) .getTime(),
        name ,email ,password ,contact
      }  
    }
)
    } */
    return (
    <>
       
<NavLink to="/">HOME</NavLink>
    <h1>
        Sign Up
        </h1>
            <form className="signup">
            <input type="text" Placeholder="name" value={name} onChange={e =>setName(e.target.value)}/>
            <input type="email" Placeholder="email" value={email} onChange={e =>setEmail(e.target.value)}/>
            <input type="password" Placeholder="password" value={password} onChange={e =>setPassword(e.target.value)}/>
            <input type="text" Placeholder="contact" value={contact} onChange={e =>setContact(e.target.value)}/>
            <input type="button" id="btn" value="signup"/>
        </form>
    </>
    )
}

export default Signup ;