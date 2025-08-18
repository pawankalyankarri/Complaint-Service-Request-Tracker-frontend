import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const TechReg = () => {
  let fnameRef = useRef();
  let emailRef = useRef();
  let mnumRef = useRef();
  let deptRef = useRef();
  let expRef = useRef();
  let addRef = useRef();
  let picRef = useRef();
  let ureqRef = useRef();
  let unameRef = useRef();
  let pswRef = useRef();

  let [depts, setDepts] = useState();

  let navigate = useNavigate();

  useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/login/getdepts/")
        .then((res) => {
          // console.log(res);
          setDepts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  async function handleData(e) {
    e.preventDefault();
    let deptFlag = depts.find((obj) => obj.d_name === deptRef.current.value);

    if (!deptFlag) {
      try{
        await axios
            .post("http://127.0.0.1:8000/login/getdepts/", {
              d_name: deptRef.current.value,
            })
        const res = await axios.get('http://127.0.0.1:8000/login/getdepts/')
        setDepts(res.data)
        
        deptFlag = res.data.find((obj) => obj.d_name === deptRef.current.value)

      }
      catch(err){
        console.log(err)
      }
        
      }

      
    
    let data = {
      tech_name: fnameRef.current.value,
      tech_email: emailRef.current.value,
      tech_mnum: mnumRef.current.value,
      tech_dept: deptFlag.d_id,
      tech_exp: expRef.current.value,
      tech_add: addRef.current.value,
      tech_pic: picRef.current.files[0],
      tech_uravl: ureqRef.current.checked,
      tech_uname: unameRef.current.value,
      tech_psw: pswRef.current.value,
    };
    axios.post("http://127.0.0.1:8000/login/techlogin/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res)=>{
        console.log(res)
        navigate('/techlogin')
    }).catch((err)=>{
        console.log(err)
    });
  }


  return (
    <div className="container">
      <form action="" className="row " onSubmit={handleData}>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" ref={fnameRef} required />
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Email id
          </label>
          <input
            type="email"
            className="form-control"
            ref={emailRef}
            required
          />
        </div>

        <div className="col-6">
          <label htmlFor="" className="form-label">
            Mobile Number
          </label>
          <input type="tel" className="form-control" ref={mnumRef} required />
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Department
          </label>
          <input type="text" className="form-control" ref={deptRef} required />
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Experience in Field
          </label>
          <select
            name=""
            id="exp"
            className="form-select"
            ref={expRef}
            required
          >
            <option value="Fresher">
              Fresher
            </option>
            <option value="0-1">0-1</option>
            <option value="1-5">1-5</option>
            <option value="5-10">5-10</option>
            <option value="10+">More than 10</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Address
          </label>
          <textarea
            name=""
            id="add"
            className="form-control"
            ref={addRef}
            required
          ></textarea>
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Profile Photo
          </label>
          <input type="file" className="form-control" ref={picRef} required />
        </div>
        <div className="col-6 pt-5">
          <input
            type="checkbox"
            className="form-check-input"
            ref={ureqRef}
            required
          />
          &nbsp;&nbsp;
          <label htmlFor="" className="form-label">
            Availbale for urgent requirements
          </label>
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Create UserName
          </label>
          <input type="text" className="form-control" ref={unameRef} required />
        </div>
        <div className="col-6">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            ref={pswRef}
            required
          />
        </div>
        <div className="col-6 m-2">
          <input
            type="submit"
            value="Create Profile"
            className="btn btn-success"
          />
        </div>
      </form>
    </div>
  );
};

export default TechReg;
