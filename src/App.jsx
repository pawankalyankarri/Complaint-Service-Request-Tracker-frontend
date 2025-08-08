
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/navbar/Home'
import Services from './components/navbar/Services'
import Login from './components/navbar/Login'

function App() {

  return (
      <div className='container'>

        <Navbar/>

        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>



      </div>
  )
}

export default App
