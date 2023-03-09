import React from "react";
import { NavLink } from "react-router-dom";

const Home = () =>{
   return ( <>
    <main>
        <div className="overlay">
          <div className="button">
        <NavLink to="/login"> Login</NavLink>
        <NavLink to="/signup"> SignUp</NavLink>
</div>
<div className="thumbnail">
        <div className="mb-3">
          <div className="name">
        <h1 id="home">Swigato </h1>
        </div>
        </div>
        <p id="title"> Find The Best Resturant , Cafe's and bars in India </p>
        </div>
        </div>
        </main>
    </>
) };

export default Home ;