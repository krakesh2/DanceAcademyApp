import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
  let navigate=useNavigate()

  let role=localStorage.getItem("role")
  let token =localStorage.getItem("token")

  let logoutHandler=()=>{
      localStorage.clear()
      navigate("/login")
  }
   
  return (
    <div id='menu'>
      <ul>
      <li><Link to="/" id='link'>Home</Link></li>
        <li><Link to="/about" id='link'>About</Link></li>
        <li><Link to="/services" id='link'>Services</Link></li>
        {role ==="ROLE_ADMIN" ? <Link to={"/adminDashBoard"} id='link'><li>Admin Dashboard</li></Link>:null}
        {token?<Link to={"/login"} id='link'><li onClick={logoutHandler}>Logout</li></Link>:
        <>
        <Link to={"/login"} id='link'><li>Login</li></Link>
        <Link to={"/register"} id='link'><li>Register</li></Link>
        </>
        }
      </ul>
    </div>
  )
}
export default Menu
