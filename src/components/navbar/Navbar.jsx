import { Link, } from "react-router-dom"
import '../../styles/navbar/navbar.css'

const Navbar = () => {
    return(
        <div className="container nav_component">
            <ul className="navbar p-5">
                <li className="nav-item"><Link to='/' >HOME</Link></li>
                <li className="nav-item"><Link to= '/services'>SERVICES</Link></li>
                <li className="nav-item"><Link>HOME</Link></li>
                <li className="nav-item"><Link to='/login' >LOGIN</Link></li>
            </ul>

        </div>
    )
}

export default Navbar