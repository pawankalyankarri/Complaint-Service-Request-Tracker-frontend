import { useRef, useState } from "react";
import usericon from '../../assets/usericon1.jpg'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserReg = () => {
  let ufnameRef = useRef()
  let unumRef = useRef()
  let uunameRef = useRef()
  let upswRef = useRef()
  let upicRef = useRef()
  let ustateRef = useRef()

  let navigate = useNavigate()
  
  function handleData(e){
    e.preventDefault()
    console.log('here',upicRef.current.files.length)
    let data = {
      user_name : ufnameRef.current.value,
      user_mnum : unumRef.current.value,
      user_uname : uunameRef.current.value,
      user_psw : upswRef.current.value,
      user_pic : upicRef.current.files.length > 0 ? upicRef.current.files[0] : usericon,
      user_state : ustateRef.current.value
    }
    console.log('here it is runing')
    axios.post("http://127.0.0.1:8000/login/userlogin/",data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res)=>{
        console.log(res)
        navigate('/userlogin')
      }).catch((err)=>{
        console.log(err)
      })
  }


  return (
    <div>
      <form action="" className="row" onSubmit={handleData}>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" ref={ufnameRef} required />
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Mobile Number
          </label>
          <input type="tel" className="form-control" ref={unumRef} required />
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input type="text" className="form-control" ref={uunameRef} required/>
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" ref={upswRef} required />
        </div>
        <div className="col-6">
            <label htmlFor="" className="form-label">Profile Pic</label>
            <input type="file" className="form-control" ref={upicRef} />
        </div>
        <div className="col-6">
            <label htmlFor="" className="form-label">State</label>
            <input type="text" className="form-control" ref={ustateRef} required />
        </div>
        <div className="col-6 m-2">
            <input type="submit" value='Create Profile' className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default UserReg;
