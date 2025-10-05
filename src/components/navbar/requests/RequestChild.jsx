const RequestChild = ({item,tech_details}) => {
  console.log(tech_details)
  return (
    <div className="RequestChild w-full">
      <h4>{item.req_brief}</h4>
      {item.req_img ? (<img src={`http://127.0.0.1:8000/${item.req_img}`} className="w-[40%]" />):("noimg")}
      {/* <p>{tech_details.tech_name} name</p> */}
      <div>
        <p>{tech_details.tech_name} name</p>
        
      </div>
    </div>
  );
};

export default RequestChild;