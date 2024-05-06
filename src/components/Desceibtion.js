import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./desceibtion.css";
const Desceibtion = () => {
  const data = useLocation().state;

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="desc">
      <h1> ALL DETIALS</h1>

      <div className="contant">
        {/* <p><span style={{color:"white"}}>id:</span> {data.id}</p> */}
        <p className="para">
          <span style={{ color: "white" }}>Name of Task:</span> {data.task}
        </p>
        <p className="para">
          <span style={{ color: "white" }}>Describtion of Task:</span> {data.describe}
        </p>
      </div>
    </div>
  );
};

export default Desceibtion;
