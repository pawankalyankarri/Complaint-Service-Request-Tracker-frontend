import axios from "axios";
import { useEffect, useState } from "react";

const URRequests = () => {
  let [reqs, setReqs] = useState([]);
  let [areqs, setAreqs] = useState([]);
  let [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/login/requests")
      .then((res) => {
        setReqs(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/login/accreq")
      .then((res) => {
        setAreqs(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("userDetails"));
    setUserDetails(data);
  }, []);
  useEffect(() => {
    console.log(userDetails);
    let res = reqs.map((obj) => {
      if (obj.req_user === userDetails.user_id) {
        return obj;
      }});
    console.log("res", res);
  }, [userDetails]);

  return (
    <div>
      URRequests here
      {/* {reqs.map(obj=>{
                areqs.map(areq=>{
                    if (obj.req_id === areq.areq_unumber){
                        return (<h1>{obj.req_brief}</h1>)
                    }
                })
            })} */}
      {/* {reqs
      .filter(obj => areqs.some(areq => obj.req_user === areq.areq_unumber))
      .map(obj => (
        <h1 key={obj.req_id}>{obj.req_brief}</h1>
      ))} */}
      {reqs
        .map((obj) => obj.req_user === userDetails.user_id)
        .map((obj) => (
          <div>{obj}</div>
        ))}
    </div>
  );
};
export default URRequests;
