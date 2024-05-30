/*  Routing-Login */

import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import {Link } from 'react-router-dom'

function Login()
{
  const navigate=useNavigate()
  
  useEffect(()=>{
    if(localStorage.getItem('auth')) navigate ('/dashboard')
  },{})
 
  const formSubmit=(e)=>{
    e.preventDefault()
    if(e.target.elements.name.value==="kala" || e.target.elements.password.value==="2022")
    {
      navigate("/dashboard")
      localStorage.setItem('auth',true)
    }
    else 
    {
      alert("Enter correct username and password")
    }
  } 
  return(
    <div className="container bimage">
      <h3 className="head1"> Supreme Supermarket </h3>
      <form onSubmit={formSubmit}>
        <input type="text" name="name" placeholder="UserName"/> <br/><br/>
        <input type="password" name="password" placeholder="Password"/> <br/><br/>
        <button type="submit" className="btn1"> Login </button>
      </form>
      <div className="head1">
        <Link to="/"> Home </Link>
      </div>
     </div>
    )
}
export default Login;