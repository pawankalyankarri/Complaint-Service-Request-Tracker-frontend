import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RaiseRequest = () => {
  let navigate = useNavigate();
  let [depts, setDepts] = useState([]);
  let [usersInfo, setUsersInfo] = useState([]);

  // refs
  let deptRef = useRef();
  let briefRef = useRef();
  let wmnumRef = useRef();
  let locRef = useRef();
  let ptimeRef = useRef();
  let imgRef = useRef();
  let unameRef = useRef();

  // fetch users
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/login/userlogin/")
      .then((res) => {
        setUsersInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // fetch departments
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/login/getdepts/")
      .then((res) => {
        setDepts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleData(e) {
  e.preventDefault();

  let user_info = usersInfo.find(
    (obj) => obj.user_uname === unameRef.current.value
  );
  let dept_info = depts.find(
    (obj) => obj.d_id === Number(deptRef.current.value)
  );

  if (!user_info || !dept_info) {
    alert("Invalid user or department");
    return;
  }

  let formData = new FormData();
  formData.append("req_user", user_info.user_id); // FK must be the ID
  formData.append("req_dept", dept_info.d_id);   // FK must be the ID
  formData.append("req_brief", briefRef.current.value);
  formData.append("req_wmnum", wmnumRef.current.value);
  formData.append("req_loc", locRef.current.value);

  // only append time if user entered it
  if (ptimeRef.current.value) {
    formData.append("req_time", ptimeRef.current.value); // "HH:MM"
  }

  // only append image if file chosen
  if (imgRef.current.files[0]) {
    formData.append("req_img", imgRef.current.files[0]);
  }

  axios
    .post("http://127.0.0.1:8000/login/requests/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("res.data", res.data);

      return axios.post("http://127.0.0.1:8000/login/accreq/", {
        areq_unumber: res.data.req_id,
      });
    })
    .then(() => {
      navigate("/");
    })
    .catch((err) => {
      if (err.response) {
        console.log("Error Response:", err.response.data);
        alert(JSON.stringify(err.response.data)); // show exact issue
      } else {
        console.log(err);
      }
    });
}


  return (
    <div className="container">
      <h3 className="text-center m-3">
        Here Provide information and Raise your request
      </h3>
      <form className="row mt-4" onSubmit={handleData}>
        <div className="col-6">
          <label className="form-label">Department</label>
          <select
            id="dept"
            className="form-select text-capitalize"
            required
            ref={deptRef}
          >
            {depts.map((obj) => (
              <option key={obj.d_id} value={obj.d_id} className="text-capitalize">
                {obj.d_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6">
          <label className="form-label">Brief about the issue</label>
          <textarea className="form-control" required ref={briefRef}></textarea>
        </div>

        <div className="col-6">
          <label className="form-label">Current working mobile Number</label>
          <input type="tel" className="form-control" required ref={wmnumRef} />
        </div>

        <div className="col-6">
          <label className="form-label">Location</label>
          <textarea className="form-control" required ref={locRef}></textarea>
        </div>

        <div className="col-6">
          <label className="form-label">If Available mention preferred time</label>
          <input type="time" className="form-control" ref={ptimeRef} />
        </div>

        <div className="col-6">
          <label className="form-label">If available Provide Image</label>
          <input type="file" className="form-control" ref={imgRef} />
        </div>

        <div className="col-6">
          <label className="form-label">Enter your userName</label>
          <input type="text" className="form-control" ref={unameRef} />
        </div>

        <div className="col-6 m-2">
          <input type="submit" className="btn btn-success" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default RaiseRequest;
