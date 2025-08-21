import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import problem from '../../assets/problem.jpg'

const TechReqAcc = () =>{
    const location = useLocation()
    const req = location.state|| {}
    let [user_info,setUser_Info] = useState({})
    console.log(req)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/login/userlogin/').then(res=>{
            console.log(res.data)
            let user_obj = res.data.find(obj=>obj.user_id === req.req_user)
            console.log('user',user_obj)
            setUser_Info(user_obj)
        }).catch(err=>console.log(err))
    },[])
    return(
        <div>
            <div className="container">
                <div>
                    {req.req_img ? <img src={`http://127.0.0.1:8000/${req.req_img}`} alt="" /> : <img src={problem}  /> }
                </div>
                 <p>{req?.req_loc}</p>
                 <p>{user_info.user_name}</p>
            </div>
           
        </div>
    )
}

export default TechReqAcc;