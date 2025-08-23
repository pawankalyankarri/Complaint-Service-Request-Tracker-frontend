import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import problem from "../../assets/problem.jpg";
import "../../styles/navbar/techReqAcc.css";

const TechReqAcc = () => {
  const location = useLocation();
  const req = location.state || {};
  let [user_info, setUser_Info] = useState({});
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/login/userlogin/")
      .then((res) => {
        console.log(res.data);
        let user_obj = res.data.find((obj) => obj.user_id === req.req_user);
        console.log("user", user_obj);
        setUser_Info(user_obj);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log('req',req);

  function accrequest(){
    axios.get("http://127.0.0.1:8000/login/accreq/").then(res=>{
      console.log(res.data)
      let req_obj = res.data.find(obj=>obj.areq_unumber === req.req_id)
      console.log(req_obj)
      axios.put(`http://127.0.0.1:8000/login/modifyaccreq/${req_obj.areq_id}`,{areq_status:"accepted"}).then(res=>{
        console.log(res)
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
    
    
  }

  return (
    <div>
      <div className="container req-acc">
        <div className="img shadow">
          {req.req_img ? (
            <img src={`http://127.0.0.1:8000/${req.req_img}`} alt="" />
          ) : (
            <img src={problem} />
          )}
        </div>
        <div className="content ">
          <p><strong>Brief about issue: </strong>{req.req_brief}</p>
          <p className="text-capitalize"><strong>User Name:</strong> {user_info.user_name}</p>
          <p><strong>Working Mobile Number: </strong>{req.req_wmnum}</p>
          <p><strong>User Availble time: </strong>{req?.req_time ? req.req_time : 'not specified' }</p>
          <p className="text-capitalize"><strong>Location: </strong>{req?.req_loc},{req?.req_state}</p>
          <br />
          <button onClick={accrequest} className="btn btn-success">Fix This Problem</button>
        </div>
      </div>
    </div>
  );
};

export default TechReqAcc;
