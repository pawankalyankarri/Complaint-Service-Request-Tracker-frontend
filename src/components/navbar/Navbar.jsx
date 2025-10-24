import { Link, } from "react-router-dom"
import '../../styles/navbar/navbar.css'
import servicelogo from '../../assets/servicelogo.jpeg'
const Navbar = () => {
    return(
        <div className="container nav_component">
            <ul className="navbar">
                <img src={servicelogo} alt="" className="w-[100px]" />
                <li className="nav-item"><Link to='/' >HOME</Link></li>
                <li className="nav-item"><Link to= '/services'>SERVICES</Link></li>
                <li className="nav-item"><Link to='/urreq'>REQUESTS</Link></li>
                <li className="nav-item"><Link to='/login' >LOGIN</Link></li>
            </ul>

        </div>
    )
}

export default Navbar