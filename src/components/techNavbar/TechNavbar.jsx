import { Link } from "react-router-dom";
import '../../styles/navbar/technavbar.css'


const TechNavbar = () =>{
    return (
        <div>
            <ul className="tech-nav navbar">
                <li className="nav-item"><Link to='/technav/thome'>HOME</Link></li>
                <li className="nav-item" ><Link to='/technav/treq'>REQUESTS</Link></li>
                <li className="nav-item"><Link >HOME</Link></li>
                <li className="nav-item"><Link to='/technav/tprofile' >PROFILE</Link></li>
            </ul>
        </div>
    )
}

export default TechNavbar;