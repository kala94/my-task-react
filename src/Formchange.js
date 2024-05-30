/* change the data in form */

import {useState} from "react";
function Formchange()
{
  const [change,setchange]=useState("Enter the data")
  const [submit,setsubmit]=useState("your data is not submit")
  const handleinput=(e)=>{
    setchange(e.target.value)
  }

  return(
    <div className="container">
      <p className="mes1"> Input: </p> {change} 
      <p className="mes1"> Submit: </p> {submit} <br/><br/>
      <input onChange={handleinput} type="text" placeholder="Enter your name"/> <br/><br/>
      <button className="btn1" onClick={()=>setsubmit(change)}> Submit </button>
    </div>
  )
}
export default Formchange;