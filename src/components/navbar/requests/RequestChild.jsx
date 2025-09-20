const RequestChild = ({item}) => {
  return (
    <div className="RequestChild w-full">
      <h4>{item.req_brief}</h4>
      {item.req_img ? (<img src={`http://127.0.0.1:8000/${item.req_img}`} className="w-[40%]" />):("noimg")}
    </div>
  );
};

export default RequestChild;