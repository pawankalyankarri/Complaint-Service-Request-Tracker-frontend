import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  let navigate = useNavigate();
  let unameRef = useRef();
  let pswRef = useRef();
  let uinfo = false;
  function handleData(e) {
    e.preventDefault();
    let user_uname = unameRef.current.value;
    let user_psw = pswRef.current.value;
    axios
      .get("http://127.0.0.1:8000/login/userlogin/")
      .then((res) => {
        let flag = res.data.some(
          (obj) => obj.user_uname === user_uname && obj.user_psw === user_psw
        );

        if (flag) {
          // console.log('both are matched')
          navigate("/");
          let u_details = res.data.find(
            (obj) => obj.user_uname === user_uname && obj.user_psw === user_psw
          );
          // console.log('u_de',u_details)

          sessionStorage.setItem("userDetails", JSON.stringify(u_details));
          // console.log(sessionStorage)


        }
        // console.log('not matched')
        //navigate('/userlogin')
        else unameRef.current.value = "";
        unameRef.current.placeholder = "Wrong UserName";
        unameRef.current.style.borderColor = "red";
        pswRef.current.value = "";
        pswRef.current.placeholder = "Wrong Password";
        pswRef.current.style.borderColor = "red";
        uinfo = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="d-flex justify-content-center">
      <form action="" className="card p-4 w-25 shadow" onSubmit={handleData}>
        <div>
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input type="text" className="form-control" ref={unameRef} />
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="text" className="form-control" ref={pswRef} />
        </div>
        <div className="d-flex justify-content-center align-items-center p-3">
          <input type="submit" className="btn btn-success" />
          &nbsp;&nbsp;
          <Link to="/userreg">Register Here</Link>
        </div>
        <div className="d-flex justify-content-center p-1"></div>
      </form>
      {uinfo ? <h4 className="text-danger">Wrong Details</h4> : ""}
    </div>
  );
};

export default UserLogin;
