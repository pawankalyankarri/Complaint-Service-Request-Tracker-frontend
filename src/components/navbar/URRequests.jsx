import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import RequestChild from "./requests/RequestChild";

const URRequests = () => {
  const [reqs, setReqs] = useState([]);
  const [areqs, setAreqs] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [data, setData] = useState([]);

  //Fetch requests
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/login/requests")
      .then((res) => setReqs(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Fetch accepted requests
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/login/accreq")
      .then((res) => setAreqs(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Get user details from sessionStorage
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("userDetails"));
    setUserDetails(data || {});
  }, []);

  //Filter requests for current user
  useEffect(() => {
    if (userDetails?.user_id) {
      let res = reqs.filter((obj) => obj.req_user === userDetails.user_id);
      setData(res);
    }
  }, [reqs, userDetails]);

  //Derived data (no need to store separately)
  const filteredreqs = useMemo(
    () => areqs.filter((item) => item.areq_status === "accepted"),
    [areqs]
  );

  const techAccReqs = useMemo(
    () =>
      data.filter(
        (obj) => filteredreqs.some((item) => obj.req_id === item.areq_id)
      ),
    [data, filteredreqs]
  );
   
  const pendingReqs = useMemo(()=>data.filter(
    (obj) => !filteredreqs.some((item) => obj.req_id === item.areq_id)
  ),[data,filteredreqs])

  // Debug logs
  console.log("userDetails", userDetails);
  console.log("data", data);
  console.log("areqs", areqs);
  console.log("filteredreqs", filteredreqs);
  console.log("techAccReqs", techAccReqs);
  console.log('pending',pendingReqs)

  return (
    <div className="">
      
      

     <div>
      <h2>technician accepted requests</h2>
       {techAccReqs.length === 0 ? (
        <p>No requests found</p>
      ) : (
        techAccReqs.map((item) => (
          <div key={item.req_id}>
            <RequestChild item = {item} />
            
          </div>
        ))
      )}
     </div>

      <div>
        <h2>URRequests</h2>
        {
          pendingReqs.length === 0 ? <div>NO requests found</div> :
          (pendingReqs.map(item=>{
            return(<div key={item.req_id}>
              <h5>{item.req_brief}</h5>
            </div>)
          }))
        }

      </div>
    </div>
  );
};

export default URRequests;

