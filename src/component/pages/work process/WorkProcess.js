import React from "react";
import "./WorkProcess.css";
import Data from "../../Sourceses/Sourceses";
const WorkProcess = () => {
  return (
    <div className="container-fluid">
      <div className="row work-process-section">
        <div className="col-2"></div>
        <div className="col-8 work-process-holder">
          <h1 className="work-process-title ">{Data.work.title}</h1>
          <p className="work-process-text py-2">{Data.work.description}</p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};
export default WorkProcess;
