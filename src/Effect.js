/* Using useEffect */

import {useState,useEffect} from "react";
function Effect()
{
  const [count,setcount]=useState(0)
  const [msg,setmessage]=useState("Counting")
  useEffect(()=>{
    console.log(("Update the count"),[count,msg])
  })
  const handleupdate=()=>{
    setcount(count+1)
  }
  return(
   <div className="container">
    <p className="mes1"> Count is: </p> {count} 
    <p className="mes1"> Message : </p> {msg} <br/><br/>
    <button className="btn1" onClick={handleupdate}> Update count </button>
    <button className="btn1" onClick={()=>setmessage("count is increment")}>Message </button>
   </div>
    )
}
export default Effect;