import React from 'react'
import {useState} from 'react'
import axiosInstance from '../Helpers/Axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  let navigate=useNavigate()
  let [state,setState]=useState({
    userEmail:"",
    password:""
  })

let{userEmail,password}=state

  let handleChange=(e)=>{
   let name=e.target.name
   let value=e.target.value
   setState({...state,[name]:value})
  }
   
  let handleSubmit= async (e)=>{
    e.preventDefault()
      let payload={
        userEmail,
        password
      }
      let {data}=await axiosInstance.post("/authenticate",payload)
      console.log(data);

      let token =data.token
      let role=data.role

      if(token)
      {
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        navigate("/")
      }
  }
  return (
    <div className='containerLogin'>
      <div className='registerlogin'>
      <form action="" onSubmit={handleSubmit} id='register' > 
      <h1 id='title'>Login page</h1>
     
      <div>
         <label htmlFor="">EMAIL:</label>
         <br />
         <input type="text" name="userEmail" className='name' value={userEmail} onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="">PASSWORD:</label>
        <br />
        <input type="text" name="password" id="" className='name' value={password} onChange={handleChange}/>
      </div>
      <div>
        <button id='regSubmit'>SUBMIT</button>
      </div>
      </form>
     </div>
     </div>
  )
}

export default Login
