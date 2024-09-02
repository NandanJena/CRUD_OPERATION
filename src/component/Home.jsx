import style from "./home.module.css"
import React from "react"
import { Link } from "react-router-dom"
const Home=()=>{
    return(
       <div id={style.nav}>
            <Link to="/">createuser</Link>
            <Link to="/user">users</Link>
       </div>
    )
}
export default Home