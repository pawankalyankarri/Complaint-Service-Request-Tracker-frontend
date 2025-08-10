import Home from "./navbar/Home";
import Login from "./navbar/Login";
import Navbar from "./navbar/Navbar";
import Services from "./navbar/Services";
import TechLogin from "./navbar/TechLogin";
import TechReg from "./navbar/TechReg";
import UserLogin from "./navbar/UserLogin";
import UserReg from "./navbar/UserReg";
import RaiseRequest from "./services/RaiseRequest";
import { Routes,Route, useNavigate, useLocation } from 'react-router-dom'
import TechNavbar from "./techNavbar/TechNavbar";
import TechHome from "./techNavbar/TechHome";
import TechRequests from "./techNavbar/TechRequests";
import TechProfile from "./techNavbar/TechProfile";


const MainApput = () =>{
    let location = useLocation()

    let path = location.pathname === '/technav'

    return(
        <div className='container'>

        {!path && <Navbar/>}
        {path && <TechNavbar/>}

        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userlogin' element={<UserLogin/>}/>
          <Route path='/techlogin' element={<TechLogin/>}/>
          <Route path='/techreg' element={<TechReg/>}/>
          <Route path='/userreg' element={<UserReg/>}/>
          <Route path='/raisereq' element={<RaiseRequest/>} />


          <Route path="/technav" element=''/>
          <Route path="/thome" element={<TechHome/>}/>
          <Route path="/treq" element={<TechRequests/>}/>
          <Route path="/tprofile" element={<TechProfile/>}/>
        </Routes>



      </div>
    )
}
export default MainApput;