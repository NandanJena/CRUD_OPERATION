import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
const User=()=>{
    let [user,setUser]=useState([])
    let [flage,setFlage]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:5000/employees")
        .then((resp)=>{
            setUser(resp.data)
        })
        .catch(()=>{
            console.log("didn't get the data"); setFlage(false)
            
        })

    },[flage])
    let deleteUser=(id)=>{
        axios.delete(`http://localhost:5000/employees/${id}`)
        .then((resp)=>{
            console.log("delete complete"); setFlage(true)
            
        })
        .catch(()=>{
            console.log("didn't delete the data");
            
        })
    }
    

    
    return(
        <div id={style.myTable}>
         {
            user.map((x)=>{
                return(
                   <div >
                     <table>
                    <tr>
                        <td> <h3>Name:{x.name}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Salary:{x.salary}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>Company:{x.company}</h3></td>
                    </tr>
                    <tr>
                        <td><button id={style.abc} ><Link to={`/edit/${x.id}`}>EDIT</Link></button></td>
                        <td><button id={style.ab} onClick={()=>{deleteUser(`${x.id}`)}}>DELETE</button></td>
    
                    </tr>
                </table>
                   </div>
                )
            })
         }
        </div>
    )
}
export default User

