import axios from "axios"
import { useEffect, useRef, useState } from "react"

const RaiseRequest = () =>{
    let [depts,setDepts] = useState([])
    let [usersInfo,setUsersInfo] = useState([])
    let deptRef = useRef()
    let briefRef = useRef()
    let wmnumRef = useRef()
    let locRef = useRef()
    let ptimeRef = useRef()
    let imgRef = useRef()

    let unameRef = useRef()

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/login/userlogin/').then((res)=>{
            // console.log(res)
            setUsersInfo(res.data)
            
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    // console.log('userinfo',usersInfo)
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/login/getdepts/").then((res)=>{
        // console.log(res)
        setDepts(res.data)
    }).catch((err)=>{
        console.log(err)
    })
    // console.log('depts',depts)
    },[])
    function handleData(e){
        e.preventDefault()
        console.log('action happend')
        let user_info = usersInfo.find(obj=>obj.user_uname === unameRef.current.value)
        let dept_info = depts.find(obj=>obj.d_id === Number(deptRef.current.value))
        let data = {
            req_user:user_info.user_id,
            req_dept:dept_info.d_id,
            req_brief : briefRef.current.value,
            req_wmnum :wmnumRef.current.value,
            req_loc : locRef.current.value,
            req_time : ptimeRef.current.value,
            req_img : imgRef.current.files[0]
        }
        axios.post("http://127.0.0.1:8000/login/requests/",data,{
            headers:{
                'Content-Type':'multipart/form-data'
            },
        }).then(res=>{
            // console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="container"><h3 className="text-center m-3">Here Provide information and Raise you request</h3>
        <form action="" className="row mt-4" onSubmit={handleData}>
            <div className="col-6">
                <label htmlFor="" className="form-label">Department</label>
                <select name="" id="dept" className="form-select text-capitalize" required ref={deptRef} >
                    {/* <option value="">Choose issue related Department</option> */}
                    {depts.map(obj=>
                        <option key={obj.d_id} value={obj.d_id} className="text-capitalize">{obj.d_name}</option>
                    )}
                </select>
            </div>
            <div className="col-6">
                <label htmlFor="" className="form-labe">Brief about the issue</label>
                <textarea name="" id="brief" className="form-control"  required ref={briefRef}></textarea>
            </div>
            <div className="col-6">
                <label htmlFor="" className="form-label">current working mobile Number</label>
                <input type="tel" className="form-control" required ref={wmnumRef}/>
            </div>
            <div className="col-6">
                <label htmlFor="" className="form-label">Location</label>
                <textarea name="" className="form-control" id="" required ref={locRef}></textarea>
            </div>
            <div className="col-6">
                <label htmlFor="" className="form-label">If Availble mention preferrble time</label>
                <input type="time" className="form-control" ref={ptimeRef} />
            </div>
            <div className="col-6">
                <label htmlFor="" className="form-label">If availble Provide Image</label>
                <input type="file" className="form-control" ref={imgRef} />
            </div>
            <div className="col-6">
                <label htmlFor="" className="form-label">Enter your userName</label>
                <input type="text" className="form-control" ref={unameRef} />
            </div>
            <div className="col-6 m-2">
                <input type="submit" className="btn btn-success" />
            </div>
        </form>
        
        </div>
    )
}

export default RaiseRequest