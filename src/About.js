/* Routing-About */

import React from "react";
import {Link } from 'react-router-dom'
function About()
{
  return(
    <div className="container bimage">
      <h3 className="head1"> Supreme Supermarket</h3>
      <div className="page col3">
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/dashboard"> Dashboard </Link>
      </div> <br/>
      <ul className="unorder">
       <li> Fruits</li> 
       <li> Vegetables </li>
       <li> Pulses </li>
       <li> Spices </li>
       <li> Stationary Items </li>
      </ul>
      <div className="order1">
      <ul>
        <li> Orange </li>
        <li> Apple </li>
        <li> Pomegranate </li>
        <li> Guava </li>
        <li> Papaya</li>
      </ul>
      <ul> 
        <li> Tomato </li>
        <li> Brinjal </li>
        <li> Carrot </li>
        <li> Beetroot </li>
        <li> Drumstick </li>
      </ul>
      <ul>
        <li> Moong dall </li>
        <li> Urad dall </li>
        <li> Masoor dall</li>
        <li> Chana dhall </li>
        <li> Tur dal </li>
      </ul>
      <ul> 
        <li> Cinnamon </li>
        <li> Black pepper </li>
        <li> Cardamon </li>
        <li> Cloves </li>
        <li> Fennel seeds </li>
      </ul>
      <ul>
        <li> Pen and Pencil </li>
        <li> Notebooks </li>
        <li> Reading Books </li>
        <li> Novels </li>
        <li> Gums and Stickers </li>
      </ul>
      </div>
    </div>
   )
}
export default About;