import React from 'react'
import { useState } from 'react'
import axiosInstance from '../Helpers/Axios'
import {useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate=useNavigate()
  let[data, setData] = useState ({
    userName : "",
    email :"",
    password:"",
    dob:"",
    phone:"",
    gender:"",

  })
  let {userName, email, password, dob, phone, gender}=data //destructing the obj

  let handleData=(e)=>{
    let name= e.target.name
    let value= e.target.value 
    setData({...data,[name]:value})
  }

  let handleSubmit= async (e)=>{
    e.preventDefault()
    
    // console.log(data);
    let payload={userName,email, password, dob, phone, gender}
    let finaldata=await axiosInstance.post("/users/save",payload)
    console.log(finaldata);
    navigate("/login")
  }
   

   
  return (
   <div className="container">
    <div className='register'>
      <h2 id='title'>REGISTER FORM</h2>
      <form aliaction="" onSubmit={handleSubmit} id='register'>
        <label htmlFor="">Username:</label>
        <br />
        <input type="text" name='userName' value={userName} id='userName' className='name' placeholder='Enter your full name' onChange={handleData} />
        <br /><br /> 
        <label htmlFor="">Email:</label>
        <br />
        <input type="text" name='email' value={email} id='email'className='name' placeholder='Enter your email address' onChange={handleData}/>
        <br /><br />
        <label htmlFor="" >Password:</label>
        <br />
        <input type="password"  name='password' value={password} id='password'className='name' placeholder='Enter your password' onChange={handleData}/>
        <br /><br />
        <label htmlFor="" >Dob:</label>
        <br />
        <input type="date" name='dob' value={dob} id='dob'className='name' placeholder='Enter Date of birth' onChange={handleData}/>
        <br /><br />
        <label htmlFor="" >Phone:</label>
        <br />
        <input type="number" name='phone' value={phone} id='phone'className='name' placeholder='Enter your phone number' onChange={handleData}/>
        <br /><br />
        <label htmlFor="gender">Gender:</label><span>&nbsp;&nbsp;</span>
        <input type="radio" name='gender' value="Male" id='Male'required onChange={handleData}/>
        <label htmlFor="">Male</label><span>&nbsp;&nbsp;</span><input type="radio" name='gender' value='Female' required onChange={handleData} />
        <label htmlFor="">Female</label>
        <br />
        <br />
        <button id='regSubmit'>SUBMIT</button>
      </form>
      </div>
    </div>
    

  )
}

export default Register
