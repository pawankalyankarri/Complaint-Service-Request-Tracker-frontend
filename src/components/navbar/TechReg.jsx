const TechReg = () =>{
    return (
        <div className="container">
            <form action="" className="row ">
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Full Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Email id</label>
                        <input type="email" className="form-control" />
                    </div>
                
                
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Department</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Experience in Field</label>            
                        <select name="" id="" className="form-select">
                            <option value="Fresher">Fresher</option>
                            <option value="0-1">0-1</option>
                            <option value="1-5">1-5</option>
                            <option value="5-10">5-10</option>
                            <option value="10+">More than 10</option>

                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Profile Photo</label>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="col-6 pt-5">
                        <input type="checkbox" className="form-check-input" />&nbsp;&nbsp;
                        <label htmlFor="" className="form-label">Availbale for urgent requirements</label>
                       
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Create UserName</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="col-6 m-2">
                        <input type="submit" value='Create Profile'  className="btn btn-success"/>
                    </div>


            </form>
        </div>
    )
}

export default TechReg