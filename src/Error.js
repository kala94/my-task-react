/* Routing-Error */

import React from "react";
import {Link } from 'react-router-dom'
function Error()
{
  return(
    <div className="container1">
      <h3> 404 Error found </h3>
      <Link to="/"> Go To Home </Link>
    </div>
    )
}
export default Error;