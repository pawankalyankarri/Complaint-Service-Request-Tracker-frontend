
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/navbar/Home'
import Services from './components/navbar/Services'
import Login from './components/navbar/Login'
import UserLogin from './components/navbar/UserLogin'
import TechLogin from './components/navbar/TechLogin'
import TechReg from './components/navbar/TechReg'
import UserReg from './components/navbar/UserReg'
import RaiseRequest from './components/services/RaiseRequest'
import MainApput from './components/MainApput'
function App() {

  return (
      <div className='container'>

        {/* <Navbar/> */}
        <MainApput/>
        {/* <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userlogin' element={<UserLogin/>}/>
          <Route path='/techlogin' element={<TechLogin/>}/>
          <Route path='/techreg' element={<TechReg/>}/>
          <Route path='/userreg' element={<UserReg/>}/>
          <Route path='/raisereq' element={<RaiseRequest/>} />
        </Routes> */}



      </div>
  )
}

export default App
