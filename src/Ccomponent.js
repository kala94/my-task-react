/*  Create a list using class component */

import React from 'react';
class Ccomponent extends React.Component
{
  render()
  {
    const {userdet}=this.props;
    console.log(userdet);
    const studentdetails=userdet.map((e,index)=>{
    return (
     <div>
      <ul key={index}>
       <li> <span className='s1'> ID:</span> {index+1} 
        <ul>
         <li> <span className='s2'> Name: </span> {e.name} </li>
         <li> <span className='s2'> Age: </span>{e.age} </li>
         <li> <span className='s2'> Department:</span> {e.dept} </li>
        </ul>
      </li>
     </ul>
     </div>
    )
  })
  return (
   <div className='container'>
    <h3 className='head3'> Class Component </h3>
    <ul> {studentdetails} </ul>  
   </div>
  )
  }
}
export default Ccomponent;