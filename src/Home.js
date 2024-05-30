/* Routing-Home */

import React from "react";
import {Link } from 'react-router-dom'
function Home()
{
  return(
   <div className="container bimage">
     <h3 className="supname"> Supreme SuperMarket </h3> <br/>
    <div className="page col12">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/login"> Login </Link>
      <Link to="/dashboard"> Dashboard </Link>
    </div>
  </div>
)
}
export default Home;