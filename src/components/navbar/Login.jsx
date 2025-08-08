const Login = () =>{
    return (
        <div className="d-flex justify-content-center">
            <form action="" className="card p-5 w-25 shadow">
                <div>
                    <label htmlFor="" className="form-label">User Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="d-flex justify-content-center p-2">
                    <input type="submit" className="btn btn-success" />
                </div>
            </form>
        </div>
    )
}

export default Login