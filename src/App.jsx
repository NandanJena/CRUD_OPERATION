
import { BrowserRouter,Route,Routes } from "react-router-dom"


import Home from "./component/Home"
import CreateUser from "./component/CreateUser"
import User from "./component/User"
import EditUser from "./component/EditUser"

const App=()=>{
    return(
        <div>
            
            <BrowserRouter>
                <Home></Home>
                <Routes>
                    <Route element={<CreateUser/>} path="/"/>
                    <Route element={<User/>} path="/user"/>
                    <Route element={<EditUser/>} path="/edit/:id"/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App