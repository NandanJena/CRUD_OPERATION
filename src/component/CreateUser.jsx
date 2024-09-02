import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser=()=>{
     
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()

    let Name=(e)=>{
        setName(e.target.value)
    }
    let Company=(e)=>{
        setCompany(e.target.value)
    }
    let Salary=(e)=>{
        setSalary(e.target.value)
    }

    let FormHandle=(e)=>{
        e.preventDefault()
        let payload ={name,salary,company}

        axios.post("http://localhost:5000/employees",payload)
        .then(()=>{console.log("saved");navigate("/user")})
        .catch(()=>{console.log("didn't save");
        })
    }
    return(
        <div id={style.myForm}>
           <form action="">
            <input type="text" placeholder="Enter Your Name" value={name} onChange={Name}/>
            <input type="text" placeholder="Enter Your Salary"  value={salary} onChange={Salary}/>
            <input type="text" placeholder="Enter your Company" value={company} onChange={Company}/>
            <button onClick={FormHandle}> SUBMIT</button>
           </form>
        </div>
    )
}
export default CreateUser

