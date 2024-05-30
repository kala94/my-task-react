/*  Using usestate */

import {useState} from "react";
const Buttoncreate=()=>
{
  const [msg,setmessage]=useState("You are not sign in the page");
  return (
   <div className="container">
     <h3 className="head3"> Using UseState </h3>
     <p className="mes1"> Message:</p> {msg} <br/><br/>
     <button className="btn1" onClick={()=>setmessage("You are Authorised User")}> Sign in </button>
     <button className="btn1" onClick={()=>setmessage("Signed Out")}> Sign out </button>
   </div>
  );
}
export default Buttoncreate;