import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helpers/Axios'
import { Link } from 'react-router-dom'

const ViewAcademyManager = () => {
    let token=localStorage.getItem("token")
    let [state,setState]=useState([])

    useEffect(()=>{
      let fetchdata=async()=>{
        try{
            let {data}=await axiosInstance.get("/academymanagers/getall",
            {headers:{Authorization:`Bearer ${token}`}})
            let finaldata=data.data
            console.log(finaldata);
            setState(finaldata)
        }
        catch{
            console.log("unable to fetch data");
         }
      }
      fetchdata()
    },[])
  return (
    <section id="cardmainblock">
        <h1>Total no. of managers are:{state.length}</h1>
        <article>
            <div id="cardblock">
            {state.map((x)=>{
                    return(
                       <div id="card" key={x.id}>
                        <h2>Name:{x.userName}</h2>
                        <h2>Job:{x.role}</h2>
                        <h2>D.O.B:{x.dob}</h2>
                        <h2>Phone:{x.phone}</h2>
                        <h2>Email:{x.email}</h2>
                        <h2>Gender:{x.gender}</h2>
                        <Link to={`/adminDashboard/viewAcademyManager/viewAcademyEachManager/${x.id}`}><button id="cardbutton">VIEW</button></Link>
                       </div>
                    )
                  })}
            </div>
        </article>
    </section>
  )
}

export default ViewAcademyManager
