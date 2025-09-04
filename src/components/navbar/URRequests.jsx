import axios from "axios";
import { useEffect, useState } from "react";

const URRequests = ()=>{
    let [reqs,setReqs] = useState([])
    let [areqs,setAreqs] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/login/requests').then(res=>{
            setReqs(res.data)
            console.log(res.data)
        }).catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/login/accreq').then(res=>{
            setAreqs(res.data)
            console.log(res.data)
        }).catch(err=>console.log(err))
    },[])
    
    
    return(
        <div>URRequests here

            {/* {reqs.map(obj=>{
                areqs.map(areq=>{
                    if (obj.req_id === areq.areq_unumber){
                        return (<h1>{obj.req_brief}</h1>)
                    }
                })
            })} */}
            {reqs
      .filter(obj => areqs.some(areq => obj.req_id === areq.areq_unumber))
      .map(obj => (
        <h1 key={obj.req_id}>{obj.req_brief}</h1>
      ))}
        </div>
    )
}
export default URRequests;