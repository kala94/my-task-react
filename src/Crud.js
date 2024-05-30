/* Crud Operation */

import React from "react";
import { useState } from "react";
import Addlist from "./Addlist";
import Table from 'react-bootstrap/Table';

function Crud()
{
  const list=[
  {
    id:1,
    name:"kala",
    profession:"Designer"
  },
  {
    id:2,
    name:"Arul",
    profession:"Manager"
  },
  {
    id:3,
    name:"Sureka",
    profession:"Marketing Director"
  },
  {
    id:4,
    name:"Akshaya",
    profession:"Supervisor"
  },
  {
    id:5,
    name:"Selvi",
    profession:"Assistant Manager"
  }
]

const [lists,setlist]=useState(list)
const [editstate,seteditstate]=useState(null)
const store=lists.map((current,i)=>{
return(
  <tr key={i}>
    <td> {i+1} </td>
    <td> 
      {
        editstate===current.id ? <input defaultvalue={current.name} 
        onChange={(ne)=>current.name=ne.target.value}/>:current.name
      }
      </td>
      <td>
      {
        editstate===current.id ? <input defaultvalue={current.profession} 
        onChange={(ne)=>current.profession=ne.target.value}/>:current.profession
      } 
      </td>
      <td>
      {
        editstate===current.id ? <button onClick={()=>saveupdate()}> saveupdate</button>:
        <button onClick={()=>handleEdit(current.id)}> Edit </button>
      }
      </td>
      <td> 
       <button onClick={()=>handleDelete(current.id)}> Delete </button>
      </td>
    </tr>
  )
})
 
function handleEdit(e)
{
  seteditstate(e)
}
function saveupdate()
{
  seteditstate(null)
}
function handleDelete(id)
{
  const newlist=lists.filter((li)=>li.id!==id)
  setlist(newlist)
}
  return(
    <div className="container">
      <h3 className="head1"> Crud Operation </h3>
      <Addlist setlist={setlist}/> <br/><br/>
     <Table striped bordered hover>
      <thead>
        <th> Id </th>
        <th> Name </th>
        <th> Profession </th>
        <th colspan="2"> Update </th>
      </thead>
      <tbody>
        {store}
      </tbody>
     </Table>
    </div>
  )
}
export default Crud;