import React from "react";
import './Form.css';
import {useForm} from 'react-hook-form';
import { useState } from "react";
function Createaccount()
{
  const [data,setdata]=useState("")
  const {register,handleSubmit,formState:{errors}}=useForm()
  return(
   <div className="fbaccount">
    <h1 className="fb"> facebook </h1> <br/>
     <form onSubmit={handleSubmit((data)=>
      {
        setdata(JSON.stringify(data))
      })}>
     <b className="cna"> Create a new account </b> <br/>
     <i className="state"> It's quick and easy.</i> <hr/>
     <input {...register('firstname',{required:"First name is required"})} type="text" placeholder="First Name" 
     className="in1"/> 
     {errors.firstname && <span> {errors.firstname.message} </span>}
     <input {...register('surname',{required:"surname is required"})} type="text" placeholder="Surname" 
     className="in1 in2"/> 
    {errors.surname && <span> {errors.surname.message}</span>} <br/><br/>
    <input {...register('pnoemail',{required:"phonenumber or email is required"})} type="phonenumber/email" 
    className="col12" placeholder="Mobilenumber or Email Address"/> 
    {errors.pnoemail && <span> {errors.pnoemail.message} </span>}  <br/><br/>
    <input {...register('password',{required:"password is required",minLength:{value:6,message:"Length should be 6"}})} 
    type="password" placeholder="New Password" className="col12"/> 
    {errors.password && <span> {errors.password.message} </span>} <br/><br/>
    <label> Date Of Birth </label><br/><br/>
    <input {...register('date',{required:"date is required"})} type="date" className="col12"/> 
    {errors.date && <span> {errors.date.message} </span>} <br/><br/>
    <label> Gender </label> <br/>
    <div className="rl">
      <label for="n1" className="l1"> Female  
      <input {...register('radio',{required:"select gender"})} type="radio" name="radio" id="n1" className="r1"/> </label> 
      <label for="n2" className="l1 mlabel"> Male 
      <input {...register('radio',{required:"select gender"})} type="radio" name="radio" id="n2" className="r1"/> </label> 
      <label for="n3" className="l1 mlabel"> Custom 
      <input {...register('radio',{required:"select gender"})} type="radio" name="radio" id="n3" className="r1"/> </label> 
      {errors.radio && <span> {errors.radio.message} </span>} <br/><br/> 
    </div>
    <p className="para">
      People who use our service may have uploaded your contact information to Facebook.<span> Learn more.</span> <br/>
      By clicking Sign Up, you agree to our <span>Terms, Privacy Policy </span> and <span> Cookies Policy.</span> 
      You may receive SMS notifications from us and can opt out at any time. 
    </p> 
    <button type="submit"> Sign up </button> <br/><br/>
    <h4 className="aha"> Already have an account? </h4>
  </form>
</div>
)
}
export default Createaccount;