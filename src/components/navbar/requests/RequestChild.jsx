const RequestChild = ({item,tech_details}) => {
  console.log(tech_details)
  return (
    <div className="RequestChild w-full card">
      
      {item.req_img ? (<img src={`http://127.0.0.1:8000/${item.req_img}`} className="w-[40%] card-img-top" />):("noimg")}
      {/* <p>{tech_details.tech_name} name</p> */}
      
      <div className="card-body text-xs" >
        <h5 className="">{item.req_brief}</h5>
        <p className="">Accepted Techinician Details : <span className="font-bold capitalize">{tech_details.tech_name}</span> </p>
        
      </div>
    </div>
  );
};

export default RequestChild;