import React, { useState } from 'react'
import style from "./home.module.css"
import {  useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { useEffect } from "react"
const EditUser = () => {
     let navigate=useNavigate()
    let obj=useParams()
    console.log(obj);
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    
    // useEffect(()=>{
    //     axios.get(`http://localhost:5000/employees/${obj.id}`)
    //     .then((resp)=>{
    //         console.log(resp.data);
            
    //     })
    //     .catch(()=>{
    //         console.log("didn't get the data");
            
    //     })
    // })

    useEffect(()=>{
      axios.get(`http://localhost:5000/employees/${obj.id}`)
      .then((resp)=>{
          setName(resp.data.name)
          setSalary(resp.data.salary)
          setCompany(resp.data.company)
          
      })
      .catch(()=>{
          console.log("didn't get the data");
          
      })
    },[])

    let formHandle=(a)=>{
      a.preventDefault()
      let payload={name,salary,company}

      axios.put(`http://localhost:5000/employees/${obj.id}`,payload)
      .then((resp)=>{
        console.log("save");navigate("/user")
        
          
      })
      .catch(()=>{
          console.log("don't save");
          
      })
    
    }





  return (
    <div id={style.myForm}>
    <form action="">
        <h4>EDIT USER</h4>
     <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
     <input type="text" placeholder="Enter Your Salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
     <input type="text" placeholder="Enter your Company" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
     <button onClick={formHandle}> SUBMIT</button>
    </form>
    </div>
  )
}

export default EditUser