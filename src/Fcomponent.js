
/* Create a table using functional component */

import React from 'react';
import Table from 'react-bootstrap/Table';

function Fcomponent(props)
{
  const {user}=props;
  console.log(user);
  const studet=user.map((e,index)=>
  {
    return (
      <tr key={index}>
       <td> {index+1} </td> 
       <td> {e.name} </td>
       <td> {e.age} </td>
       <td> {e.dept} </td>
      </tr>
    )
  })
  return (
   <div className='container funtable'>
     <h3> Functional Component </h3> <br/>
     <Table striped bordered hover>
       <thead>
         <th> Id</th>
         <th> Name</th>
         <th> Age</th>
         <th> Department</th>
       </thead>
       <tbody> {studet} </tbody>
      </Table>
    </div>
   )
}
export default Fcomponent;