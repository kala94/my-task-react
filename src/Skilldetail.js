/*  Using class component */

import React from 'react';
class Skilldetail extends React.Component
{
  render()
  {
    const  {employee}=this.props;
    const employeedetails=employee.map((e)=>
    {
      return (
        <div className='espan'>
          <ul> 
           <li> <span> Name:</span> {e.name} </li>
           <li> <span> Skills: </span> {e.skills.map((s)=>{
           return(
            <ul> 
             <li> <span> Name: </span> {s.name} </li>
             <li> <span>Type: </span> {s.type}</li>
            </ul>
          )})}
          </li>
         </ul>
        </div>
      );
    });
    return(
      <div className='container'>
        <h3 className='head3'> SkillDetails </h3>
        <ul> {employeedetails}</ul>
      </div>
    )
  }
}
export default Skilldetail;