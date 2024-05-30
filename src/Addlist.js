/*  Addlist-crud*/

import React from 'react'

function Addlist({setlist})
{
  function handleSubmit(event)
  {
    event.preventDefault()
    console.log(event)
    const name=event.target.elements.name.value
    const profession=event.target.elements.profession.value
    console.log(name,profession)
    const newlist={name,profession}
    console.log(newlist)
    setlist((prevlist)=>{
       return prevlist.concat(newlist)
    })
  }
   return(
    <div className="container addform">
     <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Enter the name"/> <br/><br/>
    <input type="text" name="profession" placeholder="Enter the profession"/><br/><br/>
    <button type="submit"> Addlist </button>
  </form>
  </div>
  )
}
export default Addlist;
