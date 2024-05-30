import React from "react"; 
import {useForm} from "react-hook-form";
import './Form.css'
function Form()
{
  const {register,handleSubmit,formState:{errors}}=useForm()
  console.log(errors)
  return(
    <div className="container">
        <h1> Facebook Login </h1>
        <form onSubmit={handleSubmit((data)=>{
          console.log(data)
          
        })}>
        <input {...register('email',{required:"Email or phonenumber is required"})} type="email||phonenumber"
           placeholder="Email Address or phonenumber"/> <br/>
        {errors.email && <span> {errors.email.message} </span>} <br/>
        <input {...register('password',{required:"Password is required",minLength:
        {value:6,message:"Length should be 6"}})} type="password" placeholder="password"/> <br/>
        {errors.password && <span> {errors.password.message} </span>} <br/>

          <button type="submit"> Login </button> <br/><br/>
          <a href="./Createaccount.js"> Create Account </a>
        </form>
        
    </div>
  )
}
export default Form;