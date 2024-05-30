/*  Search Filter */

import {useState} from "react";
import {data} from './Data';
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

function Searchfilter()
{
   console.log(data);
   const [search,setsearch]=useState(" ")
   console.log(search)
   return(
    <div className="container th1">
      <h3 className="head3"> Search Filter </h3>
      <Form onChange={(e)=>{
        setsearch(e.target.value)
      }}>
        <InputGroup >
          <Form.Control placeholder="search filter"/>
        </InputGroup>
      </Form> <br/><br/>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th> Id </th>
          <th> First Name </th>
          <th> Last Name </th>
          <th> Email </th>
        </tr>
      </thead>
      <tbody>
       {
        data.filter((item)=>{
         return search.toLowerCase()===""?item:item.first_name.toLowerCase().includes(search)
        }).map((item)=>(
          <tr>
            <td> {item.id} </td>
            <td> {item.first_name} </td>
            <td> {item.last_name} </td>
            <td> {item.email} </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
</div>
)
}
export default Searchfilter;