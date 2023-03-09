import './App.css';
import React from "react";
import Home from './components/Home' ;
import Login from './components/Login' ;
import Signup from './components/Signup' ;
import {Routes,Route} from "react-router-dom";
function App() {
  return (
<>
<Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/signup" element={<Signup/>} />
  </Routes>

</>  
  );
}

export default App;
