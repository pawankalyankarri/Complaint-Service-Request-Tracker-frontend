import axios from "axios"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"


const TechLogin = () =>{

    let unameRef = useRef()
    let pswRef = useRef()
    let navigate = useNavigate()

    function handleData(e){
        e.preventDefault()
        let tech_uname = unameRef.current.value
        let tech_psw = pswRef.current.value

        axios.get("http://127.0.0.1:8000/login/techlogin/").then((res)=>{
            console.log(res.data)
            console.log(tech_uname,tech_psw)
            let flag = res.data.some(obj=>obj.tech_uname === tech_uname && obj.tech_psw === tech_psw)

            if (flag){
                // console.log('both are matched')
                navigate('/technav')
            }
            else{
                // console.log('not matched')
                unameRef.current.value = ''
                unameRef.current.placeholder = 'Wrong UserName'
                unameRef.current.style.borderColor = 'red'
                pswRef.current.value = ''
                pswRef.current.placeholder = 'Wrong UserName'
                pswRef.current.style.borderColor = 'red'
            }
            
        }).catch(err=>{
            console.log(err)
        })
    }



    return (
        <div className="d-flex justify-content-center">
            <form action="" className="card p-4 w-25 shadow" onSubmit={handleData}>
                <div>
                    <label htmlFor="" className="form-label">User Name</label>
                    <input type="text" className="form-control" ref={unameRef} />
                </div>
                <div>
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control" ref={pswRef} />
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