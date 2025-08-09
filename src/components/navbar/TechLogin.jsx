import { Link } from "react-router-dom"


const TechLogin = () =>{
    return (
        <div className="d-flex justify-content-center">
            <form action="" className="card p-4 w-25 shadow">
                <div>
                    <label htmlFor="" className="form-label">User Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="d-flex justify-content-center align-items-center p-3">
                    <input type="submit" className="btn btn-success" />
                   
                    &nbsp;&nbsp;<Link to='/techreg'>Register Here</Link>
                </div>
                <div className="d-flex justify-content-center p-1">
                    
                </div>
            </form>
        </div>
    )
}

export default TechLogin