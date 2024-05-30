/*  Routing-Dashboard */

import React from "react";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
function Dashboard()
{
  const item=[
  {
    no:1,
    item:"Apple",
    type:"Fruit",
    quantity:"10kg"
  },
  {
    no:2,
    item:"Tomato",
    type:"Vegetables",
    quantity:"50kg"
  },
  {
    no:3,
    item:"Mustard Seeds",
    type:"Spices",
    quantity:"5kg" 
  },
  {
    no:4,
    item:"Door Dall",
    type:"Pulses",
    quantity:"20kg" 
  },
  {
    no:5,
    item:"Novel Books",
    type:"Stationary", 
    quantity:"50nos"
  }]
   const itemlist=item.map((i)=>
   {
      return(
        <tr className="item">
          <td className="item"> {i.no} </td>
          <td className="item"> {i.item} </td>
          <td className="item"> {i.type} </td>
          <td className="item"> {i.quantity} </td>
        </tr>
      )
   })
   const navigate=useNavigate()
   const [logout,setLogout]=useState("false")
   useEffect(()=>{
    if(!localStorage.getItem('auth')) navigate('/login') },[logout])
   const logoutHandle=(e)=>{
    e.preventDefault()
    localStorage.removeItem('auth')
    setLogout(true)
   }
    return(
      <div className="container bimage dashtable">
        <h3 className="head1"> Supreme Supermarket </h3> <br/>
          <table>
            <thead>
              <tr>
                <th> Item no </th>
                <th> Item </th>
                <th> Type </th>
                <th> Quantity </th>
              </tr>
            </thead>
            <tbody>
              {itemlist}
            </tbody>
          </table> <br/>
        <button className="btn1" onClick={logoutHandle}> Logout </button>
      </div>
    )
}
export default Dashboard;