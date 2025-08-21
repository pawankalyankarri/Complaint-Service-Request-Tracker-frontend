import axios from "axios";
import { useEffect, useState } from "react";
import problem from '../../assets/problem.jpg'
import '../../styles/navbar/techRequests.css'
import { Link } from "react-router-dom";

const TechRequests = () => {
    let [reqs,setReqs] = useState([])
    let [depts,setDepts] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/login/requests/').then(res=>{
            console.log(res.data)
            setReqs(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/login/getdepts/').then((res)=>{
            // console.log(res.data)
            setDepts(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div className="techRequests container">
            <h3>TechRequests</h3>
            <div className="reqs">
                {reqs.map(req=>{
                    return(
                        <div className="card shadow" key={req.req_id}>
                            <div className="card-img-top">
                                {req.req_img?<img src={`http://127.0.0.1:8000/${req.req_img}`} alt="" />:<img src={problem} alt="" />}
                            </div>
                            <div className="card-body">
                                {depts.map(obj=>obj.d_id === req.req_dept ? <h3 key={req.req_id} className="text-capitalize">{obj.d_name}</h3>:''
                                )}
                                <p><strong>Brief: </strong>{req.req_brief}</p>
                                <p><strong>Location: </strong>{req.req_loc}</p>
                               <Link to='/technav/techreqacc' state={req}  className="btn btn-primary text-capitalize">view & accept request</Link>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechRequests;