import usericon from '../../assets/usericon.jpg'
import technicianicon from '../../assets/technicianimg.jpg'
import '../../styles/navbar/login.css'
import { Link, Route,Routes } from 'react-router-dom'
import TechLogin from './TechLogin'
const Login = () =>{
    return (
        
        <div className='loginpage container'>
            <div className="login">
                <h4>User</h4>
                <div className="card shadow">
                    <div className="card-img-top">
                        <Link to='/userlogin'> <img src={usericon} alt="" /></Link>
                    </div>
                    
                </div>

            </div>
            <div className="login">
                <h4>Technician</h4>
                <div className="card shadow">
                    <div className="card-img-top">
                        <Link to='/techlogin' > <img src={technicianicon} alt="" /></Link>
                    </div>
                    
                </div>

            </div>
            {/* <Routes>
                <Route path='/techlogin' element={<TechLogin/>}/>
            </Routes> */}
        </div>
    )
}

export default Login