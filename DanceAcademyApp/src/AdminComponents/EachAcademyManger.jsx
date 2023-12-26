import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/Axios'

const EachAcademyManger = () => {
    let {id}=useParams()
    let[state,setState]=useState({})
    let navigate=useNavigate()
    let token=localStorage.getItem("token")

    useEffect(()=>{
      let fetchdata=async ()=>{
        try{
            let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,
            {headers:{Authorization:`Bearer ${token}`}})
            console.log(data);
            let finaldata=data.data
            console.log(finaldata);
            setState(finaldata)
        }
        catch{
            console.log("unable to connect");
        }
      }
      fetchdata()
    },[])

    let handleDelete=async (id)=>{
      await axiosInstance.delete(`/academymanagers/delete/${id}`,
      {headers:{Authorization:`Bearer ${token}`}})
      navigate("/adminDashboard/viewAcademyManager")
    }
  return (
    <div>
      <h2>Name:{state.userName}</h2>
      <h2>job:{state.role}</h2>
      <h2>D.O.B:{state.dob}</h2>
      <h2>Phone:{state.phone}</h2>
      <h2>Email:{state.email}</h2>
      <h2>Gender:{state.gender}</h2>

      <div>
        <table cellPadding={0} cellSpacing={30}>
            <tr>
                <td><button className='eachbutton'>UPDATE</button></td>
                <td><button className='eachbutton'>ADD ACADEMY MANAGER</button></td>
                <td><button className='eachbutton' onClick={()=>{
                    handleDelete(state.id)
                }}>DELETE</button></td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default EachAcademyManger
