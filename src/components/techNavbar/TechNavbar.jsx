import { Link } from "react-router-dom";



const TechNavbar = () =>{
    return (
        <div>
            <ul className="navbar">
                <li><Link to='/technav/thome'>HOME</Link></li>
                <li><Link to='/technav/treq'>REQUESTS</Link></li>
                <li><Link >HOME</Link></li>
                <li><Link to='/technav/tprofile' >PROFILE</Link></li>
            </ul>
        </div>
    )
}

export default TechNavbar;