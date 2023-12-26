import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div id='adminsidebar'>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/adminDashboard/addAcademyManager" id='link'>Add Academy Manager</Link></li>
        <li><Link to="/adminDashboard/viewAcademyManager" id='link'>View Academy Manager</Link></li>
        <li><Link to="/adminDashboard/viewAcademy" id='link'>View Academy</Link></li>
        <li><Link to="/adminDashboard/viewAcademy" id='link'>View Branch</Link></li>
        <li><Link to="/adminDashboard/viewCourse" id='link'>View Course</Link></li>
        <li><Link to="/" id='link'>Home</Link></li>
      </ul>
    </div>
  )
}

export default AdminSideBar
