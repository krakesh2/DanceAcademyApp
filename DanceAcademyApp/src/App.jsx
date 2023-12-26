import React from 'react'
import Navbar from './components/Navbar'
import "./global.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ProtectedRoute from './ServiceRoutes/ProtectedRoute'
import AdminRegister from './Authentication/AdminRegister'
import AdminDashboard from './Authentication/AdminDashboard'
import AcademyManagerRegister from './AdminComponents/AcademyManagerRegister'
import ViewAcademyManager from './AdminComponents/ViewAcademyManager'
import EachAcademyManger from './AdminComponents/EachAcademyManger'
const App = () => {
  return (
   <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/adminregister' element={<AdminRegister/>}/>



    <Route path='/adminDashboard' element={<AdminDashboard/>}>
    <Route path='/adminDashboard/addAcademyManager' element={<AcademyManagerRegister/>}/>
    <Route path='/adminDashboard/viewAcademyManager' element={<ViewAcademyManager/>}/>
    <Route path='/adminDashboard/viewAcademyManager/viewAcademyEachManager/:id' element={<EachAcademyManger/>}/>
    <Route/>
    </Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App
