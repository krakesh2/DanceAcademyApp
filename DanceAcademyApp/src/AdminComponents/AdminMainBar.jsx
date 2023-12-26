import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMainBar = () => {
  return (
    <div id='adminmainbar'>
     <Outlet/>
    </div>
  )
}

export default AdminMainBar
