import { Link } from "react-router-dom";



const TechNavbar = () =>{
    return (
        <div>
            <ul className="navbar">
                <li><Link to='/thome'>HOME</Link></li>
                <li><Link to='/treq'>REQUESTS</Link></li>
                <li><Link >HOME</Link></li>
                <li><Link to='/tprofile' >PROFILE</Link></li>
            </ul>
        </div>
    )
}

export default TechNavbar;