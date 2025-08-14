import axios from "axios";
import { useEffect, useState } from "react";
import '../../styles/navbar/techRequests.css'

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
        axios.get('http://127.0.0.1:8000/login/techlogin/').then((res)=>{
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
                        <div className="card" key={req.req_id}>
                            <div className="card-img-top">
                                <img src={`http://127.0.0.1:8000/${req.req_img}`} alt="" />
                            </div>
                            <div className="card-body">
                                {depts.find(obj=>obj.tech_dept === req.req_dept?<h3>{obj.tech_name}</h3>:''
                                )}
                                <p>{req.req_brief}</p>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechRequests;